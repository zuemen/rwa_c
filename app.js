const { createElement: h } = React;

const metrics = [
  { value: '$1.2B+', label: '目標資產上鏈敘事', note: '從核心都會住宅、收益型出租物件到開發案 SPV。' },
  { value: '24/7', label: '全球投資入口', note: '學習 RealT / Homebase 的低摩擦投資體驗與數位分潤節奏。' },
  { value: '3 Layers', label: '合規與治理架構', note: 'SPV 法遵、鏈上權益、投資人風控三層並行。' },
];

const pillars = [
  {
    title: 'Institutional-grade 資產敘事',
    description:
      '以高辨識度地段、可量化租金收益、清晰物件估值模型打造能夠吸引媒體、家辦與全球投資人的地產資產池。',
  },
  {
    title: 'Tokenized ownership experience',
    description:
      '前端圍繞投資者旅程設計：瀏覽物件、理解權益、完成 KYC、持有代幣、查看收益、參與治理與二級流動性。',
  },
  {
    title: 'Research-backed credibility',
    description:
      '用國外論文與產業報告支持你的商業模式，讓網站同時像產品、白皮書與募資故事頁。',
  },
];

const properties = [
  {
    name: 'Tokyo Flex Living Tower',
    location: '東京｜城市更新型出租住宅',
    yield: '6.8% 預估年化現金流',
    blurb: '主打亞洲門戶與穩定租賃需求，適合做為旗艦型國際資產。',
  },
  {
    name: 'Lisbon Creator Residences',
    location: '里斯本｜數位遊民長租公寓',
    yield: '7.4% 預估年化現金流',
    blurb: '結合創作者社群與品牌策展，提升平台文化影響力。',
  },
  {
    name: 'Austin ClimateTech Campus Lofts',
    location: '奧斯汀｜產業園區住宅混合資產',
    yield: '8.1% 預估年化現金流',
    blurb: '鎖定科技就業外溢與中長期資本增值敘事。',
  },
];

const roadmap = [
  'Phase 01｜建立品牌主張、法遵架構、物件盡調標準與首批種子名單。',
  'Phase 02｜上線 MVP：物件頁、投資流程、KYC/AML 導流、收益儀表板與投資人教育模組。',
  'Phase 03｜導入治理提案、二級轉讓設計、國際城市聯名資產與媒體內容引擎。',
  'Phase 04｜升級成跨司法管轄區的資產發行平台，開放 B2B 白標與機構合作。',
];

const standards = [
  {
    name: 'ERC-3643（優先推薦）',
    why: '最適合有 KYC、白名單、司法限制、投資人資格控管的房地產 RWA。對「合規證券型代幣」敘事最完整。',
    fit: '若你追求可擴張、能與機構或監管溝通、未來要進入多國市場，建議主線採用它。',
  },
  {
    name: 'ERC-1400（進階證券框架）',
    why: '能拆分不同權利與限制，適合複雜資產結構、股權/債權混合產品。',
    fit: '如果你規劃很多類型的投資權益、分層級受益權，ERC-1400 很值得評估。',
  },
  {
    name: 'ERC-20 / ERC-1155（流動性或份額層）',
    why: 'ERC-20 可作為簡潔的收益或平台代幣；ERC-1155 適合多資產、多批次份額管理。',
    fit: '可作為輔助層，不建議單獨扛完整房地產合規發行。',
  },
];

const research = [
  {
    title: 'AI-Governed Agent Architecture for Web-Trustworthy Tokenization of Alternative Assets (2025)',
    insight: '可借鏡它對資產驗證、合規檢查與異常偵測的論點，把你的平台定位成「可信任的資產發行基礎設施」。',
  },
  {
    title: 'Tokenize Everything, But Can You Sell It? RWA Liquidity Challenges and the Road Ahead (2025)',
    insight: '這類研究提醒你：不只要會上鏈，更要設計二級流動性、退出路徑與持有人溝通機制。',
  },
  {
    title: 'Crypto Market Analysis & Real-Estate Business Protocol Proposal | Application of Ethereum Blockchain (2024)',
    insight: '可作為你解釋房地產交易流程、鏈上結算與投資者介面設計的基礎參考。',
  },
];

