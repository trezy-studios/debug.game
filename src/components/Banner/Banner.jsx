// Module imports
import {
	faHome,
	faRss,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import Image from 'next/image.js'
import { Link } from '../Link/Link.jsx'
import LogoImage from '../../../public/logo.png'
import styles from './Banner.module.scss'





export function Banner() {
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
				<Link href={'/'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faHome}
						size={'xs'} />

					{'Home'}
				</Link>

				<Link href={'/blog'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faRss}
						size={'xs'} />

					{'Blog'}
				</Link>
			</nav>
		</header>
	)
}
