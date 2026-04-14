import { createContext, useState } from "react";
import { ResumeForm } from "./ResumeForm";
import { type ResumeEducationInfo, type ResumeGeneralInfo, type ResumePracticalInfo } from "../data/field-data";

const ResumeDataContext = createContext(null);

// TODO: refactor to allow multiple education and practical sections (make list?)
interface ResumeInfo {
  generalInfo: ResumeGeneralInfo,
  educationInfo: ResumeEducationInfo,
  practicalInfo: ResumePracticalInfo;
}

function Resume() {
  const [resumeInfo, setResumeInfo] = useState<ResumeInfo | undefined>({
    generalInfo: {
      name: "",
      email: "",
      phone: "",
      website: ""
    },
    educationInfo: {
      schoolName: "",
      programName: "",
      programStart: "",
      programEnd: "",
      gpa: ""
    },
    practicalInfo: {
      companyName: "",
      jobTitle: "",
      jobStart: "",
      jobEnd: null,
      jobDescription: ""
    }
  });

  const updateResumeInfo = (newInfo: Partial<ResumeInfo>) => {
    setResumeInfo((prevResumeInfo) => {
      return { ...prevResumeInfo, ...newInfo };
    });
  };

  return (
    <ResumeDataContext value={{ resumeInfo, updateResumeInfo }}>
      <h1>Resume</h1>
      <pre>{JSON.stringify(resumeInfo, null, 2)}</pre>
      <br />
      <ResumeForm className="flex-col" />
    </ResumeDataContext>
  );
}

export { ResumeDataContext, Resume };