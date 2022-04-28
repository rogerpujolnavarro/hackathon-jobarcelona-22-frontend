import React from 'react'

import { Badge } from './Badge'

export default {
	title: "JOBarcelona'22/Badge",
	component: Badge,
}

const Template = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
	label: 'Badge',
	size: 'md',
}
