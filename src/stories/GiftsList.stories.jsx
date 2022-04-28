import { GiftsList } from './GiftsList'

export default {
	title: "JOBarcelona'22/GiftsList",
	component: GiftsList,
}

const Template = (args) => <GiftsList {...args} />

export const Example = Template.bind({})
Example.args = {
	title: 'My custom horizontal list',
	gifts: [
		{ title: 'My discounts', description: 'Lorem', tags: ['discount', 'Theatre'] },
		{ title: 'Family', description: 'Lorem', tags: ['discount', 'Theatre'] },
		{ title: 'Kayak', description: 'Lorem', tags: ['discount', 'Theatre'] },
		{ title: 'Hola', description: 'Lorem', tags: ['discount', 'Theatre'] },
	],
}
