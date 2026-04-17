import { useContext } from "react";
import { ResumeContext } from "./Resume";
import { ResumeInput } from "./inputs/ResumeInput";
import { ResumeTextArea } from "./inputs/ResumeTextArea";

function ResumePractical({ practicalData, setPracticalData }) {
  const isEditing = useContext(ResumeContext);

  const updatePracticalData = (key: string, value: string) => {
    setPracticalData(practicalData.key, key, value);
  };

  if (isEditing) {
    return (
      <>
        <h3>Practical Experience</h3>
        <ResumeInput
          parentKey="employerName"
          labelName="Name of Employer: "
          updateHandler={updatePracticalData}
          value={practicalData.employerName}
        />
        <ResumeInput
          parentKey="jobTitle"
          labelName="Job Title: "
          updateHandler={updatePracticalData}
          value={practicalData.jobTitle}
        />
        <ResumeInput
          parentKey="jobStart"
          labelName="Job Start: "
          updateHandler={updatePracticalData}
          value={practicalData.jobStart}
          type="month"
        />
        <ResumeInput
          parentKey="jobEnd"
          labelName="Job End: "
          updateHandler={updatePracticalData}
          value={practicalData.jobEnd}
          type="month"
        />
        <ResumeTextArea
          parentKey="jobDescription"
          labelName="Job Description: "
          updateHandler={updatePracticalData}
          value={practicalData.jobDescription}
        />
      </>
    );
  }
  return (
    <>
      <h3>Practical Experience</h3>
      <p><b>Name of Employer: </b>{practicalData.employerName}</p>
      <p><b>Job Title: </b>{practicalData.jobTitle}</p>
      <p><b>Job Start: </b>{practicalData.jobStart}</p>
      <p><b>Job End: </b>{practicalData.jobEnd}</p>
      <p><b>Job Description: </b>{practicalData.jobDescription}</p>
    </>
  );
}

export { ResumePractical };