import React, { useContext } from "react";
import TextEditor from "../../Components/TextEditor";
import { useLocation } from "react-router-dom";
import { LangContext } from "../../Contexts/LangContext";

const EditPage = () => {
  const { langState } = useContext(LangContext);
  const passedData = useLocation();
  const record = passedData.state?.record;
  const currentText = record
    ? langState === "en"
      ? record.text
      : record.arText
    : "No record available!";

  return (
    <div className="p-2 bg-gray-100 min-h-screen flex">
      <div className="bg-white p-2 flex flex-col gap-4 rounded-xl w-full">
        <div className="p-4 space-y-2">
          <h1 className="text-sm font-semibold">
            {langState === "en" ? "Current Text:" : "النص الحالي"}
          </h1>
          <p>{currentText}</p>
        </div>

        <div className="space-y-2 p-3">
          <h2 className="text-sm font-semibold">
            {langState === "en"
              ? "Enter text update:"
              : "أدخل النص المراد تعديله"}
          </h2>
          <TextEditor fileName={record.fileName} id={record.id} />
        </div>
      </div>
    </div>
  );
};

export default EditPage;
