import { ComponentStory, ComponentMeta } from "@storybook/react";

import List, { Todolist } from "../components/TodoList/TodoList";

export default {
  title: "Example/List",
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

const itensList: Todolist[] = [
  { text: "testing 1..2..3..4..5" },
  { text: "testing 1..2..3..4..5" },
  { text: "testing 1..2..3..4..5" },
  { text: "testing 1..2..3..4..5" },
  { text: "testing 1..2..3..4..5" },
];

export const Primary = Template.bind({});
Primary.args = {
  ItemList: itensList,
};
