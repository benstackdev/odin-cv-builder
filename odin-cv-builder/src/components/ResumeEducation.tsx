import { useContext } from "react";
import { ResumeContext } from "./Resume";
import { ResumeInput } from "./inputs/ResumeInput";
import { addMonths, format } from "date-fns";

function ResumeEducation({ educationData, setEducationData }) {
  const isEditing = useContext(ResumeContext);

  const updateEducationData = (key: string, value: string) => {
    setEducationData(educationData.key, key, value);
  };

  const startDate = (educationData.programStart !== "") ?
    format(addMonths(new Date(educationData.programStart), 1), "MMM, yyyy")
    : "";
  const endDate = (educationData.programEnd !== "") ?
    format(addMonths(new Date(educationData.programEnd), 1), "MMM, yyyy")
    : "Present";

  if (isEditing) {
    return (
      <div>
        <ResumeInput
          parentKey="schoolName"
          labelName="School Name "
          updateHandler={updateEducationData}
          value={educationData.schoolName}
        />
        <ResumeInput
          parentKey="programName"
          labelName="Program Name "
          updateHandler={updateEducationData}
          value={educationData.programName}
        />
        <ResumeInput
          className="width-fit"
          parentKey="programStart"
          labelName="Program Start "
          updateHandler={updateEducationData}
          value={educationData.programStart}
          type="month"
        />
        <ResumeInput
          className="width-fit"
          parentKey="programEnd"
          labelName="Program End "
          updateHandler={updateEducationData}
          value={educationData.programEnd}
          type="month"
        />
        <ResumeInput
          parentKey="gpa"
          labelName="GPA "
          updateHandler={updateEducationData}
          value={educationData.gpa}
          type="number"
          min={0.0}
          max={4.0}
          step={0.1}
        />
      </div>
    );
  }
  return (
    <div>
      <h4 className="font-bold font-size-2">
        {educationData.schoolName} | <span className="font-normal col-blue">
          {startDate} - {endDate}
        </span>
      </h4>
      <p><span className="font-bold">Program: </span>{educationData.programName}</p>
      <p><span className="font-bold">GPA: </span> {educationData.gpa}</p>
    </div>
  );
}

export { ResumeEducation };