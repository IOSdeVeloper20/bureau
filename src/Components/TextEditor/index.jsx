import React, { useState, useRef, useContext } from "react";
import ReactQuill from "react-quill";
import { handleUpdating } from "../../Helpers/Updating";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import AuthToast from "../AuthToast";
import { LangContext } from "../../Contexts/LangContext";

const TextEditor = ({ fileName, id }) => {
  const [editorContent, setEditorContent] = useState("");
  const [toastProps, setToastProps] = useState("");
  const { langState } = useContext(LangContext);
  const quillRef = useRef(null);
  const navigate = useNavigate();

  const handleUpdateButton = async () => {
    if (editorContent.length > 0) {
      const plainText = quillRef.current.getEditor().getText();

      try {
        await handleUpdating(fileName, id, plainText, langState);

        setToastProps(
          langState === "en"
            ? {
                status: "success",
                title: "Update success",
                description: "text updated successfully.",
                position: "center-bottom",
              }
            : {
                status: "success",
                title: "عملية ناجحة",
                description: "تم تحديث النص بنجاح",
                position: "center-bottom",
              }
        );

        setTimeout(() => {
          navigate(-1);
        }, 4000);
      } catch (error) {
        setToastProps(
          langState === "en"
            ? {
                status: "error",
                title: "Update Error",
                description: "Could not update text!",
                position: "center-bottom",
              }
            : {
                status: "error",
                title: "عملية فاشلة",
                description: "حدث خطأ أثناء تحديث النص",
                position: "center-bottom",
              }
        );
      }
    } else {
      setToastProps(
        langState === "en"
          ? {
              status: "error",
              title: "Update Error",
              description: "No content to update!",
              position: "center-bottom",
            }
          : {
              status: "error",
              title: "خطأ أثناء التحديث",
              description: "لا يوجد نص للتحديث",
              position: "center-bottom",
            }
      );
    }
  };

  return (
    <div className="space-y-4">
      <ReactQuill
        ref={quillRef}
        value={editorContent}
        onChange={setEditorContent}
      />
      <div className="flex justify-end items-center">
        <button
          onClick={handleUpdateButton}
          className="bg-cyan-700 w-4/12 md:w-3/12 xl:w-2/12 px-3 py-1.5 text-white text-sm font-bold rounded-full">
          {langState === "en" ? "Update" : "تحديث"}
        </button>
      </div>

      <AuthToast
        status={toastProps.status}
        description={toastProps.description}
        title={toastProps.title}
        position={toastProps.position}
      />
    </div>
  );
};

export default TextEditor;