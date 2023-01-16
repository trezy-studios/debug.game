/* eslint-env node */

/**
 * @typedef RedirectConfig
 * @property {string} source The route to be redirected
 * @property {string} destination The destination to which the request should be redirected
 * @property {boolean} permanent Whether this redirect should be a 307 (temp) or 308 (permanent)
 */

module.exports = {
	/**
	 * @returns {RedirectConfig[]} An array of redirect configs.
	 */
	redirects() {
		return [
			{
				source: '/discord',
				destination: 'https://discord.gg/QXaS8zk6mH',
				permanent: false,
			},
			{
				source: '/github',
				destination: 'https://github.com/trezy-studios',
				permanent: false,
			},
			{
				source: '/itch',
				destination: 'https://trezy.itch.io/debug',
				permanent: false,
			},
			{
				source: '/twitter',
				destination: 'https://twitter.com/TrezyStudios',
				permanent: false,
			},
			{
				source: '/youtube',
				destination: 'https://www.youtube.com/channel/',
				permanent: false,
			},
		]
	},
}
