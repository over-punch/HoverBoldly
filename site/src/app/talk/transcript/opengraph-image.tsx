// Open Graph image for hoverboldly.com/talk/transcript, rendered by the shared talk OG component in hoverBoldly's palette.
import { talkOgImage, TALK_OG_SIZE } from '../../../components/talk/talkOg'

export const alt = 'Weight Without Width — Transcript'
export const size = TALK_OG_SIZE
export const contentType = 'image/png'

/** Renders this route's OG image. */
export default function Image() {
	return talkOgImage({ tool: 'hoverBoldly', eyebrow: 'Transcript · hoverBoldly', title: ['Weight', 'without width.'], footnote: 'The full spoken script of the talk.', path: 'hoverboldly.com/talk/transcript' })
}
