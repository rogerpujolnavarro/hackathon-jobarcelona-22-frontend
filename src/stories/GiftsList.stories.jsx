import { GiftsList } from './GiftsList'
import * as CardStories from './Card.stories'
import * as BadgeStories from './Badge.stories'

export default {
	title: "JOBarcelona'22/GiftsList",
	component: GiftsList,
}

const Template = (args) => <GiftsList {...args} />

export const DefaultExample = Template.bind({})
DefaultExample.args = {
	title: 'My default gifts list',
	gifts: [
		{
			...CardStories.Default.args,
			title: 'My discounts 🤩',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sagittis nibh. Vestibulum interdum quam magna, at posuere erat eleifend eget. Donec a eros id ex finibus egestas. Fusce et molestie ligula. Aenean sed enim placerat quam sollicitudin feugiat non sit amet arcu. Vivamus vitae sapien ac elit ullamcorper rutrum.',
			tags: [
				{ ...BadgeStories.Default.args, label: 'Discount' },
				{ ...BadgeStories.Default.args, label: 'Theatre' },
				{ ...BadgeStories.Default.args, label: 'Culture' },
			],
		},
		{
			...CardStories.Active.args,
			title: 'Other discounts',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sagittis nibh. Vestibulum interdum quam magna, at posuere erat eleifend eget. Donec a eros id ex finibus egestas. Fusce et molestie ligula. Aenean sed enim placerat quam sollicitudin feugiat non sit amet arcu. Vivamus vitae sapien ac elit ullamcorper rutrum.',
			tags: [
				{ ...BadgeStories.Default.args, label: 'Food' },
				{ ...BadgeStories.Default.args, label: 'Family' },
			],
		},
		{
			...CardStories.Success.args,
			title: 'Tickets draw 🎲',
			tags: [
				{ ...BadgeStories.Default.args, label: 'Draw' },
				{ ...BadgeStories.Default.args, label: 'Free' },
				{ ...BadgeStories.Default.args, label: 'Museum' },
			],
		},
		{
			...CardStories.Dark.args,
		},
	],
}
