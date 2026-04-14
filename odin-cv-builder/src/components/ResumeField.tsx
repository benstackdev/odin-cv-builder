import { useContext } from "react";
import { InputField, type InputFieldProps } from "./inputs/InputField";
import { TextAreaField, type TextAreaFieldProps } from "./inputs/TextAreaField";
import { ResumeDataContext } from "./Resume";

export type ResumeFieldSection =
  "generalInfo" | "educationInfo" | "practicalInfo";

export type ResumeFieldProps =
  | { componentType: "text", fieldSection: ResumeFieldSection, fieldProps: InputFieldProps; }
  | { componentType: "textarea", fieldSection: ResumeFieldSection, fieldProps: TextAreaFieldProps; };

function ResumeField({ componentType, fieldSection, fieldProps }: ResumeFieldProps) {
  const { resumeInfo, updateResumeInfo } = useContext(ResumeDataContext);

  const renderResumeField = () => {
    switch (componentType) {
      case 'text':
        return (
          <InputField
            {...fieldProps}
            onChange={(e) => updateResumeInfo({ [fieldSection]: { ...resumeInfo[fieldSection], [e.target.id]: e.target.value } })}
          />
        );
      case 'textarea':
        return (
          <TextAreaField
            {...fieldProps}
            onChange={(e) => updateResumeInfo({ [fieldSection]: { ...resumeInfo[fieldSection], [e.target.id]: e.target.value } })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderResumeField()}
    </>
  );
}

export { ResumeField };