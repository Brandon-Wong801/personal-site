import { basePath } from "../../constants";

const ResumePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <iframe
        src={`${basePath}/Brandon_Wong_Resume.pdf`}
        className="w-full h-screen border-0"
        title="Resume"
      ></iframe>
    </div>
  );
};

export default ResumePage;