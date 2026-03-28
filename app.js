const { createElement: h, useEffect, useMemo, useState } = React;

const heroStats = [
  { value: 'NT$ 30M', label: '臺灣 STO 小額募資參考門檻', note: 'TPEx FAQ 提及：單次發行累計募資若在 NT$3,000 萬以下，適用現行小額 STO 架構。' },
  { value: 'ERC-3643', label: '主發行層首選', note: '適合 KYC、白名單、資格投資人限制、司法轄區限制與合規轉讓控制。' },
  { value: '24 / 7', label: '投資人數位入口', note: '前端以 React 連接錢包、收益儀表板、文件室與合規流程，打造國際級體驗。' },
];

const academicPapers = [
  {
    title: 'Tokenize Everything, But Can You Sell It? RWA Liquidity Challenges and the Road Ahead (2025)',
    summary: '提醒 RWA 成功關鍵不只是上鏈，而是如何創造可持續的二級流動性、活躍地址與真實交易深度。',
  },
  {
    title: 'Exploration on Real World Assets and Tokenization (2025)',
    summary: '支持你將房地產代幣化定位為提升資產透明度、效率與資產管理精準度的升級工程。',
  },
  {
    title: 'Element and Everything Tokens: Two-Tier Architecture for Mobilizing Alternative Assets (2025)',
    summary: '兩層式代幣架構概念很適合房地產：底層承接權利與合規，上層承接流動性與產品化。',
  },
];

const propertyCollection = [
  {
    city: 'Taipei',
    title: 'Taipei Prime Income Residence',
    thesis: '核心住宅型收益資產',
    return: '5.2%~6.1% 現金流區間',
    detail: '適合建構「合規、穩健、機構可理解」的第一檔旗艦資產，並作為臺灣法規敘事主舞台。',
  },
  {
    city: 'Tokyo',
    title: 'Tokyo Urban Flex Tower',
    thesis: '亞洲都會租賃成長敘事',
    return: '6.5% 預估租金收益',
    detail: '讓品牌看起來不是地方型平台，而是亞洲城市資產入口。',
  },
  {
    city: 'Lisbon',
    title: 'Lisbon Creative Yield House',
    thesis: '創作者 / 數位遊民資產敘事',
    return: '7.0% 預估收益',
    detail: '提升媒體敘事與國際社群擴散能力，增加品牌辨識度。',
  },
];

const contractStack = [
  {
    name: 'ERC-3643',
    tag: 'Primary recommendation',
    why: '最適合房地產 RWA 的主發行層，因為它原生強調身份、資格、白名單與受限制轉讓。',
    implementation: '用來承接 SPV / 信託受益權 / 合規權利映射，並限制未經 KYC 或不符合資格者轉入。',
  },
  {
    name: 'ERC-1400',
    tag: 'Structured rights',
    why: '若你要拆分股權、收益權、債權、回購條款或不同投資人權利，ERC-1400 更彈性。',
    implementation: '適用多層級受益權、不同 tranche、機構 / 專業投資人版本。',
  },
  {
    name: 'ERC-1155',
    tag: 'Portfolio layer',
    why: '當平台從單物件走向多物件、多批次、多城市組合資產時，ERC-1155 能大幅降低管理成本。',
    implementation: '可作為多資產份額容器，不宜單獨承接完整合規證券邏輯。',
  },
  {
    name: 'ERC-20',
    tag: 'Utility / rewards layer',
    why: '適合承接社群激勵、治理積分、忠誠度機制或收益憑證化輔助模組。',
    implementation: '建議作為輔助層，不建議單獨代表臺灣法規下的房地產證券型權利。',
  },
];

