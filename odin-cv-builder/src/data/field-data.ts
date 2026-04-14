import type { ResumeFieldProps } from "../components/ResumeField";

export interface ResumeGeneralInfo {
  name: string,
  email: string,
  phone: string,
  website: string;
}

export interface ResumeEducationInfo {
  schoolName: string,
  programName: string,
  programStart: string,
  programEnd: string,
  gpa: string;
}

export interface ResumePracticalInfo {
  companyName: string,
  jobTitle: string,
  jobStart: string,
  jobEnd: string | null,
  jobDescription: string;
}

export const generalInfoFields: ResumeFieldProps[] = [
  {
    componentType: "text",
    fieldSection: "generalInfo",
    fieldProps: {
      label: "Name: ",
      inputID: "name",
      type: "text"
    }
  },
  {
    componentType: "text",
    fieldSection: "generalInfo",
    fieldProps: {
      label: "Email: ",
      inputID: "email",
      type: "email"
    }
  },
  {
    componentType: "text",
    fieldSection: "generalInfo",
    fieldProps: {
      label: "Phone Number: ",
      inputID: "phone",
      type: "tel"
    }
  },
  {
    componentType: "text",
    fieldSection: "generalInfo",
    fieldProps: {
      label: "Website: ",
      inputID: "website",
      type: "url"
    }
  }
];

export const educationInfoFields: ResumeFieldProps[] = [
  {
    componentType: "text",
    fieldSection: "educationInfo",
    fieldProps: {
      label: "School Name: ",
      inputID: "schoolName",
      type: "text"
    }
  },
  {
    componentType: "text",
    fieldSection: "educationInfo",
    fieldProps: {
      label: "Program Name: ",
      inputID: "programName",
      type: "text"
    }
  },
  {
    componentType: "text",
    fieldSection: "educationInfo",
    fieldProps: {
      label: "Program Start: ",
      inputID: "programStart",
      type: "month"
    }
  },
  {
    componentType: "text",
    fieldSection: "educationInfo",
    fieldProps: {
      label: "Program End: ",
      inputID: "programEnd",
      type: "month"
    }
  },
  {
    componentType: "text",
    fieldSection: "educationInfo",
    fieldProps: {
      label: "GPA: ",
      inputID: "gpa",
      type: "number",
      min: 0,
      max: 4,
      step: 0.1
    }
  },
];

export const practicalInfoFields: ResumeFieldProps[] = [
  {
    componentType: "text",
    fieldSection: "practicalInfo",
    fieldProps: {
      label: "Company Name: ",
      inputID: "companyName",
      type: "text"
    }
  },
  {
    componentType: "text",
    fieldSection: "practicalInfo",
    fieldProps: {
      label: "Job Title: ",
      inputID: "jobTitle",
      type: "text"
    }
  },
  {
    componentType: "text",
    fieldSection: "practicalInfo",
    fieldProps: {
      label: "Job Start: ",
      inputID: "jobStart",
      type: "month"
    }
  },
  {
    componentType: "text",
    fieldSection: "practicalInfo",
    fieldProps: {
      label: "Job End: ",
      inputID: "jobEnd",
      type: "month"
    }
  },
  {
    componentType: "textarea",
    fieldSection: "practicalInfo",
    fieldProps: {
      label: "Job Description: ",
      textAreaID: "jobDescription",
      rows: 10,
      cols: 50
    }
  }
];