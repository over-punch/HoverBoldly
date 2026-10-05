// Measured width of navigation labels at wght 400 vs 700 in 15 Google Fonts variable families (HarfBuzz at 16px, google/fonts commit 9710da1, 4 October 2026). Generated from the benchmark CSV — do not edit by hand.

/** One measurement: a family, a string, its shaped width at 400 and 700 (px) and the growth. */
export interface Measurement {
	family: string
	version: string
	string: string
	w400: number
	w700: number
	delta: number
	growth: number
}

/** Font file URL per family (google/fonts at the pinned commit). */
export const FONT_SOURCES: Record<string, string> = {
	"Roboto": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/roboto/Roboto%5Bwdth%2Cwght%5D.ttf",
	"Open Sans": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/opensans/OpenSans%5Bwdth%2Cwght%5D.ttf",
	"Inter": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/inter/Inter%5Bopsz%2Cwght%5D.ttf",
	"Montserrat": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/montserrat/Montserrat%5Bwght%5D.ttf",
	"Noto Sans": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/notosans/NotoSans%5Bwdth%2Cwght%5D.ttf",
	"Raleway": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/raleway/Raleway%5Bwght%5D.ttf",
	"Nunito": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/nunito/Nunito%5Bwght%5D.ttf",
	"Work Sans": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/worksans/WorkSans%5Bwght%5D.ttf",
	"Rubik": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/rubik/Rubik%5Bwght%5D.ttf",
	"Roboto Flex": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/robotoflex/RobotoFlex%5BGRAD%2CXOPQ%2CXTRA%2CYOPQ%2CYTAS%2CYTDE%2CYTFI%2CYTLC%2CYTUC%2Copsz%2Cslnt%2Cwdth%2Cwght%5D.ttf",
	"Source Sans 3": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/sourcesans3/SourceSans3%5Bwght%5D.ttf",
	"DM Sans": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/dmsans/DMSans%5Bopsz%2Cwght%5D.ttf",
	"Manrope": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/manrope/Manrope%5Bwght%5D.ttf",
	"Figtree": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/figtree/Figtree%5Bwght%5D.ttf",
	"Mulish": "https://github.com/google/fonts/blob/9710da1eacb3be272583c3224dcb70f9da6eadbb/ofl/mulish/Mulish%5Bwght%5D.ttf"
}

