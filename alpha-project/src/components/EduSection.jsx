import EduCard from "./EduCard";

function EduSection() {
  return (
    <div>
      <div className="flex justify-between m-6">
        <EduCard />
        <EduCard />
        <EduCard />
      </div>
      <div className="flex justify-between m-6">
        <EduCard />
        <EduCard />
        <EduCard />
      </div>
    </div>
  );
}

export default EduSection;
