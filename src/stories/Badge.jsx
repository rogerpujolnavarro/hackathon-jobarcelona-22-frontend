import PropTypes from 'prop-types'
import './badge.css'

export const Badge = ({ backgroundColor, color, label, size }) => {
	return (
		<div className={`badge${size ? ' badge-' + size : ''}`} style={{ backgroundColor, color }}>
			{label}
		</div>
	)
}

Badge.propTypes = {
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	label: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	onClick: PropTypes.func,
}

Badge.defaultProps = {
	backgroundColor: '#f8f9fa',
	color: '#212529',
	size: 'md',
	onClick: undefined,
}
