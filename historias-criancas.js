/* =========================================================
   EXPLORADORES DO ESPAÇO — HISTÓRIAS ILUSTRADAS + ÁUDIO (historias-criancas.js)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------------
  // 1. BANCO DAS 7 HISTÓRIAS (LUA E MARTE) COM CENAS ILUSTRADAS
  // ---------------------------------------------------------
  const HISTORIAS = [
    {
      id: 'surveyor-3',
      numero: 1,
      titulo: 'O robô que recebeu visita',
      missao: 'Surveyor 3 e Apollo 12',
      local: 'lua',
      localNome: 'Lua',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      chamada: 'Ele dormiu na Lua e ganhou visita 31 meses depois.',
      miniHistoria:
        'Em 1967, um robô de três pernas cavou o chão da Lua com uma pazinha e depois caiu num sono sem fim. Passaram-se 31 meses. Então, duas pessoas vieram andando pela poeira até ele. Elas olharam para o robô, tiraram a câmera dele e levaram para casa. Por que alguém viajaria até a Lua para buscar uma câmera velha?',
      dicaTex: 'O Surveyor 3 foi o único robô visitado por astronautas em outro mundo! Clique em cada cena para ouvir!',
      capaSvg: `
        <svg viewBox="0 0 360 200">
          <rect width="360" height="200" fill="#0f255e"/>
          <circle cx="52" cy="36" r="2.5" fill="#fde047"/><circle cx="310" cy="28" r="3" fill="#fff"/>
          <ellipse cx="180" cy="186" rx="190" ry="44" fill="#cbd5e1" stroke="#0f172a" stroke-width="3"/>
          <!-- Robô Surveyor 3 cartoon -->
          <g transform="translate(115, 58)">
            <line x1="35" y1="68" x2="10" y2="108" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
            <line x1="65" y1="68" x2="65" y2="112" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
            <line x1="95" y1="68" x2="120" y2="108" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
            <rect x="30" y="28" width="70" height="44" rx="12" fill="#f8fafc" stroke="#0f172a" stroke-width="3.5"/>
            <circle cx="54" cy="48" r="11" fill="#38bdf8" stroke="#0f172a" stroke-width="3"/>
            <circle cx="56" cy="46" r="4" fill="#0f172a"/>
            <circle cx="80" cy="48" r="11" fill="#38bdf8" stroke="#0f172a" stroke-width="3"/>
            <circle cx="82" cy="46" r="4" fill="#0f172a"/>
            <path d="M98 54 L138 78 L148 72 L144 88 L128 84" fill="#facc15" stroke="#0f172a" stroke-width="3"/>
          </g>
        </svg>`,
      cenas: [
        {
          titulo: 'Cena 1: O teste da areia da Lua',
          sfx: 'POUSO SUAVE!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#0b1b48"/>
              <circle cx="48" cy="42" r="3" fill="#fde047"/><circle cx="290" cy="36" r="2.5" fill="#fff"/>
              <circle cx="305" cy="64" r="26" fill="#38bdf8" stroke="#0f172a" stroke-width="3"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#cbd5e1" stroke="#0f172a" stroke-width="3.5"/>
              <ellipse cx="95" cy="205" rx="28" ry="8" fill="#94a3b8" stroke="#0f172a" stroke-width="2"/>
              <g transform="translate(115, 72)">
                <line x1="35" y1="74" x2="8" y2="122" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
                <line x1="65" y1="74" x2="65" y2="126" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
                <line x1="95" y1="74" x2="122" y2="122" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
                <ellipse cx="8" cy="124" rx="14" ry="5" fill="#facc15" stroke="#0f172a" stroke-width="2.5"/>
                <ellipse cx="65" cy="128" rx="14" ry="5" fill="#facc15" stroke="#0f172a" stroke-width="2.5"/>
                <ellipse cx="122" cy="124" rx="14" ry="5" fill="#facc15" stroke="#0f172a" stroke-width="2.5"/>
                <rect x="28" y="28" width="74" height="48" rx="14" fill="#ffffff" stroke="#0f172a" stroke-width="3.5"/>
                <circle cx="52" cy="50" r="11" fill="#e0f2fe" stroke="#0f172a" stroke-width="3"/>
                <circle cx="52" cy="50" r="4.5" fill="#0f172a"/>
                <circle cx="78" cy="50" r="11" fill="#e0f2fe" stroke="#0f172a" stroke-width="3"/>
                <circle cx="78" cy="50" r="4.5" fill="#0f172a"/>
                <path d="M56 66 Q65 73 74 66" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
              </g>
            </svg>`,
          paragrafos: [
            'Oi! Eu sou o Surveyor 3. Tenho três pernas, uma pazinha e um olho de televisão. Fui o único da minha turma que recebeu uma visita... na Lua. Já já eu conto como foi.',
            'Antes de mandar gente para a Lua, a NASA precisava descobrir uma coisa importantíssima: será que o chão de lá aguenta o peso de uma nave? Ou ela afundaria como o seu pé na areia fofa da praia? Em 20 de abril de 1967, chegou a minha vez. Desci devagarinho, encostei na Lua e... o chão aguentou!'
          ]
        },
        {
          titulo: 'Cena 2: Cava, clique, manda... e um longo sono',
          sfx: 'CAVA! CLIQUE!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#0f255e"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#cbd5e1" stroke="#0f172a" stroke-width="3.5"/>
              <g transform="translate(85, 76)">
                <line x1="35" y1="70" x2="12" y2="116" stroke="#0f172a" stroke-width="6"/>
                <line x1="95" y1="70" x2="118" y2="116" stroke="#0f172a" stroke-width="6"/>
                <rect x="28" y="28" width="74" height="46" rx="14" fill="#f8fafc" stroke="#0f172a" stroke-width="3.5"/>
                <!-- Olhos fechados dormindo + Zzz -->
                <path d="M44 50 Q52 56 60 50" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>
                <path d="M70 50 Q78 56 86 50" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>
                <!-- Pazinha cavando -->
                <path d="M100 54 L156 96 L174 90 L166 110 L146 104" fill="#facc15" stroke="#0f172a" stroke-width="3"/>
                <text x="122" y="24" fill="#fde047" font-family="Fredoka, sans-serif" font-weight="700" font-size="22">Zzz... 31 meses</text>
              </g>
            </svg>`,
          paragrafos: [
            'Usei a minha pazinha! Cavei o chão lunar, olhei o buraco com a minha câmera e mandei as fotos para a Terra. Foi assim: cava, clique, manda. Cava, clique, manda.',
            'Só que a noite na Lua dura cerca de duas semanas e é gelada de verdade. Meu último contato foi em 4 de maio de 1967. Depois disso, fiquei dormindo no chão cinzento, sem energia, por 31 meses.'
          ]
        },
        {
          titulo: 'Cena 3: A visita campeã da Apollo 12!',
          sfx: 'OI, AMIGO!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#1e3a8a"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#e2e8f0" stroke="#0f172a" stroke-width="3.5"/>
              <!-- Surveyor cor de biscoito -->
              <g transform="translate(55, 84)">
                <line x1="30" y1="64" x2="12" y2="108" stroke="#0f172a" stroke-width="5"/>
                <line x1="85" y1="64" x2="102" y2="108" stroke="#0f172a" stroke-width="5"/>
                <rect x="24" y="26" width="66" height="42" rx="12" fill="#e7d5b8" stroke="#0f172a" stroke-width="3.5"/>
                <circle cx="46" cy="46" r="9" fill="#fff" stroke="#0f172a" stroke-width="2.5"/>
                <circle cx="48" cy="46" r="4" fill="#0f172a"/>
                <circle cx="68" cy="46" r="9" fill="#fff" stroke="#0f172a" stroke-width="2.5"/>
                <circle cx="70" cy="46" r="4" fill="#0f172a"/>
              </g>
              <!-- Astronautas Apollo 12 -->
              <g transform="translate(195, 76)">
                <rect x="18" y="42" width="38" height="46" rx="12" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
                <circle cx="37" cy="24" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
                <ellipse cx="35" cy="24" rx="13" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="2.5"/>
                <path d="M18 52 L2 36" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
                <line x1="26" y1="88" x2="22" y2="114" stroke="#0f172a" stroke-width="6"/>
                <line x1="48" y1="88" x2="52" y2="114" stroke="#0f172a" stroke-width="6"/>
              </g>
            </svg>`,
          paragrafos: [
            'Em novembro de 1969, a nave Intrepid, da missão Apollo 12, pousou a cerca de 180 metros de mim. Dois astronautas vieram saltitando no pó até onde eu estava, tiraram fotos e levaram a minha câmera e a minha pá para a Terra!',
            'Quando os cientistas examinaram a câmera, viram que a tinta branca tinha ficado amarronzada pelo Sol e pela radiação, além de pequenas marquinhas de micrometeoritos. Hoje minha câmera está num museu em Washington e minha pá está no JPL!'
          ]
        }
      ],
      fatos: [
        'Pouso em 20 de abril de 1967 na Lua; último contato em 4 de maio de 1967.',
        'Operou cerca de duas semanas e ficou parado até completar 31 meses para a visita.',
        'Os astronautas da Apollo 12 (Conrad e Bean) visitaram o Surveyor 3 em novembro de 1969, pousando a cerca de 180 metros.',
        'Trouxeram a câmera, a pá e outras peças para estudo; a tinta branca havia ficado bege.',
        'Hoje a câmera está em um museu em Washington (emprestada pela NASA) e a pá está no JPL.'
      ]
    },
    {
      id: 'retrorrefletores',
      numero: 2,
      titulo: 'Os espelhos que não dormem',
      missao: 'Retrorrefletores das Apollo 11, 14 e 15',
      local: 'lua',
      localNome: 'Lua',
      status: 'ativo',
      statusTexto: 'Ativo',
      chamada: 'Espelhos sem pilha, na Lua, que respondem ao laser da Terra.',
      miniHistoria:
        'Na Lua existem espelhos sem fio, sem bateria e sem botão. Mesmo assim, toda vez que alguém na Terra aponta um laser para eles, eles respondem. Com o tempo que a luz leva para ir e voltar, dá para medir a distância até a Lua com precisão de milímetros. Como um espelho tão simples consegue isso?',
      dicaTex: 'O espelho da Apollo 11 é o único experimento daquela missão de 1969 que ainda funciona hoje!',
      capaSvg: `
        <svg viewBox="0 0 360 200">
          <rect width="360" height="200" fill="#091538"/>
          <circle cx="64" cy="54" r="34" fill="#2563eb" stroke="#0f172a" stroke-width="3"/>
          <circle cx="290" cy="142" r="46" fill="#e2e8f0" stroke="#0f172a" stroke-width="3"/>
          <!-- Feixe de laser indo e voltando -->
          <line x1="92" y1="62" x2="266" y2="132" stroke="#4ade80" stroke-width="5" stroke-dasharray="10 6"/>
          <line x1="266" y1="138" x2="92" y2="68" stroke="#fde047" stroke-width="4"/>
          <rect x="256" y="122" width="22" height="22" rx="4" fill="#38bdf8" stroke="#0f172a" stroke-width="2.5"/>
        </svg>`,
      cenas: [
        {
          titulo: 'Cena 1: Cubinhos de vidro muito espertos',
          sfx: 'BRILHO!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#0f255e"/>
              <ellipse cx="180" cy="215" rx="200" ry="50" fill="#cbd5e1" stroke="#0f172a" stroke-width="3.5"/>
              <!-- Painel de retrorrefletores cartoon -->
              <g transform="translate(105, 58)">
                <rect x="0" y="0" width="150" height="104" rx="14" fill="#475569" stroke="#0f172a" stroke-width="4"/>
                <rect x="16" y="16" width="32" height="30" rx="5" fill="#7dd3fc" stroke="#0f172a" stroke-width="2.5"/>
                <rect x="58" y="16" width="32" height="30" rx="5" fill="#bae6fd" stroke="#0f172a" stroke-width="2.5"/>
                <rect x="100" y="16" width="32" height="30" rx="5" fill="#7dd3fc" stroke="#0f172a" stroke-width="2.5"/>
                <rect x="16" y="56" width="32" height="30" rx="5" fill="#bae6fd" stroke="#0f172a" stroke-width="2.5"/>
                <rect x="58" y="56" width="32" height="30" rx="5" fill="#7dd3fc" stroke="#0f172a" stroke-width="2.5"/>
                <rect x="100" y="56" width="32" height="30" rx="5" fill="#bae6fd" stroke="#0f172a" stroke-width="2.5"/>
                <line x1="30" y1="104" x2="20" y2="142" stroke="#0f172a" stroke-width="5"/>
                <line x1="120" y1="104" x2="130" y2="142" stroke="#0f172a" stroke-width="5"/>
              </g>
            </svg>`,
          paragrafos: [
            'Se você olhar para a Lua esta noite, saiba que ela guarda uns espelhinhos muito especiais. Eles não têm pilha, não têm fio, não têm botão. E, mesmo assim, ainda funcionam!',
            'A partir de 1969, astronautas deixaram lá painéis com cubinhos de vidro. Quando a luz bate no cubinho, ele a joga de volta exatamente pelo caminho por onde ela veio — como jogar uma bola numa quina de parede e ela voltar direto para a sua mão. Os painéis das Apollo 11 e 14 têm 100 cubos, e o da Apollo 15 tem 300!'
          ]
        },
        {
          titulo: 'Cena 2: Ping-pong a laser entre Terra e Lua!',
          sfx: 'ZAP! ECO!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#071338"/>
              <circle cx="68" cy="148" r="54" fill="#2563eb" stroke="#0f172a" stroke-width="3.5"/>
              <path d="M44 125 Q72 115 84 146 Q68 175 40 164 Z" fill="#4ade80"/>
              <circle cx="292" cy="72" r="46" fill="#e2e8f0" stroke="#0f172a" stroke-width="3.5"/>
              <line x1="106" y1="126" x2="262" y2="76" stroke="#22c55e" stroke-width="6"/>
              <line x1="262" y1="84" x2="106" y2="136" stroke="#fde047" stroke-width="5" stroke-dasharray="10 6"/>
            </svg>`,
          paragrafos: [
            'Na Terra, cientistas apontam um telescópio e um laser para o lugar onde está o espelho. Eles disparam um pulso de luz, que viaja até a Lua, bate nos cubinhos e volta.',
            'Como a velocidade da luz é conhecida, é só cronometrar o tempo de ida e volta para saber a distância entre a Terra e a Lua. O primeiro eco voltou cerca de 11 a 12 dias após o pouso da Apollo 11!'
          ]
        },
        {
          titulo: 'Cena 3: Precisão de 1 milímetro!',
          sfx: '1 MILÍMETRO!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#1e3a8a"/>
              <rect x="44" y="42" width="272" height="156" rx="20" fill="#fef9c3" stroke="#0f172a" stroke-width="4"/>
              <rect x="66" y="76" width="228" height="36" rx="8" fill="#facc15" stroke="#0f172a" stroke-width="3"/>
              <line x1="90" y1="76" x2="90" y2="96" stroke="#0f172a" stroke-width="3"/>
              <line x1="120" y1="76" x2="120" y2="90" stroke="#0f172a" stroke-width="3"/>
              <line x1="150" y1="76" x2="150" y2="96" stroke="#0f172a" stroke-width="3"/>
              <line x1="180" y1="76" x2="180" y2="90" stroke="#0f172a" stroke-width="3"/>
              <line x1="210" y1="76" x2="210" y2="96" stroke="#0f172a" stroke-width="3"/>
              <line x1="240" y1="76" x2="240" y2="90" stroke="#0f172a" stroke-width="3"/>
              <line x1="270" y1="76" x2="270" y2="96" stroke="#0f172a" stroke-width="3"/>
              <text x="180" y="152" text-anchor="middle" fill="#0f172a" font-family="Fredoka, sans-serif" font-weight="700" font-size="22">Precisão de ~1 mm!</text>
              <text x="180" y="178" text-anchor="middle" fill="#1d4ed8" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="14">Testando a gravidade de Einstein</text>
            </svg>`,
          paragrafos: [
            'Antes das estações modernas, a precisão era de 2 a 3 centímetros. Hoje, com equipamentos como o da estação APOLLO, no Novo México, a medida chega a cerca de 1 milímetro!',
            'Esses ecos também ajudam a testar a teoria da relatividade geral de Einstein. E o painel da Apollo 11 é o último experimento daquela missão que ainda funciona!'
          ]
        }
      ],
      fatos: [
        'Retrorrefletores deixados nas missões Apollo 11, 14 e 15.',
        'Os painéis das Apollo 11 e 14 têm 100 cubos de 3,8 cm; o da Apollo 15 tem 300 cubos.',
        'Funcionam sem energia elétrica, apenas refletindo a luz do laser disparado da Terra.',
        'A distância Terra-Lua hoje é medida com precisão de cerca de 1 mm (antes era de 2 a 3 cm).',
        'A primeira reflexão veio cerca de 11 a 12 dias após o pouso da Apollo 11, e os dados confirmam o princípio da equivalência de Einstein.'
      ]
    },
    {
      id: 'viking-1',
      numero: 3,
      titulo: 'A estação que ficou calada',
      missao: 'Viking 1',
      local: 'marte',
      localNome: 'Marte',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      chamada: 'Ficou seis anos em Marte e foi silenciada por um erro.',
      miniHistoria:
        'Ela mandou a primeira foto do chão de Marte poucos minutos depois de pousar. Depois ficou mais de seis anos medindo o clima e fotografando as dunas. Até que a Terra enviou um comando com um erro, e veio o silêncio. A nave estava inteira, mas não conseguia mais falar. Os engenheiros tentaram trazê-la de volta durante meses. Conseguiram?',
      dicaTex: 'A Viking 1 tirou a primeira foto direto do chão de Marte em 20 de julho de 1976!',
      capaSvg: `
        <svg viewBox="0 0 360 200">
          <rect width="360" height="200" fill="#c2410c"/>
          <ellipse cx="180" cy="184" rx="200" ry="44" fill="#ea580c" stroke="#0f172a" stroke-width="3"/>
          <g transform="translate(115, 56)">
            <line x1="28" y1="68" x2="8" y2="112" stroke="#0f172a" stroke-width="6"/>
            <line x1="102" y1="68" x2="122" y2="112" stroke="#0f172a" stroke-width="6"/>
            <rect x="24" y="34" width="82" height="38" rx="10" fill="#f8fafc" stroke="#0f172a" stroke-width="3.5"/>
            <ellipse cx="65" cy="16" rx="28" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="3"/>
            <circle cx="48" cy="52" r="9" fill="#38bdf8" stroke="#0f172a" stroke-width="2.5"/>
            <circle cx="82" cy="52" r="9" fill="#38bdf8" stroke="#0f172a" stroke-width="2.5"/>
          </g>
        </svg>`,
      cenas: [
        {
          titulo: 'Cena 1: A primeira foto do chão de Marte!',
          sfx: 'CLIQUE! 1976',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#fed7aa"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#ea580c" stroke="#0f172a" stroke-width="3.5"/>
              <g transform="translate(112, 74)">
                <line x1="26" y1="72" x2="6" y2="122" stroke="#0f172a" stroke-width="6"/>
                <line x1="110" y1="72" x2="130" y2="122" stroke="#0f172a" stroke-width="6"/>
                <rect x="22" y="34" width="92" height="42" rx="12" fill="#ffffff" stroke="#0f172a" stroke-width="3.5"/>
                <circle cx="52" cy="54" r="10" fill="#38bdf8" stroke="#0f172a" stroke-width="3"/>
                <circle cx="52" cy="54" r="4" fill="#0f172a"/>
                <circle cx="84" cy="54" r="10" fill="#38bdf8" stroke="#0f172a" stroke-width="3"/>
                <circle cx="84" cy="54" r="4" fill="#0f172a"/>
                <ellipse cx="68" cy="14" rx="30" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="3"/>
              </g>
            </svg>`,
          paragrafos: [
            'No dia 20 de julho de 1976, eu, a Viking 1, pousei numa planície chamada Chryse Planitia, que quer dizer "Planície Dourada". Meus pés tocaram a poeira vermelha e tirei uma foto na hora!',
            'Poucos minutos depois do pouso, ela já estava a caminho da Terra. Foi a primeira foto já feita da superfície de Marte por uma nave que pousou com sucesso!'
          ]
        },
        {
          titulo: 'Cena 2: Mais de seis anos medindo o clima marciano',
          sfx: '2.245 SÓIS!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#fdba74"/>
              <circle cx="285" cy="56" r="24" fill="#93c5fd" stroke="#0f172a" stroke-width="2.5"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#c2410c" stroke="#0f172a" stroke-width="3.5"/>
              <rect x="44" y="42" width="160" height="86" rx="14" fill="#ffffff" stroke="#0f172a" stroke-width="3.5"/>
              <text x="124" y="72" text-anchor="middle" fill="#0f172a" font-family="Fredoka, sans-serif" font-weight="700" font-size="16">BOLETIM DE MARTE</text>
              <text x="124" y="96" text-anchor="middle" fill="#c2410c" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="13">Céu caramelo • Pôr do sol azul</text>
              <text x="124" y="116" text-anchor="middle" fill="#1d4ed8" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="13">Estação Thomas Mutch</text>
            </svg>`,
          paragrafos: [
            'Eu não tinha rodinhas, mas tinha câmeras, um braço para pegar terra e instrumentos para medir o tempo. Todo dia mandava relatórios do clima, do céu cor de caramelo e do pôr do sol azulado.',
            'Trabalhei por 2.245 dias marcianos, chamados de "sóis" — mais de seis anos! Em janeiro de 1982, fui batizada de Estação Memorial Thomas Mutch.'
          ]
        },
        {
          titulo: 'Cena 3: Um comando errado e o silêncio',
          sfx: 'BZZT... SILÊNCIO',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#431407"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#9a3412" stroke="#0f172a" stroke-width="3.5"/>
              <path d="M295 36 L245 64 L265 72 L215 98" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>
              <g transform="translate(105, 86)">
                <rect x="22" y="34" width="92" height="42" rx="12" fill="#e2e8f0" stroke="#0f172a" stroke-width="3.5"/>
                <text x="68" y="61" text-anchor="middle" fill="#0f172a" font-family="Fredoka, sans-serif" font-weight="700" font-size="20">? ? ?</text>
              </g>
            </svg>`,
          paragrafos: [
            'Em 11 de novembro de 1982, a equipe na Terra mandou um comando comum, mas ele tinha um erro. Eu obedeci e depois... silêncio. Parei de falar com a Terra.',
            'Os engenheiros do JPL tentaram me acordar até abril de 1983, sem sucesso. Mas eu sigo inteirinha na Planície Dourada — em 2006, a nave Mars Reconnaissance Orbiter até me fotografou lá de cima!'
          ]
        }
      ],
      fatos: [
        'Pouso em 20 de julho de 1976, em Chryse Planitia, enviando a primeira foto da superfície minutos depois.',
        'Operou por 2.245 sóis (cerca de 6 anos marcianos).',
        'Renomeada em janeiro de 1982 em homenagem a Thomas Mutch.',
        'Comunicação interrompida em 11 de novembro de 1982 após um comando errado enviado da Terra.',
        'Em 12 de abril de 1983, o JPL encerrou as tentativas de contato; em 2006, foi fotografada da órbita pela Mars Reconnaissance Orbiter.'
      ]
    },
    {
      id: 'pathfinder-sojourner',
      numero: 4,
      titulo: 'Quique, quique, quique!',
      missao: 'Pathfinder e Sojourner',
      local: 'marte',
      localNome: 'Marte',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      chamada: 'Uma bola gigante quicou em Marte, e a porta de saída estava bloqueada.',
      miniHistoria:
        'Imagine uma bola gigante caindo em Marte, quicando cerca de 15 vezes e pulando até 15 metros de altura. Dentro dela ia um rover do tamanho de um micro-ondas. Só que, quando a bola parou, um airbag que não esvaziou direito bloqueava a rampa de saída. Como é que um rover sai de casa com a porta trancada por uma bola de ar?',
      dicaTex: 'A Sojourner tinha o tamanho de um forno de micro-ondas e foi o primeiro carrinho com rodas em Marte!',
      capaSvg: `
        <svg viewBox="0 0 360 200">
          <rect width="360" height="200" fill="#9a3412"/>
          <ellipse cx="180" cy="186" rx="200" ry="42" fill="#ea580c" stroke="#0f172a" stroke-width="3"/>
          <!-- Cachos de airbags quicando -->
          <g transform="translate(125, 32)">
            <circle cx="55" cy="30" r="26" fill="#fef3c7" stroke="#0f172a" stroke-width="3.5"/>
            <circle cx="30" cy="58" r="26" fill="#fde68a" stroke="#0f172a" stroke-width="3.5"/>
            <circle cx="80" cy="58" r="26" fill="#fde68a" stroke="#0f172a" stroke-width="3.5"/>
            <circle cx="55" cy="82" r="26" fill="#fef3c7" stroke="#0f172a" stroke-width="3.5"/>
            <circle cx="48" cy="54" r="5" fill="#0f172a"/><circle cx="64" cy="54" r="5" fill="#0f172a"/>
          </g>
        </svg>`,
      cenas: [
        {
          titulo: 'Cena 1: Uma bola de praia gigante pulando em Marte!',
          sfx: 'POF! QUIQUE!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#fb923c"/>
              <ellipse cx="180" cy="215" rx="200" ry="50" fill="#c2410c" stroke="#0f172a" stroke-width="3.5"/>
              <path d="M55 170 Q110 70 175 165 Q235 85 290 160" fill="none" stroke="#fef08a" stroke-width="4" stroke-dasharray="8 6"/>
              <g transform="translate(135, 42)">
                <circle cx="45" cy="24" r="24" fill="#fef3c7" stroke="#0f172a" stroke-width="3.5"/>
                <circle cx="24" cy="48" r="24" fill="#fde68a" stroke="#0f172a" stroke-width="3.5"/>
                <circle cx="66" cy="48" r="24" fill="#fde68a" stroke="#0f172a" stroke-width="3.5"/>
                <circle cx="45" cy="70" r="24" fill="#fef3c7" stroke="#0f172a" stroke-width="3.5"/>
              </g>
            </svg>`,
          paragrafos: [
            'Você já viu uma bola de praia quicando? Pois imagine uma bola de 5,8 metros de largura pulando em Marte com uma nave dentro! Em 4 de julho de 1997, eu, o Pathfinder, cheguei embrulhado em airbags gigantes.',
            'Cheguei em alta velocidade e... pof! Quiquei cerca de 15 vezes, chegando a pular 15 metros de altura — o tamanho de um prédio de cinco andares! Parei 2,5 minutos depois, a 1 quilômetro do primeiro impacto, sem quebrar nada!'
          ]
        },
        {
          titulo: 'Cena 2: Ei, o airbag trancou a porta!',
          sfx: 'PORTA TRANCADA!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#fed7aa"/>
              <ellipse cx="180" cy="215" rx="200" ry="50" fill="#ea580c" stroke="#0f172a" stroke-width="3.5"/>
              <!-- Pequena Sojourner presa atrás do airbag -->
              <rect x="65" y="132" width="68" height="36" rx="8" fill="#38bdf8" stroke="#0f172a" stroke-width="3"/>
              <circle cx="78" cy="172" r="10" fill="#1e293b" stroke="#0f172a" stroke-width="2.5"/>
              <circle cx="100" cy="172" r="10" fill="#1e293b" stroke="#0f172a" stroke-width="2.5"/>
              <circle cx="122" cy="172" r="10" fill="#1e293b" stroke="#0f172a" stroke-width="2.5"/>
              <ellipse cx="176" cy="148" rx="44" ry="34" fill="#fde68a" stroke="#0f172a" stroke-width="3.5"/>
              <text x="176" y="153" text-anchor="middle" fill="#0f172a" font-family="Fredoka, sans-serif" font-weight="700" font-size="15">AIRBAG!</text>
            </svg>`,
          paragrafos: [
            'Dentro de mim vinha a Sojourner, um rover do tamanho de um micro-ondas, com seis rodinhas: a primeira máquina com rodas a passear por outro planeta.',
            'Só que uma bolsa de ar não esvaziou direito e ficou bem na frente da rampa de saída! Os engenheiros na Terra trabalharam rápido para recolher o airbag e liberar o caminho.'
          ]
        },
        {
          titulo: 'Cena 3: 83 sóis passeando em Ares Vallis!',
          sfx: 'VRRUUM!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#fdba74"/>
              <ellipse cx="180" cy="215" rx="200" ry="50" fill="#c2410c" stroke="#0f172a" stroke-width="3.5"/>
              <g transform="translate(115, 108)">
                <rect x="14" y="18" width="96" height="38" rx="10" fill="#facc15" stroke="#0f172a" stroke-width="3.5"/>
                <circle cx="38" cy="36" r="8" fill="#fff" stroke="#0f172a" stroke-width="2.5"/>
                <circle cx="40" cy="36" r="3.5" fill="#0f172a"/>
                <circle cx="64" cy="36" r="8" fill="#fff" stroke="#0f172a" stroke-width="2.5"/>
                <circle cx="66" cy="36" r="3.5" fill="#0f172a"/>
                <circle cx="28" cy="64" r="13" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
                <circle cx="62" cy="64" r="13" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
                <circle cx="96" cy="64" r="13" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
              </g>
            </svg>`,
          paragrafos: [
            'A Sojourner desceu e fez as primeiras marquinhas de rodas em Marte! A missão dela estava planejada para durar só 7 sóis, mas durou 83 sóis!',
            'Ela analisou pedras em Ares Vallis, andou cerca de 100 metros até 27 de setembro de 1997 e inspirou os rovers Spirit e Opportunity!'
          ]
        }
      ],
      fatos: [
        'Pouso em 4 de julho de 1997, em Ares Vallis, usando airbags pela primeira vez em Marte.',
        'Quicou cerca de 15 vezes, a até 15 m de altura, parando 2,5 minutos depois a cerca de 1 km.',
        'Um airbag que não esvaziou direito bloqueou inicialmente a rampa de saída do rover.',
        'Sojourner: planejada para 7 sóis, funcionou por 83 sóis e percorreu cerca de 100 metros.',
        'Último envio de dados em 27 de setembro de 1997; o sistema de airbags foi reutilizado pelos rovers Spirit e Opportunity.'
      ]
    },
    {
      id: 'opportunity',
      numero: 5,
      titulo: 'A corredora de 90 dias',
      missao: 'Opportunity (Oppy)',
      local: 'marte',
      localNome: 'Marte',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      chamada: 'Planejada para 90 dias. Durou quase 15 anos.',
      miniHistoria:
        'Ela tinha prazo de validade: 90 dias em Marte. Mas continuou rodando por quase 15 anos e percorreu mais de 45 quilômetros. Só parou quando uma tempestade de poeira cobriu o planeta inteiro e escondeu o Sol. Que pistas ela achou pelo caminho, e por que valeram tanto?',
      dicaTex: 'A Oppy achou "mirtilos" cinzentos de hematita que provaram que já existiu água líquida em Marte!',
      capaSvg: `
        <svg viewBox="0 0 360 200">
          <rect width="360" height="200" fill="#ea580c"/>
          <ellipse cx="180" cy="186" rx="200" ry="42" fill="#9a3412" stroke="#0f172a" stroke-width="3"/>
          <g transform="translate(110, 62)">
            <polygon points="10,48 130,48 115,66 25,66" fill="#1d4ed8" stroke="#0f172a" stroke-width="3"/>
            <rect x="58" y="14" width="26" height="34" rx="6" fill="#f8fafc" stroke="#0f172a" stroke-width="3"/>
            <circle cx="66" cy="28" r="5" fill="#0f172a"/><circle cx="78" cy="28" r="5" fill="#0f172a"/>
            <circle cx="32" cy="84" r="13" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
            <circle cx="70" cy="84" r="13" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
            <circle cx="108" cy="84" r="13" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
          </g>
        </svg>`,
      cenas: [
        {
          titulo: 'Cena 1: Os mirtilos cinzentos de Meridiani Planum',
          sfx: 'PISTA DE ÁGUA!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#fed7aa"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#ea580c" stroke="#0f172a" stroke-width="3.5"/>
              <!-- Bolinhas cinzentas "blueberries" e lupa -->
              <circle cx="95" cy="182" r="12" fill="#64748b" stroke="#0f172a" stroke-width="3"/>
              <circle cx="132" cy="188" r="10" fill="#475569" stroke="#0f172a" stroke-width="3"/>
              <circle cx="168" cy="180" r="13" fill="#64748b" stroke="#0f172a" stroke-width="3"/>
              <circle cx="132" cy="160" r="44" fill="rgba(186, 230, 253, 0.55)" stroke="#0f172a" stroke-width="5"/>
              <line x1="164" y1="128" x2="215" y2="78" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>
            </svg>`,
          paragrafos: [
            'Eu sou a Opportunity, mas pode me chamar de Oppy! Pousei em janeiro de 2004 em Meridiani Planum com uma missão de apenas 90 dias marcianos e 1 quilômetro de percurso.',
            'Logo encontrei bolinhas cinzentas apelidadas de "blueberries" (mirtilos) feitas de hematita, além de jarosita nas rochas. A pista era clara: no passado, aquela região teve água líquida!'
          ]
        },
        {
          titulo: 'Cena 2: Uma maratona de quase 15 anos!',
          sfx: '45 QUILÔMETROS!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#fdba74"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#c2410c" stroke="#0f172a" stroke-width="3.5"/>
              <rect x="44" y="42" width="272" height="72" rx="16" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
              <text x="180" y="74" text-anchor="middle" fill="#0f172a" font-family="Fredoka, sans-serif" font-weight="700" font-size="22">5.111 SÓIS EM MARTE!</text>
              <text x="180" y="100" text-anchor="middle" fill="#9a3412" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="15">Mais de 45 km percorridos!</text>
            </svg>`,
          paragrafos: [
            'Eu já tinha cumprido minha missão, mas continuei! Subi bordas de crateras, atravessei dunas e trabalhei por 5.111 sóis — quase 15 anos!',
            'Tornei-me o veículo que mais andou em outro mundo: mais de 45 quilômetros explorando Marte!'
          ]
        },
        {
          titulo: 'Cena 3: A tempestade global de poeira',
          sfx: '5.111 SÓIS!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#7c2d12"/>
              <path d="M20 75 Q110 45 200 80 T350 70" fill="none" stroke="#fb923c" stroke-width="10" opacity="0.7"/>
              <path d="M10 125 Q120 95 220 130 T350 115" fill="none" stroke="#fdba74" stroke-width="10" opacity="0.6"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#431407" stroke="#0f172a" stroke-width="3.5"/>
              <text x="180" y="176" text-anchor="middle" fill="#fde047" font-family="Fredoka, sans-serif" font-weight="700" font-size="20">Descansando em Perseverance Valley</text>
            </svg>`,
          paragrafos: [
            'Em 2018, uma tempestade de poeira cobriu Marte inteiro e escondeu o Sol dos meus painéis solares. Mandei meu último sinal em 10 de junho de 2018.',
            'Depois de mais de mil comandos enviados pelo JPL, a NASA declarou minha missão completa em 13 de fevereiro de 2019. Sigo quietinha em Perseverance Valley!'
          ]
        }
      ],
      fatos: [
        'Pouso em janeiro de 2004, em Meridiani Planum; missão inicial prevista de 90 sóis e 1 km.',
        'Encontrou hematita nas esférulas ("blueberries") e jarosita, minerais formados com água.',
        'Operou por 5.111 sóis (quase 15 anos) e percorreu mais de 45 quilômetros.',
        'Último sinal em 10 de junho de 2018 durante uma tempestade global de poeira; fim declarado em 13 de fevereiro de 2019.'
      ]
    },
    {
      id: 'phoenix',
      numero: 6,
      titulo: 'A nave que foi ao Ártico de Marte',
      missao: 'Phoenix',
      local: 'marte',
      localNome: 'Marte',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      chamada: 'Pedacinhos brancos apareceram no chão de Marte. E sumiram.',
      miniHistoria:
        'Uma nave cavou o chão do Ártico de Marte e achou uns pedacinhos brancos. Os cientistas gritaram "Holy Cow!" na hora. Alguns dias depois, os pedacinhos tinham desaparecido. Sumiram para onde? E o que isso provou sobre a água em Marte?',
      dicaTex: 'Quando a Phoenix cavou e achou gelo branco brilhando, os cientistas gritaram "Holy Cow!" na sala de controle!',
      capaSvg: `
        <svg viewBox="0 0 360 200">
          <rect width="360" height="200" fill="#1e3a8a"/>
          <ellipse cx="180" cy="186" rx="200" ry="44" fill="#cbd5e1" stroke="#0f172a" stroke-width="3"/>
          <polygon points="150,164 175,154 205,166 178,176" fill="#ffffff" stroke="#38bdf8" stroke-width="2.5"/>
          <g transform="translate(95, 52)">
            <rect x="24" y="34" width="84" height="38" rx="12" fill="#f8fafc" stroke="#0f172a" stroke-width="3.5"/>
            <path d="M106 54 L152 98" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          </g>
        </svg>`,
      cenas: [
        {
          titulo: 'Cena 1: Caça ao tesouro no Polo Norte de Marte',
          sfx: 'CAVANDO!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#93c5fd"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#d97706" stroke="#0f172a" stroke-width="3.5"/>
              <g transform="translate(88, 72)">
                <line x1="30" y1="74" x2="10" y2="122" stroke="#0f172a" stroke-width="6"/>
                <line x1="104" y1="74" x2="124" y2="122" stroke="#0f172a" stroke-width="6"/>
                <rect x="24" y="32" width="88" height="44" rx="12" fill="#ffffff" stroke="#0f172a" stroke-width="3.5"/>
                <circle cx="52" cy="54" r="9" fill="#38bdf8" stroke="#0f172a" stroke-width="2.5"/>
                <circle cx="84" cy="54" r="9" fill="#38bdf8" stroke="#0f172a" stroke-width="2.5"/>
                <path d="M112 56 L176 112" stroke="#facc15" stroke-width="7" stroke-linecap="round"/>
              </g>
            </svg>`,
          paragrafos: [
            'Em 25 de maio de 2008, eu, a Phoenix, pousei em Vastitas Borealis, uma planície gelada perto do polo norte de Marte — mais ao norte do que qualquer outra nave tinha chegado!',
            'Eu não tinha rodas, mas tinha um braço robótico como uma escavadeira em miniatura para cavar o solo e procurar gelo de água.'
          ]
        },
        {
          titulo: 'Cena 2: "Holy Cow!" — É gelo de água!',
          sfx: 'HOLY COW!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#bae6fd"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#b45309" stroke="#0f172a" stroke-width="3.5"/>
              <ellipse cx="180" cy="186" rx="74" ry="20" fill="#451a03" stroke="#0f172a" stroke-width="3"/>
              <polygon points="145,182 175,172 205,184 176,194" fill="#ffffff" stroke="#38bdf8" stroke-width="3"/>
              <path d="M165 156 Q160 136 172 122" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
              <path d="M192 156 Q198 136 188 122" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
            </svg>`,
          paragrafos: [
            'Cavei uma valinha no solo e apareceram uns pedaços brancos brilhantes! Os cientistas na Terra olharam as fotos e exclamaram: "Holy Cow!"',
            'Alguns dias depois, os pedaços sumiram sem derreter: passaram direto de gelo para vapor! Estava confirmado: existe gelo de água logo abaixo da superfície de Marte!'
          ]
        },
        {
          titulo: 'Cena 3: Neve caindo das nuvens marcianas!',
          sfx: 'NEVE!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#1e3a8a"/>
              <ellipse cx="180" cy="54" rx="110" ry="26" fill="#cbd5e1" stroke="#0f172a" stroke-width="3"/>
              <circle cx="135" cy="105" r="5" fill="#ffffff"/><circle cx="175" cy="122" r="5" fill="#ffffff"/>
              <circle cx="215" cy="100" r="5" fill="#ffffff"/><circle cx="155" cy="145" r="5" fill="#ffffff"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#7c2d12" stroke="#0f172a" stroke-width="3.5"/>
            </svg>`,
          paragrafos: [
            'Também encontrei carbonato de cálcio e um instrumento a laser detectou neve caindo das nuvens a cerca de 4 quilômetros de altura!',
            'Trabalhei por mais de cinco meses até o inverno ártico esconder o Sol. Meu último sinal chegou em 2 de novembro de 2008, cumprindo tudo o que foi planejado!'
          ]
        }
      ],
      fatos: [
        'Pouso em 25 de maio de 2008, em Vastitas Borealis (região ártica de Marte).',
        'Confirmou gelo de água sob o solo, antes detectado da órbita pela Mars Odyssey em 2002.',
        'Encontrou carbonato de cálcio, registrou o clima e detectou neve caindo das nuvens.',
        'Missão principal de 90 dias; operou por mais de 5 meses até o inverno ártico cortar a luz solar.',
        'Último sinal em 2 de novembro de 2008; fim declarado em 10 de novembro de 2008.'
      ]
    },
    {
      id: 'insight',
      numero: 7,
      titulo: 'A ouvinte de terremotos',
      missao: 'InSight',
      local: 'marte',
      localNome: 'Marte',
      status: 'esquecido',
      statusTexto: 'Esquecido',
      chamada: 'Ela passou quatro anos com o ouvido no chão de Marte.',
      miniHistoria:
        'Se você encostasse o ouvido no chão de Marte, o que ouviria? Uma nave passou mais de quatro anos escutando e contou 1.319 terremotos marcianos. Cada tremor era como uma luz de raio-X mostrando o interior do planeta. O que eles revelaram sobre o que existe embaixo daquele chão?',
      dicaTex: 'A InSight ouviu 1.319 terremotos em Marte e descobriu que o núcleo do planeta é líquido!',
      capaSvg: `
        <svg viewBox="0 0 360 200">
          <rect width="360" height="200" fill="#c2410c"/>
          <ellipse cx="180" cy="186" rx="200" ry="44" fill="#ea580c" stroke="#0f172a" stroke-width="3"/>
          <!-- Sismômetro no chão -->
          <path d="M215 162 A24 24 0 0 1 263 162 Z" fill="#facc15" stroke="#0f172a" stroke-width="3"/>
          <path d="M195 176 Q215 166 238 176 T282 176" fill="none" stroke="#fde047" stroke-width="3"/>
          <g transform="translate(72, 62)">
            <rect x="20" y="32" width="76" height="36" rx="10" fill="#f8fafc" stroke="#0f172a" stroke-width="3.5"/>
            <circle cx="44" cy="50" r="8" fill="#38bdf8" stroke="#0f172a" stroke-width="2.5"/>
            <circle cx="72" cy="50" r="8" fill="#38bdf8" stroke="#0f172a" stroke-width="2.5"/>
          </g>
        </svg>`,
      cenas: [
        {
          titulo: 'Cena 1: Ouvido colado em Elysium Planitia',
          sfx: 'SHHH... OUVINDO!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#fdba74"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#c2410c" stroke="#0f172a" stroke-width="3.5"/>
              <path d="M225 184 A28 28 0 0 1 281 184 Z" fill="#facc15" stroke="#0f172a" stroke-width="3.5"/>
              <g transform="translate(74, 78)">
                <rect x="20" y="32" width="84" height="40" rx="12" fill="#ffffff" stroke="#0f172a" stroke-width="3.5"/>
                <!-- Fones de ouvido cartoon -->
                <path d="M16 44 A46 38 0 0 1 108 44" fill="none" stroke="#0f172a" stroke-width="5"/>
                <rect x="8" y="38" width="12" height="24" rx="5" fill="#3b82f6" stroke="#0f172a" stroke-width="2.5"/>
                <rect x="104" y="38" width="12" height="24" rx="5" fill="#3b82f6" stroke="#0f172a" stroke-width="2.5"/>
                <circle cx="48" cy="52" r="9" fill="#38bdf8" stroke="#0f172a" stroke-width="2.5"/>
                <circle cx="76" cy="52" r="9" fill="#38bdf8" stroke="#0f172a" stroke-width="2.5"/>
              </g>
            </svg>`,
          paragrafos: [
            'Se você colocasse o ouvido no chão de Marte, o que escutaria? Eu, a InSight, pousei em 26 de novembro de 2018 em Elysium Planitia para descobrir isso!',
            'Eu não tinha rodas e quase não me mexia. Meu trabalho era ficar quietinha usando um sismômetro supersensível para sentir cada tremidinha do solo marciano.'
          ]
        },
        {
          titulo: 'Cena 2: 1.319 terremotos como um raio-X de Marte!',
          sfx: '1.319 TREMORES!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#1e293b"/>
              <!-- Corte interno de Marte mostrando o núcleo líquido -->
              <circle cx="180" cy="120" r="88" fill="#ea580c" stroke="#0f172a" stroke-width="4"/>
              <circle cx="180" cy="120" r="64" fill="#fb923c" stroke="#0f172a" stroke-width="3"/>
              <circle cx="180" cy="120" r="36" fill="#fde047" stroke="#0f172a" stroke-width="3"/>
              <text x="180" y="125" text-anchor="middle" fill="#0f172a" font-family="Fredoka, sans-serif" font-weight="700" font-size="14">NÚCLEO LÍQUIDO</text>
            </svg>`,
          paragrafos: [
            'Em mais de quatro anos, detectei 1.319 terremotos marcianos — alguns causados até por meteoritos que caíram na superfície e revelaram blocos de gelo sob o chão!',
            'Com esses sinais, os cientistas descobriram que o núcleo de Marte é líquido e mediram a espessura da crosta em apenas dois anos!'
          ]
        },
        {
          titulo: 'Cena 3: Última selfie sob a poeira marciana',
          sfx: 'CLIQUE SELFIE!',
          svg: `
            <svg viewBox="0 0 360 240">
              <rect width="360" height="240" fill="#9a3412"/>
              <ellipse cx="180" cy="215" rx="200" ry="52" fill="#7c2d12" stroke="#0f172a" stroke-width="3.5"/>
              <rect x="85" y="42" width="190" height="122" rx="14" fill="#fed7aa" stroke="#0f172a" stroke-width="4"/>
              <circle cx="180" cy="104" r="34" fill="#d97706" stroke="#0f172a" stroke-width="3"/>
              <text x="180" y="150" text-anchor="middle" fill="#0f172a" font-family="Fredoka, sans-serif" font-weight="700" font-size="15">Última Selfie • 2022</text>
            </svg>`,
          paragrafos: [
            'Com o tempo, a poeira de Marte foi cobrindo meus painéis solares e diminuindo minha energia. Em 24 de abril de 2022, tirei minha última selfie coberta de poeira.',
            'Meu último contato foi em 15 de dezembro de 2022, e em 21 de dezembro a NASA encerrou a missão. Eu ouvi um planeta inteiro por mais de quatro anos!'
          ]
        }
      ],
      fatos: [
        'Pouso em 26 de novembro de 2018, em Elysium Planitia; operou por mais de 4 anos.',
        'Detectou 1.319 terremotos marcianos, mostrando que o núcleo de Marte é líquido e medindo a crosta.',
        'Um impacto de meteoroide detectado chegou a expor blocos de gelo sob o solo.',
        'Última selfie tirada em 24 de abril de 2022 com os painéis cobertos de poeira.',
        'Último contato em 15 de dezembro de 2022; missão encerrada em 21 de dezembro de 2022 por falta de energia solar.'
      ]
    }
  ];

  // ---------------------------------------------------------
  // 2. ELEMENTOS DA TELA E ESTADO
  // ---------------------------------------------------------
  const catalogoView = document.getElementById('catalogo-view');
  const leitorView = document.getElementById('leitor-view');
  const cardsGrid = document.getElementById('stories-cards-grid');
  const inputBusca = document.getElementById('input-busca-historia');

  const navLua = document.getElementById('nav-lua');
  const navMarte = document.getElementById('nav-marte');
  const localTabs = document.querySelectorAll('.local-tab');

  const catalogoTitulo = document.getElementById('catalogo-titulo');
  const headerUserName = document.getElementById('header-user-name');

  const readerBadges = document.getElementById('reader-badges');
  const readerTitle = document.getElementById('reader-title');
  const readerSubtitle = document.getElementById('reader-subtitle');
  const readerTeaserBox = document.getElementById('reader-teaser-box');
  const readerTexComment = document.getElementById('reader-tex-comment');
  const panelsContainer = document.getElementById('comic-panels-container');
  const readerFactsList = document.getElementById('reader-facts-list');

  const btnVoltarCatalogo = document.getElementById('btn-voltar-catalogo');
  const btnPrevStory = document.getElementById('btn-prev-story');
  const btnNextStory = document.getElementById('btn-next-story');

  // Controles de Áudio e Libras
  const btnAudioPlay = document.getElementById('btn-audio-play');
  const btnAudioPause = document.getElementById('btn-audio-pause');
  const btnAudioStop = document.getElementById('btn-audio-stop');
  const btnAudioSpeed = document.getElementById('btn-audio-speed');
  const btnAtivarLibras = document.getElementById('btn-ativar-libras');
  const audioStatusBar = document.getElementById('audio-status-bar');
  const audioStatusText = document.getElementById('audio-status-text');

  let filtroLocal = 'todos';
  let historiaAtualIndex = 0;
  let velocidadeFala = 1.0;
  let lendoAtivo = false;

  // ---------------------------------------------------------
  // 3. TRATAMENTO DA IMAGEM DO MASCOTE TEX (tex.jpg)
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

  ['avatar-tex-img', 'tex-catalogo-img', 'tex-reader-img'].forEach((id) => {
    removerFundoPretoMascote(document.getElementById(id));
  });

  // Nome do explorador salvo na sessão
  try {
    const sessao = JSON.parse(localStorage.getItem('exploradores_sessao'));
    if (sessao?.nome) headerUserName.textContent = sessao.nome;
  } catch {}

  // ---------------------------------------------------------
  // 4. RENDERIZAÇÃO DO CATÁLOGO DE MINI-HISTÓRIAS
  // ---------------------------------------------------------
  function atualizarBotoesFiltro() {
    localTabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.filter === filtroLocal);
    });
    navLua?.classList.toggle('active', filtroLocal === 'lua');
    navMarte?.classList.toggle('active', filtroLocal === 'marte');

    if (filtroLocal === 'lua') {
      catalogoTitulo.textContent = 'Histórias Ilustradas da Lua 🌕';
    } else if (filtroLocal === 'marte') {
      catalogoTitulo.textContent = 'Histórias Ilustradas de Marte 🔴';
    } else {
      catalogoTitulo.textContent = 'Histórias da Lua e de Marte!';
    }
  }

  function renderizarCatalogo() {
    atualizarBotoesFiltro();
    const termo = (inputBusca?.value || '').trim().toLowerCase();

    const lista = HISTORIAS.filter((h) => {
      const bateLocal = filtroLocal === 'todos' || h.local === filtroLocal;
      const bateBusca =
        !termo ||
        h.titulo.toLowerCase().includes(termo) ||
        h.missao.toLowerCase().includes(termo) ||
        h.miniHistoria.toLowerCase().includes(termo);
      return bateLocal && bateBusca;
    });

    if (lista.length === 0) {
      cardsGrid.innerHTML = `<p style="color:#fde047; font-size:1.1rem;">Nenhuma história encontrada com esse termo.</p>`;
      return;
    }

    cardsGrid.innerHTML = lista
      .map(
        (h) => `
        <article class="story-teaser-card">
          <div class="teaser-art-box ${h.local}">
            <div class="teaser-badges">
              <span class="comic-pill-badge ${h.local}">${h.local === 'lua' ? '🌕 Lua' : '🔴 Marte'}</span>
              <span class="comic-pill-badge ${h.status}">${h.status === 'ativo' ? '🟢 Ativo' : '💤 Esquecido'}</span>
            </div>
            ${h.capaSvg}
          </div>

          <div class="teaser-body">
            <span class="teaser-mission-label">História ${h.numero} • ${h.missao}</span>
            <h3>${h.titulo}</h3>
            <div class="teaser-chamada">✨ ${h.chamada}</div>
            <p class="teaser-mini-story">${h.miniHistoria}</p>

            <div class="teaser-actions">
              <button type="button" class="btn-open-comic" data-open-id="${h.id}">
                📖 Ler Quadrinhos
              </button>
              <button type="button" class="btn-quick-listen" data-listen-id="${h.id}" title="Abrir e ouvir a história">
                🔊 Ouvir
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join('');

    cardsGrid.querySelectorAll('[data-open-id]').forEach((btn) => {
      btn.addEventListener('click', () => abrirHistoria(btn.dataset.openId, false));
    });

    cardsGrid.querySelectorAll('[data-listen-id]').forEach((btn) => {
      btn.addEventListener('click', () => abrirHistoria(btn.dataset.listenId, true));
    });
  }

  // ---------------------------------------------------------
  // 5. ABERTURA DO LEITOR DE QUADRINHOS ILUSTRADOS
  // ---------------------------------------------------------
  function abrirHistoria(id, iniciarAudio = false) {
    pararNarracao();
    const idx = HISTORIAS.findIndex((h) => h.id === id);
    historiaAtualIndex = idx >= 0 ? idx : 0;
    const h = HISTORIAS[historiaAtualIndex];

    readerBadges.innerHTML = `
      <span class="comic-pill-badge ${h.local}">${h.local === 'lua' ? '🌕 Missão na Lua' : '🔴 Missão em Marte'}</span>
      <span class="comic-pill-badge ${h.status}">${h.status === 'ativo' ? '🟢 Ainda Ativo' : '💤 Esquecido'}</span>
    `;

    readerTitle.textContent = `${h.numero}. ${h.titulo}`;
    readerSubtitle.textContent = `Missão NASA: ${h.missao}`;
    readerTeaserBox.innerHTML = `<strong>Introdução:</strong> ${h.miniHistoria}`;
    readerTexComment.innerHTML = `<strong>TEX diz:</strong> ${h.dicaTex}`;

    panelsContainer.innerHTML = h.cenas
      .map(
        (cena, i) => `
        <article class="comic-scene-panel" data-scene-idx="${i}">
          <div class="scene-illustration">
            <span class="scene-number-tag">Quadro ${i + 1} de ${h.cenas.length}</span>
            <span class="scene-sfx-burst">${cena.sfx}</span>
            ${cena.svg}
          </div>
          <div class="scene-story-content">
            <span class="scene-caption-title">${cena.titulo}</span>
            <div class="scene-paragraphs">
              ${cena.paragrafos.map((p) => `<p>${p}</p>`).join('')}
            </div>
            <button type="button" class="btn-listen-scene" data-scene-play="${i}">
              🔊 Ouvir só este quadro
            </button>
          </div>
        </article>
      `
      )
      .join('');

    panelsContainer.querySelectorAll('[data-scene-play]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cenaIdx = Number(btn.dataset.scenePlay);
        lerCenasEmSequencia(h, cenaIdx, true);
      });
    });

    readerFactsList.innerHTML = h.fatos.map((f) => `<li>${f}</li>`).join('');

    catalogoView.classList.add('hidden');
    leitorView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (iniciarAudio) {
      setTimeout(() => lerHistoriaCompleta(), 350);
    }
  }

  // ---------------------------------------------------------
  // 6. SOM LENDO A HISTÓRIA (NARRADOR EM PORTUGUÊS)
  // ---------------------------------------------------------
  function obterVozPortugues() {
    if (!('speechSynthesis' in window)) return null;
    const vozes = window.speechSynthesis.getVoices();
    return (
      vozes.find((v) => v.lang.toLowerCase().includes('pt-br') && v.name.toLowerCase().includes('google')) ||
      vozes.find((v) => v.lang.toLowerCase().includes('pt-br')) ||
      vozes.find((v) => v.lang.toLowerCase().startsWith('pt')) ||
      null
    );
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => obterVozPortugues();
  }

  function limparDestaqueCenas() {
    document.querySelectorAll('.comic-scene-panel').forEach((el) => el.classList.remove('reading-now'));
  }

  function pararNarracao() {
    lendoAtivo = false;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    limparDestaqueCenas();
    audioStatusBar.classList.add('hidden');
    btnAudioPause.classList.add('hidden');
    btnAudioStop.classList.add('hidden');
    btnAudioPlay.textContent = '🔊 Ouvir História';
  }

  function lerCenasEmSequencia(historia, indiceCena, apenasUma = false) {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não suporta leitura em voz alta. Tente abrir no Google Chrome ou Microsoft Edge.');
      return;
    }

    window.speechSynthesis.cancel();
    lendoAtivo = true;

    btnAudioPause.classList.remove('hidden');
    btnAudioStop.classList.remove('hidden');
    audioStatusBar.classList.remove('hidden');

    const falarCena = (idx) => {
      if (!lendoAtivo || idx >= historia.cenas.length) {
        pararNarracao();
        return;
      }

      limparDestaqueCenas();
      const painelAtual = document.querySelector(`.comic-scene-panel[data-scene-idx="${idx}"]`);
      if (painelAtual) {
        painelAtual.classList.add('reading-now');
        painelAtual.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      const cena = historia.cenas[idx];
      audioStatusText.textContent = `🎙️ Lendo ${historia.titulo} — ${cena.titulo}`;

      const textoParaLer =
        idx === 0 && !apenasUma
          ? `${historia.titulo}. ${historia.missao}. ${cena.titulo}. ${cena.paragrafos.join(' ')}`
          : `${cena.titulo}. ${cena.paragrafos.join(' ')}`;

      const fala = new SpeechSynthesisUtterance(textoParaLer);
      fala.lang = 'pt-BR';
      fala.rate = velocidadeFala;
      fala.pitch = 1.05;

      const voz = obterVozPortugues();
      if (voz) fala.voice = voz;

      fala.onend = () => {
        if (!apenasUma && lendoAtivo) {
          falarCena(idx + 1);
        } else {
          pararNarracao();
        }
      };

      fala.onerror = () => {
        pararNarracao();
      };

      window.speechSynthesis.speak(fala);
    };

    falarCena(indiceCena);
  }

  function lerHistoriaCompleta() {
    const h = HISTORIAS[historiaAtualIndex];
    lerCenasEmSequencia(h, 0, false);
  }

  btnAudioPlay?.addEventListener('click', () => {
    if ('speechSynthesis' in window && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      audioStatusText.textContent = '🎙️ Continuando a leitura...';
      return;
    }
    lerHistoriaCompleta();
  });

  btnAudioPause?.addEventListener('click', () => {
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      audioStatusText.textContent = '⏸️ Leitura pausada. Clique em Ouvir História para continuar.';
    }
  });

  btnAudioStop?.addEventListener('click', pararNarracao);

  btnAudioSpeed?.addEventListener('click', () => {
    velocidadeFala = velocidadeFala === 1.0 ? 0.85 : 1.0;
    btnAudioSpeed.textContent = velocidadeFala === 1.0 ? '🐢 Vel: 1.0x' : '🐢 Vel: 0.85x';
    if (lendoAtivo) {
      lerHistoriaCompleta();
    }
  });

  // Botão rápido para ativar o intérprete de Libras (VLibras)
  btnAtivarLibras?.addEventListener('click', () => {
    const botaoVLibras = document.querySelector('[vw-access-button]');
    if (botaoVLibras) {
      botaoVLibras.click();
      readerTexComment.innerHTML =
        '<strong>Libras Ativado! 🖐️</strong> Clique em qualquer quadro da história para o intérprete 3D traduzir em sinais!';
    }
  });

  // ---------------------------------------------------------
  // 7. EVENTOS DE NAVEGAÇÃO E PARÂMETROS DA URL
  // ---------------------------------------------------------
  localTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filtroLocal = tab.dataset.filter;
      renderizarCatalogo();
    });
  });

  navLua?.addEventListener('click', () => {
    pararNarracao();
    leitorView.classList.add('hidden');
    catalogoView.classList.remove('hidden');
    filtroLocal = 'lua';
    renderizarCatalogo();
  });

  navMarte?.addEventListener('click', () => {
    pararNarracao();
    leitorView.classList.add('hidden');
    catalogoView.classList.remove('hidden');
    filtroLocal = 'marte';
    renderizarCatalogo();
  });

  inputBusca?.addEventListener('input', () => {
    if (!leitorView.classList.contains('hidden')) {
      pararNarracao();
      leitorView.classList.add('hidden');
      catalogoView.classList.remove('hidden');
    }
    renderizarCatalogo();
  });

  btnVoltarCatalogo?.addEventListener('click', () => {
    pararNarracao();
    leitorView.classList.add('hidden');
    catalogoView.classList.remove('hidden');
    renderizarCatalogo();
  });

  btnPrevStory?.addEventListener('click', () => {
    const novoIdx = (historiaAtualIndex - 1 + HISTORIAS.length) % HISTORIAS.length;
    abrirHistoria(HISTORIAS[novoIdx].id, false);
  });

  btnNextStory?.addEventListener('click', () => {
    const novoIdx = (historiaAtualIndex + 1) % HISTORIAS.length;
    abrirHistoria(HISTORIAS[novoIdx].id, false);
  });

  // Verifica parâmetros vindos do painel-criancas.html (?local=lua, ?local=marte ou ?equip=...)
  const params = new URLSearchParams(window.location.search);
  const localParam = params.get('local');
  const equipParam = params.get('equip');

  if (localParam === 'lua' || localParam === 'marte') {
    filtroLocal = localParam;
  }

  renderizarCatalogo();

  if (equipParam) {
    abrirHistoria(equipParam, false);
  }
});