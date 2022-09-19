import cn from "classnames";

import "./button.scss";

type Props = {
  color: string;
  label: string;
  variant: string;
  onClick: () => void;
};

export default function Button({ label, color, onClick, variant }: Props) {
  const buttonStyle = cn(
    "button",
    { "button--ghost": variant === "ghost" },
    { "button--blue": color === "blue" },
    { "button--cross": variant === "cross" }
  );

  return (
    <button onClick={onClick} type="button" className={buttonStyle}>
      {label}
    </button>
  );
}
