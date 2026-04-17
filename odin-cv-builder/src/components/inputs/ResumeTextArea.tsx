import { type InputHTMLAttributes } from "react";

export type ResumeTextAreaProps = {
  parentKey: string,
  labelName: string,
  updateHandler: (key: string, value: string) => void;
} & InputHTMLAttributes<HTMLTextAreaElement>;

function ResumeTextArea({ parentKey, labelName, updateHandler, ...props }: ResumeTextAreaProps) {
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => updateHandler(parentKey, e.target.value);

  return (
    <>
      <label htmlFor={parentKey}>{labelName}</label>
      <textarea {...props} id={parentKey} onChange={onInputChange} />
      <br />
    </>
  );
}

export { ResumeTextArea };