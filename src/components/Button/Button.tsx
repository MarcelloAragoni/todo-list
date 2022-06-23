import cn from "classnames";

import "./button.scss";

export default function Button({ label, color, onClick, variant }:any) {
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
