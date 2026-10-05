// Open Graph image for hoverboldly.com/talk, rendered by the shared talk OG component in hoverBoldly's palette.
import { talkOgImage, TALK_OG_SIZE } from '../../components/talk/talkOg'

export const alt = 'Weight Without Width — Slides'
export const size = TALK_OG_SIZE
export const contentType = 'image/png'

/** Renders this route's OG image. */
export default function Image() {
	return talkOgImage({ tool: 'hoverBoldly', eyebrow: 'A talk · hoverBoldly', title: ['Weight', 'without width.'], footnote: 'Bold widens nav labels a median of 4.8% across 15 fonts.', path: 'hoverboldly.com/talk' })
}
