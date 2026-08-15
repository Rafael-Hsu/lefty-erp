import type { ReactNode } from "react";
import Link from "next/link";

export function BrandLink() {
  return (
    <Link className="brand" href="/" aria-label="左撇子整合行銷首頁">
      <span className="brand-mark">L</span>
      <span>LEFTY <b>左撇子整合行銷</b></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header inner-header">
      <BrandLink />
      <nav aria-label="主要導覽">
        <Link href="/solutions/">解決方案</Link>
        <Link href="/guides/">數位指南</Link>
        <Link href="/about/">關於我們</Link>
      </nav>
      <a className="header-cta" href="mailto:info@lefthandedmkt.com?subject=想聊聊數位系統">聊聊你的需求 <span>↗</span></a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <BrandLink />
      <p>lefty-erp.com 是由左撇子整合行銷有限公司營運的數位系統服務網站。</p>
      <div><span>© 2026 LEFTY INTEGRATED MARKETING CO., LTD.</span><span><a href="tel:+886958588655">0958-588-655</a> · <a href="mailto:info@lefthandedmkt.com">info@lefthandedmkt.com</a></span></div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <SiteHeader />
      {children}
      <SiteFooter />
      <script src="/effects.js" defer />
    </main>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ContactBanner({ subject }: { subject: string }) {
  return (
    <section className="inner-cta reveal">
      <div><span className="kicker">START WITH THE REAL PROBLEM</span><h2>先從最卡的一條流程開始。</h2><p>把目前使用的表單、試算表或操作方式告訴我們，我們會協助釐清適合的改善起點。</p></div>
      <a className="button button-primary" href={`mailto:info@lefthandedmkt.com?subject=${encodeURIComponent(subject)}`}>預約數位健檢 <span>↗</span></a>
    </section>
  );
}
