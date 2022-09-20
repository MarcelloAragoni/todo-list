import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

import { Todolist } from "./TodoList";

type Props = { items: Todolist };

export default function Item({ items }: Props) {
  return (
    <li className="todo-list__grid">
      <Checkbox />
      <p className="todo-list__grid--item">{items.text}</p>
      <Button variant="cross" size="small" />
    </li>
  );
}
