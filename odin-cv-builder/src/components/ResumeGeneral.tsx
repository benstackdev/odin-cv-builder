import { useContext } from "react";
import { ResumeContext } from "./Resume";
import { ResumeInput } from "./inputs/ResumeInput";
import "../styles/App.css";
import { Globe, Mail, Phone } from "lucide-react";

function ResumeGeneral({ generalData, setGeneralData }) {
  const isEditing = useContext(ResumeContext);

  const updateGeneralData = (key: string, value: string) => {
    setGeneralData((prevGeneralData) => {
      return { ...prevGeneralData, [key]: value };
    });
  };

  if (isEditing) {
    return (
      <div className="
           flex-center flex-col padding-3 
           bg-blue border-radius-2 margin-bottom-2 margin-top-2">
        <ResumeInput
          parentKey="name"
          labelName="Name "
          updateHandler={updateGeneralData}
          value={generalData.name}
        />
        <ResumeInput
          parentKey="email"
          labelName="Email "
          updateHandler={updateGeneralData}
          value={generalData.email} type="email"
        />
        <ResumeInput
          parentKey="phoneNumber"
          labelName="Phone Number "
          updateHandler={updateGeneralData}
          value={generalData.phoneNumber}
          type="tel"
        />
        <ResumeInput
          parentKey="website"
          labelName="Website "
          updateHandler={updateGeneralData}
          value={generalData.website}
          type="url"
        />
      </div>
    );
  }

  return (
    <div className="margin-bottom-2">
      <h1 className="flex-center font-size-5 margin-bottom-1">{generalData.name}</h1>
      <div className="flex flex-wrap mobile-flex-col width-fill justify-space-between">
        <p className="flex-center"><Phone className="margin-right-1" /> {generalData.phoneNumber}</p>
        <p className="flex-center"><Mail className="margin-right-1" /> {generalData.email}</p>
        <p className="flex-center"><Globe className="margin-right-1" /> {generalData.website}</p>
      </div>
    </div>
  );
}

export { ResumeGeneral };