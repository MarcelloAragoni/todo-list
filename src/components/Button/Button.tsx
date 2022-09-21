import cn from "classnames";

import "./button.scss";

type Props = {
  color?: string;
  label?: string;
  variant?: string;
  size?: string;
  onClick?: () => void;
};

export default function Button({
  label,
  color,
  onClick,
  variant,
  size,
}: Props) {
  const buttonStyle = cn(
    "button",
    { "button--ghost": variant === "ghost" },
    { "button--cross": variant === "cross" },
    { "button--small": size === "small" },
    { "button--blue": color === "blue" }
  );

  return (
    <button onClick={onClick} type="button" className={buttonStyle}>
      {label}
    </button>
  );
}
