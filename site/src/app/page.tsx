// page.tsx — hoverBoldly landing page
import Link from "next/link"
import Demo from "@/components/Demo"
import Hero from "@/components/Hero"
import CodeBlock from "@/components/CodeBlock"
import { version } from "../../../package.json"
import { version as siteVersion } from "../../package.json"
import SiteFooter from "../components/SiteFooter"
import PortsSection from "../components/PortsSection"

export default function Home() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		"name": "Hover Boldly",
		"url": "https://hoverboldly.com",
		"description": "Bold on hover without layout shift. Measures the width difference between normal and bold weight using Canvas, then compensates with letter-spacing. Zero reflow.",
		"applicationCategory": "DeveloperApplication",
		"operatingSystem": "Any",
		"offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
	}

	return (
		<main className="flex flex-col items-center px-6 py-20 gap-24">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* Hero */}
			<Hero
				eyebrow="reflow-free hover weight"
				title={[{ text: "Bold on hover," }, { text: "Zero layout shift.", italic: true, subtle: true }]}
				install="@overpunch/hoverboldly"
				github="https://github.com/over-punch/HoverBoldly"
				tech={["TypeScript", "Canvas measurement", "React + Vanilla JS"]}
			>
				<p className="text-base leading-relaxed max-w-lg">
					Every browser will reflow text when you hover to bold — words push down, lines shift. Hover Boldly measures the exact width difference using Canvas, then compensates with letter-spacing so the line never moves.
				</p>
			</Hero>

			{/* Demo */}
			<section id="demo" className="scroll-mt-28 sm:scroll-mt-20 w-full max-w-2xl lg:max-w-5xl flex flex-col gap-4">
				<h2 className="text-xs uppercase tracking-[0.18em] font-medium text-muted">Live demo — hover or tap the paragraph</h2>
				<div className="rounded-xl -mx-8 px-8 py-8" style={{ background: "var(--panel)", overflow: 'hidden' }}>
					<Demo />
				</div>
			</section>

			{/* Explanation */}
			<section id="problem" className="scroll-mt-28 sm:scroll-mt-20 w-full max-w-2xl lg:max-w-5xl flex flex-col gap-6">
				<h2 className="text-xs uppercase tracking-[0.18em] font-medium text-muted">The problem with bold hover</h2>
				<div className="prose-grid grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm leading-relaxed">
					<div className="flex flex-col gap-3">
						<p className="font-semibold text-foreground text-base">Why text reflows</p>
						<p>Bold glyphs are wider. When you change font-weight on hover, every character in the element grows slightly, words push into the next line, and the whole paragraph reflows. It&rsquo;s jarring, and CSS has no built-in fix: across 15 popular variable fonts, bold made navigation labels a median 4.8% wider.</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-semibold text-foreground text-base">How we fix it</p>
						<p>Canvas measureText gives the advance width of the text at both weights, off screen. The difference, divided by the number of characters, becomes a negative letter-spacing applied on hover, so the width holds. Measure the whole element, each word, or each line in proximity mode. It approximates a grade axis for fonts that only have weight.</p>
					</div>
				</div>
			</section>

			{/* Research — the talk and paper behind the tool */}
			<section id="research" className="scroll-mt-28 sm:scroll-mt-20 w-full max-w-2xl lg:max-w-5xl flex flex-col gap-6">
				<h2 className="text-xs uppercase tracking-[0.18em] font-medium text-muted">The research</h2>
				<p className="text-base text-muted leading-relaxed max-w-xl">
					<em>Weight Without Width</em> — a talk and paper on why interaction states should change emphasis, not layout.
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
					{[
						{ n: "+4.8%", d: "median width growth, Regular to Bold, across 15 fonts" },
						{ n: "0.000 px", d: "width change across Roboto Flex’s whole grade range" },
						{ n: "1 of 15", d: "fonts we measured that ship a grade axis" },
						{ n: "2009", d: "when the question was first asked on Stack Overflow" },
					].map((f) => (
						<div key={f.d} className="flex flex-col gap-1 rounded-xl p-5" style={{ background: "var(--panel)" }}>
							<span className="text-3xl" style={{ fontFamily: "var(--font-merriweather), serif", fontVariationSettings: '"wght" 300, "opsz" 72' }}>{f.n}</span>
							<span className="text-xs text-muted leading-relaxed">{f.d}</span>
						</div>
					))}
				</div>
				<div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
					<Link href="/paper" className="underline underline-offset-2 hover:text-foreground">Read the paper</Link>
					<Link href="/talk" className="text-muted hover:text-foreground transition-colors">Slides ↗</Link>
					<Link href="/paper/data" className="text-muted hover:text-foreground transition-colors">Measurements ↗</Link>
					<Link href="/talk/transcript" className="text-muted hover:text-foreground transition-colors">Transcript ↗</Link>
				</div>
			</section>

			{/* Usage */}
			<section className="w-full max-w-2xl lg:max-w-5xl flex flex-col gap-6">
				<div className="flex items-baseline gap-4">
					<h2 className="text-xs uppercase tracking-[0.18em] font-medium text-muted">Usage</h2>
				</div>
				<div className="flex flex-col gap-8 text-sm">
					<div className="flex flex-col gap-3">
						<p className="text-muted">Drop-in component</p>
						<CodeBlock code={`import { BoldLockText } from '@overpunch/hoverboldly'

<BoldLockText
  normalWeight={300}
  hoverWeight={700}
  mode="word"
>
  Hover over this text...
</BoldLockText>`} />
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-muted">Hook</p>
						<CodeBlock code={`import { useBoldLock } from '@overpunch/hoverboldly'

const ref = useBoldLock({ normalWeight: 300, hoverWeight: 700 })
<p ref={ref}>{children}</p>`} />
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-muted">Vanilla JS</p>
						<CodeBlock code={`import { applyBoldLock } from '@overpunch/hoverboldly'

const el = document.querySelector('p')
const cleanup = applyBoldLock(el, { normalWeight: 300, hoverWeight: 700 })

// Later — removes listeners, resets styles, and in word/proximity modes
// also restores element.innerHTML to its original state:
cleanup()`} />
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-muted">Options</p>
						<table className="w-full text-xs" aria-label="BoldLock API options">
							<thead>
								<tr className="text-subtle text-left">
									<th className="pb-2 pr-6 font-normal">Option</th>
									<th className="pb-2 pr-6 font-normal">Default</th>
									<th className="pb-2 font-normal">Description</th>
								</tr>
							</thead>
							<tbody className="text-muted zebra">
								<tr className="hover:bg-foreground/5 transition-colors"><td className="py-2 pr-6 font-mono">normalWeight</td><td className="py-2 pr-6">computed</td><td className="py-2">Font weight at rest.</td></tr>
								<tr className="hover:bg-foreground/5 transition-colors"><td className="py-2 pr-6 font-mono">hoverWeight</td><td className="py-2 pr-6">700</td><td className="py-2">Font weight on hover.</td></tr>
								<tr className="hover:bg-foreground/5 transition-colors"><td className="py-2 pr-6 font-mono">transitionDuration</td><td className="py-2 pr-6">150</td><td className="py-2">Transition duration in milliseconds.</td></tr>
								<tr className="hover:bg-foreground/5 transition-colors"><td className="py-2 pr-6 font-mono">mode</td><td className="py-2 pr-6">&apos;element&apos;</td><td className="py-2">&apos;element&apos; = whole element bolds on hover. &apos;word&apos; = individual word hover targets. &apos;proximity&apos; = weight increases per line based on cursor distance, fading with distance.</td></tr>
								<tr className="hover:bg-foreground/5 transition-colors"><td className="py-2 pr-6 font-mono">proximityThreshold</td><td className="py-2 pr-6">120</td><td className="py-2">Distance in px from a line&apos;s centre over which weight fades. Only used in &apos;proximity&apos; mode.</td></tr>
								<tr className="hover:bg-foreground/5 transition-colors"><td className="py-2 pr-6 font-mono">resizeObserver</td><td className="py-2 pr-6">true</td><td className="py-2">Re-measure compensation when the element&apos;s size changes (e.g. responsive font-size).</td></tr>
								<tr className="hover:bg-foreground/5 transition-colors"><td className="py-2 pr-6 font-mono">axes</td><td className="py-2 pr-6">—</td><td className="py-2">Additional variable font axes to drive on hover (e.g. slnt, wdth). Each key is an OpenType axis tag with normal/hover values.</td></tr>
								<tr className="hover:bg-foreground/5 transition-colors"><td className="py-2 pr-6 font-mono">falseSlant</td><td className="py-2 pr-6">—</td><td className="py-2">Fake italic via CSS skewX() for fonts without a slnt axis. Provide <code>hoverDeg</code> (and optionally <code>normalDeg</code>).</td></tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<PortsSection
				npm="@overpunch/hoverboldly"
				bundle="hoverboldly"
				attr="data-hoverboldly" figma="frozen"
				framerComponent="HoverBoldly"
				repo="over-punch/HoverBoldly"
			/>

			<SiteFooter current="hoverBoldly" npmVersion={version} siteVersion={siteVersion} />

		</main>
	)
}
