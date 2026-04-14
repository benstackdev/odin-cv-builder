import { ResumeField } from "./ResumeField";
import "../styles/Resume.css";
import { educationInfoFields, generalInfoFields, practicalInfoFields } from "../data/field-data";

function ResumeForm({ className }: { className: string; }) {
  return (
    <div className={className}>
      <h2>General Info</h2>
      <section className="flex-col gap-1 margin-1">
        {generalInfoFields.map((fieldObject) => <ResumeField {...fieldObject} />)}
      </section>
      <h2>Educational Experience</h2>
      <section className="flex-col gap-1 margin-1">
        {educationInfoFields.map((fieldObject) => <ResumeField {...fieldObject} />)}
      </section>
      <h2>Practical Experience</h2>
      <section className="flex-col gap-1 margin-1">
        {practicalInfoFields.map((fieldObject) => <ResumeField {...fieldObject} />)}
      </section>
    </div>
  );
}

export { ResumeForm };