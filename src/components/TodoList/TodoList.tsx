import Itemlist from "./Itemlist";
import "./todolist.scss";

export type Todolist = {
  text: string;
};

type Props = {
  ItemList: Todolist[];
};

export default function List({ ItemList }: Props) {
  return (
    <ul className="todo-list">
      {ItemList.map((item) => (
        <Itemlist itens={item} />
      ))}
    </ul>
  );
}
