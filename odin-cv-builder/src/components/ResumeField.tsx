import { InputField, type InputFieldProps } from "./inputs/InputField";
import { TextAreaField, type TextAreaFieldProps } from "./inputs/TextAreaField";

export type ResumeFieldProps =
  | { componentType: "text", fieldProps: InputFieldProps; }
  | { componentType: "textarea", fieldProps: TextAreaFieldProps; };

function ResumeField({ componentType, fieldProps }: ResumeFieldProps) {

  const renderResumeField = () => {
    switch (componentType) {
      case 'text':
        return <InputField {...fieldProps} />;
      case 'textarea':
        return <TextAreaField {...fieldProps} />;
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