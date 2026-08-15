import type { Metadata } from "next";
import { ContactBanner, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "關於左撇子整合行銷｜數位系統服務",
  description: "lefty-erp.com 是由左撇子整合行銷營運的數位系統服務網站，整合策略、設計、開發與行銷。",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="inner-hero about-hero"><div><span className="kicker">ABOUT LEFTY</span><h1>懂商業，也懂如何把系統<span>真正落地。</span></h1></div><p>lefty-erp.com 是由左撇子整合行銷營運的數位系統服務網站。我們從營運與使用者出發，整合策略、設計、開發與行銷。</p></section>
      <section className="about-grid">
        <div className="belief-card reveal"><blockquote>技術只是方法，<br />真正要改善的是<span>工作方式。</span></blockquote></div>
        <div className="about-copy reveal"><span className="kicker">OUR APPROACH</span><h2>一套能被使用的系統，來自共同理解。</h2><p>我們不要求客戶先把需求寫成技術規格，而是一起盤點目標、角色、資料、例外與限制。系統範圍會被拆成可討論、可驗收、可持續改善的階段。</p><p>我們不會公開捏造客戶案例或成果數字。可公開案例會在取得客戶同意並確認資料後加入網站。</p></div>
      </section>
      <section className="identity-section reveal"><span className="kicker">OFFICIAL CONTACT</span><h2>品牌與聯絡資訊</h2><dl><div><dt>服務品牌</dt><dd>左撇子整合行銷／LEFTY</dd></div><div><dt>服務網站</dt><dd>lefty-erp.com</dd></div><div><dt>聯絡信箱</dt><dd><a href="mailto:info@lefthandedmkt.com">info@lefthandedmkt.com</a></dd></div><div><dt>主要服務</dt><dd>企業數位系統規劃、設計、開發與整合</dd></div><div><dt>服務地區</dt><dd>台灣</dd></div></dl><p className="identity-note">公司正式登記名稱、統一編號、地址與電話可在確認公開資料後補入，避免網站出現未經確認的資訊。</p></section>
      <ContactBanner subject="想認識左撇子的數位系統服務" />
    </PageShell>
  );
}
