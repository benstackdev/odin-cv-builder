import type { InputHTMLAttributes } from "react";

export type InputFieldProps = {
  label: string,
  inputID: string,
  updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

function InputField({ label, inputID, updateHandler, ...props }: InputFieldProps) {
  return (
    <>
      <label htmlFor={inputID}>
        {label}
        <input {...props} type={props.type ?? "text"} id={inputID} onChange={updateHandler} />
      </label>
    </>
  );
}

export { InputField };