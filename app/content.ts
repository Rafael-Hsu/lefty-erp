export type ContentFaq = { question: string; answer: string };

export type SolutionPage = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  answer: string;
  suitableFor: string[];
  problems: string[];
  deliverables: string[];
  steps: string[];
  faqs: ContentFaq[];
};

export type GuidePage = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  answer: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  relatedSolutions: string[];
  relatedGuides?: string[];
  publishedAt?: string;
  updatedAt?: string;
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "erp-system",
    eyebrow: "CUSTOM ERP",
    title: "客製 ERP 系統開發",
    summary: "把訂單、採購、庫存、帳務與專案資訊整合成符合企業實際流程的營運系統。",
    answer: "客製 ERP 適合流程已有獨特性、資料分散在多個工具，或套裝軟體需要大量妥協的企業。重點不是一次做滿所有功能，而是先找出跨部門最常重工、最影響營運的流程，分階段導入。",
    suitableFor: ["以 Excel、表單與通訊軟體管理核心流程", "跨部門資料重複輸入或版本不一致", "套裝 ERP 無法貼合報價、專案或結算規則", "需要串接既有會計、電商或倉儲工具"],
    problems: ["訂單到出貨缺乏單一進度", "庫存與採購資訊不同步", "權限與簽核仰賴人工追蹤", "管理報表需要人工彙整"],
    deliverables: ["流程盤點與系統藍圖", "角色權限與簽核規則", "訂單、採購與庫存模組", "營運儀表板與資料匯出", "既有系統 API 串接", "上線教育與迭代規劃"],
    steps: ["確認商業目標與優先流程", "設計資料結構與操作原型", "以可驗收的模組分批開發", "導入真實資料並測試權限", "上線觀察後持續優化"],
    faqs: [
      { question: "客製 ERP 一定要取代現有會計系統嗎？", answer: "不一定。多數情況可保留成熟的會計工具，透過匯入匯出或 API 串接，讓 ERP 聚焦在營運流程與跨部門協作。" },
      { question: "導入時要一次完成所有模組嗎？", answer: "不建議。先從高頻、高錯誤率或最影響現金流的流程開始，較容易控制風險，也能讓團隊提早獲得效益。" },
    ],
  },
  {
    slug: "crm-system",
    eyebrow: "CUSTOMER OPERATIONS",
    title: "CRM 客戶管理系統",
    summary: "集中名單、互動、報價與跟進紀錄，讓業務與行銷使用同一份客戶資料。",
    answer: "CRM 的價值不是多一個填資料的工具，而是建立清楚的客戶階段、跟進責任與下一步。適合名單來自多個管道、交接容易遺漏，或管理者看不見銷售進度的團隊。",
    suitableFor: ["名單來自廣告、官網、LINE 或活動", "業務跟進紀錄散落在個人筆記", "報價後缺少標準追蹤節奏", "需要分析來源、轉換率與成交週期"],
    problems: ["重複名單與資料不完整", "客戶狀態定義不一致", "交接後無法掌握歷史互動", "行銷與業務成效無法串聯"],
    deliverables: ["客戶與聯絡人資料模型", "銷售漏斗與跟進任務", "表單及廣告名單整合", "報價與互動紀錄", "自動提醒與分派", "來源與轉換儀表板"],
    steps: ["定義理想客戶旅程", "整理名單來源與欄位", "建立銷售階段與責任", "串接表單與通知管道", "依轉換數據調整流程"],
    faqs: [
      { question: "小型團隊也需要 CRM 嗎？", answer: "當名單數量已經讓人容易忘記跟進，或客戶資訊不能只存在某位同事腦中時，就值得導入。規模小反而適合從簡單流程開始。" },
      { question: "CRM 可以與 LINE 或 Email 串接嗎？", answer: "可以，但串接方式取決於帳號類型、平台 API 與同意管理。規劃時應先確認真正需要同步的事件與資料。" },
    ],
  },
  {
    slug: "inventory-system",
    eyebrow: "INVENTORY CONTROL",
    title: "進銷存與庫存系統",
    summary: "整合商品、倉庫、採購、銷售與盤點，降低缺貨、超賣與人工對帳。",
    answer: "進銷存系統適合 SKU、倉庫或銷售通路增加後，無法再靠單一試算表維持即時庫存的企業。設計時必須先統一品號、庫存事件與成本規則，再談自動化。",
    suitableFor: ["同時經營官網、平台與實體通路", "有多倉、多規格或組合商品", "採購與安全庫存仰賴人工判斷", "盤點差異或退換貨難追蹤"],
    problems: ["各通路庫存不同步", "品號與商品名稱不一致", "採購時機缺乏依據", "退貨、調撥與盤點沒有軌跡"],
    deliverables: ["商品與 SKU 主檔", "多倉庫存與異動紀錄", "採購及進貨流程", "銷售與出貨整合", "盤點、退貨與調撥", "庫存預警與分析"],
    steps: ["盤點商品與倉儲規則", "建立統一品號與事件", "確認通路同步方式", "以真實庫存進行測試", "分倉或分通路逐步上線"],
    faqs: [
      { question: "庫存系統能完全避免帳實不符嗎？", answer: "系統能保留完整異動軌跡並減少人工錯誤，但仍需要清楚的收貨、出貨、退貨與盤點制度配合。" },
      { question: "可以串接電商平台嗎？", answer: "多數主流平台可透過 API、Webhook 或排程匯入串接；可同步的欄位與頻率需依平台權限確認。" },
    ],
  },
  {
    slug: "marketing-automation",
    eyebrow: "MARKETING AUTOMATION",
    title: "行銷自動化整合",
    summary: "串接廣告、表單、CRM、LINE 與 Email，讓名單依條件自動分流與持續培育。",
    answer: "行銷自動化不是大量發送訊息，而是根據使用者同意、來源與行為，在適當時間觸發下一步。適合已有穩定流量或名單，但跟進速度與分眾仍依賴人工的企業。",
    suitableFor: ["廣告名單需要人工下載與分派", "不同客群收到相同訊息", "活動後沒有持續培育流程", "無法追溯成交來自哪個管道"],
    problems: ["名單回覆速度慢", "分眾條件不一致", "跨平台資料無法對應", "只看點擊，無法連結營收"],
    deliverables: ["名單來源與同意管理", "自動分眾與標籤", "通知與培育流程", "CRM 任務與分派", "轉換事件追蹤", "跨管道成效儀表板"],
    steps: ["定義轉換與同意規則", "盤點可用資料與平台", "設計觸發條件及例外", "小流量測試訊息流程", "依轉換結果持續調整"],
    faqs: [
      { question: "沒有 CRM 可以先做自動化嗎？", answer: "可以先從表單、通知或簡單名單庫開始，但若流程涉及多人跟進與長期培育，仍建議建立一致的客戶資料中心。" },
      { question: "自動化會不會讓溝通變得很制式？", answer: "會不會制式取決於分眾與內容設計。好的自動化處理重複動作，並把需要判斷的時刻交回真人。" },
    ],
  },
  {
    slug: "member-platform",
    eyebrow: "MEMBER EXPERIENCE",
    title: "會員與電商平台",
    summary: "把品牌內容、會員資料、訂單與服務流程整合成可持續經營的數位體驗。",
    answer: "會員平台適合需要登入後內容、分級權益、預約、課程、訂閱或專屬交易流程的品牌。規劃重點是會員加入後能獲得什麼持續價值，而不只是蒐集更多資料。",
    suitableFor: ["需要會員分級或專屬權益", "一般購物車無法支援服務流程", "內容、課程、預約與付款需要整合", "希望累積第一方會員資料"],
    problems: ["會員加入後沒有持續互動", "權益與資格依靠人工核對", "訂單和服務紀錄分離", "平台限制品牌體驗"],
    deliverables: ["會員註冊與登入", "分級、標籤與權益", "內容或商品管理", "訂單、付款與通知", "預約或服務流程", "會員行為與留存分析"],
    steps: ["定義會員價值與商業模式", "設計註冊及使用旅程", "確認付款與第三方服務", "分階段開放核心功能", "觀察留存與使用行為"],
    faqs: [
      { question: "一定要自己開發會員平台嗎？", answer: "不一定。若需求接近標準電商，可先使用成熟平台；當權益、流程或資料整合成為核心競爭力時，再考慮客製。" },
      { question: "會員資料可以拿來做行銷嗎？", answer: "需要依蒐集目的、使用者同意與適用法規管理，並提供清楚的隱私權說明與取消方式。" },
    ],
  },
  {
    slug: "system-integration",
    eyebrow: "SYSTEM INTEGRATION",
    title: "API 與系統整合",
    summary: "讓既有網站、ERP、CRM、會計、電商與通訊工具交換必要資料，減少重複輸入。",
    answer: "系統整合適合單一工具都能使用，但資料必須在不同平台間人工搬運的企業。整合前應先定義哪個系統是資料主檔、何時同步，以及失敗時如何補償。",
    suitableFor: ["相同資料在多個平台重複建立", "電商訂單需要人工輸入 ERP", "表單名單無法自動進入 CRM", "管理報表需跨系統彙整"],
    problems: ["資料來源與責任不清", "同步失敗沒有告警", "欄位格式與編碼不一致", "過度串接造成維護困難"],
    deliverables: ["資料流與主檔設計", "API、Webhook 或批次同步", "欄位轉換與驗證", "錯誤告警與重試", "權限及憑證管理", "整合監控與技術文件"],
    steps: ["確認系統能力與 API 限制", "定義主檔與同步方向", "處理欄位、權限與例外", "使用測試資料驗證", "監控上線並建立告警"],
    faqs: [
      { question: "沒有 API 的系統也能整合嗎？", answer: "可能可用檔案交換、資料庫介接或自動化工具，但穩定性與安全性不同，需要評估維護成本，不能保證所有系統都適合。" },
      { question: "整合後資料會即時同步嗎？", answer: "不一定。可依需求採即時事件、短週期排程或每日批次；頻率越高，通常對可靠性與監控要求也越高。" },
    ],
  },
];

