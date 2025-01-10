import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import AboutHeader from "./AboutHeader";
import AboutMiddle from "./AboutMiddle";
import AboutBottom from "./AboutBottom";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchAboutData = async () => {
    const aboutUrl = process.env.REACT_APP_ABOUT_BASE_URL;
    const aboutResponse = await fetchData(aboutUrl);
    setAboutData(aboutResponse);
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
    <div>
      <Navbar />
      <AboutHeader aboutData={aboutData} lang={langState} />

      <div className="flex justify-center p-4">
        <AboutMiddle aboutData={aboutData} lang={langState} />
      </div>
      
      <AboutBottom aboutData={aboutData} lang={langState} />
      <Footer />
    </div>
  );
};

export default About;
