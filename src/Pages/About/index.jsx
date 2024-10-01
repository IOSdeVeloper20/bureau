import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import AboutHeader from "./AboutHeader";
import AboutMiddle from "./AboutMiddle";
import AboutBottom from "./AboutBottom";
import { fetchData } from "../../Helpers/Networking";

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const user = true;

  const fetchAboutData = async () => {
    const baseUrl = "http://localhost:5001/get/aboutData";
    const aboutResponse = await fetchData(baseUrl);
    setAboutData(aboutResponse);
  };

  useEffect(() => {
    fetchAboutData();
  }, []);
  console.log("about data:", aboutData);

  return (
    <div>
      <Navbar />
      <AboutHeader
        aboutData={aboutData}
        user={user}
        fetchAboutData={fetchAboutData}
      />
      <div className="flex justify-center p-4">
        <AboutMiddle
          aboutData={aboutData}
          user={user}
          fetchAboutData={fetchAboutData}
        />
      </div>
      <AboutBottom
        aboutData={aboutData}
        user={user}
        fetchAboutData={fetchAboutData}
      />
      <Footer />
    </div>
  );
};

export default About;
