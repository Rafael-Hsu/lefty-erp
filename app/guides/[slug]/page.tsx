import type { Metadata } from "next";
import Link from "next/link";
import { ContactBanner, JsonLd, PageShell } from "../../components/SiteChrome";
import { guideBySlug, guidePages, solutionBySlug } from "../../content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guidePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug.get(slug);
  if (!guide) return { title: "找不到指南｜左撇子整合行銷" };
  return {
    title: `${guide.title}｜左撇子數位系統指南`,
    description: guide.summary,
    alternates: { canonical: `/guides/${slug}/` },
    openGraph: { title: guide.title, description: guide.summary, url: `/guides/${slug}/` },
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guideBySlug.get(slug);
  if (!guide) return <PageShell><section className="inner-hero"><h1>找不到這篇指南</h1><Link href="/guides/">返回指南中心</Link></section></PageShell>;

  const publishedAt = guide.publishedAt ?? "2026-08-15";
  const updatedAt = guide.updatedAt ?? publishedAt;
  const relatedGuideSlugs = [
    ...(guide.relatedGuides ?? []),
    ...guidePages
      .filter(candidate => candidate.slug !== guide.slug && candidate.category === guide.category)
      .map(candidate => candidate.slug),
    ...guidePages
      .filter(candidate => candidate.slug !== guide.slug && candidate.relatedSolutions.some(solution => guide.relatedSolutions.includes(solution)))
      .map(candidate => candidate.slug),
  ].filter((candidate, index, items) => items.indexOf(candidate) === index).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://lefty-erp.com/guides/${guide.slug}/#article`,
    url: `https://lefty-erp.com/guides/${guide.slug}/`,
    headline: guide.title,
    description: guide.summary,
    datePublished: publishedAt,
    dateModified: updatedAt,
    inLanguage: "zh-Hant",
    mainEntityOfPage: `https://lefty-erp.com/guides/${guide.slug}/`,
    isPartOf: { "@id": "https://lefty-erp.com/#website" },
    about: guide.category,
    author: { "@id": "https://lefty-erp.com/about/#wei-hsiang-hsu" },
    publisher: { "@id": "https://lefty-erp.com/#organization" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首頁", item: "https://lefty-erp.com/" },
      { "@type": "ListItem", position: 2, name: "數位指南", item: "https://lefty-erp.com/guides/" },
      { "@type": "ListItem", position: 3, name: guide.title, item: `https://lefty-erp.com/guides/${guide.slug}/` },
    ],
  };

  return (
    <PageShell>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema} />
      <article className="article-wrap">
        <header className="article-header">
          <div className="breadcrumb"><Link href="/">首頁</Link><span>／</span><Link href="/guides/">數位指南</Link><span>／</span><b>{guide.category}</b></div>
          <span className="kicker">{guide.category}</span><h1>{guide.title}</h1><p>{guide.summary}</p>
          <div className="article-meta"><span>作者與審閱：<Link href="/about/">Rafael／左撇子整合行銷</Link></span><span>更新於 {updatedAt.replaceAll("-", ".")}</span></div>
        </header>
        <div className="answer-box article-answer"><b>簡短答案</b><p>{guide.answer}</p></div>
        <div className="article-body">
          {guide.sections.map(section => (
            <section key={section.heading} className="reveal"><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul> : null}</section>
          ))}
        </div>
        <aside className="related-box"><span className="kicker">KEEP READING</span><h2>接著閱讀</h2><div>{relatedGuideSlugs.map(guideSlug => { const relatedGuide = guideBySlug.get(guideSlug); return relatedGuide ? <Link key={guideSlug} href={`/guides/${guideSlug}/`}>{relatedGuide.title}<span>↗</span></Link> : null; })}</div></aside>
        <aside className="related-box"><span className="kicker">RELATED SOLUTIONS</span><h2>相關解決方案</h2><div>{guide.relatedSolutions.map(solutionSlug => { const solution = solutionBySlug.get(solutionSlug); return solution ? <Link key={solutionSlug} href={`/solutions/${solutionSlug}/`}>{solution.title}<span>↗</span></Link> : null; })}</div></aside>
      </article>
      <ContactBanner />
    </PageShell>
  );
}
