/* eslint-env node */
// Style imports
import '../styles/reset.scss'
import '../styles/lib.scss'
import '../styles/app.scss'





// Module imports
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import NextHead from 'next/head.js'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'





fontAwesomeConfig.autoAddCss = false

// eslint-disable-next-line jsdoc/require-jsdoc
export default function App(props) {
	const {
		Component,
		pageProps,
	} = props
	const router = useRouter()

	return (
		<>
			<NextHead>
				<meta charSet={'utf-8'} />
				<meta
					content={'width=device-width, initial-scale=1, maximum-scale=1'}
					name={'viewport'} />
			</NextHead>

			<Component
				key={router.route}
				{...pageProps} />
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