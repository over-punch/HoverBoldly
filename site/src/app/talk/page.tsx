// Public talk deck route (hoverboldly.com/talk) — "Weight Without Width", rendered with the Type Tools site system.
import type { Metadata } from 'next'
import Deck from '../../components/talk/Deck'

export const metadata: Metadata = {
	title: 'Weight Without Width — a talk | hoverBoldly',
	description: 'Bold text is wider, so hover states push layouts around. We measured 15 fonts: a median of 4.8% wider. Grade fixes it at zero width — and only 1 in 15 fonts has it.',
	alternates: { canonical: 'https://hoverboldly.com/talk' },
	openGraph: {
		title: 'Weight Without Width — a talk',
		description: 'Bold on hover widens text a median of 4.8% across 15 fonts. Grade fixes it at zero width; measured compensation fixes the rest.',
		url: 'https://hoverboldly.com/talk',
		siteName: 'hoverBoldly',
		type: 'website',
	},
}

/** Renders the full-viewport slide deck. Arrow keys / space to navigate, N for notes, F for fullscreen. */
export default function TalkPage() {
	return <Deck />
}