const taiwanRules = [
  {
    title: 'AML 登記與 VASP 控管',
    text: '若平台提供虛擬資產服務，設計上應預留 AML/CFT、客戶識別、實質受益人辨識、交易紀錄與可疑交易監控能力。',
  },
  {
    title: 'STO 小額募資框架',
    text: 'TPEx FAQ 顯示，現行小額 STO 架構對發行金額、投資人資格、平台型態與揭露義務有明確要求。你的產品頁與後台必須原生支援這些限制。',
  },
  {
    title: '真名制與風險揭露',
    text: '投資流程應包含真實姓名驗證、風險揭露、投資人資格判斷，以及指定金融帳戶對應的作業設計。',
  },
  {
    title: '避免直接宣稱「已合法」',
    text: '網站較安全的說法應是「依臺灣法遵路徑設計」或「臺灣法遵準備就緒」，實際上線前仍須由律師、券商、會計師與資訊安全顧問共同確認。',
  },
];

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Legal-first product design',
    detail: '先確認臺灣採 STO / sandbox / 海外發行回臺銷售限制哪一條路，再決定產品文案、錢包流程與合約限制。',
  },
  {
    phase: 'Phase 2',
    title: 'Investor onboarding stack',
    detail: '串接錢包、KYC、風險屬性問卷、專業投資人資格判定與文件簽署。',
  },
  {
    phase: 'Phase 3',
    title: 'Asset issuance + disclosure room',
    detail: '建立物件揭露室、估值報告、SPV 結構圖、收益分配規則與投資後治理儀表板。',
  },
  {
    phase: 'Phase 4',
    title: 'Secondary transfer controls',
    detail: '加入轉讓限制、白名單檢查、持有人限制、合格投資人條件與稽核日誌。',
  },
];

function useWallet() {
  const [account, setAccount] = useState('');
  const [chainId, setChainId] = useState('');
  const [status, setStatus] = useState('尚未連接錢包');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts) => {
      setAccount(accounts?.[0] || '');
      setStatus(accounts?.length ? '錢包已連接，可進一步進行 KYC / 投資資格檢查。' : '已中斷錢包連接');
    };

    const handleChainChanged = (nextChainId) => {
      setChainId(nextChainId || '');
    };

    window.ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch(() => {});
    window.ethereum.request({ method: 'eth_chainId' }).then(handleChainChanged).catch(() => {});

    window.ethereum.on?.('accountsChanged', handleAccountsChanged);
    window.ethereum.on?.('chainChanged', handleChainChanged);

    return () => {
      window.ethereum.removeListener?.('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener?.('chainChanged', handleChainChanged);
    };
  }, []);

  const connectWallet = async () => {
    setError('');

    if (!window.ethereum) {
      setStatus('未偵測到 EIP-1193 錢包');
      setError('請安裝 MetaMask 或其他支援 EIP-1193 的錢包。');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
      setAccount(accounts?.[0] || '');
      setChainId(currentChainId || '');
      setStatus('錢包已成功連接');
    } catch (err) {
      setStatus('錢包連接失敗');
      setError(err?.message || '請稍後再試。');
    }
  };

  const shortAccount = useMemo(() => {
    if (!account) return '未連接';
    return `${account.slice(0, 6)}...${account.slice(-4)}`;
  }, [account]);

  return { account, chainId, shortAccount, status, error, connectWallet };
}

function SectionHeading({ badge, title, body }) {
  return h('div', { className: 'section-heading' }, [
    h('span', null, badge),
    h('h2', null, title),
    h('p', null, body),
  ]);
}

function WalletPanel() {
  const { shortAccount, chainId, status, error, connectWallet } = useWallet();

  return h('section', { className: 'wallet-panel card' }, [
    h('div', { className: 'wallet-panel__header' }, [
      h('div', null, [
        h('p', { className: 'kicker' }, 'Investor access'),
        h('h3', null, '連接錢包並準備進入合規投資流程'),
      ]),
      h('button', { className: 'primary-btn', onClick: connectWallet, type: 'button' }, 'Connect Wallet'),
    ]),
    h('div', { className: 'wallet-grid' }, [
      h('div', { className: 'wallet-metric' }, [h('span', null, 'Wallet'), h('strong', null, shortAccount)]),
      h('div', { className: 'wallet-metric' }, [h('span', null, 'Chain ID'), h('strong', null, chainId || '未偵測')]),
      h('div', { className: 'wallet-metric' }, [h('span', null, 'Status'), h('strong', null, status)]),
    ]),
    error ? h('p', { className: 'error-text' }, error) : null,
    h('div', { className: 'wallet-checklist' }, [
      h('label', null, [h('input', { type: 'checkbox', disabled: true }), h('span', null, 'KYC / AML 驗證完成後才可進入申購')]),
      h('label', null, [h('input', { type: 'checkbox', disabled: true }), h('span', null, '專業投資人 / 合格投資人資格檢查')]),
      h('label', null, [h('input', { type: 'checkbox', disabled: true }), h('span', null, '臺灣法定揭露文件與風險聲明簽署')]),
    ]),
  ]);
}

