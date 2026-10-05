// Open Graph image for hoverboldly.com/paper, rendered by the shared talk OG component in hoverBoldly's palette.
import { talkOgImage, TALK_OG_SIZE } from '../../components/talk/talkOg'

export const alt = 'Weight Without Width — Paper'
export const size = TALK_OG_SIZE
export const contentType = 'image/png'

/** Renders this route's OG image. */
export default function Image() {
	return talkOgImage({ tool: 'hoverBoldly', eyebrow: 'The paper · hoverBoldly', title: ['Weight', 'without width.'], footnote: 'A 15-font benchmark, a CLS test and the grade axis.', path: 'hoverboldly.com/paper' })
}
