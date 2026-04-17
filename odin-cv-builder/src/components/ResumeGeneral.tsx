import { useContext } from "react";
import { ResumeContext } from "./Resume";
import { ResumeInput } from "./inputs/ResumeInput";

function ResumeGeneral({ generalData, setGeneralData }) {
  const isEditing = useContext(ResumeContext);

  const updateGeneralData = (key: string, value: string) => {
    setGeneralData((prevGeneralData) => {
      return { ...prevGeneralData, [key]: value };
    });
  };

  if (isEditing) {
    return (
      <>
        <h3>General Info</h3>
        <ResumeInput
          parentKey="name"
          labelName="Name: "
          updateHandler={updateGeneralData}
          value={generalData.name}
        />
        <ResumeInput
          parentKey="email"
          labelName="Email: "
          updateHandler={updateGeneralData}
          value={generalData.email} type="email"
        />
        <ResumeInput
          parentKey="phoneNumber"
          labelName="Phone Number: "
          updateHandler={updateGeneralData}
          value={generalData.phoneNumber}
          type="tel"
        />
        <ResumeInput
          parentKey="website"
          labelName="Website: "
          updateHandler={updateGeneralData}
          value={generalData.website}
          type="url"
        />
      </>
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

export { ResumeGeneral };