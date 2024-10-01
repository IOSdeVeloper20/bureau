import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MainHeader from "./MainHeader";
import MainCard from "./MainCard";
import MainBottom from "./MainBottom";
import { fetchData } from "../../Helpers/Networking";

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const user = true;

  const fetchMainData = async () => {
    const baseUrl = "http://localhost:5001/get/mainData";
    const mainResponse = await fetchData(baseUrl);
    setMainData(mainResponse);
  };

  useEffect(() => {
    fetchMainData();
  }, []);
  console.log("main data:", mainData);

  return (
    <div>
      <Navbar />
      <MainHeader mainData={mainData} user={user} fetchMainData={fetchMainData}/>
      <div className="flex justify-center p-4">
        <MainCard mainData={mainData} user={user} fetchMainData={fetchMainData} />
      </div>
      <MainBottom mainData={mainData} user={user} fetchMainData={fetchMainData} />
      <Footer />
    </div>
  );
};

export default Main;
