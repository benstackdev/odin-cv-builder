import { useContext } from "react";
import { ResumeField } from "./ResumeField";
import { ResumeDataContext } from "./ResumeData";

function Resume() {
  const {
    generalInfoFields,
    educationInfoFields,
    practicalInfoFields
  } = useContext(ResumeDataContext);

  return (
    <>
      {generalInfoFields.map((fieldObject) => <ResumeField {...fieldObject} />)}
      {educationInfoFields.map((fieldObject) => <ResumeField {...fieldObject} />)}
      {practicalInfoFields.map((fieldObject) => <ResumeField {...fieldObject} />)}
    </>
  );
}

export { Resume };