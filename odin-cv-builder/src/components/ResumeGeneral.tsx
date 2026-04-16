import { createContext, useContext, useState } from "react";
import { ResumeContext } from "./Resume";
import { ResumeInput } from "./inputs/ResumeInput";

export interface ResumeGeneralData {
  name: string,
  email: string,
  phoneNumber: string,
  website: string;
}

const ResumeGeneralContext = createContext(null);

function ResumeGeneral() {
  const isEditing = useContext(ResumeContext);

  const [generalData, setGeneralData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    website: ""
  } as ResumeGeneralData);

  const updateGeneralData = (key: string, value: string) => {
    setGeneralData((prevGeneralData) => {
      return { ...prevGeneralData, [key]: value };
    });
  };

  if (isEditing) {
    return (
      <ResumeGeneralContext value={{ generalData, updateGeneralData }}>
        <h3>General Info:</h3>
        <pre>{JSON.stringify(generalData)}</pre>
        <ResumeInput parentKey="name" labelName="Name: " value={generalData.name} />
        <ResumeInput parentKey="email" labelName="Email: " value={generalData.email} type="email" />
        <ResumeInput parentKey="phoneNumber" labelName="Phone Number: " value={generalData.phoneNumber} type="tel" />
        <ResumeInput parentKey="website" labelName="Website: " value={generalData.website} type="url" />
      </ResumeGeneralContext>
    );
  }

  return (
    <>
      <h3>General Info:</h3>
      <p><b>Name: </b>{generalData.name}</p>
      <p><b>Email: </b>{generalData.email}</p>
      <p><b>Phone Number: </b>{generalData.phoneNumber}</p>
      <p><b>Website: </b>{generalData.website}</p>
    </>
  );
}

export { ResumeGeneral, ResumeGeneralContext };