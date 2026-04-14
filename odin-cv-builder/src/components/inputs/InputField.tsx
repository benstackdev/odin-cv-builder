import type { InputHTMLAttributes } from "react";

export type InputFieldProps = {
  label: string,
  inputID: string;
} & InputHTMLAttributes<HTMLInputElement>;

function InputField({ label, inputID, ...props }: InputFieldProps) {
  return (
    <>
      <label htmlFor={inputID}>
        {label}
        <br />
        <input {...props} type={props.type ?? "text"} id={inputID} />
      </label>
    </>
  );
}

export { InputField };