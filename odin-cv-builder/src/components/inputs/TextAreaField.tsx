import type { TextareaHTMLAttributes } from "react";

export type TextAreaFieldProps = {
  label: string,
  textAreaID: string,
  updateHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextAreaField({ label, textAreaID, updateHandler, ...props }: TextAreaFieldProps) {
  return (
    <>
      <label htmlFor={textAreaID}>
        {label}
        <br />
        <textarea {...props} id={textAreaID} onChange={updateHandler} />
      </label>
    </>
  );
}

export { TextAreaField };