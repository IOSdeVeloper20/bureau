import React, { useState, useEffect, useContext } from "react";
import DataTable from "../../../Components/DataTable";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const AdminTraining = () => {
  const [trainingData, setTrainingData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchTrainingData = async () => {
    const trainingUrl = process.env.REACT_APP_TRAINING_BASE_URL;
    const trainingResponse = await fetchData(trainingUrl);
    setTrainingData(trainingResponse);
  };

  useEffect(() => {
    fetchTrainingData();
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col min-h-screen px-2 py-4">
      <h1 className="font-bold text-sm ps-2 pt-2">
        {langState === "en" ? "Training Page" : "صفحة التدريب"}
      </h1>
      <div className="bg-white my-2 rounded-xl p-4">
        <DataTable data={trainingData} />
      </div>
    </div>
  );
};

export default AdminTraining;