/** All 105 measurements, in benchmark order. */
export const MEASUREMENTS: Measurement[] = [
	{
		"family": "Roboto",
		"version": "3.015",
		"string": "Home",
		"w400": 43.05,
		"w700": 42.83,
		"delta": -0.23,
		"growth": -0.53
	},
	{
		"family": "Roboto",
		"version": "3.015",
		"string": "About",
		"w400": 42.6,
		"w700": 43.16,
		"delta": 0.55,
		"growth": 1.3
	},
	{
		"family": "Roboto",
		"version": "3.015",
		"string": "Products",
		"w400": 64.2,
		"w700": 64.9,
		"delta": 0.7,
		"growth": 1.1
	},
	{
		"family": "Roboto",
		"version": "3.015",
		"string": "Pricing",
		"w400": 49.49,
		"w700": 51.09,
		"delta": 1.59,
		"growth": 3.22
	},
	{
		"family": "Roboto",
		"version": "3.015",
		"string": "Contact us",
		"w400": 76.97,
		"w700": 77.35,
		"delta": 0.38,
		"growth": 0.5
	},
	{
		"family": "Roboto",
		"version": "3.015",
		"string": "Documentation",
		"w400": 109.2,
		"w700": 109.82,
		"delta": 0.62,
		"growth": 0.57
	},
	{
		"family": "Roboto",
		"version": "3.015",
		"string": "Sentence(60ch)",
		"w400": 413.78,
		"w700": 420.19,
		"delta": 6.41,
		"growth": 1.55
	},
	{
		"family": "Open Sans",
		"version": "3.003",
		"string": "Home",
		"w400": 45.22,
		"w700": 47.31,
		"delta": 2.09,
		"growth": 4.63
	},
	{
		"family": "Open Sans",
		"version": "3.003",
		"string": "About",
		"w400": 45.05,
		"w700": 48.53,
		"delta": 3.48,
		"growth": 7.73
	},
	{
		"family": "Open Sans",
		"version": "3.003",
		"string": "Products",
		"w400": 66.38,
		"w700": 70.98,
		"delta": 4.6,
		"growth": 6.93
	},
	{
		"family": "Open Sans",
		"version": "3.003",
		"string": "Pricing",
		"w400": 50.41,
		"w700": 54.86,
		"delta": 4.45,
		"growth": 8.83
	},
	{
		"family": "Open Sans",
		"version": "3.003",
		"string": "Contact us",
		"w400": 79.07,
		"w700": 85.02,
		"delta": 5.95,
		"growth": 7.53
	},
	{
		"family": "Open Sans",
		"version": "3.003",
		"string": "Documentation",
		"w400": 116.09,
		"w700": 125.03,
		"delta": 8.94,
		"growth": 7.7
	},
	{
		"family": "Open Sans",
		"version": "3.003",
		"string": "Sentence(60ch)",
		"w400": 431.95,
		"w700": 465.15,
		"delta": 33.2,
		"growth": 7.69
	},
	{
		"family": "Inter",
		"version": "4.001",
		"string": "Home",
		"w400": 44.52,
		"w700": 45.67,
		"delta": 1.15,
		"growth": 2.58
	},
	{
		"family": "Inter",
		"version": "4.001",
		"string": "About",
		"w400": 44.77,
		"w700": 47.43,
		"delta": 2.66,
		"growth": 5.93
	},
	{
		"family": "Inter",
		"version": "4.001",
		"string": "Products",
		"w400": 66.88,
		"w700": 70.11,
		"delta": 3.23,
		"growth": 4.82
	},
	{
		"family": "Inter",
		"version": "4.001",
		"string": "Pricing",
		"w400": 52.01,
		"w700": 54.75,
		"delta": 2.74,
		"growth": 5.27
	},
	{
		"family": "Inter",
		"version": "4.001",
		"string": "Contact us",
		"w400": 81.19,
		"w700": 84.42,
		"delta": 3.23,
		"growth": 3.98
	},
	{
		"family": "Inter",
		"version": "4.001",
		"string": "Documentation",
		"w400": 114.09,
		"w700": 119.45,
		"delta": 5.35,
		"growth": 4.69
	},
	{
		"family": "Inter",
		"version": "4.001",
		"string": "Sentence(60ch)",
		"w400": 441.21,
		"w700": 455.11,
		"delta": 13.9,
		"growth": 3.15
	},
	{
		"family": "Montserrat",
		"version": "9.000",
		"string": "Home",
		"w400": 49.68,
		"w700": 50.35,
		"delta": 0.67,
		"growth": 1.35
	},
	{
		"family": "Montserrat",
		"version": "9.000",
		"string": "About",
		"w400": 49.6,
		"w700": 51.73,
		"delta": 2.13,
		"growth": 4.29
	},
	{
		"family": "Montserrat",
		"version": "9.000",
		"string": "Products",
		"w400": 72.37,
		"w700": 75.89,
		"delta": 3.52,
		"growth": 4.86
	},
	{
		"family": "Montserrat",
		"version": "9.000",
		"string": "Pricing",
		"w400": 56.67,
		"w700": 59.73,
		"delta": 3.06,
		"growth": 5.39
	},
	{
		"family": "Montserrat",
		"version": "9.000",
		"string": "Contact us",
		"w400": 85.79,
		"w700": 89.98,
		"delta": 4.19,
		"growth": 4.89
	},
	{
		"family": "Montserrat",
		"version": "9.000",
		"string": "Documentation",
		"w400": 127.73,
		"w700": 132.0,
		"delta": 4.27,
		"growth": 3.34
	},
	{
		"family": "Montserrat",
		"version": "9.000",
		"string": "Sentence(60ch)",
		"w400": 462.78,
		"w700": 490.56,
		"delta": 27.78,
		"growth": 6.0
	},
	{
		"family": "Noto Sans",
		"version": "2.015",
		"string": "Home",
		"w400": 45.52,
		"w700": 47.39,
		"delta": 1.87,
		"growth": 4.11
	},
	{
		"family": "Noto Sans",
		"version": "2.015",
		"string": "About",
		"w400": 45.41,
		"w700": 48.53,
		"delta": 3.12,
		"growth": 6.87
	},
	{
		"family": "Noto Sans",
		"version": "2.015",
		"string": "Products",
		"w400": 66.5,
		"w700": 70.51,
		"delta": 4.02,
		"growth": 6.04
	},
	{
		"family": "Noto Sans",
		"version": "2.015",
		"string": "Pricing",
		"w400": 51.95,
		"w700": 55.42,
		"delta": 3.47,
		"growth": 6.68
	},
	{
		"family": "Noto Sans",
		"version": "2.015",
		"string": "Contact us",
		"w400": 79.6,
		"w700": 84.99,
		"delta": 5.39,
		"growth": 6.77
	},
	{
		"family": "Noto Sans",
		"version": "2.015",
		"string": "Documentation",
		"w400": 117.02,
		"w700": 124.58,
		"delta": 7.55,
		"growth": 6.45
	},
	{
		"family": "Noto Sans",
		"version": "2.015",
		"string": "Sentence(60ch)",
		"w400": 436.88,
		"w700": 466.32,
		"delta": 29.44,
		"growth": 6.74
	},
	{
		"family": "Raleway",
		"version": "4.026",
		"string": "Home",
		"w400": 45.3,
		"w700": 45.95,
		"delta": 0.66,
		"growth": 1.45
	},
	{
		"family": "Raleway",
		"version": "4.026",
		"string": "About",
		"w400": 45.07,
		"w700": 46.59,
		"delta": 1.52,
		"growth": 3.37
	},
	{
		"family": "Raleway",
		"version": "4.026",
		"string": "Products",
		"w400": 66.16,
		"w700": 69.02,
		"delta": 2.86,
		"growth": 4.33
	},
	{
		"family": "Raleway",
		"version": "4.026",
		"string": "Pricing",
		"w400": 50.54,
		"w700": 53.15,
		"delta": 2.61,
		"growth": 5.16
	},
	{
		"family": "Raleway",
		"version": "4.026",
		"string": "Contact us",
		"w400": 79.28,
		"w700": 82.38,
		"delta": 3.1,
		"growth": 3.92
	},
	{
		"family": "Raleway",
		"version": "4.026",
		"string": "Documentation",
		"w400": 114.3,
		"w700": 118.99,
		"delta": 4.69,
		"growth": 4.1
	},
	{
		"family": "Raleway",
		"version": "4.026",
		"string": "Sentence(60ch)",
		"w400": 428.88,
		"w700": 445.52,
		"delta": 16.64,
		"growth": 3.88
	},
	{
		"family": "Nunito",
		"version": "3.602",
		"string": "Home",
		"w400": 43.28,
		"w700": 44.29,
		"delta": 1.01,
		"growth": 2.33
	},
	{
		"family": "Nunito",
		"version": "3.602",
		"string": "About",
		"w400": 44.46,
		"w700": 46.13,
		"delta": 1.66,
		"growth": 3.74
	},
	{
		"family": "Nunito",
		"version": "3.602",
		"string": "Products",
		"w400": 63.5,
		"w700": 66.03,
		"delta": 2.53,
		"growth": 3.98
	},
	{
		"family": "Nunito",
		"version": "3.602",
		"string": "Pricing",
		"w400": 48.99,
		"w700": 51.28,
		"delta": 2.29,
		"growth": 4.67
	},
	{
		"family": "Nunito",
		"version": "3.602",
		"string": "Contact us",
		"w400": 76.08,
		"w700": 78.93,
		"delta": 2.85,
		"growth": 3.74
	},
	{
		"family": "Nunito",
		"version": "3.602",
		"string": "Documentation",
		"w400": 109.92,
		"w700": 114.19,
		"delta": 4.27,
		"growth": 3.89
	},
	{
		"family": "Nunito",
		"version": "3.602",
		"string": "Sentence(60ch)",
		"w400": 417.74,
		"w700": 434.82,
		"delta": 17.07,
		"growth": 4.09
	},
	{
		"family": "Work Sans",
		"version": "2.012",
		"string": "Home",
		"w400": 45.7,
		"w700": 45.73,
		"delta": 0.03,
		"growth": 0.07
	},
	{
		"family": "Work Sans",
		"version": "2.012",
		"string": "About",
		"w400": 46.77,
		"w700": 47.34,
		"delta": 0.58,
		"growth": 1.23
	},
	{
		"family": "Work Sans",
		"version": "2.012",
		"string": "Products",
		"w400": 69.63,
		"w700": 71.58,
		"delta": 1.95,
		"growth": 2.8
	},
	{
		"family": "Work Sans",
		"version": "2.012",
		"string": "Pricing",
		"w400": 52.18,
		"w700": 54.83,
		"delta": 2.66,
		"growth": 5.09
	},
	{
		"family": "Work Sans",
		"version": "2.012",
		"string": "Contact us",
		"w400": 85.55,
		"w700": 85.74,
		"delta": 0.19,
		"growth": 0.22
	},
	{
		"family": "Work Sans",
		"version": "2.012",
		"string": "Documentation",
		"w400": 120.14,
		"w700": 121.46,
		"delta": 1.31,
		"growth": 1.09
	},
	{
		"family": "Work Sans",
		"version": "2.012",
		"string": "Sentence(60ch)",
		"w400": 462.4,
		"w700": 464.91,
		"delta": 2.51,
		"growth": 0.54
	},
	{
		"family": "Rubik",
		"version": "2.300",
		"string": "Home",
		"w400": 43.79,
		"w700": 45.86,
		"delta": 2.06,
		"growth": 4.71
	},
	{
		"family": "Rubik",
		"version": "2.300",
		"string": "About",
		"w400": 45.31,
		"w700": 49.06,
		"delta": 3.74,
		"growth": 8.26
	},
	{
		"family": "Rubik",
		"version": "2.300",
		"string": "Products",
		"w400": 67.78,
		"w700": 73.9,
		"delta": 6.13,
		"growth": 9.04
	},
	{
		"family": "Rubik",
		"version": "2.300",
		"string": "Pricing",
		"w400": 52.18,
		"w700": 57.1,
		"delta": 4.93,
		"growth": 9.44
	},
	{
		"family": "Rubik",
		"version": "2.300",
		"string": "Contact us",
		"w400": 81.31,
		"w700": 87.55,
		"delta": 6.24,
		"growth": 7.67
	},
	{
		"family": "Rubik",
		"version": "2.300",
		"string": "Documentation",
		"w400": 115.46,
		"w700": 124.26,
		"delta": 8.8,
		"growth": 7.62
	},
	{
		"family": "Rubik",
		"version": "2.300",
		"string": "Sentence(60ch)",
		"w400": 434.37,
		"w700": 465.3,
		"delta": 30.93,
		"growth": 7.12
	},
	{
		"family": "Roboto Flex",
		"version": "3.200",
		"string": "Home",
		"w400": 42.38,
		"w700": 44.62,
		"delta": 2.24,
		"growth": 5.29
	},
	{
		"family": "Roboto Flex",
		"version": "3.200",
		"string": "About",
		"w400": 41.81,
		"w700": 44.83,
		"delta": 3.02,
		"growth": 7.21
	},
	{
		"family": "Roboto Flex",
		"version": "3.200",
		"string": "Products",
		"w400": 62.55,
		"w700": 67.05,
		"delta": 4.5,
		"growth": 7.19
	},
	{
		"family": "Roboto Flex",
		"version": "3.200",
		"string": "Pricing",
		"w400": 48.56,
		"w700": 52.54,
		"delta": 3.98,
		"growth": 8.19
	},
	{
		"family": "Roboto Flex",
		"version": "3.200",
		"string": "Contact us",
		"w400": 75.72,
		"w700": 80.61,
		"delta": 4.89,
		"growth": 6.46
	},
	{
		"family": "Roboto Flex",
		"version": "3.200",
		"string": "Documentation",
		"w400": 107.88,
		"w700": 115.24,
		"delta": 7.36,
		"growth": 6.82
	},
	{
		"family": "Roboto Flex",
		"version": "3.200",
		"string": "Sentence(60ch)",
		"w400": 406.81,
		"w700": 435.12,
		"delta": 28.31,
		"growth": 6.96
	},
	{
		"family": "Source Sans 3",
		"version": "3.052",
		"string": "Home",
		"w400": 40.3,
		"w700": 41.66,
		"delta": 1.36,
		"growth": 3.37
	},
	{
		"family": "Source Sans 3",
		"version": "3.052",
		"string": "About",
		"w400": 40.32,
		"w700": 42.43,
		"delta": 2.11,
		"growth": 5.24
	},
	{
		"family": "Source Sans 3",
		"version": "3.052",
		"string": "Products",
		"w400": 59.79,
		"w700": 63.26,
		"delta": 3.47,
		"growth": 5.81
	},
	{
		"family": "Source Sans 3",
		"version": "3.052",
		"string": "Pricing",
		"w400": 46.59,
		"w700": 49.92,
		"delta": 3.33,
		"growth": 7.14
	},
	{
		"family": "Source Sans 3",
		"version": "3.052",
		"string": "Contact us",
		"w400": 70.85,
		"w700": 74.42,
		"delta": 3.57,
		"growth": 5.04
	},
	{
		"family": "Source Sans 3",
		"version": "3.052",
		"string": "Documentation",
		"w400": 104.14,
		"w700": 109.3,
		"delta": 5.15,
		"growth": 4.95
	},
	{
		"family": "Source Sans 3",
		"version": "3.052",
		"string": "Sentence(60ch)",
		"w400": 382.83,
		"w700": 405.66,
		"delta": 22.83,
		"growth": 5.96
	},
	{
		"family": "DM Sans",
		"version": "4.004",
		"string": "Home",
		"w400": 43.73,
		"w700": 45.86,
		"delta": 2.13,
		"growth": 4.87
	},
	{
		"family": "DM Sans",
		"version": "4.004",
		"string": "About",
		"w400": 45.57,
		"w700": 48.32,
		"delta": 2.75,
		"growth": 6.04
	},
	{
		"family": "DM Sans",
		"version": "4.004",
		"string": "Products",
		"w400": 66.75,
		"w700": 71.3,
		"delta": 4.54,
		"growth": 6.81
	},
	{
		"family": "DM Sans",
		"version": "4.004",
		"string": "Pricing",
		"w400": 50.03,
		"w700": 54.16,
		"delta": 4.13,
		"growth": 8.25
	},
	{
		"family": "DM Sans",
		"version": "4.004",
		"string": "Contact us",
		"w400": 81.73,
		"w700": 86.29,
		"delta": 4.56,
		"growth": 5.58
	},
	{
		"family": "DM Sans",
		"version": "4.004",
		"string": "Documentation",
		"w400": 114.83,
		"w700": 122.22,
		"delta": 7.39,
		"growth": 6.44
	},
	{
		"family": "DM Sans",
		"version": "4.004",
		"string": "Sentence(60ch)",
		"w400": 434.08,
		"w700": 457.63,
		"delta": 23.55,
		"growth": 5.43
	},
	{
		"family": "Manrope",
		"version": "4.505",
		"string": "Home",
		"w400": 43.28,
		"w700": 45.31,
		"delta": 2.03,
		"growth": 4.7
	},
	{
		"family": "Manrope",
		"version": "4.505",
		"string": "About",
		"w400": 44.98,
		"w700": 47.41,
		"delta": 2.42,
		"growth": 5.39
	},
	{
		"family": "Manrope",
		"version": "4.505",
		"string": "Products",
		"w400": 67.38,
		"w700": 71.01,
		"delta": 3.62,
		"growth": 5.38
	},
	{
		"family": "Manrope",
		"version": "4.505",
		"string": "Pricing",
		"w400": 50.5,
		"w700": 54.41,
		"delta": 3.91,
		"growth": 7.75
	},
	{
		"family": "Manrope",
		"version": "4.505",
		"string": "Contact us",
		"w400": 82.08,
		"w700": 85.86,
		"delta": 3.78,
		"growth": 4.61
	},
	{
		"family": "Manrope",
		"version": "4.505",
		"string": "Documentation",
		"w400": 115.1,
		"w700": 121.42,
		"delta": 6.31,
		"growth": 5.48
	},
	{
		"family": "Manrope",
		"version": "4.505",
		"string": "Sentence(60ch)",
		"w400": 428.73,
		"w700": 450.09,
		"delta": 21.36,
		"growth": 4.98
	},
	{
		"family": "Figtree",
		"version": "2.002",
		"string": "Home",
		"w400": 43.65,
		"w700": 44.11,
		"delta": 0.46,
		"growth": 1.06
	},
	{
		"family": "Figtree",
		"version": "2.002",
		"string": "About",
		"w400": 44.46,
		"w700": 45.78,
		"delta": 1.31,
		"growth": 2.95
	},
	{
		"family": "Figtree",
		"version": "2.002",
		"string": "Products",
		"w400": 64.35,
		"w700": 66.21,
		"delta": 1.86,
		"growth": 2.88
	},
	{
		"family": "Figtree",
		"version": "2.002",
		"string": "Pricing",
		"w400": 49.01,
		"w700": 51.5,
		"delta": 2.5,
		"growth": 5.09
	},
	{
		"family": "Figtree",
		"version": "2.002",
		"string": "Contact us",
		"w400": 78.94,
		"w700": 80.32,
		"delta": 1.38,
		"growth": 1.74
	},
	{
		"family": "Figtree",
		"version": "2.002",
		"string": "Documentation",
		"w400": 111.28,
		"w700": 114.05,
		"delta": 2.77,
		"growth": 2.49
	},
	{
		"family": "Figtree",
		"version": "2.002",
		"string": "Sentence(60ch)",
		"w400": 421.12,
		"w700": 432.82,
		"delta": 11.7,
		"growth": 2.78
	},
	{
		"family": "Mulish",
		"version": "3.603",
		"string": "Home",
		"w400": 44.14,
		"w700": 45.01,
		"delta": 0.86,
		"growth": 1.96
	},
	{
		"family": "Mulish",
		"version": "3.603",
		"string": "About",
		"w400": 45.33,
		"w700": 46.99,
		"delta": 1.66,
		"growth": 3.67
	},
	{
		"family": "Mulish",
		"version": "3.603",
		"string": "Products",
		"w400": 65.39,
		"w700": 67.76,
		"delta": 2.37,
		"growth": 3.62
	},
	{
		"family": "Mulish",
		"version": "3.603",
		"string": "Pricing",
		"w400": 50.62,
		"w700": 52.8,
		"delta": 2.18,
		"growth": 4.3
	},
	{
		"family": "Mulish",
		"version": "3.603",
		"string": "Contact us",
		"w400": 78.96,
		"w700": 81.6,
		"delta": 2.64,
		"growth": 3.34
	},
	{
		"family": "Mulish",
		"version": "3.603",
		"string": "Documentation",
		"w400": 113.49,
		"w700": 117.41,
		"delta": 3.92,
		"growth": 3.45
	},
	{
		"family": "Mulish",
		"version": "3.603",
		"string": "Sentence(60ch)",
		"w400": 431.68,
		"w700": 447.92,
		"delta": 16.24,
		"growth": 3.76
	}
]
