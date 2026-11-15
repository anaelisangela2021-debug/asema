/* =========================================================
   EXPLORADORES DO ESPAÇO — ACESSIBILIDADE EM LIBRAS (libras.js)
   ========================================================= */

(function inicializarLibras() {
  function montarWidgetVLibras() {
    if (document.querySelector('[vw]')) return;

    // Garante que o intérprete 3D fique visível acima dos painéis e da abertura
    const estiloAjuste = document.createElement('style');
    estiloAjuste.textContent = `
      div[vw].enabled {
        z-index: 10000 !important;
      }
    `;
    document.head.appendChild(estiloAjuste);

    // Container oficial do VLibras
    const container = document.createElement('div');
    container.setAttribute('vw', '');
    container.className = 'enabled';
    container.innerHTML = `
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    `;
    document.body.appendChild(container);

    // Carrega o tradutor 3D oficial de Libras
    const scriptPlugin = document.createElement('script');
    scriptPlugin.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    scriptPlugin.async = true;
    scriptPlugin.onload = function () {
      if (window.VLibras && typeof window.VLibras.Widget === 'function') {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };
    document.body.appendChild(scriptPlugin);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', montarWidgetVLibras);
  } else {
    montarWidgetVLibras();
  }
})();