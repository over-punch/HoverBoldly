// Slides for "Weight Without Width" — hoverBoldly's talk content (slide list, live nav motif, width chart) on top of the shared talk engine.
'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import { SCRIPT_NOTES } from '../../content/talkScript'
import { toolBg, toolFg, toolFgMuted, type ToolId } from '../../lib/toolColors'
import { TOOLS } from '../ToolDirectory'
import { A, MONO, display, rise, CountUp, Eyebrow, Title, Body, Card, Numeral, Reveal, Frame, ThreeUp, type Slide } from './engine'

/** Source URLs cited in footers. */
const SRC = {
	so2009: 'https://stackoverflow.com/questions/556153/inline-elements-shifting-when-made-bold-on-hover',
	cssTricks: 'https://css-tricks.com/bold-on-hover-without-the-layout-shift/',
	grade: 'https://fonts.google.com/knowledge/glossary/grade',
	gfGrade: 'https://googlefonts.github.io/gf-docs/Grade/',
	cls: 'https://web.dev/articles/cls',
	layoutInstability: 'https://github.com/WICG/layout-instability',
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
 * (bold width − regular width) ÷ characters, measured in canvas exactly as hoverBoldly does, so nothing moves.
 */
function LiveNav({ lock, size = 64 }: { lock?: boolean; size?: number }) {
	const [comp, setComp] = useState<number[] | null>(null)
	useEffect(() => {
		let live = true
		document.fonts.ready.then(() => {
			const ctx = document.createElement('canvas').getContext('2d')
			if (!ctx || !live) return
			const width = (t: string, w: number) => { ctx.font = `${w} ${size}px Merriweather`; return ctx.measureText(t).width }
			setComp(NAV.map(t => -(width(t, 700) - width(t, 300)) / t.length))
		})
		return () => { live = false }
	}, [size])
	return (
		<div style={{ display: 'flex', gap: size * 0.55, ...display(size), lineHeight: 1.2 }}>
			{NAV.map((t, i) => (
				<span key={t} className="hb-pulse" style={{ ['--i' as string]: i, ['--c' as string]: lock && comp ? `${comp[i]}px` : '0px' } as CSSProperties}>{t}</span>
			))}
		</div>
	)
}

/** Median width growth from wght 400 to 700 per family (15 Google Fonts variable families, HarfBuzz-shaped at 16px, October 2026). */
const FAMILIES: [string, number][] = [
	['Work Sans', 1.1], ['Roboto', 1.1], ['Figtree', 2.8], ['Mulish', 3.6], ['Nunito', 3.9],
	['Raleway', 3.9], ['Inter', 4.7], ['Montserrat', 4.9], ['Source Sans 3', 5.2], ['Manrope', 5.4],
	['DM Sans', 6.0], ['Noto Sans', 6.7], ['Roboto Flex', 7.0], ['Rubik', 7.7], ['Open Sans', 7.7],
]

/** One family's bar: grows to its share of a 9% scale and counts up when revealed. */
function FamilyBar({ name, pct, on }: { name: string; pct: number; on: boolean }) {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 120px', alignItems: 'center', gap: 24, height: 38, opacity: on ? 1 : 0.18, transition: 'opacity 500ms ease' }}>
			<p style={{ fontSize: 24, color: 'var(--t-muted)' }}>{name}</p>
			<div style={{ height: 22, borderRadius: 4, background: 'var(--t-panel)', overflow: 'hidden' }}>
				<div style={{ height: '100%', width: on ? `${(pct / 9) * 100}%` : '0%', background: 'var(--t-fg)', transition: 'width 900ms cubic-bezier(.2,.7,.2,1)' }} />
			</div>
			<p style={{ fontSize: 26, fontVariantNumeric: 'tabular-nums' }}>+<CountUp to={pct} decimals={1} run={on} ms={800} delay={100} />%</p>
		</div>
	)
}

