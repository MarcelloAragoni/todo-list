import { Todolist } from "./TodoList";

type Props = { itens: Todolist };

export default function Itemlist({ itens }: Props) {
  return <li className="todo-list__item">{itens.text}</li>;
}
