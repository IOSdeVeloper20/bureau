import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import MainHeader from "./MainHeader";
import MainCard from "./MainCard";
import MainBottom from "./MainBottom";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchMainData = async () => {
    const mainUrl = process.env.REACT_APP_MAIN_BASE_URL;
    const mainResponse = await fetchData(mainUrl);
    setMainData(mainResponse);
  };

  useEffect(() => {
    fetchMainData();
  }, []);

  return (
    <div>
      <Navbar />
      <MainHeader
        mainData={mainData}
        lang={langState}
      />
      <div className="flex justify-center p-4">
        <MainCard
          mainData={mainData}
          lang={langState}
        />
      </div>
      <MainBottom
        mainData={mainData}
        lang={langState}
      />
      <Footer />
    </div>
  );
};

export default Main;
