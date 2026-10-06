// Slides for "Weight Without Width" — hoverBoldly's talk content (slide list, live nav motif, width chart, real-font comparison) on top of the shared talk engine.
'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { SCRIPT_NOTES } from '../../content/talkScript'
import { toolBg, toolFg, toolFgMuted, type ToolId } from '../../lib/toolColors'
import { TOOLS } from '../ToolDirectory'
import { A, MONO, display, rise, CountUp, Eyebrow, Title, Body, Card, Numeral, Reveal, Frame, ThreeUp, type Slide } from './engine'

/** Source URLs cited in footers. */
const SRC = {
	so2009: 'https://stackoverflow.com/questions/556153/inline-elements-shifting-when-made-bold-on-hover',
	cssTricks: 'https://css-tricks.com/bold-on-hover-without-the-layout-shift/',
	grade: 'https://fonts.google.com/knowledge/glossary/grade',
	gfMetadata: 'https://fonts.google.com/metadata/fonts',
	layoutInstability: 'https://github.com/WICG/layout-instability',
	csswg14523: 'https://github.com/w3c/csswg-drafts/issues/14523',
	csswg14477: 'https://github.com/w3c/csswg-drafts/issues/14477',
	googleFonts: 'https://github.com/google/fonts',
	paper: '/paper',
	data: '/paper/data',
	github: 'https://github.com/over-punch/HoverBoldly',
}

/** Talk title, used in footers and the page chrome. */
export const TALK_TITLE = 'Weight Without Width'

/** Labels for the live nav motif. */
const NAV = ['Home', 'Products', 'Pricing', 'Docs', 'Contact']

/**
 * A nav row whose items bold in turn. With `lock`, each item tightens its letter-spacing by
 * (bold width − regular width) ÷ characters, measured in canvas as hoverBoldly does, so nothing moves.
 * `guide` draws a hairline at the row's resting right edge so any shove is visible.
 */
function LiveNav({ lock, size = 64, guide }: { lock?: boolean; size?: number; guide?: boolean }) {
	const [comp, setComp] = useState<number[] | null>(null)
	const [edge, setEdge] = useState<number | null>(null)
	const row = useRef<HTMLDivElement>(null)
	useEffect(() => {
		let live = true
		document.fonts.ready.then(() => {
			const ctx = document.createElement('canvas').getContext('2d')
			if (!ctx || !live) return
			const width = (t: string, w: number) => { ctx.font = `${w} ${size}px Merriweather`; return ctx.measureText(t).width }
			setComp(NAV.map(t => -(width(t, 700) - width(t, 300)) / t.length))
			const last = row.current?.lastElementChild as HTMLElement | null
			if (last && row.current) setEdge(last.offsetLeft + last.offsetWidth)
		})
		return () => { live = false }
	}, [size])
	return (
		<div ref={row} style={{ position: 'relative', display: 'flex', gap: size * 0.55, ...display(size), lineHeight: 1.2 }}>
			{NAV.map((t, i) => (
				<span key={t} className="hb-pulse" style={{ ['--i' as string]: i, ['--c' as string]: lock && comp ? `${comp[i]}px` : '0px' } as CSSProperties}>{t}</span>
			))}
			{guide && edge !== null && <i aria-hidden="true" style={{ position: 'absolute', left: edge + 2, top: '8%', bottom: '8%', borderLeft: '3px solid var(--t-subtle)' }} />}
		</div>
	)
}

/** Median width growth from wght 400 to 700 per family; `hi` marks the families named in the script. */
const FAMILIES: [string, number, number][] = [
	['Work Sans', 1.1, 1], ['Roboto', 1.1, 1], ['Figtree', 2.8, 0], ['Mulish', 3.6, 0], ['Nunito', 3.9, 0],
	['Raleway', 3.9, 0], ['Inter', 4.7, 2], ['Montserrat', 4.9, 2], ['Source Sans 3', 5.2, 0], ['Manrope', 5.4, 0],
	['DM Sans', 6.0, 0], ['Noto Sans', 6.7, 0], ['Roboto Flex', 7.0, 0], ['Rubik', 7.7, 3], ['Open Sans', 7.7, 3],
]

