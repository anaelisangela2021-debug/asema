/* =========================================================
   EXPLORADORES DO ESPAÇO — JOGOS CRIANÇAS (jogos-criancas.js)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const starsCounter = document.getElementById('stars-counter');
  const headerUserName = document.getElementById('header-user-name');
  const texCoachMessage = document.getElementById('tex-coach-message');

  const btnOuvirTex = document.getElementById('btn-ouvir-tex');
  const btnLibrasJogos = document.getElementById('btn-libras-jogos');

  let estrelas = Number(localStorage.getItem('exploradores_estrelas') || 0);
  starsCounter.textContent = estrelas;

  function adicionarEstrelas(qtd) {
    estrelas += qtd;
    starsCounter.textContent = estrelas;
    localStorage.setItem('exploradores_estrelas', String(estrelas));
  }

  function falarTexto(texto) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    fala.rate = 1.0;
    fala.pitch = 1.06;
    window.speechSynthesis.speak(fala);
  }

  function atualizarFalaTex(htmlMsg, lerEmVozAlta = false) {
    texCoachMessage.innerHTML = htmlMsg;
    if (lerEmVozAlta) {
      falarTexto(texCoachMessage.textContent);
    }
  }

  // Nome da sessão do explorador
  try {
    const sessao = JSON.parse(localStorage.getItem('exploradores_sessao'));
    if (sessao?.nome) headerUserName.textContent = sessao.nome;
  } catch {}

  // ---------------------------------------------------------
  // 0. RECORTE DE FUNDO DO MASCOTE TEX (tex.jpg)
  // ---------------------------------------------------------
  document.querySelectorAll('img[data-fallbacks]').forEach((img) => {
    const candidatos = img.dataset.fallbacks.split(',').map((s) => s.trim());
    let tentativa = 0;
    img.addEventListener('error', function tentar() {
      if (tentativa < candidatos.length) {
        img.src = encodeURI(candidatos[tentativa++]);
      } else {
        img.removeEventListener('error', tentar);
      }
    });
  });

  function removerFundoPretoMascote(imgElement) {
    if (!imgElement) return;
    const processar = () => {
      try {
        const canvas = document.createElement('canvas');
        const w = imgElement.naturalWidth;
        const h = imgElement.naturalHeight;
        if (!w || !h) return;
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(imgElement, 0, 0);
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;
        const visited = new Uint8Array(w * h);
        const queue = new Int32Array(w * h);
        let head = 0;
        let tail = 0;

        const isOuterBlack = (idx) => {
          const p = idx * 4;
          return data[p] < 24 && data[p + 1] < 24 && data[p + 2] < 24;
        };

        for (let x = 0; x < w; x++) {
          const top = x;
          const bottom = (h - 1) * w + x;
          if (!visited[top] && isOuterBlack(top)) { visited[top] = 1; queue[tail++] = top; }
          if (!visited[bottom] && isOuterBlack(bottom)) { visited[bottom] = 1; queue[tail++] = bottom; }
        }
        for (let y = 0; y < h; y++) {
          const left = y * w;
          const right = y * w + (w - 1);
          if (!visited[left] && isOuterBlack(left)) { visited[left] = 1; queue[tail++] = left; }
          if (!visited[right] && isOuterBlack(right)) { visited[right] = 1; queue[tail++] = right; }
        }

        while (head < tail) {
          const idx = queue[head++];
          data[idx * 4 + 3] = 0;
          const x = idx % w;
          const y = (idx / w) | 0;
          if (x > 0 && !visited[idx - 1] && isOuterBlack(idx - 1)) { visited[idx - 1] = 1; queue[tail++] = idx - 1; }
          if (x < w - 1 && !visited[idx + 1] && isOuterBlack(idx + 1)) { visited[idx + 1] = 1; queue[tail++] = idx + 1; }
          if (y > 0 && !visited[idx - w] && isOuterBlack(idx - w)) { visited[idx - w] = 1; queue[tail++] = idx - w; }
          if (y < h - 1 && !visited[idx + w] && isOuterBlack(idx + w)) { visited[idx + w] = 1; queue[tail++] = idx + w; }
        }

        ctx.putImageData(imgData, 0, 0);
        imgElement.src = canvas.toDataURL('image/png');
      } catch {
        imgElement.classList.add('tex-fallback-blend');
      }
    };
    if (imgElement.complete && imgElement.naturalWidth > 0) processar();
    else imgElement.addEventListener('load', processar);
  }

  removerFundoPretoMascote(document.getElementById('avatar-tex-img'));
  removerFundoPretoMascote(document.getElementById('tex-games-img'));

  // Botões de Áudio e Libras no cabeçalho
  btnOuvirTex?.addEventListener('click', () => {
    falarTexto(texCoachMessage.textContent);
  });

  btnLibrasJogos?.addEventListener('click', () => {
    const botaoVLibras = document.querySelector('[vw-access-button]');
    if (botaoVLibras) {
      botaoVLibras.click();
      atualizarFalaTex(
        '<strong>Libras Ativado! 🖐️</strong> Clique nas perguntas ou botões do jogo para o intérprete 3D traduzir em sinais!'
      );
    }
  });

  // ---------------------------------------------------------
  // 1. NAVEGAÇÃO ENTRE OS 3 JOGOS
  // ---------------------------------------------------------
  const gameTabs = document.querySelectorAll('.game-tab');
  const arenas = {
    destino: document.getElementById('game-destino'),
    quiz: document.getElementById('game-quiz'),
    memoria: document.getElementById('game-memoria')
  };

  function trocarJogo(nomeJogo) {
    gameTabs.forEach((t) => t.classList.toggle('active', t.dataset.game === nomeJogo));
    Object.entries(arenas).forEach(([key, sec]) => {
      sec.classList.toggle('hidden', key !== nomeJogo);
    });

    if (nomeJogo === 'destino') {
      atualizarFalaTex('Arraste ou clique em cada robô e envie para a <strong>Lua</strong> ou para <strong>Marte</strong>! 🪐');
    } else if (nomeJogo === 'quiz') {
      atualizarFalaTex('Leia com atenção e escolha a resposta certa do <strong>Quiz Espacial</strong>! 🧠');
    } else if (nomeJogo === 'memoria') {
      atualizarFalaTex('Vire duas cartas por vez para juntar o <strong>robô</strong> com a sua <strong>história</strong>! 🃏');
    }
  }

  gameTabs.forEach((tab) => {
    tab.addEventListener('click', () => trocarJogo(tab.dataset.game));
  });

  document.querySelectorAll('[data-goto]').forEach((btn) => {
    btn.addEventListener('click', () => trocarJogo(btn.dataset.goto));
  });

  // ---------------------------------------------------------
  // 2. JOGO 1: LUA OU MARTE? (ARRASTAR OU CLICAR)
  // ---------------------------------------------------------
  const MISSOES_DESTINO = [
    { id: 'surveyor-3', nome: 'Surveyor 3', emoji: '🦾', destino: 'lua', dica: 'Cavou o chão cinzento e recebeu visita da Apollo 12!' },
    { id: 'espelhos', nome: 'Espelhos da Apollo 11, 14 e 15', emoji: '🪞', destino: 'lua', dica: 'Refletem lasers disparados da Terra sem usar pilha!' },
    { id: 'viking-1', nome: 'Viking 1', emoji: '📡', destino: 'marte', dica: 'Tirou a primeira foto do chão vermelho de Chryse Planitia!' },
    { id: 'sojourner', nome: 'Pathfinder e Sojourner', emoji: '🏀', destino: 'marte', dica: 'Pousou quicando 15 vezes em airbags gigantes!' },
    { id: 'opportunity', nome: 'Opportunity (Oppy)', emoji: '🏎️', destino: 'marte', dica: 'Andou mais de 45 km e achou bolinhas de hematita!' },
    { id: 'phoenix', nome: 'Phoenix', emoji: '❄️', destino: 'marte', dica: 'Cavou o Ártico marciano e achou gelo de água!' },
    { id: 'insight', nome: 'InSight', emoji: '🎧', destino: 'marte', dica: 'Escutou 1.319 terremotos no chão marciano!' }
  ];

  const robotsPool = document.getElementById('robots-pool');
  const droppedLua = document.getElementById('dropped-lua');
  const droppedMarte = document.getElementById('dropped-marte');
  const destinoVictory = document.getElementById('destino-victory');
  let chipSelecionado = null;
  let acertosDestino = 0;

  function iniciarJogoDestino() {
    robotsPool.innerHTML = '';
    droppedLua.innerHTML = '';
    droppedMarte.innerHTML = '';
    destinoVictory.classList.add('hidden');
    chipSelecionado = null;
    acertosDestino = 0;

    const embaralhados = [...MISSOES_DESTINO].sort(() => Math.random() - 0.5);

    embaralhados.forEach((m) => {
      const chip = document.createElement('div');
      chip.className = 'robot-chip';
      chip.draggable = true;
      chip.dataset.id = m.id;
      chip.dataset.destino = m.destino;
      chip.innerHTML = `<span>${m.emoji}</span><span>${m.nome}</span>`;

      // Drag & Drop (Mouse)
      chip.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', m.id);
        selecionarChip(chip);
      });

      // Clique / Toque (Acessível)
      chip.addEventListener('click', () => {
        selecionarChip(chip);
        atualizarFalaTex(`Você escolheu <strong>${m.nome}</strong>! Dica: ${m.dica} Agora clique na <strong>Lua</strong> ou em <strong>Marte</strong>!`);
      });

      robotsPool.appendChild(chip);
    });
  }

  function selecionarChip(chip) {
    document.querySelectorAll('.robot-chip').forEach((c) => c.classList.remove('selected'));
    chip.classList.add('selected');
    chipSelecionado = chip;
  }

  function tentarColocarNoPlaneta(planetaAlvo) {
    if (!chipSelecionado) {
      atualizarFalaTex('Primeiro clique ou arraste um dos equipamentos acima! 👆');
      return;
    }

    const id = chipSelecionado.dataset.id;
    const missao = MISSOES_DESTINO.find((m) => m.id === id);
    if (!missao) return;

    if (missao.destino === planetaAlvo) {
      const badge = document.createElement('div');
      badge.className = 'placed-badge';
      badge.textContent = `✅ ${missao.emoji} ${missao.nome}`;

      if (planetaAlvo === 'lua') droppedLua.appendChild(badge);
      else droppedMarte.appendChild(badge);

      chipSelecionado.remove();
      chipSelecionado = null;
      acertosDestino++;
      adicionarEstrelas(2);

      atualizarFalaTex(`<strong>Isso mesmo!</strong> ${missao.nome} pousou em ${planetaAlvo === 'lua' ? 'Lua 🌕' : 'Marte 🔴'}! +2 estrelas!`);

      if (acertosDestino === MISSOES_DESTINO.length) {
        adicionarEstrelas(10);
        destinoVictory.classList.remove('hidden');
        atualizarFalaTex('<strong>Incrível!</strong> Você completou toda a Missão 1 e ganhou +10 estrelas! 🎉', true);
      }
    } else {
      atualizarFalaTex(`Quase! Dica sobre <strong>${missao.nome}</strong>: ${missao.dica} Tente o outro astro! 🚀`);
    }
  }

  document.querySelectorAll('.planet-dropzone').forEach((zone) => {
    const planeta = zone.dataset.planet;

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => {
      zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain');
      const chip = robotsPool.querySelector(`[data-id="${id}"]`);
      if (chip) chipSelecionado = chip;
      tentarColocarNoPlaneta(planeta);
    });

    zone.addEventListener('click', () => {
      tentarColocarNoPlaneta(planeta);
    });
  });

  document.getElementById('btn-reset-destino')?.addEventListener('click', iniciarJogoDestino);
  iniciarJogoDestino();

  // ---------------------------------------------------------
  // 3. JOGO 2: QUIZ ESPACIAL DO TEX
  // ---------------------------------------------------------
  const PERGUNTAS_QUIZ = [
    {
      local: 'lua',
      localTexto: '🌕 Lua • Surveyor 3',
      pergunta: 'Quanto tempo o robô Surveyor 3 ficou dormindo na Lua antes de receber a visita dos astronautas da Apollo 12?',
      opcoes: ['3 dias', '31 meses', '100 anos', '2 semanas'],
      correta: 1,
      explicacao: 'Ele ficou 31 meses exposto na Lua até novembro de 1969, quando Conrad e Bean da Apollo 12 foram visitá-lo!'
    },
    {
      local: 'lua',
      localTexto: '🌕 Lua • Retrorrefletores',
      pergunta: 'Quantos cubinhos de vidro tem o espelho campeão deixado pela missão Apollo 15 na Lua?',
      opcoes: ['10 cubinhos', '50 cubinhos', '300 cubinhos', '1.000 cubinhos'],
      correta: 2,
      explicacao: 'Os painéis das Apollo 11 e 14 têm 100 cubos, e o da Apollo 15 tem 300 cubinhos que refletem lasers da Terra até hoje!'
    },
    {
      local: 'marte',
      localTexto: '🔴 Marte • Pathfinder e Sojourner',
      pergunta: 'Como a nave Pathfinder pousou em Marte em 1997 sem quebrar nada?',
      opcoes: ['De paraquedas na água', 'Quicando cerca de 15 vezes dentro de airbags gigantes', 'Com asas de avião', 'Escorregando num tobogã'],
      correta: 1,
      explicacao: 'Ela chegou embrulhada em airbags gigantes e quicou cerca de 15 vezes, pulando até 15 metros de altura!'
    },
    {
      local: 'marte',
      localTexto: '🔴 Marte • Opportunity',
      pergunta: 'A Opportunity foi planejada para funcionar por 90 dias marcianos. Quanto tempo ela realmente trabalhou?',
      opcoes: ['Apenas 10 dias', '6 meses', 'Quase 15 anos (5.111 sóis)', '1 ano'],
      correta: 2,
      explicacao: 'A Oppy superou todas as expectativas, trabalhou por quase 15 anos e andou mais de 45 km em Marte!'
    },
    {
      local: 'marte',
      localTexto: '🔴 Marte • Phoenix',
      pergunta: 'O que a sonda Phoenix descobriu ao cavar o solo do Ártico de Marte que fez os cientistas gritarem "Holy Cow!"?',
      opcoes: ['Ouro brilhante', 'Gelo de água logo abaixo do solo', 'Plantas verdes', 'Fósseis de dinossauro'],
      correta: 1,
      explicacao: 'Os pedacinhos brancos passaram direto de gelo para vapor, confirmando gelo de água sob o solo de Marte!'
    },
    {
      local: 'marte',
      localTexto: '🔴 Marte • InSight',
      pergunta: 'Quantos terremotos marcianos o sismômetro da InSight detectou em mais de quatro anos?',
      opcoes: ['Nenhum tremor', '12 tremores', '1.319 terremotos marcianos', '50 tremores'],
      correta: 2,
      explicacao: 'Com 1.319 terremotos detectados, os cientistas descobriram que o núcleo de Marte é líquido!'
    }
  ];

  const quizProgressText = document.getElementById('quiz-progress-text');
  const quizBadgeLocal = document.getElementById('quiz-badge-local');
  const quizQuestionText = document.getElementById('quiz-question-text');
  const quizOptionsGrid = document.getElementById('quiz-options-grid');
  const quizFeedback = document.getElementById('quiz-feedback');
  const quizStage = document.getElementById('quiz-stage');
  const quizVictory = document.getElementById('quiz-victory');
  const quizFinalScore = document.getElementById('quiz-final-score');

  let perguntaIdx = 0;
  let acertosQuiz = 0;

  function renderizarPerguntaQuiz() {
    quizStage.classList.remove('hidden');
    quizVictory.classList.add('hidden');
    quizFeedback.classList.add('hidden');

    const q = PERGUNTAS_QUIZ[perguntaIdx];
    quizProgressText.textContent = `Pergunta ${perguntaIdx + 1} de ${PERGUNTAS_QUIZ.length}`;
    quizBadgeLocal.className = `comic-pill-badge ${q.local}`;
    quizBadgeLocal.textContent = q.localTexto;
    quizQuestionText.textContent = q.pergunta;

    quizOptionsGrid.innerHTML = '';
    q.opcoes.forEach((opcao, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn';
      btn.textContent = `${['A)', 'B)', 'C)', 'D)'][idx]} ${opcao}`;
      btn.addEventListener('click', () => responderQuiz(idx, btn));
      quizOptionsGrid.appendChild(btn);
    });
  }

  function responderQuiz(indiceEscolhido, botaoClicado) {
    const q = PERGUNTAS_QUIZ[perguntaIdx];
    const botoes = quizOptionsGrid.querySelectorAll('.quiz-option-btn');
    botoes.forEach((b) => (b.disabled = true));

    const acertou = indiceEscolhido === q.correta;
    if (acertou) {
      botaoClicado.classList.add('correct');
      acertosQuiz++;
      adicionarEstrelas(3);
      atualizarFalaTex(`<strong>Acertou! 🎉</strong> ${q.explicacao}`);
    } else {
      botaoClicado.classList.add('wrong');
      botoes[q.correta]?.classList.add('correct');
      atualizarFalaTex(`<strong>Boa tentativa!</strong> ${q.explicacao}`);
    }

    quizFeedback.innerHTML = `
      <span>${acertou ? '✅ +3 Estrelas!' : '💡 Curiosidade:'} ${q.explicacao}</span>
      <button type="button" id="btn-proxima-pergunta" class="btn-next-game">
        ${perguntaIdx + 1 < PERGUNTAS_QUIZ.length ? 'Próxima Pergunta ➡️' : 'Ver Resultado 🏆'}
      </button>
    `;
    quizFeedback.classList.remove('hidden');

    document.getElementById('btn-proxima-pergunta')?.addEventListener('click', () => {
      perguntaIdx++;
      if (perguntaIdx < PERGUNTAS_QUIZ.length) {
        renderizarPerguntaQuiz();
      } else {
        quizStage.classList.add('hidden');
        quizVictory.classList.remove('hidden');
        quizFinalScore.innerHTML = `Você acertou <strong>${acertosQuiz} de ${PERGUNTAS_QUIZ.length}</strong> perguntas sobre a Lua e Marte!`;
        atualizarFalaTex(`<strong>Fim do Quiz!</strong> Você acertou ${acertosQuiz} de ${PERGUNTAS_QUIZ.length} perguntas! 🏆`, true);
      }
    });
  }

  document.getElementById('btn-ler-pergunta')?.addEventListener('click', () => {
    const q = PERGUNTAS_QUIZ[perguntaIdx];
    if (q) falarTexto(`${q.pergunta}. Opções: ${q.opcoes.join(', ')}`);
  });

  document.getElementById('btn-reset-quiz')?.addEventListener('click', () => {
    perguntaIdx = 0;
    acertosQuiz = 0;
    renderizarPerguntaQuiz();
  });

  renderizarPerguntaQuiz();

  // ---------------------------------------------------------
  // 4. JOGO 3: MEMÓRIA DAS MISSÕES (ROBÔ ↔ HISTÓRIA)
  // ---------------------------------------------------------
  const PARES_MEMORIA = [
    { parId: 'surveyor', icone: '🦾', texto: 'Surveyor 3 (Lua)' },
    { parId: 'surveyor', icone: '👨‍🚀', texto: 'Recebeu visita da Apollo 12 após 31 meses' },
    { parId: 'espelhos', icone: '🪞', texto: 'Espelhos da Apollo' },
    { parId: 'espelhos', icone: '🔦', texto: 'Respondem ao laser da Terra sem pilha' },
    { parId: 'viking', icone: '📡', texto: 'Viking 1 (Marte)' },
    { parId: 'viking', icone: '📸', texto: 'Primeira foto do chão de Marte em 1976' },
    { parId: 'pathfinder', icone: '🏀', texto: 'Pathfinder e Sojourner' },
    { parId: 'pathfinder', icone: '💨', texto: 'Quicou 15 vezes em airbags gigantes' },
    { parId: 'oppy', icone: '🏎️', texto: 'Opportunity (Oppy)' },
    { parId: 'oppy', icone: '🏅', texto: 'Correu quase 15 anos e mais de 45 km' },
    { parId: 'insight', icone: '🎧', texto: 'InSight (Marte)' },
    { parId: 'insight', icone: '🌋', texto: 'Escutou 1.319 terremotos marcianos' }
  ];

  const memoryGrid = document.getElementById('memory-grid');
  const memoryPairsCount = document.getElementById('memory-pairs-count');
  const memoriaVictory = document.getElementById('memoria-victory');

  let cartasViradas = [];
  let paresEncontrados = 0;
  let travado = false;

  function iniciarJogoMemoria() {
    memoryGrid.innerHTML = '';
    memoriaVictory.classList.add('hidden');
    cartasViradas = [];
    paresEncontrados = 0;
    travado = false;
    memoryPairsCount.textContent = '0/6';

    const baralho = [...PARES_MEMORIA].sort(() => Math.random() - 0.5);

    baralho.forEach((carta) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'memory-card';
      btn.dataset.parId = carta.parId;
      btn.innerHTML = `
        <span class="card-front-icon">🚀</span>
        <span class="card-back-content">
          <span style="font-size:1.5rem;">${carta.icone}</span>
          <span>${carta.texto}</span>
        </span>
      `;

      btn.addEventListener('click', () => virarCartaMemoria(btn));
      memoryGrid.appendChild(btn);
    });
  }

  function virarCartaMemoria(carta) {
    if (travado || carta.classList.contains('flipped') || carta.classList.contains('matched')) {
      return;
    }

    carta.classList.add('flipped');
    cartasViradas.push(carta);

    if (cartasViradas.length === 2) {
      travado = true;
      const [c1, c2] = cartasViradas;

      if (c1.dataset.parId === c2.dataset.parId) {
        c1.classList.add('matched');
        c2.classList.add('matched');
        cartasViradas = [];
        travado = false;
        paresEncontrados++;
        memoryPairsCount.textContent = `${paresEncontrados}/6`;
        adicionarEstrelas(3);
        atualizarFalaTex('<strong>Par encontrado! ⭐</strong> Você ganhou +3 estrelas!');

        if (paresEncontrados === 6) {
          adicionarEstrelas(10);
          memoriaVictory.classList.remove('hidden');
          atualizarFalaTex('<strong>Parabéns!</strong> Você completou o Jogo da Memória das Missões! 🌟', true);
        }
      } else {
        setTimeout(() => {
          c1.classList.remove('flipped');
          c2.classList.remove('flipped');
          cartasViradas = [];
          travado = false;
        }, 950);
      }
    }
  }

  document.getElementById('btn-reset-memoria')?.addEventListener('click', iniciarJogoMemoria);
  document.getElementById('btn-play-again-memoria')?.addEventListener('click', iniciarJogoMemoria);
  iniciarJogoMemoria();
});