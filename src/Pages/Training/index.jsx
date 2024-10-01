import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import TrainingBottom from "./TrainingBottom";
import TrainingHeader from "./TrainingHeader";
import TrainingMiddle from "./TrainingMiddle";
import { fetchData } from "../../Helpers/Networking";

const Training = () => {
  const [trainingData, setTrainingData] = useState([]);
  const user = true;

  const fetchTrainingData = async () => {
    const baseUrl = "http://localhost:5001/get/trainingData";
    const trainingResponse = await fetchData(baseUrl);
    setTrainingData(trainingResponse);
  };
  
  useEffect(() => {
    fetchTrainingData();
  }, []);
  console.log("training data:", trainingData);

  return (
    <div>
      <Navbar />
      <TrainingHeader trainingData={trainingData} user={user} fetchTrainingData={fetchTrainingData}/>
      <div className="flex justify-center p-4">
        <TrainingMiddle trainingData={trainingData} user={user} fetchTrainingData={fetchTrainingData}/>
      </div>
      <TrainingBottom />
      <Footer />
    </div>
  );
};

export default Training;
