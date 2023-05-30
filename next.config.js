/* eslint-env node */

const withMDX = require('@next/mdx')





/**
 * @typedef RedirectConfig
 * @property {string} source The route to be redirected
 * @property {string} destination The destination to which the request should be redirected
 * @property {boolean} permanent Whether this redirect should be a 307 (temp) or 308 (permanent)
 */

/** @type {import('next').NextConfig} */
const config = {
	redirects() {
		return [
			{
				source: '/humble-bundle',
				destination: 'https://humblebundle.com/g/debug',
				permanent: false,
			},
			{
				source: '/itch',
				destination: 'https://trezy-studios.itch.io/debug',
				permanent: false,
			},
			{
				source: '/steam',
				destination: 'https://store.steampowered.com/app/2289600/Debug',
				permanent: false,
			},
		]
	},
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

module.exports = withMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [],
    rehypePlugins: [],
  },
})(config)
