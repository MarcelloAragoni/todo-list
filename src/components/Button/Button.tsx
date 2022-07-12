import cn from "classnames";

import "./button.scss";

type Props = {
  color: String;
  label: String;
  variant: String;
  onClick: () => void
}

export default function Button({ label, color, onClick, variant }: Props) {
  const buttonStyle = cn(
    "button",
    { "button--ghost": variant === "ghost" },
    { "button--blue": color === "blue" }
  );

  return (
    <button onClick={onClick} type="button" className={buttonStyle}>
      {label}
    </button>
  );
}
