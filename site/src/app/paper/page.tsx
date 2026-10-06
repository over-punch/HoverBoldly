// Public paper route (hoverboldly.com/paper) — "Weight Without Width", rendered from content/paper.ts in the Type Tools site style.
import type { Metadata } from 'next'
import Link from 'next/link'
import '../talk.css'
import Prose, { slug } from '../../components/talk/Prose'
import { FamiliesFigure, CompareFigure, MethodFigure } from '../../components/talk/Figures'
import { PAPER_MD } from '../../content/paper'
import SiteFooter from '../../components/SiteFooter'
import { version } from '../../../../package.json'
import { version as siteVersion } from '../../../package.json'

export const metadata: Metadata = {
	title: 'Weight Without Width — paper | hoverBoldly',
	description: 'Bold on hover widens text and moves layouts. A 15-font benchmark, a Chromium CLS test, the grade axis, and measured compensation for fonts without it.',
	alternates: { canonical: 'https://hoverboldly.com/paper' },
	openGraph: {
		title: 'Weight Without Width — paper',
		description: 'Bold widens navigation labels a median of 4.8%. Grade fixes it at zero width — in 1 of 15 fonts.',
		url: 'https://hoverboldly.com/paper',
		siteName: 'hoverBoldly',
		type: 'article',
	},
}

/** Figure components available to {{figure:name}} slots in the paper. */
const FIGURES = {
	families: <FamiliesFigure />,
	compare: <CompareFigure />,
	method: <MethodFigure />,
}

/** Section headings (## lines) for the table of contents. */
const SECTIONS = PAPER_MD.split('\n').filter(l => l.startsWith('## ')).map(l => l.slice(3).trim())

/** The paper page: hero, contents, body, footer. */
export default function PaperPage() {
	return (
		<main className="flex flex-col items-center px-6 py-20 gap-16">
			<header className="w-full max-w-2xl flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<p className="load-rise text-xs uppercase tracking-[0.18em] font-medium text-muted">A paper · October 2026</p>
					<h1 className="load-rise text-4xl lg:text-7xl" style={{ ['--d' as string]: '90ms', fontFamily: 'var(--font-merriweather), serif', fontVariationSettings: '"wght" 300, "opsz" 144', lineHeight: '1.05em', textWrap: 'balance' }}>
						Weight<br />
						<span style={{ fontStyle: 'italic', color: 'var(--foreground-subtle)' }}>without width.</span>
					</h1>
				</div>
				<div className="load-rise flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted" style={{ ['--d' as string]: '220ms' } as React.CSSProperties}>
					<Link href="/talk" className="hover:text-foreground transition-colors">Slides ↗</Link>
					<span aria-hidden="true">·</span>
					<Link href="/paper/data" className="hover:text-foreground transition-colors">Measurements ↗</Link>
					<span aria-hidden="true">·</span>
					<a href="/paper/weight-without-width.pdf" download className="hover:text-foreground transition-colors">Paper PDF ↓</a>
					<span aria-hidden="true">·</span>
					<Link href="/talk/transcript" className="hover:text-foreground transition-colors">Transcript ↗</Link>
					<span aria-hidden="true">·</span>
					<Link href="/" className="hover:text-foreground transition-colors">hoverBoldly ↗</Link>
				</div>
				<nav aria-label="Contents" className="load-rise flex flex-col gap-2 pt-2" style={{ ['--d' as string]: '320ms' } as React.CSSProperties}>
					<p className="text-xs uppercase tracking-[0.18em] font-medium text-muted">Contents</p>
					<ol className="flex flex-col gap-1 text-sm">
						{SECTIONS.map((s, i) => (
							<li key={s} className="flex gap-3">
								<span className="font-mono text-xs text-faint tabular-nums pt-0.5">{String(i + 1).padStart(2, '0')}</span>
								<a href={`#${slug(s)}`} className="text-muted hover:text-foreground transition-colors">{s}</a>
							</li>
						))}
					</ol>
				</nav>
			</header>
			<article className="w-full max-w-2xl flex flex-col gap-5">
				<Prose source={PAPER_MD} figures={FIGURES} />
			</article>
			<SiteFooter current="hoverBoldly" npmVersion={version} siteVersion={siteVersion} />
		</main>
	)
}
