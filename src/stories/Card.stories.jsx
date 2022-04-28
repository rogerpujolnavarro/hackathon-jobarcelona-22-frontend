import { Card } from './Card'

export default {
	title: "JOBarcelona'22/Card",
	component: Card,
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'Default title card',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia tincidunt turpis, at eleifend nulla vulputate non. Donec varius tincidunt libero. Quisque eu hendrerit ante. Nullam sed turpis tristique, viverra turpis eu, hendrerit ante. Donec quis venenatis lorem, vel accumsan urna. Sed tempor tellus ut libero egestas, sit amet vulputate lorem fermentum. Duis pulvinar lacus id justo dictum sollicitudin. Quisque consectetur ut erat eget viverra.',
	tags: ['Adventure sports', 'Books'],
}

export const Active = Template.bind({})
Active.args = {
	title: 'Default active title card',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia tincidunt turpis, at eleifend nulla vulputate non. Donec varius tincidunt libero. Quisque eu hendrerit ante. Nullam sed turpis tristique, viverra turpis eu, hendrerit ante. Donec quis venenatis lorem, vel accumsan urna. Sed tempor tellus ut libero egestas, sit amet vulputate lorem fermentum. Duis pulvinar lacus id justo dictum sollicitudin. Quisque consectetur ut erat eget viverra.',
	tags: ['Adventure sports', 'Books'],
	backgroundColor: '#f2daff',
	borderColor: '#ac57da',
}

export const Dark = Template.bind({})
Dark.args = {
	title: 'Title Card Dark',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia tincidunt turpis, at eleifend nulla vulputate non. Donec varius tincidunt libero. Quisque eu hendrerit ante. Nullam sed turpis tristique, viverra turpis eu, hendrerit ante. Donec quis venenatis lorem, vel accumsan urna. Sed tempor tellus ut libero egestas, sit amet vulputate lorem fermentum. Duis pulvinar lacus id justo dictum sollicitudin. Quisque consectetur ut erat eget viverra.',
	tags: ['Travel', 'Family', 'Nature'],
	backgroundColor: '#21252999',
	color: '#f8f9fa',
	borderColor: '#212529',
}

export const ActiveDark = Template.bind({})
ActiveDark.args = {
	title: 'Title Card ActiveDark',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia tincidunt turpis, at eleifend nulla vulputate non. Donec varius tincidunt libero. Quisque eu hendrerit ante. Nullam sed turpis tristique, viverra turpis eu, hendrerit ante. Donec quis venenatis lorem, vel accumsan urna. Sed tempor tellus ut libero egestas, sit amet vulputate lorem fermentum. Duis pulvinar lacus id justo dictum sollicitudin. Quisque consectetur ut erat eget viverra.',
	tags: ['Travel', 'Family', 'Nature'],
	backgroundColor: '#4f1d6a99',
	color: '#f2daff',
	borderColor: '#4f1d6a',
}
