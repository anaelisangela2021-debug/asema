/* =========================================================
   EXPLORADORES DO ESPAÇO — CENTRAL JOVENS (painel-jovens.js)
   Todas as telas (Painel, 9 Dossiês com Áudio/Libras e Desafios)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------------
  // 1. BANCO COMPLETO DAS 9 MISSÕES REAIS DO ARQUIVO NASA
  // ---------------------------------------------------------
  const MISSOES_JOVENS = [
    {
      id: 'surveyor-3',
      numero: 1,
      titulo: 'O robô que recebeu visita',
      missao: 'Surveyor 3 e Apollo 12',
      destino: 'lua',
      destinoLabel: 'Lua',
      status: 'esquecido',
      statusLabel: 'Esquecido',
      chamada: 'Ele dormiu na Lua e ganhou visita 31 meses depois.',
      miniHistoria:
        'Em 1967, um robô de três pernas cavou o chão da Lua com uma pazinha e depois caiu num sono sem fim. Passaram-se 31 meses. Então, duas pessoas vieram andando pela poeira até ele. Elas olharam para o robô, tiraram a câmera dele e levaram para casa. Por que alguém viajaria até a Lua para buscar uma câmera velha?',
      notaTex: 'O Surveyor 3 funcionou como um laboratório natural de 31 meses exposto à radiação e poeira lunar!',
      capaSvg: `<svg viewBox="0 0 360 170"><rect width="360" height="170" fill="#0f295c"/><ellipse cx="180" cy="162" rx="190" ry="36" fill="#94a3b8"/><g transform="translate(125,40)"><line x1="25" y1="60" x2="5" y2="100" stroke="#e2e8f0" stroke-width="5"/><line x1="55" y1="60" x2="55" y2="104" stroke="#e2e8f0" stroke-width="5"/><line x1="85" y1="60" x2="105" y2="100" stroke="#e2e8f0" stroke-width="5"/><rect x="22" y="24" width="66" height="40" rx="10" fill="#f8fafc" stroke="#38bdf8" stroke-width="2.5"/><circle cx="44" cy="44" r="8" fill="#0284c7"/><circle cx="68" cy="44" r="8" fill="#0284c7"/></g></svg>`,
      cenas: [
        {
          titulo: '1. Testando se o solo da Lua afundaria uma nave',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#091538"/><circle cx="280" cy="52" r="24" fill="#2563eb"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#cbd5e1"/><g transform="translate(110,68)"><line x1="28" y1="66" x2="8" y2="112" stroke="#0f172a" stroke-width="5"/><line x1="60" y1="66" x2="60" y2="116" stroke="#0f172a" stroke-width="5"/><line x1="92" y1="66" x2="112" y2="112" stroke="#0f172a" stroke-width="5"/><rect x="24" y="26" width="72" height="44" rx="12" fill="#f8fafc" stroke="#38bdf8" stroke-width="3"/><path d="M96 50 L142 82 L152 76 L146 92 L130 88" fill="#facc15"/></g></svg>`,
          paragrafos: [
            'Antes de mandar astronautas para a Lua, a NASA precisava saber se o terreno aguentaria o peso de um módulo tripulado sem afundar. Em 20 de abril de 1967, o robô Surveyor 3 pousou na Lua, testou o solo com sua pazinha, fotografou a escavação e enviou imagens para a Terra.',
            'Quando a noite lunar de cerca de duas semanas chegou, o frio extremo interrompeu as comunicações em 4 de maio de 1967. O robô ficou adormecido no solo cinzento por 31 meses.'
          ]
        },
        {
          titulo: '2. O encontro histórico com a Apollo 12',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#0f295c"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#cbd5e1"/><rect x="65" y="102" width="58" height="38" rx="8" fill="#d6c5a9" stroke="#0f172a" stroke-width="2.5"/><circle cx="215" cy="96" r="18" fill="#fff"/><rect x="199" y="114" width="32" height="44" rx="10" fill="#fff"/><ellipse cx="213" cy="96" rx="11" ry="8" fill="#facc15"/></svg>`,
          paragrafos: [
            'Em novembro de 1969, o módulo lunar Intrepid, da missão Apollo 12, pousou a cerca de 180 metros do Surveyor 3. Os astronautas Pete Conrad e Alan Bean caminharam até o robô, fotografaram o local e removeram sua câmera, a pá e outras peças para trazer à Terra.',
            'Ao analisar a câmera, os cientistas descobriram que a tinta branca havia ficado amarronzada (bege) pela exposição prolongada ao Sol e à radiação, além de apresentar pequenas marcas de micrometeoritos. Hoje a câmera está em um museu em Washington e a pá está no JPL.'
          ]
        }
      ],
      fatos: [
        'Pouso em 20 de abril de 1967 na Lua; último contato em 4 de maio de 1967.',
        'Operou cerca de duas semanas e permaneceu parado até completar 31 meses para a visita.',
        'Os astronautas da Apollo 12 (Conrad e Bean) visitaram o Surveyor 3 em novembro de 1969, pousando a cerca de 180 metros.',
        'Trouxeram a câmera, a pá e outras peças; a tinta branca havia ficado bege devido à radiação e poeira.',
        'A câmera está em um museu em Washington (emprestada pela NASA) e a pá está exposta no JPL.'
      ]
    },
    {
      id: 'retrorrefletores',
      numero: 2,
      titulo: 'Os espelhos que não dormem',
      missao: 'Retrorrefletores das Apollo 11, 14 e 15',
      destino: 'lua',
      destinoLabel: 'Lua',
      status: 'ativo',
      statusLabel: 'Ativo',
      chamada: 'Espelhos sem pilha, na Lua, que respondem ao laser da Terra.',
      miniHistoria:
        'Na Lua existem espelhos sem fio, sem bateria e sem botão. Mesmo assim, toda vez que alguém na Terra aponta um laser para eles, eles respondem. Com o tempo que a luz leva para ir e voltar, dá para medir a distância até a Lua com precisão de milímetros. Como um espelho tão simples consegue isso?',
      notaTex: 'O painel da Apollo 11 é o único experimento daquela missão histórica de 1969 que segue em operação!',
      capaSvg: `<svg viewBox="0 0 360 170"><rect width="360" height="170" fill="#071338"/><circle cx="65" cy="50" r="28" fill="#2563eb"/><circle cx="290" cy="120" r="40" fill="#cbd5e1"/><line x1="90" y1="58" x2="265" y2="112" stroke="#34d399" stroke-width="4"/><line x1="265" y1="118" x2="90" y2="64" stroke="#facc15" stroke-width="3" stroke-dasharray="8 5"/></svg>`,
      cenas: [
        {
          titulo: '1. Óptica de precisão sem gastar um watt de energia',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#0f255e"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#cbd5e1"/><rect x="95" y="54" width="150" height="96" rx="12" fill="#334155" stroke="#38bdf8" stroke-width="3"/><rect x="112" y="70" width="32" height="28" rx="4" fill="#7dd3fc"/><rect x="154" y="70" width="32" height="28" rx="4" fill="#bae6fd"/><rect x="196" y="70" width="32" height="28" rx="4" fill="#7dd3fc"/><rect x="112" y="108" width="32" height="28" rx="4" fill="#bae6fd"/><rect x="154" y="108" width="32" height="28" rx="4" fill="#7dd3fc"/><rect x="196" y="108" width="32" height="28" rx="4" fill="#bae6fd"/></svg>`,
          paragrafos: [
            'As missões Apollo 11, 14 e 15 deixaram na Lua painéis compostos por cubos de vidro de canto (retrorrefletores). Cada cubinho devolve qualquer feixe de luz exatamente na direção de onde ele veio.',
            'Os painéis das Apollo 11 e 14 possuem 100 cubos de 3,8 centímetros cada; o da Apollo 15 é três vezes maior, com 300 cubos. Como funcionam apenas por reflexão óptica, não precisam de pilhas ou energia elétrica.'
          ]
        },
        {
          titulo: '2. Medindo a distância Terra-Lua na escala de milímetros',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#04091a"/><circle cx="64" cy="136" r="46" fill="#2563eb"/><circle cx="276" cy="68" r="38" fill="#e2e8f0"/><line x1="102" y1="116" x2="246" y2="74" stroke="#10b981" stroke-width="5"/><line x1="246" y1="82" x2="102" y2="124" stroke="#facc15" stroke-width="4" stroke-dasharray="8 6"/><text x="170" y="185" text-anchor="middle" fill="#38bdf8" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="18">PRECISÃO DE ~1 MILÍMETRO</text></svg>`,
          paragrafos: [
            'Observatórios na Terra disparam pulsos de laser através de telescópios e cronometram o tempo de ida e volta até a Lua. O primeiro eco foi registrado cerca de 11 a 12 dias após o pouso da Apollo 11.',
            'Com estações modernas como a APOLLO, no Novo México, a precisão chega a cerca de 1 milímetro (antes era de 2 a 3 centímetros), permitindo testar o princípio da equivalência da relatividade geral de Einstein.'
          ]
        }
      ],
      fatos: [
        'Retrorrefletores instalados nas missões Apollo 11, 14 e 15.',
        'Os painéis das Apollo 11 e 14 têm 100 cubos de 3,8 cm; o da Apollo 15 tem 300 cubos.',
        'Operam sem fonte de energia, refletindo pulsos de laser enviados da Terra.',
        'Distância Terra-Lua medida com precisão de cerca de 1 mm (anteriormente de 2 a 3 cm).',
        'A primeira reflexão veio cerca de 11 a 12 dias após o pouso da Apollo 11; os dados confirmam previsões da relatividade geral.'
      ]
    },
    {
      id: 'viking-1',
      numero: 3,
      titulo: 'A estação que ficou calada',
      missao: 'Viking 1',
      destino: 'marte',
      destinoLabel: 'Marte',
      status: 'esquecido',
      statusLabel: 'Esquecido',
      chamada: 'Ficou seis anos em Marte e foi silenciada por um erro.',
      miniHistoria:
        'Ela mandou a primeira foto do chão de Marte poucos minutos depois de pousar. Depois ficou mais de seis anos medindo o clima e fotografando as dunas. Até que a Terra enviou um comando com um erro, e veio o silêncio. A nave estava inteira, mas não conseguia mais falar. Os engenheiros tentaram trazê-la de volta durante meses. Conseguiram?',
      notaTex: 'A Viking 1 operou por 2.245 sóis — mais de seis anos — enviando boletins meteorológicos de Marte!',
      capaSvg: `<svg viewBox="0 0 360 170"><rect width="360" height="170" fill="#7c2d12"/><ellipse cx="180" cy="162" rx="190" ry="36" fill="#c2410c"/><rect x="130" y="72" width="100" height="42" rx="10" fill="#f8fafc" stroke="#38bdf8" stroke-width="2.5"/><ellipse cx="180" cy="48" rx="34" ry="12" fill="#facc15"/></svg>`,
      cenas: [
        {
          titulo: '1. Primeira imagem da superfície marciana (20 jul 1976)',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#9a3412"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#ea580c"/><rect x="115" y="88" width="110" height="46" rx="12" fill="#f8fafc" stroke="#0f172a" stroke-width="3"/><circle cx="148" cy="110" r="10" fill="#38bdf8"/><circle cx="192" cy="110" r="10" fill="#38bdf8"/><ellipse cx="170" cy="60" rx="36" ry="12" fill="#facc15"/></svg>`,
          paragrafos: [
            'Em 20 de julho de 1976, a Viking 1 pousou em Chryse Planitia ("Planície Dourada") e transmitiu, poucos minutos depois, a primeira foto feita da superfície de Marte por uma nave que pousou com sucesso.',
            'Sem rodas, atuou como estação fixa durante 2.245 sóis (cerca de 6 anos), registrando clima, tempestades de poeira e o pôr do sol azulado de Marte. Em janeiro de 1982, foi renomeada Estação Memorial Thomas Mutch.'
          ]
        },
        {
          titulo: '2. Silenciada por um comando incorreto',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#431407"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#9a3412"/><path d="M275 36 L225 66 L245 74 L195 104" fill="none" stroke="#ef4444" stroke-width="4"/><text x="170" y="140" text-anchor="middle" fill="#fde047" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="18">CONTATO PERDIDO • 11 NOV 1982</text></svg>`,
          paragrafos: [
            'Em 11 de novembro de 1982, um comando de rotina enviado da Terra continha um erro que interrompeu a comunicação com a sonda, ainda ativa na superfície.',
            'Os engenheiros do JPL tentaram restabelecer o contato durante meses até 12 de abril de 1983. Em 2006, a sonda orbital Mars Reconnaissance Orbiter fotografou a Viking 1 intacta na Planície Dourada.'
          ]
        }
      ],
      fatos: [
        'Pouso em 20 de julho de 1976, em Chryse Planitia; primeira foto da superfície minutos após o pouso.',
        'Operou por 2.245 sóis (cerca de 6 anos).',
        'Renomeada em janeiro de 1982 em homenagem a Thomas Mutch (falecido em 1980).',
        'Fim das comunicações em 11 de novembro de 1982 após comando incorreto enviado da Terra; encerramento declarado em 12 de abril de 1983.',
        'Fotografada da órbita em 2006 pela Mars Reconnaissance Orbiter.'
      ]
    },
    {
      id: 'pathfinder-sojourner',
      numero: 4,
      titulo: 'Quique, quique, quique!',
      missao: 'Pathfinder e Sojourner',
      destino: 'marte',
      destinoLabel: 'Marte',
      status: 'esquecido',
      statusLabel: 'Esquecido',
      chamada: 'Uma bola gigante quicou em Marte, e a porta de saída estava bloqueada.',
      miniHistoria:
        'Imagine uma bola gigante caindo em Marte, quicando cerca de 15 vezes e pulando até 15 metros de altura. Dentro dela ia um rover do tamanho de um micro-ondas. Só que, quando a bola parou, um airbag que não esvaziou direito bloqueava a rampa de saída. Como é que um rover sai de casa com a porta trancada por uma bola de ar?',
      notaTex: 'A Sojourner foi planejada para 7 sóis e durou 83 sóis — quase 12 vezes mais que o previsto!',
      capaSvg: `<svg viewBox="0 0 360 170"><rect width="360" height="170" fill="#9a3412"/><ellipse cx="180" cy="162" rx="190" ry="36" fill="#ea580c"/><circle cx="180" cy="64" r="24" fill="#fef3c7"/><circle cx="156" cy="88" r="24" fill="#fde68a"/><circle cx="204" cy="88" r="24" fill="#fde68a"/></svg>`,
      cenas: [
        {
          titulo: '1. Pouso amortecido por airbags em Ares Vallis',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#7c2d12"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#c2410c"/><path d="M50 155 Q110 55 170 150 Q230 75 290 145" fill="none" stroke="#facc15" stroke-width="3.5" stroke-dasharray="8 6"/><circle cx="170" cy="84" r="32" fill="#fde68a"/></svg>`,
          paragrafos: [
            'Em 4 de julho de 1997, a Pathfinder inaugurou o pouso com airbags em Marte: uma esfera de 5,8 metros que quicou cerca de 15 vezes, atingindo até 15 metros de altura, e parou 2,5 minutos depois a cerca de 1 quilômetro do primeiro impacto.',
            'Dentro dela estava o rover Sojourner, do tamanho de um forno de micro-ondas, o primeiro veículo com rodas a operar em outro planeta.'
          ]
        },
        {
          titulo: '2. Rampa desbloqueada e 83 sóis de exploração',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#9a3412"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#ea580c"/><rect x="115" y="112" width="110" height="42" rx="10" fill="#38bdf8" stroke="#0f172a" stroke-width="3"/><circle cx="132" cy="158" r="12" fill="#0f172a"/><circle cx="170" cy="158" r="12" fill="#0f172a"/><circle cx="208" cy="158" r="12" fill="#0f172a"/></svg>`,
          paragrafos: [
            'Um airbag que não esvaziou totalmente bloqueou uma rampa de saída, exigindo manobras remotas da equipe na Terra para liberar o rover.',
            'Planejada para apenas 7 sóis, a Sojourner funcionou por 83 sóis, percorreu cerca de 100 metros analisando rochas até 27 de setembro de 1997 e validou os airbags usados depois pelos rovers Spirit e Opportunity.'
          ]
        }
      ],
      fatos: [
        'Pouso em 4 de julho de 1997, em Ares Vallis, usando airbags pela primeira vez em Marte.',
        'Quicou cerca de 15 vezes, a até 15 m de altura, parando 2,5 min depois a cerca de 1 km do primeiro impacto.',
        'Um airbag que não esvaziou direito bloqueou inicialmente uma rampa do rover.',
        'Sojourner: planejada para 7 sóis, operou por 83 sóis e percorreu cerca de 100 m.',
        'Último envio de dados em 27 de setembro de 1997; sistema de airbags reutilizado por Spirit e Opportunity.'
      ]
    },
    {
      id: 'opportunity',
      numero: 5,
      titulo: 'A corredora de 90 dias',
      missao: 'Opportunity (Oppy)',
      destino: 'marte',
      destinoLabel: 'Marte',
      status: 'esquecido',
      statusLabel: 'Esquecido',
      chamada: 'Planejada para 90 dias. Durou quase 15 anos.',
      miniHistoria:
        'Ela tinha prazo de validade: 90 dias em Marte. Mas continuou rodando por quase 15 anos e percorreu mais de 45 quilômetros. Só parou quando uma tempestade de poeira cobriu o planeta inteiro e escondeu o Sol. Que pistas ela achou pelo caminho, e por que valeram tanto?',
      notaTex: 'A Opportunity percorreu mais de 45 km em Marte — o recorde de distância de um rover em outro planeta!',
      capaSvg: `<svg viewBox="0 0 360 170"><rect width="360" height="170" fill="#9a3412"/><ellipse cx="180" cy="162" rx="190" ry="36" fill="#c2410c"/><polygon points="110,95 250,95 232,115 128,115" fill="#2563eb"/><circle cx="140" cy="132" r="12" fill="#0f172a"/><circle cx="180" cy="132" r="12" fill="#0f172a"/><circle cx="220" cy="132" r="12" fill="#0f172a"/></svg>`,
      cenas: [
        {
          titulo: '1. Hematita e jarosita: provas de água no passado',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#7c2d12"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#ea580c"/><circle cx="120" cy="168" r="12" fill="#64748b"/><circle cx="165" cy="174" r="10" fill="#475569"/><circle cx="205" cy="166" r="13" fill="#64748b"/><circle cx="165" cy="155" r="46" fill="rgba(56,189,248,0.22)" stroke="#38bdf8" stroke-width="4"/></svg>`,
          paragrafos: [
            'A Opportunity pousou em janeiro de 2004 em Meridiani Planum com meta inicial de 90 sóis e 1 quilômetro. Logo encontrou esférulas cinzentas apelidadas de "blueberries" ricas em hematita, além de jarosita nas rochas.',
            'Como esses minerais se formam na presença de água, a descoberta confirmou que a região já havia sido encharcada por água líquida no passado.'
          ]
        },
        {
          titulo: '2. 5.111 sóis e a tempestade global de poeira',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#431407"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#9a3412"/><text x="170" y="95" text-anchor="middle" fill="#facc15" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="22">5.111 SÓIS • &gt;45 KM</text><text x="170" y="128" text-anchor="middle" fill="#fed7aa" font-size="14">Perseverance Valley • Marte</text></svg>`,
          paragrafos: [
            'Superando em muito os 90 dias previstos, a Oppy operou por 5.111 sóis (quase 15 anos) e percorreu mais de 45 quilômetros.',
            'Em 2018, uma tempestade de poeira cobriu Marte e bloqueou a luz solar. O último sinal chegou em 10 de junho de 2018 e, após mais de mil comandos enviados, a NASA encerrou a missão em 13 de fevereiro de 2019.'
          ]
        }
      ],
      fatos: [
        'Pouso em janeiro de 2004, em Meridiani Planum; missão planejada de 90 sóis e cerca de 1 km.',
        'Identificou hematita nas esférulas ("blueberries") e jarosita, minerais ligados à água.',
        'Operou por 5.111 sóis (quase 15 anos) e percorreu mais de 45 km.',
        'Último sinal em 10 de junho de 2018 durante tempestade global de poeira; fim declarado em 13 de fevereiro de 2019.'
      ]
    },
    {
      id: 'phoenix',
      numero: 6,
      titulo: 'A nave que foi ao Ártico de Marte',
      missao: 'Phoenix',
      destino: 'marte',
      destinoLabel: 'Marte',
      status: 'esquecido',
      statusLabel: 'Esquecido',
      chamada: 'Pedacinhos brancos apareceram no chão de Marte. E sumiram.',
      miniHistoria:
        'Uma nave cavou o chão do Ártico de Marte e achou uns pedacinhos brancos. Os cientistas gritaram "Holy Cow!" na hora. Alguns dias depois, os pedacinhos tinham desaparecido. Sumiram para onde? E o que isso provou sobre a água em Marte?',
      notaTex: 'Os pedaços brancos sublimaram — passaram direto de gelo sólido para vapor d’água!',
      capaSvg: `<svg viewBox="0 0 360 170"><rect width="360" height="170" fill="#1e3a8a"/><ellipse cx="180" cy="162" rx="190" ry="36" fill="#cbd5e1"/><polygon points="150,145 180,134 210,146 180,156" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/></svg>`,
      cenas: [
        {
          titulo: '1. Confirmando gelo de água no polo norte marciano',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#1e3a8a"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#b45309"/><ellipse cx="170" cy="176" rx="70" ry="18" fill="#451a03"/><polygon points="138,172 170,162 202,174 170,184" fill="#ffffff" stroke="#38bdf8" stroke-width="2.5"/></svg>`,
          paragrafos: [
            'Em 25 de maio de 2008, a sonda Phoenix pousou em Vastitas Borealis, no Ártico marciano. Usando seu braço robótico, cavou o solo e expôs fragmentos brancos brilhantes, fazendo os cientistas exclamarem "Holy Cow!".',
            'Dias depois, o material desapareceu por sublimação — passando direto de gelo para vapor — confirmando o gelo de água sob o solo detectado em 2002 pela Mars Odyssey.'
          ]
        },
        {
          titulo: '2. Carbonato de cálcio, clima e neve nas nuvens',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#0f255e"/><ellipse cx="170" cy="48" rx="100" ry="22" fill="#cbd5e1"/><circle cx="135" cy="95" r="4" fill="#fff"/><circle cx="175" cy="112" r="4" fill="#fff"/><circle cx="210" cy="92" r="4" fill="#fff"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#7c2d12"/></svg>`,
          paragrafos: [
            'A Phoenix também identificou carbonato de cálcio (calcário), monitorou o clima e detectou com um instrumento a laser neve caindo das nuvens a cerca de 4 quilômetros de altura.',
            'Operou por mais de cinco meses até o inverno ártico cortar a luz solar. O último sinal chegou em 2 de novembro de 2008 e o fim foi declarado em 10 de novembro.'
          ]
        }
      ],
      fatos: [
        'Pouso em 25 de maio de 2008, em Vastitas Borealis (Ártico marciano).',
        'Confirmou gelo de água sob o solo, antes detectado da órbita pela Mars Odyssey em 2002.',
        'Encontrou carbonato de cálcio, registrou o clima e detectou neve caindo das nuvens.',
        'Missão principal de 90 dias; operou por mais de 5 meses até o inverno ártico.',
        'Último sinal em 2 de novembro de 2008; fim declarado em 10 de novembro de 2008.'
      ]
    },
    {
      id: 'insight',
      numero: 7,
      titulo: 'A ouvinte de terremotos',
      missao: 'InSight',
      destino: 'marte',
      destinoLabel: 'Marte',
      status: 'esquecido',
      statusLabel: 'Esquecido',
      chamada: 'Ela passou quatro anos com o ouvido no chão de Marte.',
      miniHistoria:
        'Se você encostasse o ouvido no chão de Marte, o que ouviria? Uma nave passou mais de quatro anos escutando e contou 1.319 terremotos marcianos. Cada tremor era como uma luz de raio-X mostrando o interior do planeta. O que eles revelaram sobre o que existe embaixo daquele chão?',
      notaTex: 'Com 1.319 terremotos detectados, a InSight revelou que o núcleo de Marte é líquido!',
      capaSvg: `<svg viewBox="0 0 360 170"><rect width="360" height="170" fill="#7c2d12"/><ellipse cx="180" cy="162" rx="190" ry="36" fill="#ea580c"/><path d="M150 142 A30 30 0 0 1 210 142 Z" fill="#facc15"/><path d="M120 156 Q150 146 180 156 T240 156" fill="none" stroke="#38bdf8" stroke-width="2.5"/></svg>`,
      cenas: [
        {
          titulo: '1. Sismologia planetária em Elysium Planitia',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#0f172a"/><circle cx="170" cy="110" r="82" fill="#ea580c"/><circle cx="170" cy="110" r="56" fill="#fb923c"/><circle cx="170" cy="110" r="32" fill="#facc15"/><text x="170" y="114" text-anchor="middle" fill="#0f172a" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="12">NÚCLEO LÍQUIDO</text></svg>`,
          paragrafos: [
            'Pousada em 26 de novembro de 2018 em Elysium Planitia, a InSight operou por mais de quatro anos usando um sismômetro de altíssima sensibilidade.',
            'Ela detectou 1.319 terremotos marcianos — inclusive causados por impactos de meteoroides que expuseram blocos de gelo subterrâneos — revelando que o núcleo de Marte é líquido e medindo a espessura da crosta.'
          ]
        },
        {
          titulo: '2. Painéis empoeirados e a despedida em dezembro de 2022',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#7c2d12"/><ellipse cx="170" cy="200" rx="190" ry="44" fill="#9a3412"/><rect x="85" y="54" width="170" height="106" rx="14" fill="#fed7aa"/><text x="170" y="112" text-anchor="middle" fill="#0f172a" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="16">1.319 TERREMOTOS</text></svg>`,
          paragrafos: [
            'O acúmulo contínuo de poeira sobre os painéis solares reduziu gradualmente sua energia. Em 24 de abril de 2022, registrou sua última selfie empoeirada.',
            'O último contato ocorreu em 15 de dezembro de 2022, e a NASA declarou o encerramento da missão em 21 de dezembro de 2022.'
          ]
        }
      ],
      fatos: [
        'Pouso em 26 de novembro de 2018, em Elysium Planitia; missão planejada de ~2 anos (708 sóis), operou por mais de 4 anos.',
        'Detectou 1.319 terremotos marcianos, confirmou núcleo líquido e mediu a crosta.',
        'Um impacto de meteoroide detectado chegou a expor blocos de gelo sob o solo.',
        'Última selfie tirada em 24 de abril de 2022; último contato em 15 de dezembro de 2022 e fim declarado em 21 de dezembro de 2022.'
      ]
    },
    {
      id: 'pioneer-10',
      numero: 8,
      titulo: 'O último sussurro',
      missao: 'Pioneer 10',
      destino: 'profundo',
      destinoLabel: 'Espaço Profundo',
      status: 'esquecido',
      statusLabel: 'Esquecido',
      chamada: 'O recado dela levou 11 horas e 20 minutos para chegar.',
      miniHistoria:
        'O plano era uma missão de 21 meses, mas ela trabalhou por mais de 30 anos. Quando mandou o último sinal, ele era só um sussurro e levou 11 horas e 20 minutos para chegar à Terra. Como uma nave consegue falar por tanto tempo, e o que acontece quando a energia dela finalmente acaba?',
      notaTex: 'A Pioneer 10 foi a primeira nave a atravessar o cinturão de asteroides e explorar Júpiter de perto!',
      capaSvg: `<svg viewBox="0 0 360 170"><rect width="360" height="170" fill="#04091a"/><circle cx="72" cy="85" r="42" fill="#f97316"/><ellipse cx="72" cy="85" rx="42" ry="10" fill="#fed7aa" opacity="0.6"/><polygon points="210,85 265,55 265,115" fill="#e2e8f0" stroke="#38bdf8" stroke-width="2.5"/></svg>`,
      cenas: [
        {
          titulo: '1. Cruzando o cinturão de asteroides rumo a Júpiter',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#04091a"/><circle cx="76" cy="110" r="52" fill="#ea580c"/><ellipse cx="76" cy="110" rx="52" ry="12" fill="#fed7aa" opacity="0.65"/><circle cx="156" cy="54" r="6" fill="#94a3b8"/><circle cx="172" cy="158" r="8" fill="#64748b"/><polygon points="215,110 278,76 278,144" fill="#f8fafc" stroke="#38bdf8" stroke-width="3"/></svg>`,
          paragrafos: [
            'Lançada em 3 de março de 1972 para uma missão prevista de 21 meses, a Pioneer 10 tornou-se em fevereiro de 1973 a primeira nave a atravessar o cinturão de asteroides — mostrando que há muito espaço vazio entre as rochas — e a primeira a explorar Júpiter de perto.',
            'Como a luz solar fica fraca longe do Sol, sua energia vinha de geradores termoelétricos com plutônio-238 (RTG), e ela carrega uma placa metálica indicando sua origem humana.'
          ]
        },
        {
          titulo: '2. Mais de 30 anos e um sussurro de 11h 20min',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#060d24"/><path d="M40 110 Q110 70 180 110 T310 110" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6 6"/><text x="170" y="72" text-anchor="middle" fill="#facc15" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="18">12,23 BILHÕES DE KM</text><text x="170" y="162" text-anchor="middle" fill="#cbd5e1" font-size="14">Atraso de sinal: 11h 20min • Jan 2003</text></svg>`,
          paragrafos: [
            'A Pioneer 10 enviou dados completos até 27 de abril de 2002. Seu último sinal — um sussurro fraco recebido em 23 de janeiro de 2003 (22 de janeiro no horário dos EUA) — partiu de cerca de 12,23 bilhões de quilômetros da Terra, levando 11 horas e 20 minutos para chegar.',
            'Após a tentativa final sem resposta em 7 de fevereiro de 2003, a missão foi encerrada, mas a nave segue silenciosa rumo às estrelas.'
          ]
        }
      ],
      fatos: [
        'Lançamento em 3 de março de 1972; planejada para 21 meses, funcionou por mais de 30 anos.',
        'Primeira nave a cruzar o cinturão de asteroides (fev 1973) e a explorar Júpiter de perto.',
        'Alimentada por geradores com plutônio-238 (RTG) e equipada com placa metálica identificando sua origem.',
        'Última telemetria em 27 de abril de 2002; último sinal em 23 de janeiro de 2003 a ~12,23 bilhões de km (11 h 20 min de atraso).',
        'Tentativa final de escuta sem sinal em 7 de fevereiro de 2003.'
      ]
    },
    {
      id: 'voyager-1',
      numero: 9,
      titulo: 'A garrafa no mar das estrelas',
      missao: 'Voyager 1',
      destino: 'profundo',
      destinoLabel: 'Espaço Interestelar',
      status: 'ativo',
      statusLabel: 'Ativo',
      chamada: 'Uma garrafa com mensagem, só que no espaço, e ela ainda manda notícias.',
      miniHistoria:
        'Existe uma garrafa com mensagem flutuando no espaço, e ela é uma nave. Ela leva um disco de ouro cheio de sons da Terra e está tão longe que, em 18 de novembro de 2026, a NASA prevê que ela estará a um dia-luz de nós. O que está gravado nesse disco?',
      notaTex: 'Estamos em novembro de 2026 — exatamente no marco em que a Voyager 1 atinge 1 dia-luz de distância da Terra!',
      capaSvg: `<svg viewBox="0 0 360 170"><rect width="360" height="170" fill="#04091a"/><circle cx="105" cy="85" r="34" fill="#facc15"/><ellipse cx="105" cy="85" rx="64" ry="14" fill="none" stroke="#fde047" stroke-width="4"/><circle cx="255" cy="85" r="24" fill="#f59e0b" stroke="#fef08a" stroke-width="3"/></svg>`,
      cenas: [
        {
          titulo: '1. Júpiter, Saturno e o Golden Record',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#091538"/><circle cx="110" cy="110" r="42" fill="#eab308"/><ellipse cx="110" cy="110" rx="78" ry="16" fill="none" stroke="#fef08a" stroke-width="5"/><circle cx="250" cy="110" r="34" fill="#f59e0b" stroke="#fff" stroke-width="2.5"/><circle cx="250" cy="110" r="10" fill="#091538"/></svg>`,
          paragrafos: [
            'Lançada em 5 de setembro de 1977, a Voyager 1 sobrevoou Júpiter em 5 de março de 1979 e Saturno em 12 de novembro de 1980, revelando detalhes inéditos dos planetas gigantes e suas luas.',
            'A bordo, carrega o Golden Record: um disco de cobre banhado a ouro de 30 centímetros com sons da Terra, músicas, imagens e saudações em diversos idiomas.'
          ]
        },
        {
          titulo: '2. Espaço interestelar e o marco de 1 dia-luz em 2026',
          svg: `<svg viewBox="0 0 340 220"><rect width="340" height="220" fill="#030612"/><circle cx="50" cy="110" r="95" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="8 6"/><text x="170" y="88" text-anchor="middle" fill="#34d399" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="18">ESPAÇO INTERESTELAR</text><text x="170" y="122" text-anchor="middle" fill="#facc15" font-weight="700" font-size="15">18 Nov 2026: 1 Dia-Luz (~25,9 bi km)</text></svg>`,
          paragrafos: [
            'Em 25 de agosto de 2012, a cerca de 122 Unidades Astronômicas do Sol, a Voyager 1 cruzou a heliopausa e tornou-se o primeiro objeto humano a entrar no espaço interestelar.',
            'Ainda ativa graças a geradores nucleares de plutônio e ao desligamento gradual de instrumentos não essenciais, a NASA prevê que em 18 de novembro de 2026 ela estará a 1 dia-luz da Terra (cerca de 25,9 bilhões de quilômetros)!'
          ]
        }
      ],
      fatos: [
        'Lançamento em 5 de setembro de 1977; sobrevoou Júpiter em 5 de março de 1979 e Saturno em 12 de novembro de 1980.',
        'Entrou no espaço interestelar em 25 de agosto de 2012, a cerca de 122 UA do Sol.',
        'Alimentada por baterias nucleares fornecidas pelo Departamento de Energia dos EUA.',
        'Carrega o Golden Record, disco de cobre banhado a ouro de 30 cm.',
        'Previsão da NASA de atingir 1 dia-luz da Terra (cerca de 25,9 bilhões de km) em 18 de novembro de 2026.'
      ]
    }
  ];

  // ---------------------------------------------------------
  // 2. ESTADO GLOBAL E ELEMENTOS DOM
  // ---------------------------------------------------------
  let viewAtual = 'painel';
  let filtroStatusPainel = 'todos';
  let filtroDestinoDossies = 'todos';
  let dossieAtualIndex = 0;
  let velocidadeLeitura = 1.0;
  let narracaoAtiva = false;
  let xpTotal = Number(localStorage.getItem('exploradores_jovens_xp') || 0);

  const xpCounter = document.getElementById('youth-xp-counter');
  const userNameEl = document.getElementById('youth-user-name');
  const searchInput = document.getElementById('youth-search-input');
  const texHudSpeech = document.getElementById('tex-hud-speech');

  const views = {
    painel: document.getElementById('view-painel'),
    dossies: document.getElementById('view-dossies'),
    desafios: document.getElementById('view-desafios')
  };

  xpCounter.textContent = xpTotal;

  function ganharXp(pontos) {
    xpTotal += pontos;
    xpCounter.textContent = xpTotal;
    localStorage.setItem('exploradores_jovens_xp', String(xpTotal));
  }

  try {
    const sessao = JSON.parse(localStorage.getItem('exploradores_sessao'));
    if (sessao?.nome) userNameEl.textContent = sessao.nome;
  } catch {}

  // ---------------------------------------------------------
  // 3. MASCOTE TEX (tex.jpg) — RECORTE AUTOMÁTICO DE FUNDO
  // ---------------------------------------------------------
  document.querySelectorAll('img[data-fallbacks]').forEach((img) => {
    const candidatos = img.dataset.fallbacks.split(',').map((s) => s.trim());
    let tentativa = 0;
    img.addEventListener('error', function tentar() {
      if (tentativa < candidatos.length) img.src = encodeURI(candidatos[tentativa++]);
      else img.removeEventListener('error', tentar);
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
        const isBlack = (idx) => {
          const p = idx * 4;
          return data[p] < 24 && data[p + 1] < 24 && data[p + 2] < 24;
        };
        for (let x = 0; x < w; x++) {
          if (!visited[x] && isBlack(x)) { visited[x] = 1; queue[tail++] = x; }
          const b = (h - 1) * w + x;
          if (!visited[b] && isBlack(b)) { visited[b] = 1; queue[tail++] = b; }
        }
        for (let y = 0; y < h; y++) {
          const l = y * w;
          const r = y * w + (w - 1);
          if (!visited[l] && isBlack(l)) { visited[l] = 1; queue[tail++] = l; }
          if (!visited[r] && isBlack(r)) { visited[r] = 1; queue[tail++] = r; }
        }
        while (head < tail) {
          const idx = queue[head++];
          data[idx * 4 + 3] = 0;
          const x = idx % w;
          const y = (idx / w) | 0;
          if (x > 0 && !visited[idx - 1] && isBlack(idx - 1)) { visited[idx - 1] = 1; queue[tail++] = idx - 1; }
          if (x < w - 1 && !visited[idx + 1] && isBlack(idx + 1)) { visited[idx + 1] = 1; queue[tail++] = idx + 1; }
          if (y > 0 && !visited[idx - w] && isBlack(idx - w)) { visited[idx - w] = 1; queue[tail++] = idx - w; }
          if (y < h - 1 && !visited[idx + w] && isBlack(idx + w)) { visited[idx + w] = 1; queue[tail++] = idx + w; }
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

  ['avatar-tex-top', 'tex-panel-img', 'tex-reader-avatar'].forEach((id) => {
    removerFundoPretoMascote(document.getElementById(id));
  });

  // ---------------------------------------------------------
  // 4. SISTEMA DE ÁUDIO (NARRADOR PT-BR) E LIBRAS
  // ---------------------------------------------------------
  function falarTexto(texto, onEndCallback = null) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    fala.rate = velocidadeLeitura;
    fala.pitch = 1.02;
    const vozes = window.speechSynthesis.getVoices();
    const vozPt =
      vozes.find((v) => v.lang.toLowerCase().includes('pt-br') && v.name.toLowerCase().includes('google')) ||
      vozes.find((v) => v.lang.toLowerCase().includes('pt-br')) ||
      vozes.find((v) => v.lang.toLowerCase().startsWith('pt'));
    if (vozPt) fala.voice = vozPt;
    if (onEndCallback) fala.onend = onEndCallback;
    window.speechSynthesis.speak(fala);
  }

  function pararAudio() {
    narracaoAtiva = false;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    document.querySelectorAll('.youth-scene-card').forEach((c) => c.classList.remove('active-reading'));
    document.getElementById('reader-audio-indicator')?.classList.add('hidden');
    document.getElementById('btn-read-pause')?.classList.add('hidden');
    document.getElementById('btn-read-stop')?.classList.add('hidden');
  }

  function ativarVLibras() {
    const btn = document.querySelector('[vw-access-button]');
    if (btn) btn.click();
  }

  document.getElementById('btn-top-audio')?.addEventListener('click', () => {
    falarTexto(texHudSpeech.textContent);
  });

  document.getElementById('btn-top-libras')?.addEventListener('click', ativarVLibras);
  document.getElementById('btn-read-libras')?.addEventListener('click', ativarVLibras);

  // ---------------------------------------------------------
  // 5. NAVEGAÇÃO ENTRE TELAS (PAINEL, 9 DOSSIÊS, DESAFIOS)
  // ---------------------------------------------------------
  const navItems = document.querySelectorAll('.nav-item');

  function irParaTela(nomeTela, destinoFiltro = null) {
    pararAudio();
    viewAtual = nomeTela;

    Object.entries(views).forEach(([k, el]) => {
      el.classList.toggle('hidden', k !== nomeTela);
    });

    navItems.forEach((btn) => {
      const mesmoView = btn.dataset.view === nomeTela;
      const mesmoDest = !btn.dataset.destino || btn.dataset.destino === (destinoFiltro || filtroDestinoDossies);
      btn.classList.toggle('active', mesmoView && (nomeTela !== 'dossies' || mesmoDest));
    });

    if (nomeTela === 'dossies') {
      if (destinoFiltro) filtroDestinoDossies = destinoFiltro;
      document.getElementById('dossies-catalog-block').classList.remove('hidden');
      document.getElementById('dossie-reader-block').classList.add('hidden');
      renderizarCatalogoDossies();
    } else if (nomeTela === 'painel') {
      renderizarRadarPainel();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      irParaTela(btn.dataset.view, btn.dataset.destino || null);
    });
  });

  document.querySelectorAll('[data-jump-destino]').forEach((card) => {
    card.addEventListener('click', () => {
      irParaTela('dossies', card.dataset.jumpDestino);
    });
  });

  // ---------------------------------------------------------
  // 6. TELA 1: RENDERIZAÇÃO DO RADAR DE MISSÕES
  // ---------------------------------------------------------
  const radarGrid = document.getElementById('radar-missions-grid');

  function criarCardMissao(m, textoBotao = 'Abrir Dossiê') {
    return `
      <article class="mission-hud-card">
        <div class="mission-art-banner">
          <div class="mission-card-badges">
            <span class="tag-chip ${m.destino}">${m.destinoLabel}</span>
            <span class="tag-chip ${m.status}">${m.status === 'ativo' ? '🟢 Ativo' : '🟡 Esquecido'}</span>
          </div>
          ${m.capaSvg}
        </div>
        <div class="mission-card-body">
          <span class="mission-code">Dossiê #0${m.numero} • ${m.missao}</span>
          <h3>${m.titulo}</h3>
          <div class="mission-hook">⚡ ${m.chamada}</div>
          <p class="mission-summary-text">${m.miniHistoria}</p>
          <div class="mission-card-footer">
            <button type="button" class="btn-primary-hud" data-open-dossie="${m.id}">${textoBotao}</button>
            <button type="button" class="btn-outline-hud" data-listen-dossie="${m.id}" title="Ouvir dossiê">🔊</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderizarRadarPainel() {
    const termo = (searchInput?.value || '').trim().toLowerCase();
    const filtrados = MISSOES_JOVENS.filter((m) => {
      const okStatus = filtroStatusPainel === 'todos' || m.status === filtroStatusPainel;
      const okBusca =
        !termo ||
        m.titulo.toLowerCase().includes(termo) ||
        m.missao.toLowerCase().includes(termo) ||
        m.miniHistoria.toLowerCase().includes(termo);
      return okStatus && okBusca;
    });

    radarGrid.innerHTML = filtrados.length
      ? filtrados.map((m) => criarCardMissao(m, 'Ler Dossiê Completo')).join('')
      : '<p style="color:#facc15;">Nenhuma missão encontrada para essa busca.</p>';

    conectarBotoesCards(radarGrid);
  }

  document.querySelectorAll('.status-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.status-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      filtroStatusPainel = pill.dataset.status;
      renderizarRadarPainel();
    });
  });

  // ---------------------------------------------------------
  // 7. TELA 2: CATÁLOGO E LEITOR DOS 9 DOSSIÊS
  // ---------------------------------------------------------
  const dossiesCardsGrid = document.getElementById('dossies-cards-grid');
  const dossiesHeading = document.getElementById('dossies-heading');

  function renderizarCatalogoDossies() {
    document.querySelectorAll('.dest-pill').forEach((p) => {
      p.classList.toggle('active', p.dataset.destFilter === filtroDestinoDossies);
    });

    const titulos = {
      todos: 'Todos os 9 Dossiês Espaciais',
      lua: 'Dossiês Lunares 🌕 (2 Missões)',
      marte: 'Dossiês de Marte 🔴 (5 Missões)',
      profundo: 'Dossiês do Espaço Profundo 🌌 (2 Missões)'
    };
    dossiesHeading.textContent = titulos[filtroDestinoDossies] || titulos.todos;

    const termo = (searchInput?.value || '').trim().toLowerCase();
    const lista = MISSOES_JOVENS.filter((m) => {
      const okDest = filtroDestinoDossies === 'todos' || m.destino === filtroDestinoDossies;
      const okBusca =
        !termo ||
        m.titulo.toLowerCase().includes(termo) ||
        m.missao.toLowerCase().includes(termo) ||
        m.miniHistoria.toLowerCase().includes(termo);
      return okDest && okBusca;
    });

    dossiesCardsGrid.innerHTML = lista.map((m) => criarCardMissao(m, '📖 Abrir Dossiê')).join('');
    conectarBotoesCards(dossiesCardsGrid);
  }

  document.querySelectorAll('.dest-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      filtroDestinoDossies = pill.dataset.destFilter;
      renderizarCatalogoDossies();
    });
  });

  function conectarBotoesCards(container) {
    container.querySelectorAll('[data-open-dossie]').forEach((btn) => {
      btn.addEventListener('click', () => abrirLeitorDossie(btn.dataset.openDossie, false));
    });
    container.querySelectorAll('[data-listen-dossie]').forEach((btn) => {
      btn.addEventListener('click', () => abrirLeitorDossie(btn.dataset.listenDossie, true));
    });
  }

  function abrirLeitorDossie(id, autoPlay = false) {
    pararAudio();
    const idx = MISSOES_JOVENS.findIndex((m) => m.id === id);
    dossieAtualIndex = idx >= 0 ? idx : 0;
    const m = MISSOES_JOVENS[dossieAtualIndex];

    Object.entries(views).forEach(([k, el]) => el.classList.toggle('hidden', k !== 'dossies'));
    document.getElementById('dossies-catalog-block').classList.add('hidden');
    document.getElementById('dossie-reader-block').classList.remove('hidden');

    document.getElementById('reader-tags').innerHTML = `
      <span class="tag-chip ${m.destino}">${m.destinoLabel}</span>
      <span class="tag-chip ${m.status}">${m.status === 'ativo' ? '🟢 Ainda Ativo' : '🟡 Esquecido'}</span>
    `;
    document.getElementById('reader-story-title').textContent = `${m.numero}. ${m.titulo}`;
    document.getElementById('reader-story-mission').textContent = `Missão NASA: ${m.missao}`;
    document.getElementById('reader-story-intro').innerHTML = `<strong>Chamada:</strong> ${m.miniHistoria}`;
    document.getElementById('reader-tex-note').innerHTML = `<strong>Análise do TEX:</strong> ${m.notaTex}`;

    const scenesContainer = document.getElementById('reader-scenes-list');
    scenesContainer.innerHTML = m.cenas
      .map(
        (c, i) => `
        <article class="youth-scene-card" data-scene-card="${i}">
          <div class="youth-scene-art">
            <span class="scene-badge-num">Registro ${i + 1}/${m.cenas.length}</span>
            ${c.svg}
          </div>
          <div class="youth-scene-text">
            <h4>${c.titulo}</h4>
            ${c.paragrafos.map((p) => `<p>${p}</p>`).join('')}
            <button type="button" class="btn-scene-audio" data-play-scene="${i}">🔊 Ouvir esta parte</button>
          </div>
        </article>
      `
      )
      .join('');

    scenesContainer.querySelectorAll('[data-play-scene]').forEach((btn) => {
      btn.addEventListener('click', () => lerDossieSequencia(m, Number(btn.dataset.playScene), true));
    });

    document.getElementById('reader-true-facts').innerHTML = m.fatos.map((f) => `<li>${f}</li>`).join('');
    ganharXp(5);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (autoPlay) setTimeout(() => lerDossieSequencia(m, 0, false), 300);
  }

  function lerDossieSequencia(missao, idxCena, apenasUma = false) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    narracaoAtiva = true;

    const ind = document.getElementById('reader-audio-indicator');
    const statusTxt = document.getElementById('reader-audio-status');
    document.getElementById('btn-read-pause').classList.remove('hidden');
    document.getElementById('btn-read-stop').classList.remove('hidden');
    ind.classList.remove('hidden');

    const narrar = (i) => {
      if (!narracaoAtiva || i >= missao.cenas.length) {
        pararAudio();
        return;
      }
      document.querySelectorAll('.youth-scene-card').forEach((el) => el.classList.remove('active-reading'));
      const card = document.querySelector(`[data-scene-card="${i}"]`);
      if (card) {
        card.classList.add('active-reading');
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      const cena = missao.cenas[i];
      statusTxt.textContent = `Lendo: ${missao.titulo} — ${cena.titulo}`;
      const texto = `${cena.titulo}. ${cena.paragrafos.join(' ')}`;

      falarTexto(texto, () => {
        if (!apenasUma && narracaoAtiva) narrar(i + 1);
        else pararAudio();
      });
    };

    narrar(idxCena);
  }

  document.getElementById('btn-read-play')?.addEventListener('click', () => {
    if ('speechSynthesis' in window && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      return;
    }
    lerDossieSequencia(MISSOES_JOVENS[dossieAtualIndex], 0, false);
  });

  document.getElementById('btn-read-pause')?.addEventListener('click', () => {
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) window.speechSynthesis.pause();
  });

  document.getElementById('btn-read-stop')?.addEventListener('click', pararAudio);

  document.getElementById('btn-read-speed')?.addEventListener('click', (e) => {
    velocidadeLeitura = velocidadeLeitura === 1.0 ? 1.2 : velocidadeLeitura === 1.2 ? 0.85 : 1.0;
    e.currentTarget.textContent = `⚡ Vel: ${velocidadeLeitura.toFixed(2).replace('.00', '.0')}x`;
  });

  document.getElementById('btn-back-dossies')?.addEventListener('click', () => {
    pararAudio();
    document.getElementById('dossie-reader-block').classList.add('hidden');
    document.getElementById('dossies-catalog-block').classList.remove('hidden');
    renderizarCatalogoDossies();
  });

  document.getElementById('btn-prev-dossie')?.addEventListener('click', () => {
    const prev = (dossieAtualIndex - 1 + MISSOES_JOVENS.length) % MISSOES_JOVENS.length;
    abrirLeitorDossie(MISSOES_JOVENS[prev].id, false);
  });

  document.getElementById('btn-next-dossie')?.addEventListener('click', () => {
    const next = (dossieAtualIndex + 1) % MISSOES_JOVENS.length;
    abrirLeitorDossie(MISSOES_JOVENS[next].id, false);
  });

  document.getElementById('btn-goto-desafios')?.addEventListener('click', () => irParaTela('desafios'));

  searchInput?.addEventListener('input', () => {
    if (viewAtual === 'painel') renderizarRadarPainel();
    else if (viewAtual === 'dossies') {
      document.getElementById('dossie-reader-block').classList.add('hidden');
      document.getElementById('dossies-catalog-block').classList.remove('hidden');
      renderizarCatalogoDossies();
    }
  });

  // ---------------------------------------------------------
  // 8. TELA 3: DESAFIOS INTERATIVOS & SIMULADOR DE LUZ/RÁDIO
  // ---------------------------------------------------------
  const chalTabs = document.querySelectorAll('.chal-tab');
  const chalPanels = {
    classificar: document.getElementById('chal-classificar'),
    quiz: document.getElementById('chal-quiz'),
    simulador: document.getElementById('chal-simulador')
  };

  function abrirDesafio(nome) {
    chalTabs.forEach((t) => t.classList.toggle('active', t.dataset.chal === nome));
    Object.entries(chalPanels).forEach(([k, p]) => p.classList.toggle('hidden', k !== nome));
  }

  chalTabs.forEach((t) => t.addEventListener('click', () => abrirDesafio(t.dataset.chal)));
  document.querySelectorAll('[data-next-chal]').forEach((b) =>
    b.addEventListener('click', () => abrirDesafio(b.dataset.nextChal))
  );

  // --- Desafio 1: Alocar as 9 missões ---
  const youthPool = document.getElementById('youth-pool');
  let chipSelecionado = null;
  let alocados = 0;

  function iniciarDesafioClassificar() {
    youthPool.innerHTML = '';
    ['drop-lua', 'drop-marte', 'drop-profundo'].forEach((id) => (document.getElementById(id).innerHTML = ''));
    document.getElementById('classificar-done').classList.add('hidden');
    chipSelecionado = null;
    alocados = 0;

    [...MISSOES_JOVENS]
      .sort(() => Math.random() - 0.5)
      .forEach((m) => {
        const chip = document.createElement('div');
        chip.className = 'y-chip';
        chip.draggable = true;
        chip.dataset.id = m.id;
        chip.textContent = m.missao;

        chip.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', m.id);
          selecionarChipJovem(chip);
        });
        chip.addEventListener('click', () => selecionarChipJovem(chip));
        youthPool.appendChild(chip);
      });
  }

  function selecionarChipJovem(chip) {
    document.querySelectorAll('.y-chip').forEach((c) => c.classList.remove('selected'));
    chip.classList.add('selected');
    chipSelecionado = chip;
  }

  function validarAlocacao(setorAlvo) {
    if (!chipSelecionado) return;
    const m = MISSOES_JOVENS.find((item) => item.id === chipSelecionado.dataset.id);
    if (!m) return;

    if (m.destino === setorAlvo) {
      const item = document.createElement('div');
      item.className = 'placed-ok';
      item.textContent = `✅ ${m.missao}`;
      document.getElementById(`drop-${setorAlvo}`).appendChild(item);
      chipSelecionado.remove();
      chipSelecionado = null;
      alocados++;
      ganharXp(5);

      if (alocados === MISSOES_JOVENS.length) {
        ganharXp(25);
        document.getElementById('classificar-done').classList.remove('hidden');
      }
    } else {
      texHudSpeech.innerHTML = `Ops! A missão <strong>${m.missao}</strong> não pertence a esse setor. Tente outro destino!`;
    }
  }

  document.querySelectorAll('.drop-sector').forEach((zone) => {
    const setor = zone.dataset.sector;
    zone.addEventListener('dragover', (e) => e.preventDefault());
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text/plain');
      const chip = youthPool.querySelector(`[data-id="${id}"]`);
      if (chip) chipSelecionado = chip;
      validarAlocacao(setor);
    });
    zone.addEventListener('click', () => validarAlocacao(setor));
  });

  document.getElementById('btn-reset-classificar')?.addEventListener('click', iniciarDesafioClassificar);
  iniciarDesafioClassificar();

  // --- Desafio 2: Quiz Científico ---
  const QUIZ_JOVENS = [
    {
      tag: '🌕 LUA • RETRORREFLETORES',
      pergunta: 'Qual é a precisão atual das medições de distância Terra-Lua feitas com lasers apontados para os espelhos das missões Apollo?',
      opcoes: ['Cerca de 10 metros', 'Cerca de 1 milímetro', 'Cerca de 50 centímetros', 'Cerca de 1 quilômetro'],
      correta: 1,
      info: 'Hoje, estações como a APOLLO no Novo México atingem precisão de cerca de 1 milímetro!'
    },
    {
      tag: '🌕 LUA • SURVEYOR 3',
      pergunta: 'Por que a tinta branca do robô Surveyor 3 havia ficado amarronzada (bege) quando os astronautas da Apollo 12 o visitaram?',
      opcoes: ['Porque caiu tinta de Marte nele', 'Pelo efeito da radiação solar e poeira lunar durante 31 meses', 'Porque enferrujou na chuva', 'Foi pintado pelos astronautas'],
      correta: 1,
      info: 'Os 31 meses de exposição à radiação, ao Sol e à poeira deixaram a tinta branca com cor de biscoito!'
    },
    {
      tag: '🔴 MARTE • OPPORTUNITY',
      pergunta: 'Quais minerais encontrados pela Opportunity comprovaram a ação passada de água líquida em Meridiani Planum?',
      opcoes: ['Ouro e diamante', 'Hematita (nas "blueberries") e jarosita', 'Sal de cozinha e carvão', 'Apenas areia seca'],
      correta: 1,
      info: 'A hematita nas esférulas e a jarosita nas rochas indicam que água líquida encharcou o solo no passado.'
    },
    {
      tag: '🔴 MARTE • PHOENIX',
      pergunta: 'O que aconteceu com os pedacinhos brancos cavados pela sonda Phoenix no Ártico marciano após alguns dias?',
      opcoes: ['Viraram lava', 'Sublimaram: passaram direto de gelo para vapor', 'Foram levados por um rover', 'Cresceram como plantas'],
      correta: 1,
      info: 'Ao passarem direto de sólido para vapor, provaram que se tratava de gelo de água!'
    },
    {
      tag: '🔴 MARTE • INSIGHT',
      pergunta: 'O que os 1.319 terremotos detectados pela InSight revelaram sobre o interior de Marte?',
      opcoes: ['Que Marte é oco por dentro', 'Que o núcleo de Marte é líquido', 'Que não existe crosta em Marte', 'Que há oceanos subterrâneos de lava azul'],
      correta: 1,
      info: 'As ondas sísmicas mostraram que o núcleo de Marte é líquido e permitiram medir a espessura da crosta.'
    },
    {
      tag: '🌌 ESPAÇO PROFUNDO • PIONEER 10',
      pergunta: 'Quanto tempo o último sinal da Pioneer 10 (recebido em janeiro de 2003 a ~12,23 bilhões de km) levou para chegar à Terra?',
      opcoes: ['2 segundos', '11 horas e 20 minutos', '3 dias inteiros', '45 minutos'],
      correta: 1,
      info: 'A ~12,23 bilhões de km, o sinal enviado de manhã levou 11 horas e 20 minutos para chegar!'
    },
    {
      tag: '🌌 INTERESTELAR • VOYAGER 1',
      pergunta: 'Qual marco histórico de distância a NASA prevê que a Voyager 1 atinja em 18 de novembro de 2026?',
      opcoes: ['A órbita de Saturno', '1 dia-luz da Terra (~25,9 bilhões de km)', 'A estrela mais próxima', '1 ano-luz da Terra'],
      correta: 1,
      info: 'Em 18 de novembro de 2026, a Voyager 1 estará a 1 dia-luz (a distância que a luz percorre em 24 horas)!'
    }
  ];

  let qIdx = 0;
  let qAcertos = 0;

  function renderYouthQuiz() {
    document.getElementById('youth-quiz-box').classList.remove('hidden');
    document.getElementById('youth-quiz-done').classList.add('hidden');
    document.getElementById('youth-quiz-feedback').classList.add('hidden');

    const item = QUIZ_JOVENS[qIdx];
    document.getElementById('youth-quiz-counter').textContent = `Questão ${qIdx + 1} de ${QUIZ_JOVENS.length}`;
    document.getElementById('youth-quiz-tag').textContent = item.tag;
    document.getElementById('youth-quiz-question').textContent = item.pergunta;

    const optsBox = document.getElementById('youth-quiz-options');
    optsBox.innerHTML = '';
    item.opcoes.forEach((op, idx) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'yq-opt';
      b.textContent = `${['A)', 'B)', 'C)', 'D)'][idx]} ${op}`;
      b.addEventListener('click', () => responderYouthQuiz(idx, b));
      optsBox.appendChild(b);
    });
  }

  function responderYouthQuiz(escolhida, btnEl) {
    const item = QUIZ_JOVENS[qIdx];
    const allBtns = document.querySelectorAll('.yq-opt');
    allBtns.forEach((b) => (b.disabled = true));

    const ok = escolhida === item.correta;
    if (ok) {
      btnEl.classList.add('correct');
      qAcertos++;
      ganharXp(10);
    } else {
      btnEl.classList.add('wrong');
      allBtns[item.correta]?.classList.add('correct');
    }

    const fb = document.getElementById('youth-quiz-feedback');
    fb.innerHTML = `
      <span>${ok ? '✅ Correto (+10 XP)!' : '💡 Explicação:'} ${item.info}</span>
      <button type="button" id="btn-next-yq" class="btn-primary-hud">
        ${qIdx + 1 < QUIZ_JOVENS.length ? 'Próxima Questão →' : 'Ver Resultado 🏆'}
      </button>
    `;
    fb.classList.remove('hidden');

    document.getElementById('btn-next-yq')?.addEventListener('click', () => {
      qIdx++;
      if (qIdx < QUIZ_JOVENS.length) renderYouthQuiz();
      else {
        document.getElementById('youth-quiz-box').classList.add('hidden');
        document.getElementById('youth-quiz-done').classList.remove('hidden');
        document.getElementById('youth-quiz-result').textContent = `🏆 Você acertou ${qAcertos} de ${QUIZ_JOVENS.length} questões!`;
      }
    });
  }

  document.getElementById('btn-speak-youth-quiz')?.addEventListener('click', () => {
    const item = QUIZ_JOVENS[qIdx];
    if (item) falarTexto(`${item.pergunta}. Opções: ${item.opcoes.join(', ')}`);
  });

  document.getElementById('btn-restart-youth-quiz')?.addEventListener('click', () => {
    qIdx = 0;
    qAcertos = 0;
    renderYouthQuiz();
  });

  renderYouthQuiz();

  // --- Desafio 3: Simulador de Atraso de Sinal ---
  const SIM_DADOS = {
    lua: {
      dest: '🌕 Lua',
      dist: '~384.400 km',
      tempo: '~2,56 segundos (ida e volta)',
      detalhe: 'Precisão de ~1 mm (espelhos Apollo)',
      duracaoAnim: '0.8s',
      texto:
        'Na Lua, os retrorrefletores das missões Apollo 11, 14 e 15 devolvem o pulso de laser da Terra em cerca de 2,5 segundos, permitindo medir a distância Terra-Lua com precisão de 1 milímetro!'
    },
    marte: {
      dest: '🔴 Marte',
      dist: '55 a 400 milhões de km',
      tempo: '3 a 22 minutos (só ida)',
      detalhe: 'Comandos exigem autonomia dos rovers',
      duracaoAnim: '1.6s',
      texto:
        'Como Marte está a dezenas ou centenas de milhões de quilômetros, um comando da Terra leva vários minutos para chegar — por isso rovers como Sojourner e Opportunity precisavam navegar com autonomia.'
    },
    pioneer: {
      dest: '🛰️ Pioneer 10',
      dist: '~12,23 bilhões de km (Jan 2003)',
      tempo: '11 horas e 20 minutos (só ida)',
      detalhe: 'Último sinal captado em 23 jan 2003',
      duracaoAnim: '2.5s',
      texto:
        'Quando a Pioneer 10 enviou seu último sussurro em janeiro de 2003 a cerca de 12,23 bilhões de quilômetros, o sinal saiu de manhã e levou 11 horas e 20 minutos para chegar à Terra!'
    },
    voyager: {
      dest: '✨ Voyager 1',
      dist: '~25,9 bilhões de km (Nov 2026)',
      tempo: '1 dia-luz (24 horas só ida)',
      detalhe: 'Primeira nave no espaço interestelar',
      duracaoAnim: '3.4s',
      texto:
        'Em 18 de novembro de 2026, a Voyager 1 atinge a marca histórica de 1 dia-luz da Terra (~25,9 bilhões de km): um sinal de rádio emitido por ela leva 24 horas inteiras para alcançar nossas antenas!'
    }
  };

  let alvoSimAtual = 'lua';

  function atualizarSimulador(alvo) {
    alvoSimAtual = alvo;
    const d = SIM_DADOS[alvo];
    document.querySelectorAll('.sim-target-btn').forEach((b) =>
      b.classList.toggle('active', b.dataset.target === alvo)
    );
    document.getElementById('sim-dest-label').textContent = d.dest;
    document.getElementById('sim-distance').textContent = d.dist;
    document.getElementById('sim-time').textContent = d.tempo;
    document.getElementById('sim-detail').textContent = d.detalhe;
    document.getElementById('sim-explanation').textContent = d.texto;
    dispararPulsoSimulador();
  }

  function dispararPulsoSimulador() {
    const dot = document.getElementById('sim-pulse-dot');
    dot.classList.remove('firing');
    dot.style.setProperty('--beam-dur', SIM_DADOS[alvoSimAtual].duracaoAnim);
    void dot.offsetWidth;
    dot.classList.add('firing');
  }

  document.querySelectorAll('.sim-target-btn').forEach((btn) => {
    btn.addEventListener('click', () => atualizarSimulador(btn.dataset.target));
  });

  document.getElementById('btn-fire-signal')?.addEventListener('click', () => {
    dispararPulsoSimulador();
    ganharXp(2);
  });

  document.getElementById('btn-speak-sim')?.addEventListener('click', () => {
    falarTexto(document.getElementById('sim-explanation').textContent);
  });

  // Inicializa o painel principal
  renderizarRadarPainel();
});