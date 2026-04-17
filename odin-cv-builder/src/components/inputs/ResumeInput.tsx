import { type InputHTMLAttributes } from "react";

export type ResumeInputProps = {
  parentKey: string,
  labelName: string,
  updateHandler: (key: string, value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

function ResumeInput({ parentKey, labelName, updateHandler, ...props }: ResumeInputProps) {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => updateHandler(parentKey, e.target.value);

  return (
    <>
      <label htmlFor={parentKey}>{labelName}</label>
      <input {...props} id={parentKey} onChange={onInputChange} />
      <br />
    </>
  );
}

export { ResumeInput };