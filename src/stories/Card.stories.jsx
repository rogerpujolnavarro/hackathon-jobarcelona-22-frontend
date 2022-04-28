import { Card } from './Card'

export default {
	title: "JOBarcelona'22/Card",
	component: Card,
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'Default title card',
	description: 'Description',
	tags: ['tag1', 'tag2'],
}
