// Sitemap for hoverboldly.com: the tool page plus the talk, transcript, paper and measurements.
import type { MetadataRoute } from 'next'

/** Lists every public route. lastModified is fixed so the timestamp only changes with real content updates. */
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: 'https://hoverboldly.com', lastModified: '2026-10-04', changeFrequency: 'monthly', priority: 1 },
		{ url: 'https://hoverboldly.com/paper', lastModified: '2026-10-04', changeFrequency: 'monthly', priority: 0.7 },
		{ url: 'https://hoverboldly.com/talk', lastModified: '2026-10-04', changeFrequency: 'monthly', priority: 0.6 },
		{ url: 'https://hoverboldly.com/talk/transcript', lastModified: '2026-10-04', changeFrequency: 'monthly', priority: 0.5 },
		{ url: 'https://hoverboldly.com/paper/data', lastModified: '2026-10-04', changeFrequency: 'monthly', priority: 0.5 },
	]
}
