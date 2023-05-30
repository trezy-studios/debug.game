// Module imports
import {
	faHome,
	faRss,
} from '@fortawesome/free-solid-svg-icons'
import {
	useCallback,
	useMemo,
} from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router.js'





// Local imports
import Image from 'next/image.js'
import { Link } from '../Link/Link.jsx'
import LogoImage from '../../../public/logo.png'
import styles from './Banner.module.scss'





// Constants
const links = [
	{
		icon: faHome,
		path: '/',
		title: 'Home',
	},
	{
		icon: faRss,
		path: '/blog',
		title: 'Blog',
	},
]





export function Banner() {
	const Router = useRouter()

	const mapLink = useCallback(link => {
		const compiledClassName = classnames({
			[styles['is-active']]: link.path === Router.asPath,
		})

		return (
			<Link
				className={compiledClassName}
				href={link.path}>
				<FontAwesomeIcon
					fixedWidth
					icon={link.icon}
					size={'xs'} />

				{link.title}
			</Link>
		)
	}, [Router.asPath])

	const mappedLinks = useMemo(() => links.map(mapLink), [mapLink])

	return (
		<header
			className={styles['banner']}
			role={'banner'}>
			<div className={styles['brand']}>
				<Image
					alt={'Debug logo'}
					priority
					src={LogoImage}
					width={200} />
			</div>

			<nav>
				{mappedLinks}
			</nav>
		</header>
	)
}
