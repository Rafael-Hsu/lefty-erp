import type { Metadata } from "next";
import Link from "next/link";
import { ContactBanner, PageShell } from "../components/SiteChrome";
import { guidePages } from "../content";

export const metadata: Metadata = {
  title: "企業數位系統指南｜ERP、CRM 與流程自動化",
  description: "用清楚、可執行的方式回答企業導入 ERP、CRM、進銷存與行銷自動化時最常遇到的問題。",
  alternates: { canonical: "/guides/" },
};

export default function GuidesPage() {
  return (
    <PageShell>
      <section className="inner-hero guide-hero">
        <div className="reveal reveal-left"><span className="kicker">DIGITAL SYSTEM GUIDE</span><h1>做系統之前，<br />先把問題<span>想清楚。</span></h1></div>
        <p className="reveal">沒有艱深術語，只整理企業選型、導入與整合時真正需要做的判斷。</p>
      </section>
      <section className="guide-directory">
        {guidePages.map((guide, index) => (
          <Link className="guide-row reveal" href={`/guides/${guide.slug}/`} key={guide.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span><div><small>{guide.category}</small><h2>{guide.title}</h2><p>{guide.summary}</p></div><b>↗</b>
          </Link>
        ))}
      </section>
      <ContactBanner />
    </PageShell>
  );
}
