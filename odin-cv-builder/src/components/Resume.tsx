import { createContext, useState } from "react";
import { ResumeGeneral } from "./ResumeGeneral";
import { ResumeEducation } from "./ResumeEducation";
import type { ResumeEducationData, ResumeGeneralData, ResumePracticalData } from "./ResumeInterfaces";
import { ResumePractical } from "./ResumePractical";

const ResumeContext = createContext(null);

function Resume() {
  const [isEditing, setIsEditing] = useState(true);
  const [generalData, setGeneralData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    website: ""
  } as ResumeGeneralData);

  const [educationDataList, setEducationDataList] = useState([]);
  const [practicalDataList, setPracticalDataList] = useState([]);

  const toggleEditing = () => setIsEditing(!isEditing);

  // Mutate state functions
  const addEducationExperience = () => setEducationDataList((prevList) => {
    const newKey = crypto.randomUUID();
    const newEducationExperience = {
      key: newKey,
      schoolName: "",
      programName: "",
      programStart: "",
      programEnd: "",
      gpa: ""
    } as ResumeEducationData;
    return [...prevList, newEducationExperience];
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
    <button onClick={addEducationExperience}>
      Add Education Experience
    </button>
  ) : null;
  const addPracticalExpButton = isEditing ? (
    <button onClick={addPracticalExperience}>
      Add Practical Experience
    </button>
  ) : null;

  return (
    <ResumeContext value={isEditing}>
      <h1>Resume</h1>
      {/* <pre>{JSON.stringify(generalData, null, 2)}</pre> */}
      <ResumeGeneral
        generalData={generalData}
        setGeneralData={setGeneralData}
      />
      <br />
      {/* <pre>{JSON.stringify(educationDataList, null, 2)}</pre> */}
      {educationDataList.map((edExp) => {
        // Conditionally render delete button
        const delButton = isEditing ? (
          <button onClick={() => deleteEducationExperience(edExp.key)}>
            Delete Education Experience
          </button>
        ) : null;

        return (
          <>
            <ResumeEducation
              key={edExp.key}
              educationData={edExp}
              setEducationData={changeEducationData}
            />
            {delButton}
          </>
        );
      })}
      <br />
      {addEdExpButton}
      <br />
      {/* <pre>{JSON.stringify(practicalDataList, null, 2)}</pre> */}
      {practicalDataList.map((practicalExp) => {
        // Conditionally render delete button
        const delButton = isEditing ? (
          <button onClick={() => deletePracticalExperience(practicalExp.key)}>
            Delete Practical Experience
          </button>
        ) : null;

        return (
          <>
            <ResumePractical
              key={practicalExp.key}
              practicalData={practicalExp}
              setPracticalData={changePracticalData}
            />
            {delButton}
          </>
        );
      })}
      <br />
      {addPracticalExpButton}
      <br />
      <button onClick={toggleEditing}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </ResumeContext>
  );
}

export { Resume, ResumeContext };