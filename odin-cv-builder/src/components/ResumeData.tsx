import { createContext, useState } from "react";
import type { ResumeFieldProps } from "./ResumeField";
import { Resume } from "./Resume";

const ResumeDataContext = createContext(null);

interface ResumeGeneralInfo {
  name: string,
  email: string,
  phone: string;
};

interface ResumeEducationInfo {
  schoolName: string,
  programName: string,
  programStart: string,
  programEnd: string,
  gpa: string;
}

interface ResumePracticalInfo {
  companyName: string,
  jobTitle: string,
  jobStart: string,
  jobEnd: string | null,
  jobDescription: string;
}

function ResumeData() {
  const [generalInfo, setGeneralInfo] = useState<ResumeGeneralInfo | undefined>({
    name: "",
    email: "",
    phone: ""
  });

  const [educationInfo, setEducationInfo] = useState<ResumeEducationInfo | undefined>({
    schoolName: "",
    programName: "",
    programStart: "",
    programEnd: "",
    gpa: ""
  });

  const [practicalInfo, setPracticalInfo] = useState<ResumePracticalInfo | undefined>({
    companyName: "",
    jobTitle: "",
    jobStart: "",
    jobEnd: null,
    jobDescription: ""
  });


  const generalInfoFields: ResumeFieldProps[] = [
    {
      componentType: "text",
      fieldProps: {
        label: "Name: ",
        inputID: "name",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setGeneralInfo((prevGeneralInfo) => ({
            ...prevGeneralInfo, name: e.target.value
          }));
        },
        type: "text"
      }
    },
    {
      componentType: "text",
      fieldProps: {
        label: "Email: ",
        inputID: "email",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setGeneralInfo((prevGeneralInfo) => ({
            ...prevGeneralInfo, email: e.target.value
          }));
        },
        type: "email"
      }
    },
    {
      componentType: "text",
      fieldProps: {
        label: "Phone Number: ",
        inputID: "phone",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setGeneralInfo((prevGeneralInfo) => ({
            ...prevGeneralInfo, phone: e.target.value
          }));
        },
        type: "tel"
      }
    }
  ];

  const educationInfoFields: ResumeFieldProps[] = [
    {
      componentType: "text",
      fieldProps: {
        label: "School Name: ",
        inputID: "schoolName",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setEducationInfo((prevEducationInfo) => ({
            ...prevEducationInfo, schoolName: e.target.value
          }));
        },
        type: "text"
      }
    },
    {
      componentType: "text",
      fieldProps: {
        label: "Program Name: ",
        inputID: "programName",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setEducationInfo((prevEducationInfo) => ({
            ...prevEducationInfo, programName: e.target.value
          }));
        },
        type: "text"
      }
    },
    {
      componentType: "text",
      fieldProps: {
        label: "Program Start: ",
        inputID: "programStart",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setEducationInfo((prevEducationInfo) => ({
            ...prevEducationInfo, programStart: e.target.value
          }));
        },
        type: "month"
      }
    },
    {
      componentType: "text",
      fieldProps: {
        label: "Program End: ",
        inputID: "programEnd",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setEducationInfo((prevEducationInfo) => ({
            ...prevEducationInfo, programEnd: e.target.value
          }));
        },
        type: "month"
      }
    },
    {
      componentType: "text",
      fieldProps: {
        label: "GPA: ",
        inputID: "gpa",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setEducationInfo((prevEducationInfo) => ({
            ...prevEducationInfo, gpa: e.target.value
          }));
        },
        type: "number",
        min: 0,
        max: 4,
        step: 0.1
      }
    },
  ];

  const practicalInfoFields = [
    {
      componentType: "text",
      fieldProps: {
        label: "Company Name: ",
        inputID: "companyName",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setPracticalInfo((prevPracticalInfo) => ({
            ...prevPracticalInfo, companyName: e.target.value
          }));
        },
        type: "text"
      }
    },
    {
      componentType: "text",
      fieldProps: {
        label: "Job Title: ",
        inputID: "jobTitle",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setPracticalInfo((prevPracticalInfo) => ({
            ...prevPracticalInfo, jobTitle: e.target.value
          }));
        },
        type: "text"
      }
    },
    {
      componentType: "text",
      fieldProps: {
        label: "Job Start: ",
        inputID: "jobStart",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setPracticalInfo((prevPracticalInfo) => ({
            ...prevPracticalInfo, jobStart: e.target.value
          }));
        },
        type: "month"
      }
    },
    {
      componentType: "text",
      fieldProps: {
        label: "Job End: ",
        inputID: "jobEnd",
        updateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
          setPracticalInfo((prevPracticalInfo) => ({
            ...prevPracticalInfo, jobEnd: e.target.value
          }));
        },
        type: "month"
      }
    },
    {
      componentType: "textarea",
      fieldProps: {
        label: "Job Description: ",
        textAreaID: "jobDescription",
        updateHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setPracticalInfo((prevPracticalInfo) => ({
            ...prevPracticalInfo, jobDescription: e.target.value
          }));
        },
        rows: 10,
        cols: 50
      }
    },
  ];

  return (
    <ResumeDataContext value={{
      generalInfoFields,
      educationInfoFields,
      practicalInfoFields
    }}>
      <h1>Resume</h1>
      <pre>{JSON.stringify(generalInfo, null, 2)}</pre>
      <pre>{JSON.stringify(educationInfo, null, 2)}</pre>
      <pre>{JSON.stringify(practicalInfo, null, 2)}</pre>
      <Resume />
    </ResumeDataContext>
  );
}

export { ResumeDataContext, ResumeData };