import type { Metadata } from "next";
import { ContactBanner, JsonLd, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "關於左撇子整合行銷有限公司｜團隊與公司資訊",
  description: "左撇子整合行銷有限公司由徐偉翔創辦，提供企業數位系統、數位行銷與流程整合服務。查看統編、地址、聯絡方式與公開授課經歷。",
  alternates: { canonical: "/about/" },
};

const teachingRecords = [
  {
    organization: "中國醫藥大學",
    title: "新創行銷、AI 與社群經營系列課程",
    detail: "以市場受眾、社群經營、廣告操作與影音內容為主題，公開資料列徐偉翔為左撇子整合行銷有限公司執行長及講師。",
    href: "https://news.cmu.edu.tw/ann_detail.php?sn=112054",
  },
  {
    organization: "桃園市政府青年事務局",
    title: "ChatGPT 品牌社群行銷與應用",
    detail: "於新明青創基地帶領品牌定位、內容行銷、數據分析、客戶經營與社群行銷實作。",
    href: "https://www.accupass.com/event/2404120857492048624806",
  },
  {
    organization: "元智大學職涯資訊服務網",
    title: "元宇宙科技整合人才養成班",
    detail: "公開課程師資資料列徐偉翔為左撇子整合行銷有限公司執行長，參與科技應用與產業人才培育。",
    href: "https://myfuture.yzu.edu.tw/actionscontent.aspx?t=2&id=111",
  },
  {
    organization: "中山醫學大學",
    title: "數位與 AI 應用課程資料",
    detail: "校方公開活動頁所列的數位技能與 AI 應用授課紀錄。",
    href: "https://powerup.csmu.edu.tw/Act/act_Info/4a1c9ce5-63ae-4e7e-9941-d73e0e61d6e7",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://lefty-erp.com/about/#wei-hsiang-hsu",
  name: "徐偉翔",
  jobTitle: "創辦人暨執行長",
  worksFor: { "@id": "https://lefty-erp.com/#organization" },
  knowsAbout: ["數位行銷", "生成式 AI 應用", "品牌社群經營", "企業數位系統", "流程整合"],
  sameAs: [
    "https://news.cmu.edu.tw/ann_detail.php?sn=112054",
    "https://www.accupass.com/event/2404120857492048624806",
    "https://myfuture.yzu.edu.tw/actionscontent.aspx?t=2&id=111",
  ],
};

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd data={personSchema} />
      <section className="inner-hero about-hero">
        <div><span className="kicker">ABOUT LEFTY</span><h1>懂商業，也懂如何把系統<span>真正落地。</span></h1></div>
        <p>lefty-erp.com 是由左撇子整合行銷有限公司營運的數位系統服務網站。我們從營運與使用者出發，整合策略、設計、開發與行銷。</p>
      </section>

      <section className="about-grid">
        <div className="belief-card reveal"><blockquote>技術只是方法，<br />真正要改善的是<span>工作方式。</span></blockquote></div>
        <div className="about-copy reveal"><span className="kicker">OUR APPROACH</span><h2>一套能被使用的系統，來自共同理解。</h2><p>我們不要求客戶先把需求寫成技術規格，而是一起盤點目標、角色、資料、例外與限制。系統範圍會被拆成可討論、可驗收、可持續改善的階段。</p><p>左撇子整合行銷於 2018 年成立，服務涵蓋網站製作、社群經營、策略規劃，以及企業數位系統設計與整合。</p></div>
      </section>

      <section className="founder-section reveal" id="wei-hsiang-hsu">
        <div className="founder-profile"><span className="kicker light">FOUNDER & INSTRUCTOR</span><h2>徐偉翔</h2><strong>左撇子整合行銷有限公司<br />創辦人暨執行長</strong></div>
        <div className="founder-copy"><p>長期投入數位行銷、品牌社群經營、生成式 AI 應用與企業數位工具實作，並以企業經營者與業界講師身分參與大學、政府青年創業基地及人才培育課程。</p><p>授課內容著重把工具放進真實工作流程，涵蓋品牌定位、內容行銷、廣告與影音、數據分析、客戶經營，以及 AI 輔助行銷與專案協作。</p></div>
      </section>

      <section className="credential-section">
        <span className="kicker">PUBLIC TEACHING RECORDS</span><h2>公開授課紀錄</h2>
        <p className="section-lead">以下資料連結至主辦單位或校方公開頁面，方便查核講師身分與課程主題。</p>
        <div className="credential-grid">
          {teachingRecords.map((record) => (
            <a className="credential-card reveal" href={record.href} target="_blank" rel="noreferrer" key={record.href}>
              <span>{record.organization}</span><h3>{record.title}</h3><p>{record.detail}</p><b>查看公開資料 ↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="identity-section reveal">
        <span className="kicker">OFFICIAL COMPANY INFORMATION</span><h2>公司與聯絡資訊</h2>
        <dl>
          <div><dt>公司正式名稱</dt><dd>左撇子整合行銷有限公司</dd></div>
          <div><dt>英文名稱</dt><dd>LEFTY Integrated Marketing Co., Ltd.</dd></div>
          <div><dt>統一編號</dt><dd>50833892</dd></div>
          <div><dt>創辦人暨執行長</dt><dd>徐偉翔</dd></div>
          <div><dt>地址</dt><dd>臺中市潭子區大成街3巷7號</dd></div>
          <div><dt>服務區域</dt><dd>以台灣企業為主，支援遠端專案協作</dd></div>
          <div><dt>聯絡電話</dt><dd><a href="tel:+886958588655">0958-588-655</a></dd></div>
          <div><dt>聯絡信箱</dt><dd><a href="mailto:info@lefthandedmkt.com">info@lefthandedmkt.com</a></dd></div>
          <div><dt>主要服務</dt><dd>企業數位系統規劃、設計、開發與整合</dd></div>
        </dl>
        <div className="official-links"><a href="https://lefthandedmkt.com/" target="_blank" rel="noreferrer">公司官方網站 ↗</a><a href="https://www.facebook.com/lefthanded.mkt" target="_blank" rel="noreferrer">Facebook 官方粉絲專頁 ↗</a></div>
      </section>
      <ContactBanner subject="想認識左撇子的數位系統服務" />
    </PageShell>
  );
}
