// Talk deck for "Weight Without Width": hoverBoldly's slides (slides.tsx) on the shared talk engine (engine.tsx, synced from type-tools/shared/talk).
'use client'

import { Deck } from './engine'
import { SLIDES, TALK_TITLE, TALK_CSS } from './slides'

/** The full-viewport talk deck. Arrow keys / space to navigate, N for notes, F for fullscreen. */
export default function TalkDeck() {
	return <Deck slides={SLIDES} title={TALK_TITLE} css={TALK_CSS} />
}
