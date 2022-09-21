import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

import { Todo } from "./TodoList";

type Props = { items: Todo };

export default function Item({ items }: Props) {
  return (
    <li className="todo-list__grid">
      <Checkbox />
      <p className="todo-list__grid--item">{items.text}</p>
      <Button variant="cross" size="small" />
    </li>
  );
}
