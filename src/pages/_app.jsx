/* eslint-env node */
// Style imports
import '../styles/reset.scss'
import '../styles/lib.scss'
import '../styles/app.scss'





// Module imports
import {
	event as trackEvent,
	GoogleAnalytics,
} from 'nextjs-google-analytics'
import { DefaultSEO } from '../components/DefaultSEO/DefaultSEO.jsx'
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import { Footer } from '../components/Footer/Footer.jsx'
import NextHead from 'next/head.js'
import PropTypes from 'prop-types'
import { useAnimatedFavicon } from '../hooks/useAnimatedFavicon.js'
import { useRouter } from 'next/router'





fontAwesomeConfig.autoAddCss = false

// eslint-disable-next-line jsdoc/require-jsdoc
export default function App(props) {
	const {
		Component,
		pageProps,
	} = props
	const router = useRouter()

	useAnimatedFavicon()

	return (
		<>
			<DefaultSEO />

			<GoogleAnalytics trackPageViews />

			<NextHead>
				<meta charSet={'utf-8'} />
				<meta
					content={'width=device-width, initial-scale=1, maximum-scale=1'}
					name={'viewport'} />

				<link
					href={'/favicon.gif'}
					rel={'icon'}
					type={'image/gif'} />
			</NextHead>

			<Component
				key={router.route}
				{...pageProps} />

			<Footer />
		</>
	)
}

App.defaultProps = {
	pageProps: {},
}

App.propTypes = {
	Component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.node,
	]).isRequired,
	pageProps: PropTypes.object,
}

export function reportWebVitals({ id, name, label, value }) {
	trackEvent(name, {
		category: (label === 'web-vital') ? 'Web Vitals' : 'Next.js custom metric',
		value: Math.round((name === 'CLS') ? (value * 1000) : value),
		label: id,
		nonInteraction: true,
	})
}
