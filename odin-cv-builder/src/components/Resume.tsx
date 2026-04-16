import { createContext, useState } from "react";
import { ResumeGeneral } from "./ResumeGeneral";

const ResumeContext = createContext(null);

function Resume() {
  const [isEditing, setIsEditing] = useState(true);
  const toggleEditing = () => setIsEditing(!isEditing);

  return (
    <ResumeContext value={isEditing}>
      <h1>Resume</h1>
      <ResumeGeneral />
      <br />
      <button onClick={toggleEditing}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </ResumeContext>
  );
}

export { Resume, ResumeContext };