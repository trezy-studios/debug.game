// Module imports
import {
	faDiscord,
	faGithub,
	faItchIo,
	faSteam,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image.js'





// Local imports
import styles from './HomePage.module.scss'

import { Heading } from '../Heading/Heading.jsx'
import { Link } from '../Link/Link.jsx'
import LogoImage from '../../../public/logo.png'





export function HomePage() {
	return (
		<div className={styles['page-content']}>
			<Heading>
				<Image
					alt={'debug'}
					src={LogoImage} />
			</Heading>

			<div className={styles['description']}>
				<p>{'Take on the role of The Engineer and help The Debugger fix bugs in a complex system. Navigate challenging levels, inspired by Tetris and Sokoban, perfect for flexing your problem-solving skills. Unique storyline, retro graphics, and a relaxing soundtrack.'}</p>

				<p>{'Coming soon to Steam, Epic Games, and Itch.'}</p>
			</div>

			<div className={styles['social-links']}>
				<Link
					className={styles['discord']}
					href={'/discord'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faDiscord} />
				</Link>

				<Link
					className={styles['youtube']}
					href={'/youtube'}>
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
					className={styles['itch']}
					href={'/itch'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faItchIo} />
				</Link>

				<Link
					className={styles['github']}
					href={'/github'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faGithub} />
				</Link>
			</div>
		</div>
	)
}
