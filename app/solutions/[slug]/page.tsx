import type { Metadata } from "next";
import Link from "next/link";
import { ContactBanner, JsonLd, PageShell } from "../../components/SiteChrome";
import { solutionBySlug, solutionPages } from "../../content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutionPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionBySlug.get(slug);
  if (!solution) return { title: "找不到解決方案｜左撇子整合行銷" };
  return {
    title: `${solution.title}｜左撇子整合行銷`,
    description: solution.summary,
    alternates: { canonical: `/solutions/${slug}/` },
    openGraph: { title: solution.title, description: solution.summary, url: `/solutions/${slug}/` },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionBySlug.get(slug);
  if (!solution) return <PageShell><section className="inner-hero"><h1>找不到這個解決方案</h1><Link href="/solutions/">返回解決方案</Link></section></PageShell>;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: solution.title,
        description: solution.summary,
        url: `https://lefty-erp.com/solutions/${solution.slug}/`,
        provider: { "@id": "https://lefty-erp.com/#organization" },
        areaServed: "TW",
      },
      {
        "@type": "FAQPage",
        mainEntity: solution.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <PageShell>
      <JsonLd data={schema} />
      <section className="detail-hero">
        <div className="breadcrumb"><Link href="/">首頁</Link><span>／</span><Link href="/solutions/">解決方案</Link><span>／</span><b>{solution.title}</b></div>
        <span className="kicker">{solution.eyebrow}</span>
        <h1>{solution.title}</h1>
        <p>{solution.summary}</p>
        <div className="answer-box reveal"><b>先說結論</b><p>{solution.answer}</p></div>
      </section>

      <section className="content-split">
        <div className="content-block reveal"><span className="kicker">GOOD FIT</span><h2>適合哪些企業？</h2><ul className="check-list">{solution.suitableFor.map(item => <li key={item}>{item}</li>)}</ul></div>
        <div className="content-block dark-card reveal"><span className="kicker light">COMMON FRICTION</span><h2>常見營運問題</h2><ul className="number-list">{solution.problems.map((item, index) => <li key={item}><b>0{index + 1}</b>{item}</li>)}</ul></div>
      </section>

      <section className="content-section reveal">
        <span className="kicker">WHAT YOU GET</span><h2>可規劃的系統範圍</h2>
        <div className="deliverable-grid">{solution.deliverables.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}</div>
      </section>

      <section className="content-section process-content reveal">
        <span className="kicker">IMPLEMENTATION</span><h2>建議導入步驟</h2>
        <ol>{solution.steps.map((step, index) => <li key={step}><b>{index + 1}</b><span>{step}</span></li>)}</ol>
      </section>

      <section className="faq-section">
        <span className="kicker">QUESTIONS & ANSWERS</span><h2>常見問題</h2>
        {solution.faqs.map(faq => <details className="reveal" key={faq.question}><summary>{faq.question}<span>＋</span></summary><p>{faq.answer}</p></details>)}
      </section>
      <ContactBanner subject={`想討論${solution.title}`} />
    </PageShell>
  );
}
