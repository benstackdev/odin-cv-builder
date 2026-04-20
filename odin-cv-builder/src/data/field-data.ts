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

export type ResumeFieldSection = {
  hasMultiple: boolean,
  fieldProps: ResumeFieldProps[];
};

export const fieldData = (() => {
  const generalInfoFields: ResumeFieldSection = {
    hasMultiple: false,
    fieldProps: [
      {
        componentType: "text",
        fieldSection: "generalInfoFields",
        fieldProps: {
          label: "Name: ",
          inputID: "name",
          type: "text"
        }
      },
      {
        componentType: "text",
        fieldSection: "generalInfoFields",
        fieldProps: {
          label: "Email: ",
          inputID: "email",
          type: "email"
        }
      },
      {
        componentType: "text",
        fieldSection: "generalInfoFields",
        fieldProps: {
          label: "Phone Number: ",
          inputID: "phone",
          type: "tel"
        }
      },
      {
        componentType: "text",
        fieldSection: "generalInfoFields",
        fieldProps: {
          label: "Website: ",
          inputID: "website",
          type: "url"
        }
      }
    ]
  };

  const educationInfoFields: ResumeFieldSection = {
    hasMultiple: true,
    fieldProps: [
      {
        componentType: "text",
        fieldSection: "educationInfoFields",
        fieldProps: {
          label: "School Name: ",
          inputID: "schoolName",
          type: "text"
        }
      },
      {
        componentType: "text",
        fieldSection: "educationInfoFields",
        fieldProps: {
          label: "Program Name: ",
          inputID: "programName",
          type: "text"
        }
      },
      {
        componentType: "text",
        fieldSection: "educationInfoFields",
        fieldProps: {
          label: "Program Start: ",
          inputID: "programStart",
          type: "month"
        }
      },
      {
        componentType: "text",
        fieldSection: "educationInfoFields",
        fieldProps: {
          label: "Program End: ",
          inputID: "programEnd",
          type: "month"
        }
      },
      {
        componentType: "text",
        fieldSection: "educationInfoFields",
        fieldProps: {
          label: "GPA: ",
          inputID: "gpa",
          type: "number",
          min: 0,
          max: 4,
          step: 0.1
        }
      },
    ]
  };

  const practicalInfoFields: ResumeFieldSection = {
    hasMultiple: false,
    fieldProps: [
      {
        componentType: "text",
        fieldSection: "practicalInfoFields",
        fieldProps: {
          label: "Company Name: ",
          inputID: "companyName",
          type: "text"
        }
      },
      {
        componentType: "text",
        fieldSection: "practicalInfoFields",
        fieldProps: {
          label: "Job Title: ",
          inputID: "jobTitle",
          type: "text"
        }
      },
      {
        componentType: "text",
        fieldSection: "practicalInfoFields",
        fieldProps: {
          label: "Job Start: ",
          inputID: "jobStart",
          type: "month"
        }
      },
      {
        componentType: "text",
        fieldSection: "practicalInfoFields",
        fieldProps: {
          label: "Job End: ",
          inputID: "jobEnd",
          type: "month"
        }
      },
      {
        componentType: "textarea",
        fieldSection: "practicalInfoFields",
        fieldProps: {
          label: "Job Description: ",
          textAreaID: "jobDescription",
          rows: 10,
          cols: 50
        }
      }
    ]
  };

  return {
    generalInfoFields,
    educationInfoFields,
    practicalInfoFields
  };
})();