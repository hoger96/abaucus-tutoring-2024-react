import { HTMLInputTypeAttribute, useState } from "react";

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
  num1: number
  num2: number
  onKeyDown: (e: React.KeyboardEvent) => void;
  onChange1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange2: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
    <div className="flex">
      <input
        value={props.num1}
        onChange={props.onChange1}
      />
      <p>+</p>
      <input
        value={props.num2}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange2}
      />
      <p>=</p>
    </div>
    </>
  );
};
