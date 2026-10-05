// Measurements route (hoverboldly.com/paper/data) — all 105 width measurements behind "Weight Without Width", with the font source for each family.
import type { Metadata } from 'next'
import Link from 'next/link'
import '../../talk.css'
import { MEASUREMENTS, FONT_SOURCES } from '../../../content/measurements'
import SiteFooter from '../../../components/SiteFooter'
import { version } from '../../../../../package.json'
import { version as siteVersion } from '../../../../package.json'

export const metadata: Metadata = {
	title: 'Weight Without Width — measurements | hoverBoldly',
	description: 'Shaped width of navigation labels at weight 400 and 700 in 15 Google Fonts variable families: 105 measurements behind the paper.',
	alternates: { canonical: 'https://hoverboldly.com/paper/data' },
	openGraph: {
		title: 'Weight Without Width — measurements',
		description: '105 measurements: how much wider bold makes navigation labels in 15 variable fonts.',
		url: 'https://hoverboldly.com/paper/data',
		siteName: 'hoverBoldly',
		type: 'article',
	},
}

/** Families in measurement order, for grouping rows. */
const FAMILIES = [...new Set(MEASUREMENTS.map(m => m.family))]

/** The measurements page: hero, method note, one table per family. */
export default function DataPage() {
	return (
		<main className="flex flex-col items-center px-6 py-20 gap-14">
			<header className="w-full max-w-2xl lg:max-w-5xl flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<p className="load-rise text-xs uppercase tracking-[0.18em] font-medium text-muted">Measurements · October 2026</p>
					<h1 className="load-rise text-4xl lg:text-7xl" style={{ ['--d' as string]: '90ms', fontFamily: 'var(--font-merriweather), serif', fontVariationSettings: '"wght" 300, "opsz" 144', lineHeight: '1.05em', textWrap: 'balance' } as React.CSSProperties}>
						105 measurements,<br />
						<span style={{ fontStyle: 'italic', color: 'var(--foreground-subtle)' }}>15 fonts.</span>
					</h1>
				</div>
				<p className="text-base text-muted leading-relaxed max-w-xl">
					Each string shaped with HarfBuzz at 16 px, kerning on, at weight 400 and 700; other axes at their defaults, optical size pinned to 16. Fonts from google/fonts at commit 9710da1, measured 4 October 2026. Method and findings are in the <Link href="/paper" className="underline underline-offset-2 hover:text-foreground">paper</Link>.
				</p>
			</header>
			<section className="w-full max-w-2xl lg:max-w-5xl flex flex-col gap-10">
				{FAMILIES.map(f => {
					const rows = MEASUREMENTS.filter(m => m.family === f)
					return (
						<div key={f} className="flex flex-col gap-3">
							<p className="flex flex-wrap items-baseline gap-x-3 text-sm">
								<span className="font-semibold">{f}</span>
								<span className="text-muted">v{rows[0].version}</span>
								{FONT_SOURCES[f] && <a href={FONT_SOURCES[f]} target="_blank" rel="noopener noreferrer" className="text-muted underline underline-offset-2 hover:text-foreground">font file ↗</a>}
							</p>
							<div className="overflow-x-auto">
								<table className="w-full text-sm border-collapse">
									<thead><tr>{['String', '400 (px)', '700 (px)', 'Δ (px)', 'Growth'].map(h => <th key={h} className="text-left font-normal text-muted px-2 py-2 border-b border-foreground/10">{h}</th>)}</tr></thead>
									<tbody>{rows.map(m => (
										<tr key={m.string} className="odd:bg-foreground/[0.04]">
											<td className="px-2 py-1.5">{m.string}</td>
											<td className="px-2 py-1.5 tabular-nums text-muted">{m.w400.toFixed(1)}</td>
											<td className="px-2 py-1.5 tabular-nums text-muted">{m.w700.toFixed(1)}</td>
											<td className="px-2 py-1.5 tabular-nums text-muted">{m.delta >= 0 ? '+' : ''}{m.delta.toFixed(1)}</td>
											<td className="px-2 py-1.5 tabular-nums">{m.growth >= 0 ? '+' : ''}{m.growth.toFixed(1)}%</td>
										</tr>
									))}</tbody>
								</table>
							</div>
						</div>
					)
				})}
			</section>
			<SiteFooter current="hoverBoldly" npmVersion={version} siteVersion={siteVersion} />
		</main>
	)
}
