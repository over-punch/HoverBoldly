// Open Graph image for hoverboldly.com/paper/data, rendered by the shared talk OG component in hoverBoldly's palette.
import { talkOgImage, TALK_OG_SIZE } from '../../../components/talk/talkOg'

export const alt = 'Weight Without Width — Measurements'
export const size = TALK_OG_SIZE
export const contentType = 'image/png'

/** Renders this route's OG image. */
export default function Image() {
	return talkOgImage({ tool: 'hoverBoldly', eyebrow: 'Measurements · hoverBoldly', title: ['Weight', 'without width.'], footnote: '105 measurements across 15 variable fonts.', path: 'hoverboldly.com/paper/data' })
}
