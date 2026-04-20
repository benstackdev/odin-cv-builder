import { useContext } from "react";
import { ResumeContext } from "./Resume";
import { ResumeInput } from "./inputs/ResumeInput";
import { ResumeTextArea } from "./inputs/ResumeTextArea";
import { addMonths, format } from "date-fns";
import type { ResumePracticalData } from "./ResumeInterfaces";

export type ResumePracticalProps = {
  practicalData: ResumePracticalData,
  setPracticalData: (practicalKey: string, attrKey: string, value: string) => void;
};

function ResumePractical({ practicalData, setPracticalData }: ResumePracticalProps) {
  const isEditing = useContext(ResumeContext);

  const updatePracticalData = (key: string, value: string) => {
    setPracticalData(practicalData.key, key, value);
  };

  const startDate = (practicalData.jobStart !== "") ?
    format(addMonths(new Date(practicalData.jobStart), 1), "MMM, yyyy")
    : "";

  const endDate = (practicalData.jobEnd !== "") ?
    format(addMonths(new Date(practicalData.jobEnd), 1), "MMM, yyyy")
    : "Present";

  if (isEditing) {
    return (
      <div>
        <ResumeInput
          parentKey="employerName"
          labelName="Name of Employer "
          updateHandler={updatePracticalData}
          value={practicalData.employerName}
        />
        <ResumeInput
          parentKey="jobTitle"
          labelName="Job Title "
          updateHandler={updatePracticalData}
          value={practicalData.jobTitle}
        />
        <ResumeInput
          parentKey="jobStart"
          labelName="Job Start "
          updateHandler={updatePracticalData}
          value={practicalData.jobStart}
          type="month"
        />
        <ResumeInput
          parentKey="jobEnd"
          labelName="Job End "
          updateHandler={updatePracticalData}
          value={practicalData.jobEnd}
          type="month"
        />
        <ResumeTextArea
          className="font-size-2 border-radius-1 padding-2"
          parentKey="jobDescription"
          labelName="Job Description "
          updateHandler={updatePracticalData}
          value={practicalData.jobDescription}
          rows={10}
          cols={20}
        />
      </div>
    );
  }
  return (
    <div>
      <h4 className="font-bold font-size-2 margin-bottom-1">
        {practicalData.employerName} | <span className="font-normal col-blue">
          {startDate} - {endDate}
        </span>
      </h4>
      <p className="font-bold font-size-2">{practicalData.jobTitle}</p>
      <p>{practicalData.jobDescription}</p>
    </div>
  );
}

export { ResumePractical };