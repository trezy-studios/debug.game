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
import { PageContent } from '../PageContent/PageContent.jsx'
import { PageSection } from '../PageSection/PageSection.jsx'





export function HomePage() {
	return (
		<PageContent>
			<PageSection>
				<Heading>
					<Image
						alt={'debug'}
						src={LogoImage} />
				</Heading>

				<div className={styles['description']}>
					{/* <p>{'In Debug you\'ll take up the mantle of The Engineer, helping The Debugger solve issues in a complex system. Using mechanics inspired by Tetris and Sokoban, you\'ll navigate through challenging levels, each presenting a new set of bugs to fix. The game is perfect for both casual and hardcore players who want to flex their problem-solving skills. With a unique storyline, gorgeous retro graphics, and a probably soundtrack eventually, Debug will keep you entertained for hours on end. Download and start debugging today!'}</p> */}
					<p>{'Take on the role of The Engineer and help The Debugger fix bugs in a complex system. Navigate challenging levels, inspired by Tetris and Sokoban, perfect for flexing your problem-solving skills. Unique storyline, retro graphics, and a relaxing soundtrack.'}</p>

					<p>{'Coming soon to Steam, Epic Games, and Itch.'}</p>
				</div>
			</PageSection>
		</PageContent>
	)
}
