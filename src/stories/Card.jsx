import PropTypes from 'prop-types'
import { Badge } from './Badge'
import './card.css'

export const Card = ({ backgroundColor, border, borderColor, color, title, description, tags }) => {
	return (
		<div
			className={`card`}
			style={{ backgroundColor, border: `${border}px solid`, borderColor, color }}
			onClick={() => {}}
		>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className="card-categories">
				{tags.map((tag, index) => (
					<Badge key={index} label={tag} />
				))}
			</div>
		</div>
	)
}

Card.propTypes = {
	backgroundColor: PropTypes.string,
	border: PropTypes.number,
	borderColor: PropTypes.string,
	color: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	tags: PropTypes.array,
	onClick: PropTypes.func,
}

Card.defaultProps = {
	backgroundColor: '#f8f9fa',
	border: 1,
	borderColor: '#212529',
	color: '#212529',
	tags: [],
	onClick: undefined,
}
