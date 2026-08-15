import type { Metadata } from "next";
import Link from "next/link";
import { ContactBanner, PageShell } from "../components/SiteChrome";
import { solutionPages } from "../content";

export const metadata: Metadata = {
  title: "企業數位系統解決方案｜左撇子整合行銷",
  description: "客製 ERP、CRM、進銷存、會員平台、行銷自動化與 API 系統整合服務。",
  alternates: { canonical: "/solutions/" },
};

export default function SolutionsPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="reveal reveal-left"><span className="kicker">DIGITAL SOLUTIONS</span><h1>從卡住的流程，<br />找到<span>正確解法。</span></h1></div>
        <p className="reveal">我們先理解商業目標、資料與團隊工作方式，再決定該使用成熟工具、系統整合或客製開發。</p>
      </section>
      <section className="directory-section">
        <div className="directory-grid">
          {solutionPages.map((solution, index) => (
            <Link className="directory-card reveal" data-tilt href={`/solutions/${solution.slug}/`} key={solution.slug}>
              <span>0{index + 1}</span><small>{solution.eyebrow}</small><h2>{solution.title}</h2><p>{solution.summary}</p><b>深入了解 ↗</b>
            </Link>
          ))}
        </div>
      </section>
      <ContactBanner />
    </PageShell>
  );
}
