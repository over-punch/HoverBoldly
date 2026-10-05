// Transcript route (hoverboldly.com/talk/transcript) — the spoken script of "Weight Without Width", one section per slide, cues removed.
import type { Metadata } from 'next'
import Link from 'next/link'
import { SCRIPT, spoken } from '../../../content/talkScript'
import SiteFooter from '../../../components/SiteFooter'
import { version } from '../../../../../package.json'
import { version as siteVersion } from '../../../../package.json'

export const metadata: Metadata = {
	title: 'Weight Without Width — transcript | hoverBoldly',
	description: 'Full transcript of the talk "Weight Without Width": why hover states should change emphasis, not layout.',
	alternates: { canonical: 'https://hoverboldly.com/talk/transcript' },
	openGraph: {
		title: 'Weight Without Width — transcript',
		description: 'The full spoken script of the talk, one section per slide.',
		url: 'https://hoverboldly.com/talk/transcript',
		siteName: 'hoverBoldly',
		type: 'article',
	},
}

/** The transcript page: hero, links, one numbered section per slide, footer. */
export default function TranscriptPage() {
	return (
		<main className="flex flex-col items-center px-6 py-20 gap-16">
			<header className="w-full max-w-2xl flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<p className="text-xs uppercase tracking-[0.18em] font-medium text-muted">Transcript · October 2026</p>
					<h1 className="text-4xl lg:text-7xl" style={{ fontFamily: 'var(--font-merriweather), serif', fontVariationSettings: '"wght" 300, "opsz" 144', lineHeight: '1.05em', textWrap: 'balance' }}>
						Weight<br />
						<span style={{ fontStyle: 'italic', color: 'var(--foreground-subtle)' }}>without width.</span>
					</h1>
				</div>
				<div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
					<Link href="/talk" className="hover:text-foreground transition-colors">Slides ↗</Link>
					<span aria-hidden="true">·</span>
					<Link href="/paper" className="hover:text-foreground transition-colors">Paper ↗</Link>
					<span aria-hidden="true">·</span>
					<Link href="/paper/data" className="hover:text-foreground transition-colors">Measurements ↗</Link>
					<span aria-hidden="true">·</span>
					<a href="/paper/weight-without-width.pdf" download className="hover:text-foreground transition-colors">Paper PDF ↓</a>
				</div>
			</header>
			<article className="w-full max-w-2xl flex flex-col gap-10">
				{SCRIPT.map((e, i) => (
					<section key={e.id} className="flex flex-col gap-3">
						<p className="flex gap-3 text-xs uppercase tracking-[0.18em] font-medium text-muted">
							<Link href={`/talk#${i + 1}`} className="font-mono text-faint tabular-nums hover:text-foreground transition-colors" aria-label={`Slide ${i + 1}`}>{String(i + 1).padStart(2, '0')}</Link>
							<span>{e.label}</span>
						</p>
						<p className="text-base lg:text-lg leading-relaxed">{spoken(e.text)}</p>
					</section>
				))}
			</article>
			<SiteFooter current="hoverBoldly" npmVersion={version} siteVersion={siteVersion} />
		</main>
	)
}
