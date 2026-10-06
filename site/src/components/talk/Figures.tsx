// Figures for the "Weight Without Width" paper (family widths, real-font comparison, method), in the site's colour tokens; bars grow and items rise on scroll via the .fig-* classes in talk.css.
import type { CSSProperties, ReactNode } from 'react'

/** Shared caption under each figure. */
function Caption({ children }: { children: ReactNode }) {
	return <figcaption className="mt-3 px-2 lg:px-8 text-xs text-muted tracking-wide">{children}</figcaption>
}

/** Figure heading in the Merriweather display style. */
function FigTitle({ children }: { children: ReactNode }) {
	return <p className="mb-6 text-xl lg:text-2xl" style={{ fontFamily: 'var(--font-merriweather), serif', fontVariationSettings: '"wght" 300, "opsz" 36' }}>{children}</p>
}

/** Median width growth, wght 400 → 700, per family (from content/measurements.ts). */
const FAMILIES: [string, number][] = [
	['Work Sans', 1.1], ['Roboto', 1.1], ['Figtree', 2.8], ['Mulish', 3.6], ['Nunito', 3.9],
	['Raleway', 3.9], ['Inter', 4.7], ['Montserrat', 4.9], ['Source Sans 3', 5.2], ['Manrope', 5.4],
	['DM Sans', 6.0], ['Noto Sans', 6.7], ['Roboto Flex', 7.0], ['Rubik', 7.7], ['Open Sans', 7.7],
]

/** Per-family bars of median width growth; each grows as the figure scrolls into view. */
export function FamiliesFigure() {
	return (
		<div className="fig rounded-xl p-6 lg:p-8" style={{ background: 'var(--panel)' }}>
			<FigTitle>Bold is wider in every family: median +4.8%.</FigTitle>
			<div className="flex flex-col gap-1.5">
				{FAMILIES.map(([n, p], i) => (
					<div key={n} className="grid grid-cols-[7.5rem_minmax(0,1fr)_3.5rem] sm:grid-cols-[9rem_minmax(0,1fr)_4rem] gap-3 items-center">
						<span className="text-sm text-muted">{n}</span>
						<span className="h-3.5 rounded-sm" style={{ background: 'color-mix(in oklch, var(--foreground) 12%, transparent)' }}>
							<span className="fig-grow block h-full rounded-sm" style={{ width: `${(p / 9) * 100}%`, background: 'var(--foreground)', ['--r' as string]: `entry ${15 + i * 5}% entry 100%` } as CSSProperties} />
						</span>
						<span className="text-sm tabular-nums text-right">+{p.toFixed(1)}%</span>
					</div>
				))}
			</div>
			<Caption>Median growth of six navigation labels and one sentence, wght 400 → 700, HarfBuzz at 16 px, google/fonts at commit 9710da1, October 2026.</Caption>
		</div>
	)
}

/** Real-font comparison: Regular, plain bold, tracked bold, narrowed bold and grade, rendered in Chromium at 4× a 16 px label. */
export function CompareFigure() {
	return (
		<div className="fig flex flex-col gap-3">
			{[['compare-os', 'Open Sans'], ['compare-rf', 'Roboto Flex']].map(([f, n], i) => (
				// eslint-disable-next-line @next/next/no-img-element -- static figure renders; dimensions are fixed and small
				<img key={f} className="fig-rise w-full h-auto rounded-xl" src={`/talk/${f}.png`} alt={`${n} "Documentation" at 4× a 16 px label: Regular; plain Bold (wider); Bold with tightened letter-spacing (same width, tighter spacing); Bold narrowed with the width axis (same width)${n === 'Roboto Flex' ? '; and Grade 150 (same width, natural spacing)' : ''}.`} style={{ background: '#fff', ['--r' as string]: `entry ${10 + i * 20}% entry 95%` } as CSSProperties} />
			))}
			<Caption>Rendered in Chromium with the real font files, opsz pinned to 16; letter-spacing from hoverBoldly’s formula, wdth from our width-axis experiment. Red line: the Regular width.</Caption>
		</div>
	)
}

/** Measured compensation in four steps. */
export function MethodFigure() {
	const steps = [
		['01', 'Measure', 'Width at both weights with canvas measureText, off screen: no reflow.'],
		['02', 'Divide', 'Extra width ÷ number of characters.'],
		['03', 'Tighten', 'Added to any letter-spacing you already set.'],
		['04', 'Bolden', 'Weight increased at the same moment.'],
	]
	return (
		<div>
			<div className="fig grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
				{steps.map(([n, h, b], i) => (
					<div key={n} className="fig-rise rounded-xl p-5 flex flex-col gap-2" style={{ background: 'var(--panel)', ['--r' as string]: `entry ${10 + i * 14}% entry 95%` } as CSSProperties}>
						<span className="font-mono text-xs text-faint">{n}</span>
						<span className="text-sm font-semibold">{h}</span>
						<span className="text-xs leading-relaxed text-muted">{b}</span>
					</div>
				))}
			</div>
			<Caption>hoverBoldly&rsquo;s compensation (src/core/adjust.ts): an approximation of grade for fonts that only have a weight axis.</Caption>
		</div>
	)
}
