import React from 'react'

import { Badge } from './Badge'

export default {
	title: "JOBarcelona'22/GiftsList Components/Badge",
	component: Badge,
}

const Template = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
	label: 'Badge',
	size: 'md',
}

export const Medium = Template.bind({})
Medium.args = {
	label: 'Badge',
	size: 'md',
}

export const Small = Template.bind({})
Small.args = {
	label: 'Badge',
	size: 'sm',
}
export const Large = Template.bind({})
Large.args = {
	label: 'Badge',
	size: 'lg',
}
