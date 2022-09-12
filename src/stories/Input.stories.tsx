import {ComponentStory, ComponentMeta} from "@storybook/react";

import Input from "../components/Input/Input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    variant: {control: "select", options: ["dark", "light"]},
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  setInputState: () => {},
  placeholder: "digite aqui",
  name: "string",
  value: "teste",
  variant: "dark",
};
