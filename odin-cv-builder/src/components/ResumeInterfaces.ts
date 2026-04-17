export interface ResumeGeneralData {
  name: string,
  email: string,
  phoneNumber: string,
  website: string;
}

export interface ResumeEducationData {
  key: string,
  schoolName: string,
  programName: string,
  programStart: string,
  programEnd: string,
  gpa: string;
}

export interface ResumePracticalData {
  key: string,
  employerName: string,
  jobTitle: string,
  jobStart: string,
  jobEnd: string,
  jobDescription: string;
}