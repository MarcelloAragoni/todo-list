import cn from "classnames";

import "./input.scss";

type Props = {
  placeholder: string;
  name: string;
  value: any;
  onChange: (value: string) => void;
  variant: string;
};

export default function Input({
  placeholder,
  name,
  value,
  onChange,
  variant,
}: Props) {
  const inputStyle = cn(
    "input",
    {"input--dark": variant === "dark"},
    {"input--light": variant === "light"}
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <input
      onChange={handleChange}
      name={name}
      className={inputStyle}
      placeholder={placeholder}
      value={value}
    />
  );
}
