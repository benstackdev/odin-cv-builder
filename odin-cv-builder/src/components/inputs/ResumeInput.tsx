import { type InputHTMLAttributes } from "react";

export type ResumeInputProps = {
  parentKey: string,
  labelName: string,
  updateHandler: (key: string, value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

function ResumeInput({ parentKey, labelName, updateHandler, ...props }: ResumeInputProps) {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => updateHandler(parentKey, e.target.value);

  return (
    <div className="font-size-3 flex-center flex-col">
      <label htmlFor={parentKey} className="margin-bottom-1 col-white font-bold">{labelName}</label>
      <input {...props} id={parentKey} onChange={onInputChange}
        className="width-fill font-size-2 padding-2 border-radius-1"
      />
      <br />
    </div>
  );
}

export { ResumeInput };