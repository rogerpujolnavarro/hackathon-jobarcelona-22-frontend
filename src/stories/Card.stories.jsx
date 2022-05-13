import { Card } from './Card'
import { Badge } from './Badge'

export default {
	title: "JOBarcelona'22/GiftsList Components/Card",
	component: Card,
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'Default title card',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia tincidunt turpis, at eleifend nulla vulputate non. Donec varius tincidunt libero. Quisque eu hendrerit ante. Nullam sed turpis tristique, viverra turpis eu, hendrerit ante. Donec quis venenatis lorem, vel accumsan urna. Sed tempor tellus ut libero egestas, sit amet vulputate lorem fermentum. Duis pulvinar lacus id justo dictum sollicitudin. Quisque consectetur ut erat eget viverra.',
	children: (
		<>
			<Badge label="# Tag 1" {...Badge.args} />
			<Badge label="# Tag 2" {...Badge.args} />
		</>
	),
}

export const Success = Template.bind({})
Success.args = {
	title: 'Success card',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia tincidunt turpis, at eleifend nulla vulputate non. Donec varius tincidunt libero. Quisque eu hendrerit ante. Nullam sed turpis tristique, viverra turpis eu, hendrerit ante. Donec quis venenatis lorem, vel accumsan urna. Sed tempor tellus ut libero egestas, sit amet vulputate lorem fermentum. Duis pulvinar lacus id justo dictum sollicitudin. Quisque consectetur ut erat eget viverra.',
	backgroundColor: '#158754',
	children: (
		<>
			<Badge label="# Tag 1" {...Badge.args} />
			<Badge label="# Tag 2" {...Badge.args} />
		</>
	),
}

export const Dark = Template.bind({})
Dark.args = {
	title: 'Title Card Dark',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia tincidunt turpis, at eleifend nulla vulputate non. Donec varius tincidunt libero. Quisque eu hendrerit ante. Nullam sed turpis tristique, viverra turpis eu, hendrerit ante. Donec quis venenatis lorem, vel accumsan urna. Sed tempor tellus ut libero egestas, sit amet vulputate lorem fermentum. Duis pulvinar lacus id justo dictum sollicitudin. Quisque consectetur ut erat eget viverra.',
	darkMode: true,
	children: (
		<>
			<Badge label="# Tag 1" {...Badge.args} />
			<Badge label="# Tag 2" {...Badge.args} />
		</>
	),
}

export const Warning = Template.bind({})
Warning.args = {
	title: 'Warning card',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia tincidunt turpis, at eleifend nulla vulputate non. Donec varius tincidunt libero. Quisque eu hendrerit ante. Nullam sed turpis tristique, viverra turpis eu, hendrerit ante. Donec quis venenatis lorem, vel accumsan urna. Sed tempor tellus ut libero egestas, sit amet vulputate lorem fermentum. Duis pulvinar lacus id justo dictum sollicitudin. Quisque consectetur ut erat eget viverra.',
	backgroundColor: '#ffc107',
	border: 2,
	children: (
		<>
			<Badge label="# Tag 1" backgroundColor="#ffc107" color="#000" {...Badge.args} />
			<Badge label="# Tag 2" backgroundColor="#ffc107" color="#000" {...Badge.args} />
		</>
	),
}
