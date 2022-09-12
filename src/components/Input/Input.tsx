import cn from "classnames";

import "./input.scss";

type Props = {
  placeholder: string;
  name: string;
  value: any;
  setInputState: any;
  variant: string;
};

export default function Input({
  placeholder,
  name,
  value,
  setInputState,
  variant,
}: Props) {
  const inputStyle = cn(
    "input",
    {"input--dark": variant === "dark"},
    {"input--light": variant === "light"}
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value);
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
