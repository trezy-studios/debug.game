// Module imports
import {
	faDiscord,
	faGithub,
	faItchIo,
	faSteam,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import styles from './Footer.module.scss'

import { faHumbleBundle } from '../../icons/faHumbleBundle.js'
import { Link } from '../Link/Link.jsx'





export function Footer() {
	return (
		<footer className={styles['footer']}>
		<small>
			{`© ${new Date().getFullYear()} `}

			<Link href={'https://trezy.studio/'}>
				{'Trezy Studios, LLC'}
			</Link>

			{'. All rights reserved.'}
		</small>

			<div className={styles['social-links']}>
				<Link
					className={styles['discord']}
					href={'https://trezy.studio/discord'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faDiscord} />
				</Link>

				<Link
					className={styles['twitter']}
					href={'https://trezy.studio/twitter'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faTwitter} />
				</Link>

				<Link
					className={styles['youtube']}
					href={'https://trezy.studio/youtube'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faYoutube} />
				</Link>

				<Link
					className={styles['steam']}
					href={'/steam'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faSteam} />
				</Link>

				<Link
					className={styles['humble-bundle']}
					href={'/humble-bundle'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faHumbleBundle} />
				</Link>

				<Link
					className={styles['itch']}
					href={'/itch'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faItchIo} />
				</Link>
			</div>
		</footer>
	)
}
