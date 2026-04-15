import { createContext, useState } from "react";
import { ResumeForm } from "./ResumeForm";
import { type ResumeEducationInfo, type ResumeGeneralInfo, type ResumePracticalInfo } from "../data/field-data";

const ResumeDataContext = createContext(null);

// TODO: refactor to allow multiple education and practical sections (make list?)
interface ResumeInfo {
  generalInfoFields: ResumeGeneralInfo,
  educationInfoFields: ResumeEducationInfo[],
  practicalInfoFields: ResumePracticalInfo;
}

function Resume() {
  const [resumeInfo, setResumeInfo] = useState<ResumeInfo | undefined>({
    generalInfoFields: {
      name: "",
      email: "",
      phone: "",
      website: ""
    },
    educationInfoFields: [
      {
        schoolName: "",
        programName: "",
        programStart: "",
        programEnd: "",
        gpa: ""
      },
    ],
    practicalInfoFields: {
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

  const addEducationExperience = () => {
    setResumeInfo((prevResumeInfo) => {
      const newEducationExperience: ResumeEducationInfo = {
        schoolName: "",
        programName: "",
        programStart: "",
        programEnd: "",
        gpa: ""
      };
      return {
        ...prevResumeInfo,
        educationInfoFields: [
          ...prevResumeInfo.educationInfoFields,
          newEducationExperience
        ]
      };
    });
  };

  return (
    <ResumeDataContext value={{
      resumeInfo,
      updateResumeInfo,
      addEducationExperience
    }}>
      <h1>Resume</h1>
      <pre>{JSON.stringify(resumeInfo, null, 2)}</pre>
      <br />
      <ResumeForm className="flex-col" />
    </ResumeDataContext>
  );
}

export { ResumeDataContext, Resume };