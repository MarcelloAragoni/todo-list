import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button from '../components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes:{
    color: {control: "select", options: ["blue", "default"]}
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color:"default",
  variant: "ghost",
  label: 'Button',
};
