import { HTMLInputTypeAttribute } from "react";

export const CommonInput = (props: {
  type?: HTMLInputTypeAttribute;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => {
  const { type, value, onChange, placeholder } = props;
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export const ChangeInput = (props: {
  value: string
  placeholder?: string;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <input
        value={props.value}
        placeholder={props.placeholder}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
      />
    </>
  );
};

export const PropsInput = (props: {
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  console.log(props.value)
  // props.value = "꿍디"
  // console.log(props.value)
  return (
    <>
      <input
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

