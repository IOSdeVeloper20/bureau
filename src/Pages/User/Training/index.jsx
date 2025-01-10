import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import TrainingBottom from "./TrainingBottom";
import TrainingHeader from "./TrainingHeader";
import TrainingMiddle from "./TrainingMiddle";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const Training = () => {
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
    <div>
      <Navbar />
      <TrainingHeader trainingData={trainingData} lang={langState} />

      <div className="flex justify-center p-4">
        <TrainingMiddle trainingData={trainingData} lang={langState} />
      </div>
      
      <TrainingBottom />
      <Footer />
    </div>
  );
};

export default Training;
