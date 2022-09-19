import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

import { Todolist } from "./TodoList";

type Props = { itens: Todolist };

export default function Itemlist({ itens }: Props) {
  return (
    <div className="todo-list__grid">
      <Checkbox />
      <li className="todo-list__grid--item">{itens.text}</li>
      <Button variant="cross" color={""} label={""} />
    </div>
  );
}
