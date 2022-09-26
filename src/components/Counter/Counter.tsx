import "./counter.scss";

type Props = {
  size: number;
};

export default function Counter({ size }: Props) {
  return <p className="counter">Quantidade de itens na lista: {size}</p>;
}
