import { type TextareaHTMLAttributes } from "react";

export type ResumeTextAreaProps = {
  parentKey: string,
  labelName: string,
  updateHandler: (key: string, value: string) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

function ResumeTextArea({ parentKey, labelName, updateHandler, ...props }: ResumeTextAreaProps) {
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => updateHandler(parentKey, e.target.value);

  return (
    <div className="font-size-3 flex-center flex-col margin-bottom-2">
      <label htmlFor={parentKey} className="margin-bottom-1 col-white font-bold">{labelName}</label>
      <textarea {...props} id={parentKey} onChange={onInputChange} />
    </div>
  );
}

export { ResumeTextArea };