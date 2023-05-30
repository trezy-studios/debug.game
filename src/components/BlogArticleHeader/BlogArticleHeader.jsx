// Module imports
import PropTypes from 'prop-types'




// Local imports
import styles from './BlogArticleHeader.module.scss'

import { Heading } from '../Heading/Heading.jsx'





export function BlogArticleHeader(props) {
	const {
		author,
		subtitle,
		title,
	} = props

	return (
		<div className={styles['blog-article-header']}>
			<Heading
				className={styles['title']}
				level={2}>
				{title}
			</Heading>

			{Boolean(subtitle) && (
				<div className={styles['subtitle']}>
					{subtitle}
				</div>
			)}

			{Boolean(author) && (
				<div className={styles['author']}>
					{`by ${author.name}`}
				</div>
			)}
		</div>
	)
}

BlogArticleHeader.defaultProps = {
	author: null,
	subtitle: '',
}

BlogArticleHeader.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string,
	}),
	subtitle: PropTypes.string,
	title: PropTypes.string.isRequired,
}
