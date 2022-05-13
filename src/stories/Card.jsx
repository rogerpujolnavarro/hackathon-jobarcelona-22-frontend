import PropTypes from 'prop-types'
// import { Badge } from './Badge'
import './card.css'

export const Card = ({
	title,
	description,
	backgroundColor,
	borderWidth,
	active,
	darkMode,
	children,
	onClick,
}) => {
	return (
		<div
			className={`card${active ? ' card-active' : ''}${darkMode ? ' card-dark' : ''}`}
			style={{
				backgroundColor: `${backgroundColor}88`,
				border: `${backgroundColor} ${borderWidth}px solid`,
			}}
			onClick={onClick}
		>
			<h3>{title}</h3>
			<p className="card-body">{description}</p>
			<div className="card-categories">{children}</div>
		</div>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	borderWidth: PropTypes.oneOf([0, 1, 2, 3]),
	active: PropTypes.bool,
	darkMode: PropTypes.bool,
	children: PropTypes.element.isRequired,
	onClick: PropTypes.func,
}

Card.defaultProps = {
	backgroundColor: '#dee2e8',
	borderWidth: 1,
	active: false,
	darkMode: false,
	onClick: undefined,
}
