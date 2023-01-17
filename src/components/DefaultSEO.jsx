// Module imports
import { DefaultSeo as DefaultSEO } from 'next-seo'





// Constants
const ogProperties = {
	type: 'website',
	locale: 'en_US',
	url: 'https://debug.game/',
	siteName: 'Debug: The Game',
}
const twitterProperties = {
	handle: '@TrezyStudios',
	site: '@TrezyStudios',
	cardType: 'summary_large_image',
}





function DefaultSEOWrapper() {
	return (
		<DefaultSEO
			defaultTitle={'Debug'}
			openGraph={ogProperties}
			themeColor={'#d14747'}
			titleTemplate={'%s | Debug'}
			twitter={twitterProperties} />
	)
}

export {
	DefaultSEOWrapper as DefaultSEO,
}