/** Slide content, in order. */
export const SLIDES: Slide[] = [
	{
		id: 'cover', tool: 'hoverBoldly', steps: 0,
		notes: SCRIPT_NOTES.cover,
		render: () => (
			<div style={{ position: 'absolute', inset: 0, padding: '104px 128px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
				<Eyebrow>A talk on type and interaction</Eyebrow>
				<div className="vfd-rise" style={{ ...rise(120), display: 'flex', flexDirection: 'column', gap: 18 }}>
					<LiveNav size={44} />
					<LiveNav size={44} lock />
				</div>
				<h1 className="vfd-rise" style={{ ...display(176), ...rise(260) }}>
					Weight<br />
					<span style={{ fontStyle: 'italic', color: 'var(--t-subtle)' }}>without width.</span>
				</h1>
				<p className="vfd-rise" style={{ ...rise(500), fontSize: 22, letterSpacing: '0.04em', color: 'var(--t-muted)' }}>15 fonts measured · Stack Overflow 2009–2026 · <A href={SRC.paper}>Read the paper</A></p>
			</div>
		),
	},
	{
		id: 'hook', tool: 'magnetType', steps: 1,
		footer: <>{TALK_TITLE} · The problem</>,
		notes: SCRIPT_NOTES.hook,
		render: s => (
			<Frame eyebrow="The problem" gap={64}>
				<Title a="Hover a menu." b="Watch it move." size={104} />
				<LiveNav size={72} />
				<Reveal at={1} step={s}><Body size={34}>Bold letters are wider. The word grows, and everything after it moves.</Body></Reveal>
			</Frame>
		),
	},
	{
		id: 'history', tool: 'steadyGray', steps: 2,
		footer: <><A href={SRC.so2009}>Stack Overflow question 556153</A>, asked 17 February 2009</>,
		notes: SCRIPT_NOTES.history,
		render: s => (
			<Frame eyebrow="Asked in 2009" gap={56}>
				<Title a="“Inline elements shifting" b="when made bold on hover”" size={96} />
				<div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 96, alignItems: 'end' }}>
					<Reveal at={1} step={s}><p style={display(64, { fontStyle: 'italic', lineHeight: 1.2 })}>“There is no way to avoid this.”</p><div style={{ marginTop: 20 }}><Eyebrow>First answer · same day</Eyebrow></div></Reveal>
					<Reveal at={2} step={s}><p style={display(150)}><CountUp to={251} run={s >= 2} />k</p><Body size={30}>views of the question</Body></Reveal>
				</div>
			</Frame>
		),
	},
	{
		id: 'hacks', tool: 'ragtooth', steps: 3,
		footer: <><A href={SRC.so2009}>Stack Overflow</A> 2009–2014 · <A href={SRC.cssTricks}>CSS-Tricks, 2020</A></>,
		notes: SCRIPT_NOTES.hacks,
		render: s => (
			<Frame eyebrow="The fixes" gap={56}>
				<Title a="Seventeen years of workarounds." b="Every one is a hack." size={92} />
				<ThreeUp step={s}>
					<Card style={{ height: '100%' }}><Numeral>01</Numeral><p style={{ fontSize: 38, fontWeight: 500 }}>Hidden bold copy</p><Body size={28}>A pseudo-element pre-sizes the box. Duplicates every label; single lines only; needs care for screen readers.</Body></Card>
					<Card style={{ height: '100%' }}><Numeral>02</Numeral><p style={{ fontSize: 38, fontWeight: 500 }}>Fake bold</p><Body size={28}>text-shadow or text-stroke thickens without widening. “Uglier than other … bold solutions.”</Body></Card>
					<Card style={{ height: '100%' }}><Numeral>03</Numeral><p style={{ fontSize: 38, fontWeight: 500 }}>Guessed spacing</p><Body size={28}>A hand-tuned negative letter-spacing. “Probably font dependent.”</Body></Card>
				</ThreeUp>
			</Frame>
		),
	},
	{
		id: 'measure', tool: 'fitFlush', steps: 1,
		footer: <>15 <A href={SRC.googleFonts}>Google Fonts</A> variable families · HarfBuzz at 16px · wght 400 → 700 · <A href={SRC.data}>full data</A></>,
		notes: SCRIPT_NOTES.measure,
		render: s => (
			<Frame eyebrow="How much it moves" gap={48}>
				<Title a="We measured fifteen fonts." b="Every median went up." size={96} />
				<Reveal at={1} step={s} style={{ display: 'flex', alignItems: 'baseline', gap: 56 }}>
					<p style={display(260, { lineHeight: 0.9 })}>+<CountUp to={4.8} decimals={1} run={s >= 1} ms={1000} />%</p>
					<Body size={34}>median width growth of navigation labels, Regular to Bold. Range −0.5% to +9.4% across 105 measurements.</Body>
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
				<Title a="Some barely move. Some move eight percent." size={72} />
				<div>
					{FAMILIES.map(([n, p], i) => <FamilyBar key={n} name={n} pct={p} on={s >= (i < 2 ? 1 : i < 12 ? 2 : 3)} />)}
				</div>
			</Frame>
		),
	},
	{
		id: 'cls', tool: 'fitWidth', steps: 1,
		footer: <><A href={SRC.cls}>web.dev: CLS</A> · <A href={SRC.layoutInstability}>WICG Layout Instability</A> · tested in Chromium 149, October 2026</>,
		notes: SCRIPT_NOTES.cls,
		render: s => (
			<Frame eyebrow="Does it matter?" gap={52}>
				<Title a="Hover shifts are eligible." b="Pointer movement isn’t “input”." size={96} />
				<Reveal at={1} step={s}>
					<Card style={{ padding: '36px 44px', gap: 14 }}>
						<p style={{ fontFamily: MONO, fontSize: 30 }}>layout-shift · value 0.00026 · hadRecentInput: <span style={{ color: 'var(--t-fg)', fontWeight: 600 }}>false</span></p>
						<Body size={28}>One bolding nav link, hovered in Chromium. Keyboard focus is excluded; pointer movement isn’t. The value is small (CLS “good” is under 0.1). The jump people see is the cost.</Body>
					</Card>
				</Reveal>
			</Frame>
		),
	},
	{
		id: 'grade', tool: 'glyphShaper', steps: 2,
		footer: <><A href={SRC.grade}>Google Fonts Knowledge: Grade</A> · <A href={SRC.gfGrade}>gf-docs: Grade</A> · Roboto Flex 3.200 measured with HarfBuzz</>,
		notes: SCRIPT_NOTES.grade,
		render: s => (
			<Frame eyebrow="The typographic answer" gap={52}>
				<Title a="Type designers already" b="solved this." size={96} />
				<div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 96, alignItems: 'end' }}>
					<Reveal at={1} step={s}><p style={display(46, { fontStyle: 'italic', lineHeight: 1.35 })}>Grade “alters only the thickness of the letterforms’ strokes without changing the width of the glyph.”</p><div style={{ marginTop: 20 }}><Eyebrow>Google Fonts Knowledge</Eyebrow></div></Reveal>
					<Reveal at={2} step={s}><p style={display(200, { lineHeight: 0.9 })}>0.000<span style={{ fontSize: 72 }}> px</span></p><Body size={28}>width change across Roboto Flex’s whole grade range, at Regular and at Bold.</Body></Reveal>
				</div>
			</Frame>
		),
	},
	{
		id: 'rare', tool: 'floodText', steps: 1,
		footer: <>Axes read from each font’s fvar table · google/fonts at commit 9710da1</>,
		notes: SCRIPT_NOTES.rare,
		render: s => (
			<Frame eyebrow="So use grade?">
				<div style={{ display: 'flex', alignItems: 'center', gap: 96, flex: 1 }}>
					<p className="vfd-rise" style={{ ...display(440, { lineHeight: 0.9 }), ...rise(80) }}>1<span style={{ color: 'var(--t-subtle)' }}>/15</span></p>
					<Reveal at={1} step={s}><p style={display(80)}>of the fonts we measured has a grade axis.</p><p style={display(46, { fontStyle: 'italic', color: 'var(--t-subtle)', lineHeight: 1.3, marginTop: 28 })}>The other fourteen can only get bolder by getting wider.</p></Reveal>
				</div>
			</Frame>
		),
	},
	{
		id: 'thesis', tool: 'hoverBoldly', steps: 0,
		footer: <>{TALK_TITLE} · The principle</>,
		notes: SCRIPT_NOTES.thesis,
		render: () => (
			<Frame eyebrow="The principle" gap={40}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 40 }}>
					<p className="vfd-rise" style={{ ...display(132), ...rise(100) }}>Weight changes emphasis.</p>
					<p className="vfd-rise" style={{ ...display(132, { fontStyle: 'italic', color: 'var(--t-subtle)' }), ...rise(650) }}>Width changes layout.</p>
					<p className="vfd-rise" style={{ ...rise(1200), fontSize: 34, color: 'var(--t-muted)', marginTop: 24 }}>An interaction state should change the first, and never the second. Grade does that by design, where a font has it.</p>
				</div>
			</Frame>
		),
	},
	{
		id: 'how', tool: 'textBreath', steps: 5,
		footer: <><A href={SRC.github}>hoverBoldly on GitHub</A> · src/core/adjust.ts</>,
		notes: SCRIPT_NOTES.how,
		render: s => (
			<Frame eyebrow="How hoverBoldly works" gap={52}>
				<Title a="An approximation of grade," b="done in code." size={88} />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
					{[
						['01', 'Measure', 'Width at both weights, in canvas, off the page.'],
						['02', 'Divide', 'Extra width ÷ characters.'],
						['03', 'Tighten', 'Letter-spacing down by that amount.'],
						['04', 'Bolden', 'Weight up at the same moment.'],
					].map(([n, h, b], i) => (
						<Reveal key={n} at={i + 1} step={s} style={{ height: '100%' }}>
							<Card style={{ height: '100%' }}><Numeral>{n}</Numeral><p style={{ fontSize: 40, fontWeight: 500 }}>{h}</p><Body size={30}>{b}</Body></Card>
						</Reveal>
					))}
				</div>
				<Reveal at={5} step={s}><LiveNav size={60} lock /></Reveal>
			</Frame>
		),
	},
	{
		id: 'holds', tool: 'axisRhythm', steps: 2,
		footer: <>Built library (element mode) in Chromium 149 · 6 fonts × 6 labels at 16 px · <A href={SRC.paper}>method in the paper</A></>,
		notes: SCRIPT_NOTES.holds,
		render: s => (
			<Frame eyebrow="Does it hold?" gap={56}>
				<Title a="We measured our own fix." size={96} />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
					<Reveal at={1} step={s}><Card style={{ height: '100%' }}><Eyebrow>Plain bold</Eyebrow><p style={display(120)}><CountUp to={3.5} decimals={1} run={s >= 1} ms={900} /><span style={{ fontSize: 56 }}> px</span></p><Body size={30}>median width change · 4–8 layout shifts per menu sweep</Body></Card></Reveal>
					<Reveal at={2} step={s}><Card style={{ height: '100%' }}><Eyebrow>hoverBoldly</Eyebrow><p style={display(120)}><CountUp from={3.5} to={0} decimals={1} run={s >= 2} ms={900} /><span style={{ fontSize: 56 }}> px</span></p><Body size={30}>median width change (max 0.02 px) · 0 layout shifts</Body></Card></Reveal>
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
				<Title a="hoverBoldly." b="Bold, no shift." size={96} />
				<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
					{['Element, word, or cursor-proximity modes', 'React component and hook, or plain JavaScript', 'Zero runtime dependencies'].map((t, i) => <p key={t} className="vfd-rise" style={{ ...rise(420 + i * 110), fontSize: 34 }}>{t}</p>)}
					<p className="vfd-rise" style={{ ...rise(800), fontFamily: MONO, fontSize: 28, padding: '16px 24px', background: 'var(--t-panel)', borderRadius: 13, alignSelf: 'flex-start' }}>npm install @overpunch/hoverboldly</p>
				</div>
			</Frame>
		),
	},
	{
		id: 'limits', tool: 'speechType', steps: 0,
		footer: <>{TALK_TITLE} · Limits</>,
		notes: SCRIPT_NOTES.limits,
		render: () => (
			<Frame eyebrow="Limits" gap={48}>
				<Title a="What it doesn’t do." size={96} />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
					{[
						['Static fonts', 'Needs a variable font with a weight axis. A static bold can’t tighten while it bolds.'],
						['An approximation', 'Tightens 0.0004–0.048 em, evenly. Grade keeps the letterforms too.'],
						['Focus and lines', 'Keyboard focus in element mode; keep a focus ring. Proximity mode freezes line breaks.'],
					].map(([h, b], i) => <Card key={h} style={{ height: '100%', ...rise(380 + i * 120) }}><p className="vfd-rise" style={{ fontSize: 38, fontWeight: 500 }}>{h}</p><Body size={30}>{b}</Body></Card>)}
				</div>
			</Frame>
		),
	},
	{
		id: 'objections', tool: 'stabilType', steps: 0,
		footer: <>{TALK_TITLE} · Objections</>,
		notes: SCRIPT_NOTES.objections,
		render: () => (
			<Frame eyebrow="Objections" gap={48}>
				<Title a="Objections, answered." size={96} />
				<div>
					{[
						['“Just change the colour”', 'Often the right call. When a design uses weight, keep the width.'],
						['“The pseudo-element trick works”', 'For many labels, at the cost of duplicated content.'],
						['“Why add JavaScript?”', 'For a fixed font and size, compute offsets once and ship CSS.'],
						['“It’s only a few pixels”', 'On every hover, on every menu, since 2009.'],
					].map(([q, a], i) => (
						<div key={q} className="vfd-rise" style={{ ...rise(380 + i * 120), display: 'grid', gridTemplateColumns: '760px 1fr', gap: 48, padding: '24px 24px', margin: '0 -24px', background: i % 2 ? 'transparent' : 'color-mix(in oklch, var(--t-fg) 4%, transparent)', borderRadius: 12 }}>
							<p style={display(40, { fontStyle: 'italic', lineHeight: 1.35 })}>{q}</p>
							<p style={{ fontSize: 32, lineHeight: 1.45, color: 'var(--t-muted)' }}>{a}</p>
						</div>
					))}
				</div>
			</Frame>
		),
	},
	{
		id: 'ask', tool: 'wrapType', steps: 3,
		footer: <>{TALK_TITLE} · The ask</>,
		notes: SCRIPT_NOTES.ask,
		render: s => (
			<Frame eyebrow="The ask" gap={56}>
				<Title a="Three asks." size={96} />
				<ThreeUp step={s}>
					{[
						['01', 'Type designers', 'Ship a grade axis in your web families, with enough range to read as emphasis.'],
						['02', 'Designers and developers', 'Weight may change; width may not. Grade where you can, compensation where you can’t, and a visible focus ring.'],
						['03', 'The CSS working group', 'There is no way to say “emphasise this without moving it.” We found no proposal.'],
					].map(([n, h, b]) => <Card key={n} style={{ height: '100%' }}><Numeral>{n}</Numeral><p style={{ fontSize: 40, fontWeight: 500 }}>{h}</p><Body size={32}>{b}</Body></Card>)}
				</ThreeUp>
			</Frame>
		),
	},
	{
		id: 'close', tool: 'hoverBoldly', steps: 0,
		notes: SCRIPT_NOTES.close,
		render: () => (
			<div style={{ position: 'absolute', inset: 0, padding: '104px 128px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
				<Eyebrow>{TALK_TITLE}</Eyebrow>
				<div className="vfd-rise" style={{ ...rise(120) }}><LiveNav size={44} lock /></div>
				<h1 className="vfd-rise" style={{ ...display(150), ...rise(240) }}>
					Weight changes emphasis.<br />
					<span style={{ fontStyle: 'italic', color: 'var(--t-subtle)' }}>Width changes layout.</span>
				</h1>
				<p className="vfd-rise" style={{ ...rise(500), fontSize: 22, letterSpacing: '0.04em', color: 'var(--t-muted)' }}>
					<A href={SRC.paper}>The paper</A><span aria-hidden="true"> · </span><A href={SRC.data}>Measurements</A><span aria-hidden="true"> · </span><A href="https://hoverboldly.com">hoverboldly.com</A>
				</p>
			</div>
		),
	},
	{
		id: 'about', tool: 'opticalMargin', steps: 0,
		notes: SCRIPT_NOTES.about,
		render: () => (
			<div style={{ position: 'absolute', inset: 0, padding: '88px 128px', display: 'flex', flexDirection: 'column', gap: 26 }}>
				<Eyebrow>About</Eyebrow>
				<Title a="We’re Overpunch." b="We make type tools for the web." size={88} />
				<p className="vfd-rise" style={{ ...rise(280), fontSize: 30, lineHeight: 1.45, color: 'var(--t-muted)', maxWidth: 1500 }}>
					15+ years building websites for type foundries. Next: <span style={{ color: 'var(--t-fg)' }}>Typetin</span>, a self-serve storefront for independent foundries, in development (waitlist at <A href="https://typetin.com">typetin.com</A>).
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
					{TOOLS.map((t, i) => {
						const id = t.id as ToolId
						return (
							<a key={t.id} href={t.url} target="_blank" rel="noopener noreferrer" className="vfd-rise" style={{ ...rise(320 + i * 28), display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px', borderRadius: 12, background: toolBg(id), color: toolFg(id), textDecoration: 'none', outline: t.id === 'hoverBoldly' ? `3px solid ${toolFg(id)}` : 'none', outlineOffset: -3 }}>
								<span style={{ fontSize: 24, fontWeight: 500 }}>{t.name}</span>
								<span style={{ fontSize: 18, color: toolFgMuted(id) }}>{t.short}</span>
							</a>
						)
					})}
				</div>
				<div className="vfd-rise" style={{ ...rise(950), display: 'flex', flexDirection: 'column', gap: 12 }}>
					<p style={display(44)}>Start with hoverBoldly: <A href="https://hoverboldly.com">hoverboldly.com</A></p>
					<p style={{ fontSize: 26, color: 'var(--t-muted)' }}>
						<A href="https://www.npmjs.com/package/@overpunch/hoverboldly">npm</A><span aria-hidden="true"> · </span><A href={SRC.github}>GitHub</A><span aria-hidden="true"> · </span><A href={SRC.paper}>The paper</A><span aria-hidden="true"> · </span><A href={SRC.data}>The measurements</A>
					</p>
				</div>
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
