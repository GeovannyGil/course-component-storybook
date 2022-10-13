import React from 'react'
import Heading from '../../atoms/Heading'

export default {
  // title: 'Atoms/Heading',
  component: Heading
}

export const Default = () => <Heading>Heading Default</Heading>
export const Primary = () => <Heading color='Primary'>Heading Primary</Heading>
export const Medium = () => <Heading size='md'>Heading Medium</Heading>
export const Small = () => <Heading size='sm'>Heading Small</Heading>
export const ExtraSmall = () => <Heading size='xs'>Heading ExtraSmall</Heading>


// const Template = (args) => <Heading {...args} />

// export const Default = Template.bind({})
// Default.args = {
//   children: 'Heading'
// }
// export const Primary = Template.bind({})
// Primary.args = {
//   children: 'Heading',
//   color: 'primary'
// }
// export const Medium = Template.bind({})
// Medium.args = {
//   children: 'Heading',
//   size: 'md'
// }
// export const Small = Template.bind({})
// Small.args = {
//   children: 'Heading',
//   size: 'sm'
// }
// export const ExtraSmall = Template.bind({})
// ExtraSmall.args = {
//   children: 'Heading',
//   size: 'xs'
// }
