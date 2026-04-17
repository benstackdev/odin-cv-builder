import { useContext } from "react";
import { ResumeContext } from "./Resume";
import { ResumeInput } from "./inputs/ResumeInput";

function ResumeEducation({ educationData, setEducationData }) {
  const isEditing = useContext(ResumeContext);

  const updateEducationData = (key: string, value: string) => {
    setEducationData(educationData.key, key, value);
  };

  if (isEditing) {
    return (
      <>
        <h3>Education Experience</h3>
        <ResumeInput
          parentKey="schoolName"
          labelName="School Name: "
          updateHandler={updateEducationData}
          value={educationData.schoolName}
        />
        <ResumeInput
          parentKey="programName"
          labelName="Program Name: "
          updateHandler={updateEducationData}
          value={educationData.programName}
        />
        <ResumeInput
          parentKey="programStart"
          labelName="Program Start: "
          updateHandler={updateEducationData}
          value={educationData.programStart}
          type="month"
        />
        <ResumeInput
          parentKey="programEnd"
          labelName="Program End: "
          updateHandler={updateEducationData}
          value={educationData.programEnd}
          type="month"
        />
        <ResumeInput
          parentKey="gpa"
          labelName="GPA: "
          updateHandler={updateEducationData}
          value={educationData.gpa}
          type="number"
          min={0.0}
          max={4.0}
          step={0.1}
        />
      </>
    );
  }
  return (
    <>
      <h3>Education Experience</h3>
      <p><b>School Name: </b>{educationData.schoolName}</p>
      <p><b>Program Name: </b>{educationData.programName}</p>
      <p><b>Program Start: </b>{educationData.programStart}</p>
      <p><b>Program End: </b>{educationData.programEnd}</p>
      <p><b>GPA: </b>{educationData.gpa}</p>
    </>
  );
}

export { ResumeEducation };