function App() {
  return h('div', { className: 'page-shell' }, [
    h('header', { className: 'hero' }, [
      h('nav', { className: 'nav' }, [
        h('div', { className: 'brand' }, [
          h('div', { className: 'brand-mark' }, 'RC'),
          h('div', null, [
            h('strong', null, 'RWA Realty Capital'),
            h('p', null, 'Taiwan-ready tokenized real estate platform concept'),
          ]),
        ]),
        h('div', { className: 'nav-links' }, ['平台戰略', '資產池', '錢包接入', '台灣法遵', 'ERC 架構'].map((item) => h('a', { href: '#' }, item))),
      ]),

      h('div', { className: 'hero-layout' }, [
        h('section', { className: 'hero-copy' }, [
          h('div', { className: 'eyebrow' }, 'Research-driven real estate tokenization platform'),
          h('h1', null, '做一個真正能打國際市場、也能面對臺灣法規的 RWA 房地產網站'),
          h('p', null, '這次不是只做 landing page，而是把品牌、募資、合規、投資人 onboarding、ERC 合約架構與錢包入口整合成一個更接近可落地產品的專業原型。'),
          h('div', { className: 'hero-actions' }, [
            h('a', { className: 'primary-btn', href: '#wallet' }, '查看錢包與申購流程'),
            h('a', { className: 'ghost-btn', href: '#compliance' }, '查看臺灣法遵重點'),
          ]),
        ]),
        h('aside', { className: 'hero-aside card' }, [
          h('p', { className: 'kicker' }, 'Platform thesis'),
          h('h2', null, '參考 RealT / Homebase，但升級成機構級 RWA 發行與投資介面'),
          h('ul', null, [
            '前台：更高級的國際資產敘事與投資人教育。',
            '中台：KYC、文件揭露、收益分配與持有人治理。',
            '合約層：ERC-3643 / ERC-1400 承接受限制權利。',
            '法遵層：以臺灣 STO / AML / 真名制邏輯規劃產品流程。',
          ].map((item) => h('li', null, item))),
        ]),
      ]),

      h('div', { className: 'stats-grid' }, heroStats.map((item) =>
        h('article', { className: 'stat-card card' }, [
          h('strong', null, item.value),
          h('span', null, item.label),
          h('p', null, item.note),
        ])
      )),
    ]),

    h('main', null, [
      h('section', { className: 'section' }, [
        h(SectionHeading, {
          badge: 'Strategic direction',
          title: '專業版網站應該同時滿足品牌、募資與法遵三件事',
          body: '如果你真的想做出有影響力的平台，頁面不能只停留在視覺層，而是要讓投資人、法務、顧問與合作券商都看得懂你的架構。',
        }),
        h('div', { className: 'insight-grid' }, [
          h('article', { className: 'card insight-card' }, [
            h('h3', null, 'Institutional credibility'),
            h('p', null, '把房地產標的、估值邏輯、SPV 架構、收益分配與風險揭露做成像基金募集頁的內容密度。'),
          ]),
          h('article', { className: 'card insight-card' }, [
            h('h3', null, 'On-chain control design'),
            h('p', null, '限制轉讓、白名單、司法轄區控管、投資人身份校驗，應從第一天就被設計進智能合約與前端流程。'),
          ]),
          h('article', { className: 'card insight-card' }, [
            h('h3', null, 'Media-grade influence'),
            h('p', null, '你的網站要能同時說服創投、家辦、媒體、開發商與律師團隊，這才是真正有影響力。'),
          ]),
        ]),
      ]),

      h('section', { className: 'section alt-section', id: 'assets' }, [
        h(SectionHeading, {
          badge: 'Flagship asset strategy',
          title: '以跨城市資產池建立全球品牌，而非單一建案頁',
          body: '旗艦資產池能夠讓平台更像「資本市場入口」，而不是單純房產眾籌頁。',
        }),
        h('div', { className: 'property-grid' }, propertyCollection.map((property) =>
          h('article', { className: 'card property-card' }, [
            h('div', { className: 'property-visual', 'data-city': property.city }),
            h('div', { className: 'property-body' }, [
              h('p', { className: 'property-thesis' }, property.thesis),
              h('h3', null, property.title),
              h('strong', null, property.return),
              h('p', null, property.detail),
            ]),
          ])
        )),
      ]),

      h('section', { className: 'section', id: 'wallet' }, [
        h(SectionHeading, {
          badge: 'Wallet onboarding',
          title: '前端已加入錢包連接能力，作為合規投資流程入口',
          body: '此版本已具備 EIP-1193 錢包連接能力，可偵測帳戶與鏈資訊。後續可再擴充成「連接錢包 → KYC → 文件簽署 → 合格投資人判定 → 可申購資產」的正式流程。',
        }),
        h(WalletPanel),
      ]),

      h('section', { className: 'section alt-section', id: 'compliance' }, [
        h(SectionHeading, {
          badge: 'Taiwan compliance readiness',
          title: '網站內容改成「臺灣法遵準備就緒」而不是直接宣稱完全合法',
          body: '這樣的表述更專業也更安全。房地產 RWA 在臺灣通常會牽涉證券性質判斷、STO 規則、AML 登記、真名制、投資人資格限制與資訊揭露義務。',
        }),
        h('div', { className: 'compliance-grid' }, [
          h('div', { className: 'card rule-list' }, taiwanRules.map((rule) =>
            h('article', { className: 'rule-item' }, [
              h('h3', null, rule.title),
              h('p', null, rule.text),
            ])
          )),
          h('aside', { className: 'card compliance-note' }, [
            h('p', { className: 'kicker' }, 'Taiwan design signals'),
            h('h3', null, '建議前端一定要原生支援的法遵訊號'),
            h('ul', null, [
              '投資人真實姓名與錢包地址綁定。',
              '申購前風險揭露與電子簽署。',
              '專業投資人資格檢查與額度控制。',
              '僅限白名單地址收受或轉讓證券型代幣。',
              '揭露文件室：估值、SPV、現金流、重大事件公告。',
            ].map((item) => h('li', null, item))),
            h('p', { className: 'disclaimer' }, '注意：本頁面提供產品設計方向，不構成法律意見；正式上線前仍需由臺灣律師、會計師、券商與資安團隊逐項確認。'),
          ]),
        ]),
      ]),

      h('section', { className: 'section', id: 'erc' }, [
        h(SectionHeading, {
          badge: 'Smart contract strategy',
          title: '房地產 RWA 的 ERC 選型，建議採兩層式架構',
          body: '合規發行層與產品體驗層分離，會比單一代幣承接全部責任更穩定，也更符合論文中常見的 tokenization stack 思路。',
        }),
        h('div', { className: 'contract-grid' }, contractStack.map((item) =>
          h('article', { className: 'card contract-card' }, [
            h('div', { className: 'contract-card__header' }, [
              h('h3', null, item.name),
              h('span', null, item.tag),
            ]),
            h('p', null, item.why),
            h('small', null, item.implementation),
          ])
        )),
      ]),

      h('section', { className: 'section alt-section' }, [
        h(SectionHeading, {
          badge: 'Academic positioning',
          title: '把國外研究變成產品戰略，而不是只放幾個名詞',
          body: '真正專業的做法，是把論文中的流動性、透明度、分層架構與風險管理觀點轉譯成產品功能。',
        }),
        h('div', { className: 'paper-grid' }, academicPapers.map((paper) =>
          h('article', { className: 'card paper-card' }, [
            h('h3', null, paper.title),
            h('p', null, paper.summary),
          ])
        )),
      ]),

      h('section', { className: 'section' }, [
        h(SectionHeading, {
          badge: 'Execution roadmap',
          title: '下一步應該怎麼落地',
          body: '先用這個專業版原型對齊品牌與合規方向，再進入真正的 MVP 與法遵整備。',
        }),
        h('div', { className: 'roadmap-list' }, roadmap.map((item) =>
          h('article', { className: 'card roadmap-item' }, [
            h('div', { className: 'roadmap-phase' }, item.phase),
            h('div', null, [
              h('h3', null, item.title),
              h('p', null, item.detail),
            ]),
          ])
        )),
      ]),
    ]),
  ]);
}

ReactDOM.createRoot(document.getElementById('root')).render(h(App));
