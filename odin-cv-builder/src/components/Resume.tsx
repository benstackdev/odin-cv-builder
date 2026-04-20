import { createContext, useEffect, useState } from "react";
import { ResumeGeneral } from "./ResumeGeneral";
import { ResumeEducation } from "./ResumeEducation";
import type { ResumeEducationData, ResumeGeneralData, ResumePracticalData } from "./ResumeInterfaces";
import { ResumePractical } from "./ResumePractical";
import "../styles/App.css";
import { Minus, Plus, Save, SquarePen } from "lucide-react";

const ResumeContext = createContext(false);

function Resume() {
  const [isEditing, setIsEditing] = useState(true);
  const [generalData, setGeneralData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    website: ""
  } as ResumeGeneralData);

  const [educationDataList, setEducationDataList] = useState<ResumeEducationData[]>([]);
  const [practicalDataList, setPracticalDataList] = useState<ResumePracticalData[]>([]);

  const toggleEditing = () => setIsEditing(!isEditing);

  useEffect(() => {
    window.addEventListener("beforeprint", () => setIsEditing(false));
    window.addEventListener("afterprint", () => setIsEditing(true));
  }, [setIsEditing]);

  // Mutate state functions
  const addEducationExperience = () => setEducationDataList((prevList: ResumeEducationData[]): ResumeEducationData[] => {
    const newKey = crypto.randomUUID();
    const newEducationExperience = {
      key: newKey,
      schoolName: "",
      programName: "",
      programStart: "",
      programEnd: "",
      gpa: ""
    } as ResumeEducationData;
    return [...prevList, newEducationExperience] as ResumeEducationData[];
  });

  const changeEducationData = (edKey: string, attrKey: string, value: string) => {
    setEducationDataList(educationDataList.map((edExp) => {
      if (edExp.key === edKey) return { ...edExp, [attrKey]: value };
      return edExp;
    }));
  };

  const deleteEducationExperience = (key: string) => {
    setEducationDataList(educationDataList.filter((edExp) => edExp.key !== key));
  };

  const addPracticalExperience = () => setPracticalDataList((prevList) => {
    const newKey = crypto.randomUUID();
    const newPracticalExperience = {
      key: newKey,
      employerName: "",
      jobTitle: "",
      jobStart: "",
      jobEnd: "",
      jobDescription: ""
    } as ResumePracticalData;
    return [...prevList, newPracticalExperience];
  });

  const changePracticalData = (practicalKey: string, attrKey: string, value: string) => {
    setPracticalDataList(practicalDataList.map((practicalExp) => {
      if (practicalExp.key === practicalKey) return { ...practicalExp, [attrKey]: value };
      return practicalExp;
    }));
  };

  const deletePracticalExperience = (key: string) => {
    setPracticalDataList(practicalDataList.filter((practicalExp) => practicalExp.key !== key));
  };

  // Conditional buttons
  const addEdExpButton = isEditing ? (
    <button
      onClick={addEducationExperience}
      className="flex bg-green font-size-2 padding-2 margin-1 width-fit align-center border-radius-1"
      aria-label="Add Education Experience">
      <Plus color="#2d3142" className="align-center margin-right-1" /> Education Experience
    </button>
  ) : null;
  const addPracticalExpButton = isEditing ? (
    <button
      onClick={addPracticalExperience}
      className="flex bg-green font-size-2 padding-2 margin-1 width-fit align-center border-radius-1"
      aria-label="Add Practical Experience">
      <Plus color="#2d3142" className="align-center margin-right-1" /> Practical Experience
    </button>
  ) : null;

  return (
    <ResumeContext value={isEditing}>
      <div className="width-fill flex-center flex-col">
        <h1 className="flex-center margin-bottom-2 font-size-5 no-print">Resume Builder</h1>
        <div className="flex-center flex-col padding-1">
          {isEditing ? <h3 className="flex-center font-size-4 margin-top-2 col-blue">General Info</h3> : null}
          <ResumeGeneral
            generalData={generalData}
            setGeneralData={setGeneralData}
          />
          {!isEditing ? <hr /> : null}
          <h3 className=
            {isEditing ? "flex-center font-size-4 margin-top-2 col-blue"
              : "flex font-size-4 margin-top-3 col-black"}>
            Education</h3>
          {educationDataList.map((edExp) => {
            // Conditionally render delete button
            const delButton = isEditing ? (
              <button
                onClick={() => deleteEducationExperience(edExp.key)}
                className="
                    flex align-center font-size-2 padding-2 margin-1 
                    bg-red col-black border-radius-1 width-fit"
                aria-label="Delete Education Experience">
                <Minus color="#2d3142" className="align-center margin-right-1" />
                Delete Education Experience
              </button>
            ) : null;
            return (
              <div className=
                {isEditing ?
                  "flex-center flex-col padding-3 bg-blue border-radius-2 margin-bottom-2 margin-top-2"
                  : "flex-center flex-col margin-bottom-1 margin-top-1"}>
                <ResumeEducation
                  key={edExp.key}
                  educationData={edExp}
                  setEducationData={changeEducationData}
                />
                {delButton}
              </div>
            );
          })}
          {addEdExpButton}
          {!isEditing ? <hr /> : null}
          <h3 className=
            {isEditing ? "flex-center font-size-4 margin-top-2 col-blue"
              : "flex font-size-4 margin-top-3 col-black"}>
            Practical Experience</h3>
          {practicalDataList.map((practicalExp) => {
            // Conditionally render delete button
            const delButton = isEditing ? (
              <button
                onClick={() => deletePracticalExperience(practicalExp.key)}
                className="flex font-size-2 padding-2 margin-1 
                bg-red border-radius-1 width-fit align-center"
                aria-label="Delete Practical Experience">
                <Minus color="#2d3142" className="align-center margin-right-1" /> Delete Practical Experience
              </button>
            ) : null;
            return (
              <div className=
                {isEditing ?
                  "flex-center flex-col padding-3 bg-blue border-radius-2 margin-bottom-2 margin-top-2"
                  : "flex-center flex-col margin-bottom-1 margin-top-1"}>
                <ResumePractical
                  key={practicalExp.key}
                  practicalData={practicalExp}
                  setPracticalData={changePracticalData}
                />
                {delButton}
              </div>
            );
          })}
          {addPracticalExpButton}
          <button
            onClick={toggleEditing}
            className="font-size-2 padding-2 margin-2 
                      border-radius-1 width-fit bg-grey align-center"
            aria-label={isEditing ? "Save" : "Edit"}>
            {isEditing ?
              <div className="flex no-print">
                <Save color="#2d3142" className="align-center margin-right-1" />
                <p>Save</p>
              </div>
              :
              <div className="flex no-print">
                <SquarePen color="#2d3142" className="align-center margin-right-1" />
                <p>Edit</p>
              </div>}
          </button>
        </div>
      </div>
    </ResumeContext>
  );
}

export { Resume, ResumeContext };