import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MainHeader from "./MainHeader";
import MainCard from "./MainCard";
import MainBottom from "./MainBottom";
import { fetchData } from "../../Helpers/Networking";
import { UserContext } from "../../Contexts/UserContext";

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const { userState } = useContext(UserContext);

  const fetchMainData = async () => {
    const mainUrl = process.env.REACT_APP_MAIN_BASE_URL
    const mainResponse = await fetchData(mainUrl);
    setMainData(mainResponse);
  };

  useEffect(() => {
    fetchMainData();
  }, []);
  console.log("main data:", mainData);

  return (
    <div>
      <Navbar />
      <MainHeader
        mainData={mainData}
        user={userState}
        fetchMainData={fetchMainData}
      />
      <div className="flex justify-center p-4">
        <MainCard
          mainData={mainData}
          user={userState}
          fetchMainData={fetchMainData}
        />
      </div>
      <MainBottom
        mainData={mainData}
        user={userState}
        fetchMainData={fetchMainData}
      />
      <Footer />
    </div>
  );
};

export default Main;