/** One family's bar: named families light up at their build step; the rest stay as quiet context. */
function FamilyBar({ name, pct, at, step }: { name: string; pct: number; at: number; step: number }) {
	const lit = at > 0 && step >= at
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 130px', alignItems: 'center', gap: 24, height: 38 }}>
			<p style={{ fontSize: lit ? 30 : 24, fontWeight: lit ? 500 : 300, color: lit ? 'var(--t-fg)' : 'var(--t-muted)', transition: 'all 400ms ease' }}>{name}</p>
			<div style={{ height: lit ? 26 : 18, borderRadius: 4, background: 'var(--t-panel)', overflow: 'hidden', transition: 'height 400ms ease' }}>
				<div style={{ height: '100%', width: step >= 1 ? `${(pct / 9) * 100}%` : '0%', background: lit ? 'var(--t-fg)' : 'color-mix(in oklch, var(--t-fg) 35%, transparent)', transition: 'width 900ms cubic-bezier(.2,.7,.2,1), background 400ms ease' }} />
			</div>
			<p style={{ fontSize: lit ? 30 : 24, fontVariantNumeric: 'tabular-nums', color: lit ? 'var(--t-fg)' : 'var(--t-muted)' }}>+{pct.toFixed(1)}%</p>
		</div>
	)
}

