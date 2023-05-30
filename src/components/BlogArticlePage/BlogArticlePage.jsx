// Module imports
import Image from 'next/image.js'
import PropTypes from 'prop-types'





// Local imports
import styles from './BlogArticlePage.module.scss'

import { BlogArticleHeader } from '../BlogArticleHeader/BlogArticleHeader.jsx'
import { PageContent } from '../PageContent/PageContent.jsx'
import { PageSection } from '../PageSection/PageSection.jsx'





export function BlogArticlePage(props) {
	const {
		children,
		subtitle,
		title,
	} = props

	const author = {
		name: 'Trezy',
	}

	return (
		<PageContent title={title}>
			<PageSection className={styles['page-section']}>
				<BlogArticleHeader
					author={author}
					subtitle={subtitle}
					title={title} />

				<div className={styles['body']}>
					{children}
				</div>
			</PageSection>
		</PageContent>
	)
}

BlogArticlePage.defaultProps = {
	children: null,
	subtitle: '',
	title: 'Article',
}

BlogArticlePage.propTypes = {
	children: PropTypes.node,
	subtitle: PropTypes.string,
	title: PropTypes.string,
}