export const guidePages: GuidePage[] = [
  {
    slug: "when-does-a-business-need-erp",
    category: "ERP 導入",
    title: "中小企業什麼時候需要 ERP？",
    summary: "判斷企業是否該從 Excel 與人工流程升級成 ERP 的五個訊號。",
    answer: "當核心資料開始重複輸入、跨部門版本不一致、營運報表無法即時產出，或新進人員必須依賴特定同事才能完成工作時，就應評估 ERP。員工人數不是唯一標準，流程複雜度與錯誤成本更重要。",
    sections: [
      { heading: "五個常見訊號", paragraphs: ["ERP 的導入時機通常不是 Excel 完全不能用，而是維持現況的隱性成本已經高於改善成本。"], bullets: ["同一筆訂單在兩個以上檔案重複輸入", "庫存、報價或進度經常出現不同版本", "管理報表需要花數天人工彙整", "流程只有少數資深同事知道", "錯誤已開始影響交期、現金流或客戶體驗"] },
      { heading: "先系統化，還是先整理流程？", paragraphs: ["先整理流程。若權責、例外與資料定義尚未釐清，系統只會把混亂加速。可先挑一條高頻流程，建立共同欄位與責任，再決定適合的工具。"] },
      { heading: "最小可行的導入方式", paragraphs: ["從訂單到出貨、採購到付款，或報價到收款等一條端到端流程開始。先確保團隊願意使用、資料可追溯，再增加模組。"] },
    ], relatedSolutions: ["erp-system", "inventory-system"],
  },
  {
    slug: "custom-vs-off-the-shelf-erp",
    category: "選型比較",
    title: "客製 ERP 與套裝 ERP 怎麼選？",
    summary: "從流程差異、導入速度、成本與維護責任比較兩種方案。",
    answer: "流程接近業界標準、希望快速上線且可接受調整工作方式，通常先選套裝 ERP；若獨特流程直接影響競爭力、需深度整合既有工具，或套裝系統需要大量繞路，才適合客製。",
    sections: [
      { heading: "套裝 ERP 的優勢", paragraphs: ["功能成熟、導入方法清楚、初期選擇較多，適合願意採用標準流程的企業。"], bullets: ["上線速度通常較快", "常見財會與進銷存功能完整", "教育訓練與顧問資源較容易取得"] },
      { heading: "客製 ERP 的優勢", paragraphs: ["能按照實際角色、資料與例外設計，並與既有系統整合。但企業也必須承擔產品決策與長期維護責任。"], bullets: ["貼合差異化營運流程", "介面與權限可依團隊設計", "整合彈性較高"] },
      { heading: "判斷原則", paragraphs: ["不要只比第一年的報價。應把授權、顧問、流程改造、資料移轉、整合、教育與五年維護一起比較。"] },
    ], relatedSolutions: ["erp-system", "system-integration"],
  },
  {
    slug: "erp-cost-estimation",
    category: "預算規劃",
    title: "ERP 建置費用如何估算？",
    summary: "理解影響系統預算的核心因素，避免只用頁數或功能數估價。",
    answer: "ERP 費用主要受使用角色、流程與例外數量、資料移轉、第三方串接、權限稽核及上線支援影響。合理估算需要先完成需求盤點，再將專案拆成可驗收階段；在資訊不足時給出單一總價，通常風險較高。",
    sections: [
      { heading: "六個主要成本來源", paragraphs: ["相同名稱的 ERP，企業內部複雜度可能完全不同。"], bullets: ["使用者角色與權限層級", "核心流程與例外規則", "歷史資料清理與移轉", "會計、電商或物流串接", "報表與稽核要求", "教育、維運與服務水準"] },
      { heading: "如何降低第一階段預算", paragraphs: ["先完成最影響營運的一條流程，保留可擴充架構；延後低頻例外、進階報表與非必要整合。這比刪除測試或文件更安全。"] },
      { heading: "詢價前應準備什麼？", paragraphs: ["準備目前流程圖、使用角色、主要表單、資料量、必須串接的系統與希望改善的衡量方式，報價會更接近真實範圍。"] },
    ], relatedSolutions: ["erp-system"],
  },
  {
    slug: "excel-to-business-system",
    category: "流程數位化",
    title: "Excel 什麼時候該升級成系統？",
    summary: "Excel 仍然好用，但不適合承擔所有多人協作、權限與流程責任。",
    answer: "當試算表需要多人同時維護、包含大量人工檢查、必須追蹤誰在何時修改，或錯誤會直接影響訂單與金流時，就應把核心流程移到系統。分析與臨時整理仍可保留 Excel。",
    sections: [
      { heading: "Excel 適合的工作", paragraphs: ["一次性分析、快速試算、原型欄位與個人資料整理，都是 Excel 的強項。"] },
      { heading: "系統更適合的工作", paragraphs: ["需要多人權限、狀態流轉、唯一編號、自動通知、歷程追蹤與跨工具同步的流程，通常應由系統承擔。"] },
      { heading: "不要一次搬走所有試算表", paragraphs: ["先辨認哪些檔案代表正式紀錄，哪些只是個人分析。只將需要共同維護與追溯的資料納入第一階段。"] },
    ], relatedSolutions: ["erp-system", "system-integration"],
  },
  {
    slug: "crm-erp-inventory-differences",
    category: "系統觀念",
    title: "CRM、ERP 與進銷存有什麼不同？",
    summary: "用資料對象與管理目標理解三類企業系統的差異。",
    answer: "CRM 主要管理客戶關係與銷售機會；ERP 管理跨部門資源與營運流程；進銷存聚焦商品的採購、銷售與庫存。三者可能重疊，但應先依企業最需要改善的資料與流程選擇。",
    sections: [
      { heading: "CRM：從名單到成交", paragraphs: ["核心資料是客戶、聯絡人、互動、商機與跟進任務，目標是提升回覆、轉換與關係延續。"] },
      { heading: "ERP：從訂單到營運", paragraphs: ["核心資料跨越銷售、採購、庫存、專案、成本與財務，目標是建立一致的作業與管理資訊。"] },
      { heading: "進銷存：從商品到庫存", paragraphs: ["核心資料是商品、倉庫、採購、銷售與庫存異動，目標是降低缺貨、超賣與盤點差異。"] },
      { heading: "是否需要三套系統？", paragraphs: ["不一定。小型企業可由一套系統覆蓋核心需求；流程複雜後再以清楚的主檔與 API 分工，避免重複資料。"] },
    ], relatedSolutions: ["crm-system", "erp-system", "inventory-system"],
  },
  {
    slug: "why-digital-transformation-fails",
    category: "導入管理",
    title: "數位系統導入為什麼會失敗？",
    summary: "常見失敗原因通常不是程式寫不出來，而是目標、責任與採用方式不清楚。",
    answer: "系統導入常因目標過大、需求只由管理層決定、例外流程未被看見、資料品質不足，以及上線後缺少負責人而失敗。成功的關鍵是可衡量目標、第一線參與、分階段驗收與持續改善。",
    sections: [
      { heading: "一開始就想解決所有問題", paragraphs: ["範圍越大，需求衝突與等待時間越多。先選一個能看見成果的流程，可以更早驗證方向。"] },
      { heading: "只問主管，不問實際使用者", paragraphs: ["主管了解目標，第一線了解例外與細節。兩種視角都必須進入設計，否則系統容易看起來合理但無法操作。"] },
      { heading: "把上線當成結案", paragraphs: ["使用習慣、資料品質與流程責任會在上線後才真正浮現。應預留觀察、教育、修正與版本管理。"] },
    ], relatedSolutions: ["erp-system", "system-integration"],
  },
  {
    slug: "line-ecommerce-accounting-integration",
    category: "系統整合",
    title: "如何串接 LINE、電商與會計系統？",
    summary: "先定義事件、主檔與責任，再選擇 API、Webhook 或批次交換。",
    answer: "串接前應先決定客戶、商品、訂單與付款各自以哪個系統為主檔，再定義新訂單、付款完成、出貨或退款等事件。能即時處理的流程可用 API 或 Webhook，其餘可採排程同步。",
    sections: [
      { heading: "先畫資料流，不要先接 API", paragraphs: ["列出每筆資料從哪裡建立、誰能修改、需要送往哪裡，以及同步失敗的處理方式。"] },
      { heading: "常見整合事件", paragraphs: ["新會員、表單提交、新訂單、付款完成、庫存變更、出貨、取消與退款，通常是跨平台自動化的核心事件。"] },
      { heading: "權限與個資", paragraphs: ["只傳遞完成流程所需的最少資料，妥善保管 API 憑證，並確認行銷訊息與個資使用取得適當同意。"] },
    ], relatedSolutions: ["system-integration", "marketing-automation"],
  },
  {
    slug: "crm-implementation-checklist",
    category: "CRM 導入",
    title: "CRM 導入前要準備什麼？",
    summary: "從客戶階段、欄位、來源與責任建立可被團隊採用的 CRM。",
    answer: "導入 CRM 前，應先統一什麼是有效名單、各銷售階段的進入與離開條件、必要欄位、跟進責任與結案原因。若只把舊資料搬進新工具，通常無法改善銷售流程。",
    sections: [
      { heading: "定義共同語言", paragraphs: ["潛在客戶、有效商機、報價中、成交與流失必須有可判斷的條件，而不是依每位業務感覺。"] },
      { heading: "控制必要欄位", paragraphs: ["欄位越多不代表資料越好。只要求能支持分派、跟進與分析的資訊，其餘在關係深化時逐步補充。"] },
      { heading: "設計使用節奏", paragraphs: ["明確規定何時建立紀錄、多久更新一次、誰檢查未跟進名單，以及每週會議看哪些指標。"] },
    ], relatedSolutions: ["crm-system", "marketing-automation"],
  },
  {
    slug: "inventory-system-selection",
    category: "進銷存",
    title: "進銷存系統怎麼選？",
    summary: "從商品、倉庫、通路與成本規則選擇真正適合的庫存工具。",
    answer: "選進銷存系統時，先確認 SKU 與組合商品、多倉調撥、批號或效期、退換貨、成本計算，以及電商與物流串接需求。不要只看功能清單，應用真實訂單完成一次端到端測試。",
    sections: [
      { heading: "先整理商品主檔", paragraphs: ["統一品號、名稱、規格、單位與條碼，是任何庫存系統能否穩定運作的前提。"] },
      { heading: "用例外流程測試", paragraphs: ["除了正常出貨，也要測試取消、部分出貨、換貨、組合拆解、跨倉調撥與盤點差異。"] },
      { heading: "確認通路同步邏輯", paragraphs: ["需確認平台是否提供 API、同步頻率、超賣時如何處理，以及哪個系統才是可售庫存的最終依據。"] },
    ], relatedSolutions: ["inventory-system", "system-integration"],
  },
  {
    slug: "marketing-automation-first-workflow",
    category: "行銷自動化",
    title: "行銷自動化應該先做哪一條流程？",
    summary: "從高意圖、可衡量且容易遺漏的名單跟進開始。",
    answer: "第一條自動化通常應選擇高意圖且時間敏感的情境，例如諮詢表單送出後的即時通知、名單分派與首次回覆提醒。它比複雜的長期培育更容易衡量，也能快速降低漏接。",
    sections: [
      { heading: "好的第一條流程具備什麼？", paragraphs: ["事件明確、資料取得合法、執行頻率高、目前容易遺漏，而且成果能以回覆時間或完成率衡量。"] },
      { heading: "基本流程範例", paragraphs: ["使用者提交表單後，系統確認同意與欄位，依地區或需求分派負責人，同時寄出確認訊息；若一定時間未處理，再提醒主管。"] },
      { heading: "不要忽略例外", paragraphs: ["重複名單、無效聯絡方式、夜間提交、退訂與負責人休假，都需要明確處理規則。"] },
    ], relatedSolutions: ["marketing-automation", "crm-system"],
  },
  {
    slug: "erp-implementation-timeline",
    category: "ERP 導入",
    title: "ERP 導入需要多久？中小企業時程怎麼排？",
    summary: "用流程數量、資料品質、串接範圍與決策速度，估算中小企業 ERP 的合理導入時程。",
    answer: "中小企業 ERP 導入通常應以階段估算，而不是只問一個總工期。單一核心流程約可用 8 至 12 週完成盤點、設計、開發與試運行；若包含多部門、舊資料移轉或外部 API 串接，通常需要 3 至 6 個月以上。真正影響時程的，常是需求決策與資料整理速度。",
    sections: [
      { heading: "先用四個變因估算", paragraphs: ["評估要納入幾條流程、多少種使用角色、舊資料是否乾淨，以及需要串接哪些外部平台。功能頁數不是可靠的工期單位，流程例外與驗收責任才是。"], bullets: ["核心流程與例外情境數量", "使用者角色、權限與簽核層級", "舊資料格式與清理難度", "API、會計、電商或物流串接範圍"] },
      { heading: "一個務實的四階段時程", paragraphs: ["先用 1 至 2 週盤點目標與流程，再用 2 至 4 週完成原型與資料結構。開發應切成可驗收模組，最後保留真實資料測試、教育與平行運作時間。"] },
      { heading: "怎麼避免時程一直延後？", paragraphs: ["每一階段都要有單一決策人、明確驗收條件與變更紀錄。新需求可進入下一版，不要在接近上線時持續擴大第一階段範圍。"] },
    ],
    relatedSolutions: ["erp-system", "system-integration"],
    relatedGuides: ["erp-data-migration-checklist", "system-requirements-document", "erp-cost-estimation"],
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
  },
  {
    slug: "system-requirements-document",
    category: "需求規劃",
    title: "客製系統需求書怎麼寫？",
    summary: "把目標、使用角色、流程、資料與驗收方式寫清楚，讓需求書能支持估價與開發。",
    answer: "好的系統需求書不必先寫技術規格，而要清楚回答：為什麼要做、誰會使用、目前流程如何運作、哪些例外必須處理，以及完成後如何驗收。先描述真實工作情境，再由開發團隊轉成資料結構與技術方案，通常比直接列功能名稱更準確。",
    sections: [
      { heading: "需求書至少要有六項內容", paragraphs: ["每項需求都應能對應一個商業目標與使用情境。若只寫『需要會員管理』，不同人對範圍的理解很容易完全不同。"], bullets: ["要改善的問題與衡量指標", "使用者角色與權限", "目前流程與期望流程", "輸入、輸出與必要欄位", "例外情境與錯誤處理", "可被測試的驗收條件"] },
      { heading: "用情境描述取代模糊功能", paragraphs: ["例如把『自動通知』改寫成：新諮詢送出後 5 分鐘內，依服務類型指派負責人，並在 LINE 通知；若 24 小時未處理，再提醒主管。這樣才能估算規則、資料與串接。"] },
      { heading: "先排優先級，再請廠商估價", paragraphs: ["將需求分成第一階段必須、上線後應該與未來可選。估價時要求每一階段列出交付項目、前提與不包含範圍，才能公平比較方案。"] },
    ],
    relatedSolutions: ["erp-system", "custom-web-app", "system-integration"],
    relatedGuides: ["erp-implementation-timeline", "erp-cost-estimation", "custom-vs-off-the-shelf-erp"],
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
  },
  {
    slug: "crm-cost-estimation",
    category: "CRM 導入",
    title: "CRM 建置費用怎麼估算？",
    summary: "從名單來源、銷售流程、自動化、報表與串接需求，拆解 CRM 的建置成本。",
    answer: "CRM 費用通常由軟體授權、初始設定或客製、資料清理移轉、外部串接、教育訓練與後續維護組成。若只是標準名單與銷售階段，可先用套裝工具；若需要特殊分派、報價流程或跨平台資料同步，才需要把客製開發納入預算。",
    sections: [
      { heading: "影響費用的五個範圍", paragraphs: ["使用人數只是其中一項。真正拉開建置差異的，是銷售流程的例外、資料來源與自動化深度。"], bullets: ["帳號數量與權限層級", "銷售階段與自訂欄位", "舊名單清理與合併規則", "表單、LINE、Email 或 ERP 串接", "儀表板、通知與自動分派"] },
      { heading: "先算最小可用版本", paragraphs: ["先讓名單進得來、責任分得清、跟進看得見，再加入培育與進階分析。第一階段若無法被團隊穩定使用，增加更多功能只會提高維護成本。"] },
      { heading: "估價時要問哪些問題？", paragraphs: ["確認費用是否包含流程訪談、資料匯入、API 額度、教育訓練、保固與版本更新，也要釐清停用服務後能否完整匯出客戶資料。"] },
    ],
    relatedSolutions: ["crm-system", "marketing-automation", "system-integration"],
    relatedGuides: ["crm-implementation-checklist", "line-crm-integration", "marketing-automation-first-workflow"],
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
  },
  {
    slug: "erp-data-migration-checklist",
    category: "ERP 導入",
    title: "ERP 上線前，舊資料怎麼整理與移轉？",
    summary: "用資料盤點、清理、轉換、驗證與切換計畫，降低 ERP 上線時的資料風險。",
    answer: "資料移轉不是把所有 Excel 原樣倒入新系統。應先決定哪些資料仍有營運價值，再統一客戶、商品與供應商主檔，處理重複與缺漏，完成測試匯入後由業務單位抽樣驗證。正式切換前還要訂出資料凍結時間與回復方案。",
    sections: [
      { heading: "先分成主檔、交易與歷史資料", paragraphs: ["客戶、商品、供應商屬於主檔；訂單、採購與庫存異動屬於交易資料。歷史資料未必全部匯入，可依查詢、法規與分析需要決定保留方式。"] },
      { heading: "移轉檢查清單", paragraphs: ["每一批資料都要有來源、負責人、轉換規則與驗證結果，避免只有技術團隊知道數字怎麼來。"], bullets: ["統一編碼、日期、單位與必填欄位", "建立重複資料合併規則", "記錄新舊欄位對照", "先做測試匯入與總數核對", "抽查金額、庫存與關聯資料"] },
      { heading: "正式切換怎麼安排？", paragraphs: ["訂出最後資料更新時間，安排增量匯入、使用者驗證與舊系統唯讀期。若驗證未通過，也要有回到原流程的明確條件。"] },
    ],
    relatedSolutions: ["erp-system", "system-integration"],
    relatedGuides: ["excel-to-business-system", "erp-implementation-timeline", "why-digital-transformation-fails"],
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
  },
  {
    slug: "api-integration-cost-timeline",
    category: "系統整合",
    title: "API 串接費用與時程怎麼估？",
    summary: "從文件、權限、資料流、錯誤處理與測試環境，判斷 API 串接的真正工作量。",
    answer: "API 串接不能只按端點數量估價。費用與時程取決於第三方文件完整度、授權方式、資料轉換、同步頻率、錯誤重試、測試環境與對方審核流程。需求明確且文件完整的單向串接較快；涉及雙向同步、金流或庫存時，應預留更多驗證與例外處理。",
    sections: [
      { heading: "估算前要取得什麼？", paragraphs: ["先拿到正式 API 文件、測試帳號、速率限制與欄位範例，並確認方案是否真的開放所需權限。只有平台名稱，通常無法做可靠估價。"] },
      { heading: "最常被忽略的成本", paragraphs: ["除了正常資料傳送，還要處理重複事件、逾時、欄位變更、憑證更新、人工補送與紀錄查詢。這些機制決定串接上線後是否可維護。"] },
      { heading: "如何縮短開發時程？", paragraphs: ["先選一個方向與少數必要欄位完成端到端測試，再擴充更多事件。由雙方各指定技術與業務窗口，也能減少等待權限和規則確認的時間。"] },
    ],
    relatedSolutions: ["system-integration", "custom-web-app"],
    relatedGuides: ["line-ecommerce-accounting-integration", "line-crm-integration", "system-requirements-document"],
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
  },
  {
    slug: "line-crm-integration",
    category: "LINE 整合",
    title: "LINE 官方帳號怎麼串接 CRM？",
    summary: "釐清好友身分、同意、標籤、事件與客服交接，規劃可維護的 LINE CRM 整合。",
    answer: "LINE 官方帳號串接 CRM 的核心，是在取得適當同意後，把 LINE 使用者與企業既有客戶資料可靠對應，並將加入好友、表單、對話或點擊等必要事件寫入 CRM。不要只追求群發；應先設計身分綁定、客服交接、退訂與資料權限。",
    sections: [
      { heading: "先決定如何識別同一位客戶", paragraphs: ["LINE 使用者識別碼不能直接等同手機或 Email。常見作法是透過會員登入、綁定表單或一次性驗證，把兩邊資料建立可追溯的關聯。"] },
      { heading: "值得優先串接的事件", paragraphs: ["先從對營運有明確用途的事件開始，例如加入好友來源、諮詢表單、預約完成、客服狀態或購買後通知。"], bullets: ["新好友與來源標記", "表單或預約完成", "諮詢分派與待回覆提醒", "訂單、出貨或服務通知", "封鎖、退訂與同意狀態"] },
      { heading: "個資與訊息規則不能省略", paragraphs: ["告知資料用途，只同步完成流程所需的資訊，限制可存取人員，並保留同意與退訂狀態。行銷訊息也應依平台政策與使用者選擇發送。"] },
    ],
    relatedSolutions: ["crm-system", "marketing-automation", "system-integration"],
    relatedGuides: ["crm-implementation-checklist", "marketing-automation-first-workflow", "line-ecommerce-accounting-integration"],
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
  },
  {
    slug: "system-maintenance-cost",
    category: "系統維護",
    title: "客製系統上線後，維護費用包含什麼？",
    summary: "分清楚主機、監控、修復、平台更新、資安與功能迭代，避免低估長期持有成本。",
    answer: "客製系統維護通常包含主機與第三方服務費、備份與監控、安全與套件更新、錯誤修復、使用者支援，以及另行評估的新功能。保固只處理原規格缺陷，維護則確保系統在瀏覽器、平台 API 與營運流程持續變動時仍能可靠運作。",
    sections: [
      { heading: "固定成本與變動成本", paragraphs: ["網域、主機、簡訊、Email、地圖或 AI 服務多半依方案或用量計費；維運人力則可採月費時數、事件計費或服務等級合約。"] },
      { heading: "維護合約要寫清楚什麼？", paragraphs: ["至少寫明服務時段、回應與修復目標、備份頻率、監控範圍、第三方費用、緊急事件定義，以及未使用時數能否遞延。"] },
      { heading: "如何控制長期成本？", paragraphs: ["保留原始碼與文件、建立測試與版本紀錄、定期移除不用的功能，並把例行維護和新需求分開管理。可維護性應在開發階段就納入，而不是上線後才補救。"] },
    ],
    relatedSolutions: ["custom-web-app", "system-integration", "erp-system"],
    relatedGuides: ["erp-cost-estimation", "api-integration-cost-timeline", "system-requirements-document"],
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
  },
  {
    slug: "digital-transformation-roadmap",
    category: "數位轉型",
    title: "中小企業數位轉型應該先做什麼？",
    summary: "從營運瓶頸、資料基礎與可衡量流程，排出不浪費預算的數位轉型路線。",
    answer: "中小企業數位轉型應先選出一個高頻、跨人員、容易出錯且能衡量成果的流程，而不是先買一套最大系統。先建立共同主檔與責任，再完成一條端到端流程，確認團隊採用後，才逐步擴到 CRM、ERP、庫存與自動化。",
    sections: [
      { heading: "先盤點問題，不先列軟體", paragraphs: ["找出等待時間、重複輸入、人工對帳、交接遺漏與管理盲點，估算它們每月耗費的時間、錯誤與商機。這些數字才是排序依據。"] },
      { heading: "第一階段怎麼選？", paragraphs: ["選擇能在數週到數月內完成、資料取得可行、負責人明確，而且成果能被量化的流程。"], bullets: ["發生頻率高且影響客戶", "牽涉人數有限但可代表核心流程", "有清楚的開始、結束與責任人", "可用時間、錯誤率或轉換率衡量"] },
      { heading: "把路線圖變成持續改善", paragraphs: ["每一階段都應記錄基準值、目標、使用率與新問題。若團隊沒有採用，就先修正流程與教育，不急著開發下一個模組。"] },
    ],
    relatedSolutions: ["erp-system", "crm-system", "system-integration"],
    relatedGuides: ["why-digital-transformation-fails", "excel-to-business-system", "erp-implementation-timeline"],
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
  },
];

export const solutionBySlug = new Map(solutionPages.map((item) => [item.slug, item]));
export const guideBySlug = new Map(guidePages.map((item) => [item.slug, item]));
