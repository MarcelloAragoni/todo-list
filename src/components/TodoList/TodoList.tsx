import Item from "./ItemList";
import "./todolist.scss";

export type Todolist = {
  text: string;
};

type Props = {
  ItemList: Todolist[];
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
