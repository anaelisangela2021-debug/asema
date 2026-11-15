/* =========================================================
   EXPLORADORES DO ESPAÇO — LÓGICA DA TELA INICIAL (index.js)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('nasa-splash');
  const btnPularAbertura = document.getElementById('btn-pular-abertura');
  const texMascot = document.getElementById('tex-mascot');
  const texMascotImg = document.getElementById('tex-mascot-img');
  const texSpeech = document.getElementById('tex-speech');

  const btnEntrar = document.getElementById('btn-entrar');
  const btnEntrarTexto = document.getElementById('btn-entrar-texto');
  const modalLogin = document.getElementById('modal-login');
  const btnFecharModal = document.getElementById('btn-fechar-modal');
  const formLogin = document.getElementById('form-login');
  const btnModoVisitante = document.getElementById('btn-modo-visitante');

  const cardCriancas = document.getElementById('card-criancas');
  const cardJovens = document.getElementById('card-jovens');
  const navHistorias = document.getElementById('nav-historias');
  const navMapa = document.getElementById('nav-mapa');

  // ---------------------------------------------------------
  // 0. CARREGAMENTO INTELIGENTE DE IMAGENS (TESTA VARIAÇÕES DE NOME)
  // ---------------------------------------------------------
  document.querySelectorAll('img[data-fallbacks]').forEach((img) => {
    const candidatos = img.dataset.fallbacks.split(',').map((s) => s.trim());
    let tentativa = 0;

    img.addEventListener('error', function tentarProximo() {
      if (tentativa < candidatos.length) {
        const proximoSrc = candidatos[tentativa++];
        img.src = encodeURI(proximoSrc);
      } else {
        img.removeEventListener('error', tentarProximo);
      }
    });
  });

  // ---------------------------------------------------------
  // 1. RECORTE AUTOMÁTICO DO FUNDO PRETO DO MASCOTE TEX
  // ---------------------------------------------------------
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

  // ---------------------------------------------------------
  // 2. ABERTURA ANIMADA COM LOGO DA NASA
  // ---------------------------------------------------------
  function encerrarAbertura() {
    if (!splash) return;
    splash.classList.add('fade-out');
    sessionStorage.setItem('exploradores_abertura_vista', 'true');
  }

  if (sessionStorage.getItem('exploradores_abertura_vista') === 'true') {
    splash?.remove();
  } else {
    setTimeout(encerrarAbertura, 1800);
    btnPularAbertura?.addEventListener('click', encerrarAbertura);
  }

  // ---------------------------------------------------------
  // 3. INTERATIVIDADE DO MASCOTE TEX
  // ---------------------------------------------------------
  const falasDoTex = [
    'Olá! Eu sou o <strong>TEX</strong>! Escolha sua missão abaixo! 🚀',
    'Sabia que os espelhos da Apollo na Lua funcionam até hoje sem pilha? ✨',
    'A Voyager 1 está viajando pelo espaço interestelar desde 1977! 🛰️',
    'Você pode ler as histórias sem conta ou entrar para liberar tudo! 🐾'
  ];
  let indiceFala = 0;

  function falarComTex() {
    indiceFala = (indiceFala + 1) % falasDoTex.length;
    texSpeech.innerHTML = falasDoTex[indiceFala];
    texMascot.classList.add('speaking');

    clearTimeout(texMascot._speechTimer);
    texMascot._speechTimer = setTimeout(() => {
      texMascot.classList.remove('speaking');
    }, 4500);
  }

  texMascot?.addEventListener('click', falarComTex);
  texMascot?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      falarComTex();
    }
  });

  // ---------------------------------------------------------
  // 4. CONTROLE DE SESSÃO ("INICIAR SESSÃO" vs "SÓ CONHECER")
  // ---------------------------------------------------------
  function obterSessao() {
    try {
      return JSON.parse(localStorage.getItem('exploradores_sessao')) || null;
    } catch {
      return null;
    }
  }

  function atualizarBotaoUsuario() {
    const sessao = obterSessao();
    if (sessao && sessao.logado) {
      btnEntrarTexto.textContent = `Olá, ${sessao.nome}`;
      btnEntrar.title = 'Clique para trocar de explorador ou sair';
    } else {
      btnEntrarTexto.textContent = 'Entrar';
    }
  }

  atualizarBotaoUsuario();

  btnEntrar?.addEventListener('click', () => {
    modalLogin.classList.remove('hidden');
    document.getElementById('input-nome')?.focus();
  });

  btnFecharModal?.addEventListener('click', () => {
    modalLogin.classList.add('hidden');
  });

  modalLogin?.addEventListener('click', (e) => {
    if (e.target === modalLogin) {
      modalLogin.classList.add('hidden');
    }
  });

  formLogin?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('input-nome').value.trim() || 'Explorador(a)';
    const faixa = formLogin.querySelector('input[name="faixa"]:checked')?.value || 'crianca';

    const dadosSessao = {
      logado: true,
      modo: 'completo',
      nome,
      faixa
    };

    localStorage.setItem('exploradores_sessao', JSON.stringify(dadosSessao));
    atualizarBotaoUsuario();
    modalLogin.classList.add('hidden');

    const destino = faixa === 'jovem' ? 'painel-jovens.html' : 'painel-criancas.html';
    window.location.href = destino;
  });

  btnModoVisitante?.addEventListener('click', () => {
    const sessaoVisitante = {
      logado: false,
      modo: 'visitante',
      nome: 'Visitante',
      faixa: 'crianca'
    };
    localStorage.setItem('exploradores_sessao', JSON.stringify(sessaoVisitante));
    modalLogin.classList.add('hidden');
    window.location.href = 'painel-criancas.html?modo=visitante';
  });

  // ---------------------------------------------------------
  // 5. NAVEGAÇÃO DOS CARDS (CRIANÇAS E JOVENS)
  // ---------------------------------------------------------
  function navegarParaPainel(destino, perfil) {
    const sessaoAtual = obterSessao();
    if (!sessaoAtual) {
      localStorage.setItem(
        'exploradores_sessao',
        JSON.stringify({
          logado: false,
          modo: 'visitante',
          nome: 'Visitante',
          faixa: perfil
        })
      );
    } else {
      sessaoAtual.faixa = perfil;
      localStorage.setItem('exploradores_sessao', JSON.stringify(sessaoAtual));
    }
    window.location.href = destino;
  }

  cardCriancas?.addEventListener('click', (e) => {
    e.preventDefault();
    navegarParaPainel('painel-criancas.html', 'crianca');
  });

  cardJovens?.addEventListener('click', (e) => {
    e.preventDefault();
    navegarParaPainel('painel-jovens.html', 'jovem');
  });

  [navHistorias, navMapa].forEach((link) => {
    link?.addEventListener('click', () => {
      texSpeech.innerHTML = 'Escolha <strong>Crianças</strong> ou <strong>Jovens</strong> para abrir as histórias e o mapa! 🗺️';
      texMascot.classList.add('speaking');
    });
  });
});