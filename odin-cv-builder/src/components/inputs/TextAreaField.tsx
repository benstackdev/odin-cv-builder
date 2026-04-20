import type { TextareaHTMLAttributes } from "react";

export type TextAreaFieldProps = {
  label: string,
  textAreaID: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextAreaField({ label, textAreaID, ...props }: TextAreaFieldProps) {
  return (
    <>
      <label htmlFor={textAreaID}>
        {label}
        <br />
        <textarea {...props} id={textAreaID} />
      </label>
    </>
  );
}

export { TextAreaField };