const App = () =>
  h('div', { className: 'page-shell' }, [
    h('header', { className: 'hero' }, [
      h('nav', { className: 'nav' }, [
        h('div', { className: 'brand' }, [
          h('span', { className: 'brand-mark' }, 'R'),
          h('div', null, [
            h('strong', null, 'RWA Realty Capital'),
            h('p', null, '把房地產變成全球可投資的數位資產故事'),
          ]),
        ]),
        h('div', { className: 'nav-links' }, ['願景', '資產池', 'ERC 架構', '研究基礎'].map((item) => h('a', { href: '#' }, item))),
      ]),
      h('section', { className: 'hero-content' }, [
        h('div', { className: 'hero-copy' }, [
          h('span', { className: 'eyebrow' }, 'Inspired by RealT / Homebase, rebuilt for a bigger vision'),
          h('h1', null, '打造具有全球影響力的 RWA 房地產投資入口'),
          h('p', null, '這個概念站聚焦「可募資、可投資、可信任、可擴張」四大核心，讓你的品牌不只是賣房產份額，而是建立下一代房地產資本市場介面。'),
          h('div', { className: 'hero-actions' }, [
            h('a', { href: '#properties', className: 'primary-btn' }, '探索旗艦資產'),
            h('a', { href: '#erc', className: 'ghost-btn' }, '查看 ERC 建議'),
          ]),
        ]),
        h('div', { className: 'hero-card' }, [
          h('p', { className: 'card-kicker' }, 'Launch narrative'),
          h('h2', null, '你的第一版網站應該像產品 + 白皮書 + 募資頁'),
          h('ul', null, [
            '用強烈視覺表現資產真實性與城市想像。',
            '公開收益模型、法律架構與退出機制，建立信任。',
            '把研究觀點轉成投資人易懂的內容模組。',
          ].map((item) => h('li', null, item))),
        ]),
      ]),
      h('div', { className: 'metrics-grid' }, metrics.map((item) =>
        h('article', { className: 'metric-card' }, [
          h('strong', null, item.value),
          h('span', null, item.label),
          h('p', null, item.note),
        ])
      )),
    ]),

    h('main', null, [
      h('section', { className: 'section', id: 'vision' }, [
        h('div', { className: 'section-heading' }, [
          h('span', null, 'Brand vision'),
          h('h2', null, '你需要的不是普通房產平台，而是全球資本敘事'),
          h('p', null, '參考 RealT 與 Homebase 的易用性，但品牌層次要更高：更機構化、更國際化、更像下一代資本市場入口。'),
        ]),
        h('div', { className: 'three-col-grid' }, pillars.map((pillar) =>
          h('article', { className: 'glass-card' }, [
            h('h3', null, pillar.title),
            h('p', null, pillar.description),
          ])
        )),
      ]),

      h('section', { className: 'section alt-section', id: 'properties' }, [
        h('div', { className: 'section-heading' }, [
          h('span', null, 'Flagship assets'),
          h('h2', null, '示範性的國際資產池設計'),
          h('p', null, '你可以從 3 個城市、3 種風格切入，建立跨文化與跨市場的品牌辨識度。'),
        ]),
        h('div', { className: 'property-grid' }, properties.map((property) =>
          h('article', { className: 'property-card' }, [
            h('div', { className: 'property-image', 'data-city': property.name.split(' ')[0] }),
            h('div', { className: 'property-body' }, [
              h('h3', null, property.name),
              h('p', { className: 'property-location' }, property.location),
              h('strong', null, property.yield),
              h('p', null, property.blurb),
            ]),
          ])
        )),
      ]),

      h('section', { className: 'section split-section', id: 'erc' }, [
        h('div', { className: 'section-heading' }, [
          h('span', null, 'Token architecture'),
          h('h2', null, 'ERC 智能合約怎麼選？'),
          h('p', null, '如果你要做真正有影響力的房地產 RWA，建議把代幣設計分成「合規發行層」與「流動性/體驗層」。'),
        ]),
        h('div', { className: 'erc-layout' }, [
          h('div', { className: 'erc-list' }, standards.map((standard) =>
            h('article', { className: 'erc-card' }, [
              h('h3', null, standard.name),
              h('p', null, standard.why),
              h('small', null, standard.fit),
            ])
          )),
          h('aside', { className: 'strategy-card' }, [
            h('h3', null, '建議的技術策略'),
            h('ol', null, [
              '主合約以 ERC-3643 或 ERC-1400 承接證券型與合規限制。',
              '每個物件放入 SPV / LLC，鏈上代幣對應受益權或股權。',
              '前端以 React 建立投資者儀表板，串接 KYC、錢包、收益分配與治理模組。',
              '未來若要做大規模資產組合，可加入 ERC-1155 作為多資產份額管理層。',
            ].map((item) => h('li', null, item))),
          ]),
        ]),
      ]),

      h('section', { className: 'section alt-section' }, [
        h('div', { className: 'section-heading' }, [
          h('span', null, 'Research positioning'),
          h('h2', null, '多參考國外論文，讓平台更有公信力'),
          h('p', null, '建議把研究摘要直接變成網站內容模組、投資人 FAQ、媒體 Deck 與白皮書章節。'),
        ]),
        h('div', { className: 'research-grid' }, research.map((paper) =>
          h('article', { className: 'research-card' }, [
            h('h3', null, paper.title),
            h('p', null, paper.insight),
          ])
        )),
      ]),

      h('section', { className: 'section' }, [
        h('div', { className: 'section-heading' }, [
          h('span', null, 'Execution roadmap'),
          h('h2', null, '如果你要非常有影響力，執行節奏要像創投級公司'),
        ]),
        h('div', { className: 'timeline' }, roadmap.map((item, index) =>
          h('div', { className: 'timeline-item' }, [
            h('div', { className: 'timeline-index' }, `0${index + 1}`),
            h('p', null, item),
          ])
        )),
      ]),
    ]),
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(h(App));