/** Slide content, in order. */
export const SLIDES: Slide[] = [
	{
		id: 'cover', tool: 'hoverBoldly', steps: 0,
		notes: SCRIPT_NOTES.cover,
		render: () => (
			<div style={{ position: 'absolute', inset: 0, padding: '96px 128px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
				<Eyebrow>A talk on type and interaction</Eyebrow>
				<div className="vfd-rise" style={{ ...rise(120), display: 'flex', flexDirection: 'column', gap: 36 }}>
					<div style={{ display: 'flex', alignItems: 'baseline', gap: 32 }}><span style={{ fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--t-muted)', width: 130, flexShrink: 0 }}>Bold</span><LiveNav size={84} guide /></div>
					<div style={{ display: 'flex', alignItems: 'baseline', gap: 32 }}><span style={{ fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--t-muted)', width: 130, flexShrink: 0 }}>Locked</span><LiveNav size={84} lock guide /></div>
				</div>
				<div className="vfd-rise" style={{ ...rise(700), display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
					<h1 style={display(120)}>Weight <span style={{ fontStyle: 'italic', color: 'var(--t-subtle)' }}>without width.</span></h1>
					<p style={{ fontSize: 26, color: 'var(--t-muted)' }}>hoverboldly.com</p>
				</div>
			</div>
		),
	},
	{
		id: 'hook', tool: 'magnetType', steps: 1,
		footer: <>{TALK_TITLE} · The problem</>,
		notes: SCRIPT_NOTES.hook,
		render: s => (
			<Frame eyebrow="The problem" gap={64}>
				<Title a="Menus that twitch when you hover them." size={96} />
				<LiveNav size={84} guide />
				<Reveal at={1} step={s}><Body size={36}>Bold letters are wider. The word grows; everything after it moves over.</Body></Reveal>
			</Frame>
		),
	},
	{
		id: 'history', tool: 'steadyGray', steps: 2,
		footer: <><A href={SRC.so2009}>Stack Overflow question 556153</A>, asked 17 February 2009 · views read 5 October 2026</>,
		notes: SCRIPT_NOTES.history,
		render: s => (
			<Frame eyebrow="Asked in 2009" gap={56}>
				<Title a="“Inline elements shifting" b="when made bold on hover”" size={96} />
				<div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 96, alignItems: 'end' }}>
					<Reveal at={1} step={s}><p style={display(52, { fontStyle: 'italic', lineHeight: 1.25 })}>“There is no way to avoid this, except by compromises…”</p><div style={{ marginTop: 20 }}><Eyebrow>First answer · same morning</Eyebrow></div></Reveal>
					<Reveal at={2} step={s}><p style={display(150)}><CountUp to={251} run={s >= 2} />k</p><Body size={30}>views</Body></Reveal>
				</div>
			</Frame>
		),
	},
	{
		id: 'hacks', tool: 'ragtooth', steps: 3,
		footer: <><A href={SRC.cssTricks}>CSS-Tricks, 2020</A> · <A href={SRC.so2009}>Stack Overflow, 2009–2014</A> · Fluent UI and Primer tab source</>,
		notes: SCRIPT_NOTES.hacks,
		render: s => (
			<Frame eyebrow="The workarounds" gap={56}>
				<Title a="Seventeen years of workarounds." size={96} />
				<ThreeUp step={s}>
					<Card style={{ height: '100%' }}><Numeral>01</Numeral><p style={{ fontSize: 40, fontWeight: 500 }}>Hidden bold copy</p><Body size={30}>Pure CSS; Fluent UI and Primer ship it. Leaves empty space at rest.</Body></Card>
					<Card style={{ height: '100%' }}><Numeral>02</Numeral><p style={{ fontSize: 40, fontWeight: 500 }}>Fake bold</p><Body size={30}>A shadow or stroke. Never quite looks like bold.</Body></Card>
					<Card style={{ height: '100%' }}><Numeral>03</Numeral><p style={{ fontSize: 40, fontWeight: 500 }}>Guessed spacing</p><Body size={30}>Holds for one font at one size.</Body></Card>
				</ThreeUp>
			</Frame>
		),
	},
	{
		id: 'measure', tool: 'fitFlush', steps: 1,
		footer: <>15 <A href={SRC.googleFonts}>Google Fonts</A> variable families · HarfBuzz at 16 px · wght 400 → 700 · <A href={SRC.data}>full data</A></>,
		notes: SCRIPT_NOTES.measure,
		render: s => (
			<Frame eyebrow="How much it moves" gap={48}>
				<Title a="Every family got wider on median." size={96} />
				<Reveal at={1} step={s} style={{ display: 'flex', alignItems: 'baseline', gap: 56 }}>
					<p style={display(280, { lineHeight: 0.9 })}>+<CountUp to={4.8} decimals={1} run={s >= 1} ms={1000} />%</p>
					<Body size={36}>median, Regular to Bold. Worst case +9.4%.</Body>
				</Reveal>
			</Frame>
		),
	},
	{
		id: 'families', tool: 'typsettle', steps: 3,
		footer: <>Median growth per family, HarfBuzz-shaped, kerning on · <A href={SRC.data}>all 105 measurements</A></>,
		notes: SCRIPT_NOTES.families,
		render: s => (
			<Frame eyebrow="Font by font" gap={36}>
				<Title a="Work Sans barely moves. Open Sans moves 8%." size={72} />
				<div>{FAMILIES.map(([n, p, at]) => <FamilyBar key={n} name={n} pct={p} at={at} step={s} />)}</div>
			</Frame>
		),
	},
	{
		id: 'grade', tool: 'glyphShaper', steps: 2,
		footer: <><A href={SRC.grade}>Google Fonts Knowledge: Grade</A> · Roboto Flex 3.200, HarfBuzz, GRAD −200 → 150</>,
		notes: SCRIPT_NOTES.grade,
		render: s => (
			<Frame eyebrow="The typographic answer" gap={52}>
				<Title a="Grade: weight without width," b="by design." size={96} />
				<div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 96, alignItems: 'end' }}>
					<Reveal at={1} step={s}><p style={display(46, { fontStyle: 'italic', lineHeight: 1.35 })}>Grade “alters only the thickness of the letterforms’ strokes without changing the width of the glyph.”</p><div style={{ marginTop: 20 }}><Eyebrow>Google Fonts Knowledge</Eyebrow></div></Reveal>
					<Reveal at={2} step={s}><p style={display(200, { lineHeight: 0.9 })}>0<span style={{ fontSize: 72 }}> px</span></p><Body size={30}>width change across Roboto Flex’s whole grade range.</Body></Reveal>
				</div>
			</Frame>
		),
	},
	{
		id: 'census', tool: 'floodText', steps: 1,
		footer: <>Every family in the <A href={SRC.gfMetadata}>Google Fonts catalogue metadata</A>, read 5 October 2026</>,
		notes: SCRIPT_NOTES.census,
		render: s => (
			<Frame eyebrow="Who ships grade?">
				<div style={{ display: 'flex', alignItems: 'center', gap: 96, flex: 1 }}>
					<p className="vfd-rise" style={{ ...display(400, { lineHeight: 0.9 }), ...rise(80) }}><CountUp to={5} ms={700} delay={300} /></p>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
						<p className="vfd-rise" style={{ ...display(72), ...rise(260) }}>of 544 variable Google Fonts with a weight axis have grade.</p>
						<Reveal at={1} step={s}><p style={display(52, { fontStyle: 'italic', color: 'var(--t-subtle)', lineHeight: 1.3 })}>96 have a width axis.</p></Reveal>
					</div>
				</div>
			</Frame>
		),
	},
	{
		id: 'compare', tool: 'fitWidth', steps: 0,
		footer: <>Roboto Flex at 4× a 16 px label, rendered in Chromium · red line: the Regular width · <A href={SRC.paper}>Open Sans in the paper</A></>,
		notes: SCRIPT_NOTES.compare,
		render: () => (
			<Frame eyebrow="What it looks like" gap={36}>
				<Title a="Same width, four ways." size={80} />
				{/* A plain img is right here: the slide stage is fixed-size and the image is the slide, not page LCP. */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img className="vfd-rise" src="/talk/compare-rf.png" alt="Roboto Flex 'Documentation' at 4x: Regular, plain Bold (wider), Bold with tightened letter-spacing (same width, tight), Bold narrowed with the width axis (same width), and Grade 150 (same width, natural spacing)." style={{ ...rise(300), height: 640, width: 'auto', alignSelf: 'flex-start', borderRadius: 18, background: '#fff' }} />
			</Frame>
		),
	},
	{
		id: 'order', tool: 'hoverBoldly', steps: 0,
		footer: <>{TALK_TITLE} · The order</>,
		notes: SCRIPT_NOTES.order,
		render: () => (
			<Frame eyebrow="If you remember one thing" gap={40}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 30, marginTop: 30 }}>
					{[['1', 'Grade', 'if the font has it'], ['2', 'Width axis', 'if it doesn’t'], ['3', 'Measured spacing', 'if it has neither']].map(([n, h, b], i) => (
						<div key={n} className="vfd-rise" style={{ ...rise(150 + i * 450), display: 'flex', alignItems: 'baseline', gap: 48 }}>
							<span style={{ fontFamily: MONO, fontSize: 36, color: 'var(--t-faint)' }}>{n}</span>
							<span style={display(120)}>{h}</span>
							<span style={{ fontSize: 34, color: 'var(--t-muted)' }}>{b}</span>
						</div>
					))}
				</div>
			</Frame>
		),
	},
	{
		id: 'how', tool: 'textBreath', steps: 5,
		footer: <><A href={SRC.github}>hoverBoldly on GitHub</A> · src/core/adjust.ts · MIT</>,
		notes: SCRIPT_NOTES.how,
		render: s => (
			<Frame eyebrow="How hoverBoldly works" gap={52}>
				<Title a="Measured spacing, in code." size={96} />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
					{[
						['01', 'Measure', 'Both weights, in canvas, off the page.'],
						['02', 'Divide', 'Extra width ÷ characters.'],
						['03', 'Tighten', 'On top of your own letter-spacing.'],
						['04', 'Bolden', 'At the same moment.'],
					].map(([n, h, b], i) => (
						<Reveal key={n} at={i + 1} step={s} style={{ height: '100%' }}>
							<Card style={{ height: '100%' }}><Numeral>{n}</Numeral><p style={{ fontSize: 40, fontWeight: 500 }}>{h}</p><Body size={30}>{b}</Body></Card>
						</Reveal>
					))}
				</div>
				<Reveal at={5} step={s}><Body size={34}>Made for running text, where the CSS trick can’t reserve space.</Body></Reveal>
			</Frame>
		),
	},
	{
		id: 'holds', tool: 'axisRhythm', steps: 2,
		footer: <>Shipped library, element mode · Playwright’s Chromium 149 · 6 fonts × 8 labels at 16 px · <A href={SRC.paper}>method in the paper</A></>,
		notes: SCRIPT_NOTES.holds,
		render: s => (
			<Frame eyebrow="Does it hold?" gap={48}>
				<Title a="We measured our own fix." size={96} />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
					<Reveal at={1} step={s}><Card style={{ height: '100%' }}><Eyebrow>Mixed-case labels</Eyebrow><p style={display(96)}><CountUp from={3.5} to={0} decimals={1} run={s >= 1} ms={900} /><span style={{ fontSize: 48 }}> px</span></p><Body size={28}>median change with hoverBoldly (plain bold: 3.5 px, max 8.9)</Body></Card></Reveal>
					<Reveal at={2} step={s}><Card style={{ height: '100%' }}><Eyebrow>Tracked uppercase</Eyebrow><p style={display(96)}><CountUp from={23.3} to={0.16} decimals={2} run={s >= 2} ms={1100} /><span style={{ fontSize: 48 }}> px</span></p><Body size={28}>max change after the fix (old version: up to 23.3 px)</Body></Card></Reveal>
				</div>
			</Frame>
		),
	},
	{
		id: 'demo', tool: 'hoverBoldly', steps: 0,
		footer: <><A href="https://hoverboldly.com">hoverboldly.com</A> · <A href={SRC.github}>GitHub</A> · MIT licensed</>,
		notes: SCRIPT_NOTES.demo,
		render: () => (
			<Frame eyebrow="Demo" gap={56}>
				<Title a="hoverBoldly." b="On a paragraph." size={96} />
				<p className="vfd-rise" style={{ ...rise(500), fontFamily: MONO, fontSize: 30, padding: '18px 26px', background: 'var(--t-panel)', borderRadius: 13, alignSelf: 'flex-start' }}>npm install @overpunch/hoverboldly</p>
			</Frame>
		),
	},
	{
		id: 'limits', tool: 'speechType', steps: 0,
		footer: <>{TALK_TITLE} · Limits</>,
		notes: SCRIPT_NOTES.limits,
		render: () => (
			<Frame eyebrow="Where it falls short" gap={40}>
				<Title a="What it doesn’t do." size={96} />
				<div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
					{[
						['Needs a weight axis', 'Static bold faces can’t tighten while they bold.'],
						['Tracked bold looks tight', 'Use grade or the width axis when the font has them.'],
						['Keep a focus ring', 'Keyboard focus is handled in the default mode only.'],
						['Nav bars', 'The CSS hidden-copy trick is often simpler.'],
					].map(([h, b], i) => (
						<div key={h} className="vfd-rise" style={{ ...rise(380 + i * 120), display: 'grid', gridTemplateColumns: '620px 1fr', gap: 40, alignItems: 'baseline' }}>
							<p style={display(48)}>{h}</p>
							<p style={{ fontSize: 34, color: 'var(--t-muted)' }}>{b}</p>
						</div>
					))}
				</div>
			</Frame>
		),
	},
	{
		id: 'ask', tool: 'wrapType', steps: 3,
		footer: <>csswg-drafts <A href={SRC.csswg14523}>#14523</A> (synthetic bold vs advances) and <A href={SRC.csswg14477}>#14477</A> (prefers-bold-text), both open</>,
		notes: SCRIPT_NOTES.ask,
		render: s => (
			<Frame eyebrow="The ask" gap={44}>
				<Title a="Three asks." size={96} />
				<div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
					{[
						['Type designers', 'Ship grade, or at least width, in web families.'],
						['Designers and developers', 'Weight may change. Width may not.'],
						['The CSS working group', 'A way to ask for emphasis without movement.'],
					].map(([h, b], i) => (
						<Reveal key={h} at={i + 1} step={s}><div style={{ display: 'grid', gridTemplateColumns: '640px 1fr', gap: 40, alignItems: 'baseline' }}><p style={display(52)}>{h}</p><p style={{ fontSize: 38, color: 'var(--t-muted)' }}>{b}</p></div></Reveal>
					))}
				</div>
			</Frame>
		),
	},
	{
		id: 'close', tool: 'hoverBoldly', steps: 0,
		notes: SCRIPT_NOTES.close,
		render: () => (
			<div style={{ position: 'absolute', inset: 0, padding: '104px 128px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
				<Eyebrow>{TALK_TITLE}</Eyebrow>
				<h1 className="vfd-rise" style={{ ...display(150), ...rise(150) }}>
					Weight changes emphasis.<br />
					<span style={{ fontStyle: 'italic', color: 'var(--t-subtle)' }}>Width changes layout.</span>
				</h1>
				<div className="vfd-rise" style={{ ...rise(600), display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
					<p style={display(64)}><A href="https://hoverboldly.com">hoverboldly.com</A></p>
					<p style={{ fontSize: 28, color: 'var(--t-muted)' }}>The paper · the measurements · the code</p>
				</div>
			</div>
		),
	},
	{
		id: 'about', tool: 'opticalMargin', steps: 0,
		notes: SCRIPT_NOTES.about,
		render: () => (
			<div style={{ position: 'absolute', inset: 0, padding: '96px 128px', display: 'flex', flexDirection: 'column', gap: 36 }}>
				<Eyebrow>About</Eyebrow>
				<Title a="We’re Overpunch." b="Type tools for the web." size={96} />
				<p className="vfd-rise" style={{ ...rise(280), fontSize: 36, lineHeight: 1.45, color: 'var(--t-muted)', maxWidth: 1500 }}>
					15+ years building websites for type foundries. Next: <span style={{ color: 'var(--t-fg)' }}>Typetin</span>, a storefront for independent foundries, in development (<A href="https://typetin.com">typetin.com</A>).
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14 }}>
					{TOOLS.filter(t => ['hoverBoldly', 'vfClamp', 'magnetType', 'axisRhythm', 'opticalMargin', 'ragtooth'].includes(t.id)).map((t, i) => {
						const id = t.id as ToolId
						return (
							<a key={t.id} href={t.url} target="_blank" rel="noopener noreferrer" className="vfd-rise" style={{ ...rise(420 + i * 60), display: 'flex', flexDirection: 'column', gap: 8, padding: '20px 22px', borderRadius: 14, background: toolBg(id), color: toolFg(id), textDecoration: 'none' }}>
								<span style={{ fontSize: 28, fontWeight: 500 }}>{t.name}</span>
								<span style={{ fontSize: 20, color: toolFgMuted(id) }}>{t.short}</span>
							</a>
						)
					})}
				</div>
				<p className="vfd-rise" style={{ ...rise(900), fontSize: 30, color: 'var(--t-muted)' }}>…and {TOOLS.length - 6} more at <A href="https://hoverboldly.com">hoverboldly.com</A> under Type Tools.</p>
			</div>
		),
	},
]

/** hoverBoldly's keyframes: the live nav pulse (each item bolds in turn; --c is its measured letter-spacing compensation). */
export const TALK_CSS = `
@keyframes hb-pulse { 0%, 30%, 100% { font-variation-settings: "wght" 300, "opsz" 72; letter-spacing: 0; } 10%, 20% { font-variation-settings: "wght" 700, "opsz" 72; letter-spacing: var(--c); } }
.hb-pulse { font-variation-settings: "wght" 300, "opsz" 72; animation: hb-pulse 6s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s); }
@media (prefers-reduced-motion: reduce) { .hb-pulse { animation: none; } }
`
