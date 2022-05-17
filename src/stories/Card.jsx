import PropTypes from 'prop-types'
import { Badge } from './Badge'
import './card.css'

export const Card = ({
	title,
	description,
	tags,
	backgroundColor,
	borderWidth,
	color,
	active,
	onClick,
}) => {
	return (
		<div
			className={`card${active ? ' card-active' : ''}`}
			style={{
				backgroundColor: `${backgroundColor}88`,
				border: `${backgroundColor} ${borderWidth}px solid`,
				color,
			}}
			onClick={onClick}
		>
			<h3>{title}</h3>
			<p className="card-body">{description}</p>
			<div className="card-categories">
				{tags.map((tag, index) => (
					<Badge key={index} {...tag} />
				))}
			</div>
		</div>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	backgroundColor: PropTypes.string,
	borderWidth: PropTypes.oneOf([0, 1, 2, 3]),
	color: PropTypes.string,
	active: PropTypes.bool,
	onClick: PropTypes.func,
}

Card.defaultProps = {
	backgroundColor: '#dee2e8',
	borderWidth: 1,
	color: '#21252b',
	active: false,
	onClick: undefined,
}
