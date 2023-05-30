// Module imports
import Image from 'next/image.js'
import { useMemo } from 'react'





// Local imports
import styles from './BlogIndexPage.module.scss'

import { Heading } from '../Heading/Heading.jsx'
import HowItsMadeHeaderImage from '../../../public/debug-steam-page-background.png'
import { Link } from '../Link/Link.jsx'
import { PageContent } from '../PageContent/PageContent.jsx'
import { PageSection } from '../PageSection/PageSection.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'





// Constants
const articles = [
	{
		image: HowItsMadeHeaderImage,
		path: '/blog/how-its-made',
		publishedAt: '2023-05-30T05:30:00.000Z',
		summary: 'Exploring the tech behind Debug.',
		title: 'How It\'s Made',
	},
]
const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short'})
const timeFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' })





function mapArticle(article, index) {
	const publishedAt = new Date(article.publishedAt)

	return (
		<Link
			key={index}
			className={styles['article']}
			href={article.path}>
			<div className={styles['image']}>
				<Image
					alt={''}
					fill
					placeholder={'blur'}
					src={article.image} />
			</div>

			<div className={styles['heading']}>
				<Heading level={2}>
					{article.title}
				</Heading>
				<time>
					{`Published on ${dateFormatter.format(publishedAt)} at  ${timeFormatter.format(publishedAt)}`}
				</time>
			</div>

			<div className={styles['summary']}>
				<p>
					{article.summary}
				</p>
			</div>

			<div className={styles['call-to-action']}>
				<FontAwesomeIcon icon={faAnglesRight} />
			</div>
		</Link>
	)
}

export function BlogIndexPage() {
	const parsedArticles = useMemo(() => articles.map(mapArticle), [])

	return (
		<PageContent title={'Blog'}>
			<PageSection className={styles['page-section']}>
				<div className={styles['blogroll']}>
					{parsedArticles}
				</div>
			</PageSection>
		</PageContent>
	)
}
