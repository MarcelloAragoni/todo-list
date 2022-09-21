import Item from "./ItemList";
import "./todolist.scss";

export type Todo = {
  text: string;
};

type Props = {
  ItemList: Todo[];
};

export default function TodoList({ ItemList }: Props) {
  return (
    <ul className="todo-list">
      {ItemList.map((item) => (
        <Item items={item} />
      ))}
    </ul>
  );
}
