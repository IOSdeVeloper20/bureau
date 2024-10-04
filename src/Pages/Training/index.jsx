import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import TrainingBottom from "./TrainingBottom";
import TrainingHeader from "./TrainingHeader";
import TrainingMiddle from "./TrainingMiddle";
import { fetchData } from "../../Helpers/Networking";
import { UserContext } from "../../Contexts/UserContext";

const Training = () => {
  const [trainingData, setTrainingData] = useState([]);
  const { userState } = useContext(UserContext);

  const fetchTrainingData = async () => {
    const trainingUrl = process.env.REACT_APP_TRAINING_BASE_URL;
    const trainingResponse = await fetchData(trainingUrl);
    setTrainingData(trainingResponse);
  };

  useEffect(() => {
    fetchTrainingData();
  }, []);
  console.log("training data:", trainingData);

  return (
    <div>
      <Navbar />
      <TrainingHeader
        trainingData={trainingData}
        user={userState}
        fetchTrainingData={fetchTrainingData}
      />
      <div className="flex justify-center p-4">
        <TrainingMiddle
          trainingData={trainingData}
          user={userState}
          fetchTrainingData={fetchTrainingData}
        />
      </div>
      <TrainingBottom />
      <Footer />
    </div>
  );
};

export default Training;
