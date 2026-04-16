import { createContext, useState } from "react";

const ResumeContext = createContext(null);

function Resume() {
  const [isEditing, setIsEditing] = useState(true);
  const toggleEditing = () => setIsEditing(!isEditing);

  return (
    <ResumeContext value={isEditing}>
      <button onClick={toggleEditing}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </ResumeContext>
  );
}

export { Resume };