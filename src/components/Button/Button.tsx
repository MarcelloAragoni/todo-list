import cn from "classnames";

import "./button.scss";

export default function Button({ label, bcolor, onClick }:any) {
  const buttonStyle = cn(
    "button",
    { "button--orange": bcolor === "orange" }
  );

  return (
    <button onClick={onClick} type="button" className={buttonStyle}>
      {label}
    </button>
  );
}
