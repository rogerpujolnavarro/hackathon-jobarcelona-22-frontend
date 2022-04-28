import PropTypes from 'prop-types'
import { Card } from './Card'
import './giftslist.css'

export const GiftsList = ({ backgroundColor, color, title, gifts }) => {
	return (
		<main className="gifts" style={{ backgroundColor, color }}>
			<h1>{title}</h1>
			{gifts.length ? (
				<div className="list-gifts">
					{gifts.map((gift, index) => (
						<Card
							key={index}
							title={gift.title}
							description={gift.description}
							tags={gift.tags}
						/>
					))}
				</div>
			) : (
				<p>There are not gifts</p>
			)}
		</main>
	)
}

GiftsList.propTypes = {
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	title: PropTypes.string.isRequired,
	gifts: PropTypes.array,
}

GiftsList.defaultProps = {
	backgroundColor: '#f8f8f8',
	color: '#212529',
	gifts: [],
}
