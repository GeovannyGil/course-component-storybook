import React from 'react'
import Button from '../../atoms/Button'

export default {
  // title: 'Atoms/Buttons',
  title: 'Atoms/Buttons',
  component: Button
}

export const Primary = () => <Button type='primary'>Button Primary</Button>
export const Secondary = () => <Button type='secondary'>Button Secondary</Button>
export const Tertiary = () => <Button type='tertiary'>Button Tertiary</Button>

// const Template = (args) => <Button {...args} />
// const TemplateIcon = (args) => <Icons {...args} />

// export const Primary = Template.bind({})
// Primary.args = {
//   children: 'Button Primary'
// }
// export const Secondary = Template.bind({})
// Secondary.args = {
//   children: 'Button Secondary',
//   type: 'secondary'
// }
// export const Tertiary = Template.bind({})
// Tertiary.args = {
//   children: 'Button Tertiary',
//   type: 'tertiary'
// }

// // Button with component icon
// export const PrimaryIcon = Template.bind({})
// PrimaryIcon.args = {
//   children: 'Button Primary',
//   icon: <Icons type='right-arrow' />
// }

