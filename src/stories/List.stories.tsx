import { ComponentStory, ComponentMeta } from "@storybook/react";

import TodoList, { Todo } from "../components/TodoList/TodoList";

export default {
  title: "Example/List",
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

const itemsList: Todo[] = [
  { text: "testing 1..2..3..4..5" },
  { text: "testing 1..2..3..4..5" },
  { text: "testing 1..2..3..4..5" },
  { text: "testing 1..2..3..4..5" },
  { text: "testing 1..2..3..4..5" },
];

export const Primary = Template.bind({});
Primary.args = {
  ItemList: itemsList,
};
