import { ResumeField } from "./ResumeField";
import "../styles/Resume.css";
import { fieldData } from "../data/field-data";
import { useContext } from "react";
import { ResumeDataContext } from "./Resume";

function ResumeForm({ className }: { className: string; }) {
  const { resumeInfo, addEducationExperience } = useContext(ResumeDataContext);

  return (
    <div className={className}>
      {Object.entries(fieldData).map(([fieldDataKey, fieldGroup]) => {
        if (fieldGroup.hasMultiple) {
          return (
            <div key={fieldDataKey}>
              <h2>{fieldDataKey}</h2>
              <section className="flex-col gap-1 margin-1">
                {console.log(fieldDataKey)}
                {resumeInfo[fieldDataKey].map((_, index) => {
                  return (
                    <section key={index} className="flex-col gap-1 margin-1">
                      {Object.entries(fieldGroup.fieldProps).map(([fieldSection, fieldObject]) => {
                        return (
                          <ResumeField
                            key={`${fieldSection}-${index}`}
                            fieldSection={fieldSection}
                            {...fieldObject}
                            hasMultiple={true}
                            index={index}
                          />
                        );
                      })}
                    </section>
                  );
                })}
                <button onClick={addEducationExperience}>Add Education Experience</button>
              </section>
            </div>
          );
        }
        return (
          <div key={fieldDataKey}>
            <h2>{fieldDataKey}</h2>
            <section className="flex-col gap-1 margin-1">
              {Object.entries(fieldGroup.fieldProps).map(([fieldSection, fieldObject]) => {
                return (
                  <ResumeField
                    key={fieldSection}
                    fieldSection={fieldSection}
                    {...fieldObject}
                    hasMultiple={false}
                  />
                );
              })}
            </section>
          </div>
        );
      })}
    </div>
  );
}

export { ResumeForm };