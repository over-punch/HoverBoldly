// Figures for the "Weight Without Width" paper (family widths, weight vs grade, method), in the site's colour tokens; bars grow and items rise on scroll via the .fig-* classes in talk.css.
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

/** Weight vs grade on the same word: bold widens the box, grade keeps it. */
export function GradeFigure() {
	const rows = [
		{ label: 'Weight 400', style: { fontVariationSettings: '"wght" 400' }, note: 'baseline' },
		{ label: 'Weight 700', style: { fontVariationSettings: '"wght" 700' }, note: 'wider: everything after it moves' },
		{ label: 'Grade, heavier', style: { fontVariationSettings: '"wght" 400', WebkitTextStroke: '0.035em currentColor' } as CSSProperties, note: 'same width (illustration)' },
	]
	return (
		<div className="fig rounded-xl p-6 lg:p-8" style={{ background: 'var(--panel)' }}>
			<FigTitle>Grade adds weight. Width stays.</FigTitle>
			<div className="flex flex-col gap-4">
				{rows.map((r, i) => (
					<div key={r.label} className="fig-rise grid grid-cols-1 sm:grid-cols-[9rem_minmax(0,1fr)] gap-1 sm:gap-4 items-baseline" style={{ ['--r' as string]: `entry ${10 + i * 15}% entry 95%` } as CSSProperties}>
						<span className="text-xs uppercase tracking-[0.18em] text-muted">{r.label}</span>
						<span className="flex items-baseline gap-3 flex-wrap">
							<span className="text-3xl lg:text-4xl" style={{ fontFamily: 'var(--font-merriweather), serif', ...r.style }}>Pricing</span>
							<span className="text-xs text-muted">{r.note}</span>
						</span>
					</div>
				))}
			</div>
			<Caption>In Roboto Flex, the GRAD axis (−200 to 150) changed measured width by 0.000 px for all seven test strings. The third row only illustrates the idea in Merriweather, which has no grade axis.</Caption>
		</div>
	)
}

/** Measured compensation in four steps. */
export function MethodFigure() {
	const steps = [
		['01', 'Measure', 'Width at both weights with canvas measureText, off screen: no reflow.'],
		['02', 'Divide', 'Extra width ÷ number of characters.'],
		['03', 'Tighten', 'Letter-spacing reduced by that amount.'],
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
