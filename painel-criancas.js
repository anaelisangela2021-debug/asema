/* =========================================================
   EXPLORADORES DO ESPAÇO — LÓGICA PAINEL CRIANÇAS (painel-criancas.js)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Base dos equipamentos da NASA na Lua e em Marte
  const EQUIPAMENTOS_NASA = [
    {
      id: 'surveyor-3',
      nome: 'Surveyor 3',
      apelido: 'O robô que recebeu visita',
      local: 'lua',
      localNome: 'Lua',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      resumo: 'Ele dormiu na Lua em 1967 e ganhou visita dos astronautas da Apollo 12 31 meses depois!'
    },
    {
      id: 'retrorrefletores',
      nome: 'Espelhos da Apollo 11, 14 e 15',
      apelido: 'Os espelhos que não dormem',
      local: 'lua',
      localNome: 'Lua',
      status: 'ativo',
      statusTexto: 'Ativo',
      resumo: 'Espelhos sem pilha na Lua que respondem aos lasers disparados da Terra até hoje!'
    },
    {
      id: 'viking-1',
      nome: 'Viking 1',
      apelido: 'A estação que ficou calada',
      local: 'marte',
      localNome: 'Marte',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      resumo: 'Tirou a primeira foto do chão de Marte e trabalhou por mais de 6 anos.'
    },
    {
      id: 'pathfinder-sojourner',
      nome: 'Pathfinder e Sojourner',
      apelido: 'Quique, quique, quique!',
      local: 'marte',
      localNome: 'Marte',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      resumo: 'Pousou quicando em airbags gigantes e levou o primeiro carrinho com rodas em Marte.'
    },
    {
      id: 'opportunity',
      nome: 'Opportunity (Oppy)',
      apelido: 'A corredora de 90 dias',
      local: 'marte',
      localNome: 'Marte',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      resumo: 'Planejada para 90 dias, explorou Marte por quase 15 anos e andou mais de 45 km!'
    },
    {
      id: 'phoenix',
      nome: 'Phoenix',
      apelido: 'A nave que foi ao Ártico de Marte',
      local: 'marte',
      localNome: 'Marte',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      resumo: 'Cavou o solo gelado do polo norte de Marte e confirmou gelo de água!'
    },
    {
      id: 'insight',
      nome: 'InSight',
      apelido: 'A ouvinte de terremotos',
      local: 'marte',
      localNome: 'Marte',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      resumo: 'Ficou mais de 4 anos com o ouvido no chão de Marte e escutou 1.319 tremores!'
    }
  ];

  const greetingNome = document.getElementById('greeting-nome');
  const perfilNomeDisplay = document.getElementById('perfil-nome-display');
  const perfilStatusBadge = document.getElementById('perfil-status-badge');

  const inputPesquisa = document.getElementById('input-pesquisa');
  const btnFiltros = document.getElementById('btn-filtros');
  const filtroLabel = document.getElementById('filtro-label');
  const dropdownFiltros = document.getElementById('dropdown-filtros');

  const btnPerfil = document.getElementById('btn-perfil');
  const dropdownPerfil = document.getElementById('dropdown-perfil');
  const btnAbrirLoginRapido = document.getElementById('btn-abrir-login-rapido');

  const resultsDrawer = document.getElementById('search-results-drawer');
  const resultsTitle = document.getElementById('results-title');
  const resultsGrid = document.getElementById('results-grid');
  const btnFecharResultados = document.getElementById('btn-fechar-resultados');

  const modalSessao = document.getElementById('modal-acesso-restrito');
  const btnFecharBloqueio = document.getElementById('btn-fechar-bloqueio');
  const formLoginRapido = document.getElementById('form-login-rapido');

  const texPeeking = document.getElementById('tex-peeking');
  const texMascotImg = document.getElementById('tex-mascot-img');
  const avatarTexImg = document.getElementById('avatar-tex-img');
  const texBubble = document.getElementById('tex-bubble');
  const btnPawTip = document.getElementById('btn-paw-tip');

  let filtroAtual = 'todos';

  // ---------------------------------------------------------
  // 0. CARREGAMENTO E RECORTE DE FUNDO PRETO DO MASCOTE TEX
  // ---------------------------------------------------------
  document.querySelectorAll('img[data-fallbacks]').forEach((img) => {
    const candidatos = img.dataset.fallbacks.split(',').map((s) => s.trim());
    let tentativa = 0;

    img.addEventListener('error', function tentarProximo() {
      if (tentativa < candidatos.length) {
        img.src = encodeURI(candidatos[tentativa++]);
      } else {
        img.removeEventListener('error', tentarProximo);
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
          const p = idx * 4;
          data[p + 3] = 0;

          const x = idx % w;
          const y = (idx / w) | 0;

          if (x > 0) {
            const n = idx - 1;
            if (!visited[n] && isOuterBlack(n)) { visited[n] = 1; queue[tail++] = n; }
          }
          if (x < w - 1) {
            const n = idx + 1;
            if (!visited[n] && isOuterBlack(n)) { visited[n] = 1; queue[tail++] = n; }
          }
          if (y > 0) {
            const n = idx - w;
            if (!visited[n] && isOuterBlack(n)) { visited[n] = 1; queue[tail++] = n; }
          }
          if (y < h - 1) {
            const n = idx + w;
            if (!visited[n] && isOuterBlack(n)) { visited[n] = 1; queue[tail++] = n; }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        imgElement.src = canvas.toDataURL('image/png');
      } catch {
        imgElement.classList.add('tex-fallback-blend');
      }
    };

    if (imgElement.complete && imgElement.naturalWidth > 0) {
      processar();
    } else {
      imgElement.addEventListener('load', processar);
    }
  }

  removerFundoPretoMascote(texMascotImg);
  removerFundoPretoMascote(avatarTexImg);

  // ---------------------------------------------------------
  // 1. SESSÃO DO EXPLORADOR
  // ---------------------------------------------------------
  function obterSessao() {
    try {
      return JSON.parse(localStorage.getItem('exploradores_sessao')) || {
        logado: false,
        modo: 'visitante',
        nome: 'Explorador(a)',
        faixa: 'crianca'
      };
    } catch {
      return { logado: false, modo: 'visitante', nome: 'Explorador(a)', faixa: 'crianca' };
    }
  }

  function atualizarEstadoSessao() {
    const sessao = obterSessao();
    if (sessao.logado && sessao.nome) {
      greetingNome.textContent = `${sessao.nome}!`;
      perfilNomeDisplay.textContent = sessao.nome;
      perfilStatusBadge.textContent = '✨ Explorador(a) Logado(a)';
      perfilStatusBadge.style.background = 'rgba(34, 197, 94, 0.25)';
      perfilStatusBadge.style.color = '#86efac';
      if (btnAbrirLoginRapido) {
        btnAbrirLoginRapido.textContent = '🚪 Encerrar Sessão';
      }
    } else {
      greetingNome.textContent = 'Explorador(a)!';
      perfilNomeDisplay.textContent = 'Visitante';
      perfilStatusBadge.textContent = '📖 Modo Só Conhecer';
      perfilStatusBadge.style.background = 'rgba(250, 204, 21, 0.2)';
      perfilStatusBadge.style.color = '#fde047';
      if (btnAbrirLoginRapido) {
        btnAbrirLoginRapido.textContent = '🚀 Iniciar Sessão';
      }
    }
  }

  atualizarEstadoSessao();

  btnFecharBloqueio?.addEventListener('click', () => {
    modalSessao.classList.add('hidden');
  });

  formLoginRapido?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('input-nome-rapido').value.trim() || 'Explorador(a)';
    localStorage.setItem(
      'exploradores_sessao',
      JSON.stringify({
        logado: true,
        modo: 'completo',
        nome,
        faixa: 'crianca'
      })
    );
    atualizarEstadoSessao();
    modalSessao.classList.add('hidden');
    mostrarFalaTex(`Bem-vindo(a), <strong>${nome}</strong>! Escolha Lua, Marte ou Jogos! 🎉`);
  });

  // ---------------------------------------------------------
  // 2. BARRA DE PESQUISA E FILTROS (LUA E MARTE)
  // ---------------------------------------------------------
  function abrirResultadosFiltrados() {
    const termo = (inputPesquisa?.value || '').trim().toLowerCase();

    const filtrados = EQUIPAMENTOS_NASA.filter((item) => {
      const bateFiltro =
        filtroAtual === 'todos' ||
        item.local === filtroAtual ||
        item.status === filtroAtual;

      const bateTexto =
        !termo ||
        item.nome.toLowerCase().includes(termo) ||
        item.apelido.toLowerCase().includes(termo) ||
        item.localNome.toLowerCase().includes(termo) ||
        item.resumo.toLowerCase().includes(termo);

      return bateFiltro && bateTexto;
    });

    const nomesFiltro = {
      todos: 'Equipamentos na Lua e em Marte',
      lua: 'Equipamentos na Lua',
      marte: 'Equipamentos em Marte',
      ativo: 'Equipamentos Ainda Ativos',
      esquecido: 'Equipamentos Esquecidos'
    };

    resultsTitle.textContent = termo
      ? `Resultados para "${inputPesquisa.value}" (${filtrados.length})`
      : `${nomesFiltro[filtroAtual]} (${filtrados.length})`;

    if (filtrados.length === 0) {
      resultsGrid.innerHTML = `<p style="grid-column: 1/-1; color: #cbd5e1;">Nenhum equipamento encontrado com esse filtro. Tente outra palavra!</p>`;
    } else {
      resultsGrid.innerHTML = filtrados
        .map(
          (eq) => `
          <article class="equip-result-item">
            <div>
              <div class="equip-badges">
                <span class="badge-loc">${eq.localNome}</span>
                <span class="badge-status ${eq.status}">${eq.statusTexto}</span>
              </div>
              <h4 style="margin-top: 0.45rem;">${eq.nome}</h4>
              <p style="color:#fde047; font-weight:700; margin-bottom:0.25rem;">"${eq.apelido}"</p>
              <p>${eq.resumo}</p>
            </div>
            <a href="historias-criancas.html?equip=${eq.id}" class="btn-ver-historia">Ler História ›</a>
          </article>
        `
        )
        .join('');
    }

    resultsDrawer.classList.remove('hidden');
  }

  btnFiltros?.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownFiltros.classList.toggle('hidden');
    dropdownPerfil.classList.add('hidden');
  });

  document.querySelectorAll('.filter-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-option').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      filtroAtual = btn.dataset.filter;
      filtroLabel.textContent = btn.textContent.replace(/^[^\wÀ-ú]+\s*/, '').split('(')[0].trim();
      dropdownFiltros.classList.add('hidden');
      abrirResultadosFiltrados();
    });
  });

  inputPesquisa?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      abrirResultadosFiltrados();
    }
  });

  btnFecharResultados?.addEventListener('click', () => {
    resultsDrawer.classList.add('hidden');
  });

  resultsDrawer?.addEventListener('click', (e) => {
    if (e.target === resultsDrawer) {
      resultsDrawer.classList.add('hidden');
    }
  });

  // ---------------------------------------------------------
  // 3. MENU DO PERFIL SUPERIOR DIREITO
  // ---------------------------------------------------------
  btnPerfil?.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownPerfil.classList.toggle('hidden');
    dropdownFiltros.classList.add('hidden');
  });

  btnAbrirLoginRapido?.addEventListener('click', () => {
    dropdownPerfil.classList.add('hidden');
    const sessao = obterSessao();
    if (sessao.logado) {
      localStorage.setItem(
        'exploradores_sessao',
        JSON.stringify({ logado: false, modo: 'visitante', nome: 'Visitante', faixa: 'crianca' })
      );
      atualizarEstadoSessao();
      mostrarFalaTex('Você voltou para o modo <strong>Só Conhecer</strong>! 📖');
    } else {
      modalSessao.classList.remove('hidden');
      document.getElementById('input-nome-rapido')?.focus();
    }
  });

  document.addEventListener('click', () => {
    dropdownFiltros?.classList.add('hidden');
    dropdownPerfil?.classList.add('hidden');
  });

  // ---------------------------------------------------------
  // 4. INTERATIVIDADE DO MASCOTE TEX E PÍLULA DA PATINHA
  // ---------------------------------------------------------
  const dicasDoTex = [
    'Escolha <strong>Lua</strong>, <strong>Marte</strong> ou <strong>Jogos</strong> para começar a aventura! 🚀',
    'Na <strong>Lua</strong>, os espelhos da Apollo respondem aos lasers da Terra até hoje! ✨',
    'Em <strong>Marte</strong>, a jipinha Opportunity correu por quase 15 anos! 🏎️',
    'Nos <strong>Jogos</strong> você pode testar tudo o que descobriu! 🎮'
  ];
  let idxDica = 0;

  function mostrarFalaTex(textoCustomizado) {
    if (textoCustomizado) {
      texBubble.innerHTML = textoCustomizado;
    } else {
      idxDica = (idxDica + 1) % dicasDoTex.length;
      texBubble.innerHTML = dicasDoTex[idxDica];
    }
    texPeeking.classList.add('talking');
    clearTimeout(texPeeking._timer);
    texPeeking._timer = setTimeout(() => {
      texPeeking.classList.remove('talking');
    }, 4500);
  }

  texPeeking?.addEventListener('click', () => mostrarFalaTex());
  btnPawTip?.addEventListener('click', () => mostrarFalaTex());
});