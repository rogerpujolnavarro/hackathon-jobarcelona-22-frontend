import { GiftsList } from './stories/GiftsList'

function App() {
	const gifts = [
		{
			title: 'Crew 🎉',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sagittis nibh. Vestibulum interdum quam magna, at posuere erat eleifend eget. Donec a eros id ex finibus egestas. Fusce et molestie ligula. Aenean sed enim placerat quam sollicitudin feugiat non sit amet arcu. Vivamus vitae sapien ac elit ullamcorper rutrum.',
			backgroundColor: '#7b61ff',
			tags: [
				{ label: 'Desportes de riesgo', backgroundColor: '#569b51' },
				{ label: 'Libros', backgroundColor: '#569b51' },
			],
		},
		{
			title: 'Family 🤩',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sagittis nibh. Vestibulum interdum quam magna, at posuere erat eleifend eget. Donec a eros id ex finibus egestas. Fusce et molestie ligula. Aenean sed enim placerat quam sollicitudin feugiat non sit amet arcu. Vivamus vitae sapien ac elit ullamcorper rutrum.',
			tags: [
				{ label: 'Family', backgroundColor: '#569b51' },
				{ label: 'Sport', backgroundColor: '#569b51' },
			],
		},
		{
			title: 'My discounts 🤩',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sagittis nibh. Vestibulum interdum quam magna, at posuere erat eleifend eget. Donec a eros id ex finibus egestas. Fusce et molestie ligula. Aenean sed enim placerat quam sollicitudin feugiat non sit amet arcu. Vivamus vitae sapien ac elit ullamcorper rutrum.',
			active: true,
			tags: [{ label: 'Discount' }, { label: 'Theatre' }, { label: 'Culture' }],
		},
		{
			title: 'My discounts 🤩',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sagittis nibh. Vestibulum interdum quam magna, at posuere erat eleifend eget. Donec a eros id ex finibus egestas. Fusce et molestie ligula. Aenean sed enim placerat quam sollicitudin feugiat non sit amet arcu. Vivamus vitae sapien ac elit ullamcorper rutrum.',
			tags: [{ label: 'Discount' }, { label: 'Theatre' }, { label: 'Culture' }],
		},
	]
	return (
		<div className="container">
			<header>
				<h1>Hackathon JOBarcelona'22</h1>
			</header>
			<main>
				<GiftsList title="My custom horizontal scroll box" gifts={gifts} />
			</main>
			<footer>Roger Pujol 2022</footer>
		</div>
	)
}

export default App
