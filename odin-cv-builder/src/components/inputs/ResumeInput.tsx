import { useContext, type InputHTMLAttributes } from "react";
import { ResumeGeneralContext } from "../ResumeGeneral";

export type ResumeInputProps = {
  parentKey: string,
  labelName: string;
} & InputHTMLAttributes<HTMLInputElement>;

function ResumeInput({ parentKey, labelName, ...props }: ResumeInputProps) {
  const { updateGeneralData } = useContext(ResumeGeneralContext);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateGeneralData(parentKey, e.target.value);
  };

  return (
    <>
      <label htmlFor={parentKey}>{labelName}</label>
      <input {...props} id={parentKey} onChange={onInputChange} />
      <br />
    </>
  );
}

export { ResumeInput };