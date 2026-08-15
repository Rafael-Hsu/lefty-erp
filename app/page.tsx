import { guidePages, solutionPages } from "./content";
import Link from "next/link";

const process = [
  ["理解", "釐清商業目標、使用者與卡住團隊的日常流程。"],
  ["設計", "把需求轉成資訊架構、操作流程與可執行藍圖。"],
  ["打造", "分階段開發、測試與整合，讓團隊持續看見進度。"],
  ["成長", "上線不是結束；依據數據持續優化系統與行銷。"],
];

export default function Home() {
  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="左撇子整合行銷首頁">
          <span className="brand-mark">L</span>
          <span>LEFTY <b>左撇子整合行銷</b></span>
        </a>
        <nav aria-label="主要導覽">
          <Link href="/solutions/">解決方案</Link>
          <Link href="/guides/">數位指南</Link>
          <Link href="/about/">關於我們</Link>
        </nav>
        <a className="header-cta" href="mailto:info@lefthandedmkt.com?subject=想聊聊數位系統">聊聊你的需求 <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal reveal-left">
          <div className="eyebrow"><span /> YOUR DIGITAL GROWTH PARTNER</div>
          <h1>讓好生意，<br />長出一套<span>好系統。</span></h1>
          <p>左撇子整合行銷，從商業策略出發，為你設計真正好用的數位系統。整合流程、資料與行銷，讓團隊少一點重工，多一點成長。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:info@lefthandedmkt.com?subject=預約數位健檢">預約 30 分鐘數位健檢 <span>→</span></a>
            <a className="text-link" href="#services">看看我們能做什麼 <span>↓</span></a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-scale" aria-label="整合數位系統示意圖">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="system-card" data-tilt>
            <div className="system-top"><span>LEFTY OS</span><i>介面示意</i></div>
            <div className="system-title">營運儀表板示意 <b>•••</b></div>
            <div className="metric-grid">
              <div><small>本月營收</small><strong>+28.6%</strong><em>↗ 穩定成長</em></div>
              <div><small>有效名單</small><strong>1,284</strong><em>+ 136 本週</em></div>
            </div>
            <div className="chart">
              <div className="chart-head"><span>營運成長</span><small>近 6 個月</small></div>
              <div className="chart-bars">
                {[36, 48, 43, 64, 70, 92].map((height, i) => <i key={i} style={{height: `${height}%`}} />)}
              </div>
            </div>
            <div className="flow-row">
              <span>新名單</span><b>→</b><span>自動分流</span><b>→</b><span>完成追蹤</span>
            </div>
          </div>
          <div className="float-chip chip-a"><b>✓</b><span>流程自動化<small>自動化節點示意</small></span></div>
          <div className="float-chip chip-b"><b>↗</b><span>資料同步完成<small>剛剛</small></span></div>
        </div>
      </section>

      <div className="trust-strip marquee-band">
        <p>從一個卡住的流程，到一套會成長的系統</p>
        <div><span>策略</span><b>＋</b><span>設計</span><b>＋</b><span>開發</span><b>＋</b><span>整合</span></div>
      </div>

      <section className="section services" id="services">
        <div className="section-heading reveal">
          <div><span className="kicker">WHAT WE BUILD</span><h2>不只做工具，<br />我們設計你的<span>成長路徑。</span></h2></div>
          <p>真正有效的數位系統，必須符合你的營運方式。我們拆解問題、重新設計流程，再用適合的技術把它做出來。</p>
        </div>
        <div className="service-list">
          {solutionPages.map((service, index) => (
            <Link className="service-card reveal" data-tilt key={service.slug} href={`/solutions/${service.slug}/`}>
              <div className="service-no">0{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <div className="tags"><span>{service.eyebrow}</span></div>
              <div className="card-arrow">↗</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-guides section">
        <div className="section-heading reveal">
          <div><span className="kicker">DIGITAL SYSTEM GUIDES</span><h2>先把問題說清楚，<br />再決定要做<span>什麼系統。</span></h2></div>
          <p>我們把常見的選型、預算與導入問題整理成可直接引用的答案，幫助團隊在找廠商前先建立共同語言。</p>
        </div>
        <div className="home-guide-grid">
          {guidePages.slice(0, 4).map((guide) => <Link className="home-guide-card reveal" href={`/guides/${guide.slug}/`} key={guide.slug}><span>{guide.category}</span><h3>{guide.title}</h3><p>{guide.summary}</p><b>閱讀指南 ↗</b></Link>)}
        </div>
        <Link className="directory-link" href="/guides/">查看全部 10 篇數位指南 <span>→</span></Link>
      </section>

      <section className="dark-section" id="approach">
        <div className="dark-intro reveal reveal-left">
          <span className="kicker light">HOW WE WORK</span>
          <h2>把複雜的事，<br />一起做得<span>清楚。</span></h2>
          <p>你不需要先懂技術。只要告訴我們目標和目前的困難，剩下的，我們會一步一步陪你拆解。</p>
        </div>
        <div className="process-list reveal">
          {process.map((item, index) => (
            <div className="process-item" key={item[0]} style={{"--step-delay": `${index * 90}ms`} as React.CSSProperties}>
              <span>0{index + 1}</span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="belief section">
        <div className="belief-card reveal reveal-left" data-tilt>
          <div className="big-quote">“</div>
          <blockquote>最好的系統，不是功能最多，<br />而是團隊<span>真的願意每天使用。</span></blockquote>
          <p>所以我們把商業邏輯、使用體驗與技術放在同一張桌上討論。</p>
        </div>
        <div className="fit-list reveal">
          <span className="kicker">IS THIS YOU?</span>
          <h2>這些情況，<br />我們很能幫上忙。</h2>
          <ul>
            <li><b>01</b><span>資料散落各處，總是找不到最新版本</span></li>
            <li><b>02</b><span>人工流程太多，團隊每天重複做一樣的事</span></li>
            <li><b>03</b><span>現有系統不好用，卻不知道該從哪裡改</span></li>
            <li><b>04</b><span>想做數位轉型，需要一個懂商業也懂技術的夥伴</span></li>
          </ul>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-grid" />
        <div className="cta-copy reveal reveal-left">
          <span className="kicker light">LET&apos;S BUILD SOMETHING USEFUL</span>
          <h2>你的下一套系統，<br />可以從一場<span>對話</span>開始。</h2>
          <p>說說現在最卡的一件事，我們一起找出適合的起點。</p>
          <a className="button button-light" href="mailto:info@lefthandedmkt.com?subject=我想打造數位系統">開始聊聊 <span>↗</span></a>
        </div>
        <div className="contact-card reveal reveal-scale" data-tilt>
          <span>聯絡信箱</span>
          <a href="mailto:info@lefthandedmkt.com">info@lefthandedmkt.com</a>
          <p>通常會在 1–2 個工作天內回覆</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">L</span><span>LEFTY <b>左撇子整合行銷</b></span></a>
        <p>lefty-erp.com 是由左撇子整合行銷有限公司營運的數位系統服務網站。</p>
        <div><span>© 2026 LEFTY INTEGRATED MARKETING</span><a href="#top">回到頂端 ↑</a></div>
      </footer>
      <script src="/effects.js" defer />
    </main>
  );
}
