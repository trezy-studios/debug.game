// Module imports
import { DefaultSeo as DefaultSEO } from 'next-seo'





// Local imports
import { JSONLD } from '../JSONLD/JSONLD.jsx'





// Constants
const JSON_LD = {
	'@context': 'https://schema.org',
	'@type': [
		'VideoGame',
		'SoftwareApplication',
	],
	accessibilityControl: [
		'fullKeyboardControl',
		'fullMouseControl',
	],
	accessibilityFeature: [
		'alternativeText',
		'ARIA',
		'displayTransformability',
		'highContrastDisplay',
		'unlocked',
	],
	accessibilityHazard: [
		'noFlashingHazard',
		'noMotionSimulationHazard',
	],
	accessibilitySummary: 'Users can change fonts, font sizes, and interface colors to improve readability. They can also apply filters to improve readability if the player suffers from color vision deficiency (colorblindness).',
	accessMode: 'visual',
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '4.6',
		ratingCount: '8864',
	},
	applicationCategory: [
		'GameApplication',
		'MultimediaApplication',
	],
	applicationSubCategory: [
		'https://www.wikidata.org/wiki/Q54767',
		'puzzle game',
	],
	copyrightHolder: {
		type: 'Organization',
		sameAs: 'https://trezy.studio',
		name: 'Trezy Studios',
	},
	copyrightNotice: '© 2023 Trezy Studios, LLC. All rights reserved.',
	copyrightYear: 2023,
	datePublished: '2023-06-02T05:00:00.000Z',
	description: 'Take on the role of The Engineer and help The Debugger fix bugs in a complex system. Navigate challenging levels, inspired by Tetris and Sokoban, perfect for flexing your problem-solving skills. Unique storyline, retro graphics, and a relaxing soundtrack.',
	gamePlatform: [
		'PC',
	],
	inLanguage: [
		'English',
	],
	keywords: [
		'puzzle',
		'robot',
	],
	memoryRequirements: '1 GB',
	name: 'Debug',
	numberOfPlayers: 1,
	offers: [],
	operatingSystem: [
		'Windows',
		'Mac OS',
		'Linux',
	],
	playMode: 'SinglePlayer',
	processorRequirements: '500 MHz',
	producer: {
		type: 'Organization',
		sameAs: 'https://trezy.studio',
		name: 'Trezy Studios',
	},
	publisher: {
		type: 'Organization',
		sameAs: 'https://trezy.studio',
		name: 'Trezy Studios',
	},
	review: [],
	url: 'https://debug.game',
}
const OG_PROPERTIES = {
	type: 'website',
	locale: 'en_US',
	url: 'https://debug.game/',
	siteName: 'Debug: The Game',
}
const TWITTER_PROPERTIES = {
	handle: '@TrezyStudios',
	site: '@TrezyStudios',
	cardType: 'summary_large_image',
}





function DefaultSEOWrapper() {
	return (
		<>
			<JSONLD data={JSON_LD} />

			<DefaultSEO
				defaultTitle={'Debug'}
				openGraph={OG_PROPERTIES}
				themeColor={'#d14747'}
				titleTemplate={'%s | Debug'}
				twitter={TWITTER_PROPERTIES} />
		</>
	)
}

export {
	DefaultSEOWrapper as DefaultSEO,
}
