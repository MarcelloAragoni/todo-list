import { useState } from "react";
import "./checkbox.scss";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked(!checked);
  }

  const checkedClass = checked ? "checkbox--checked" : "";
  const containerClass = `checkbox ${checkedClass}`.trim();

  return (
    <input className={containerClass} onClick={toggle} type="checkbox"></input>
  );
}
