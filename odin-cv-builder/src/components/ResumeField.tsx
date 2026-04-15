import { useContext } from "react";
import { InputField, type InputFieldProps } from "./inputs/InputField";
import { TextAreaField, type TextAreaFieldProps } from "./inputs/TextAreaField";
import { ResumeDataContext } from "./Resume";

export type ResumeFieldSectionName =
  "generalInfoFields" | "educationInfoFields" | "practicalInfoFields";

export type ResumeFieldProps =
  {
    componentType: "text",
    fieldSection: ResumeFieldSectionName,
    fieldProps: InputFieldProps;
  } | {
    componentType: "textarea",
    fieldSection: ResumeFieldSectionName,
    fieldProps: TextAreaFieldProps;
  };


function ResumeField({ componentType, fieldSection, fieldProps, hasMultiple, index }: ResumeFieldProps & { hasMultiple: boolean, index?: number; }) {
  const { resumeInfo, updateResumeInfo } = useContext(ResumeDataContext);

  /* 
    Define custom onChange function to update appropriate key in 
    resumeInfo depending on the field being modified
  */
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (hasMultiple) {
      const newFieldSection = [...resumeInfo[fieldSection]];
      newFieldSection[index] = {
        ...resumeInfo[fieldSection][index],
        [e.target.id]: e.target.value
      };
      updateResumeInfo({
        [fieldSection]: newFieldSection
      });
    } else {
      updateResumeInfo({
        [fieldSection]: {
          ...resumeInfo[fieldSection],
          [e.target.id]: e.target.value
        }
      });
    }
  };

  const renderResumeField = () => {
    switch (componentType) {
      case 'text':
        return (
          <InputField {...fieldProps} onChange={onChange} />
        );
      case 'textarea':
        return (
          <TextAreaField {...fieldProps} onChange={onChange} />
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