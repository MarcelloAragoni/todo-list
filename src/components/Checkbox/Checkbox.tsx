import { useState } from "react";
import cn from "classnames";
import "./checkbox.scss";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked(!checked);
  }

  const checkedClass = cn("checkbox", { "checkbox--checked": checked });

  return <input className={checkedClass} onClick={toggle} type="checkbox" />;
}
