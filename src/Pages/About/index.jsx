import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import AboutHeader from "./AboutHeader";
import AboutMiddle from "./AboutMiddle";
import AboutBottom from "./AboutBottom";
import { fetchData } from "../../Helpers/Networking";
import { UserContext } from "../../Contexts/UserContext";

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const { userState } = useContext(UserContext);

  const fetchAboutData = async () => {
    const aboutUrl = process.env.REACT_APP_ABOUT_BASE_URL;
    const aboutResponse = await fetchData(aboutUrl);
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
        user={userState}
        fetchAboutData={fetchAboutData}
      />
      <div className="flex justify-center p-4">
        <AboutMiddle
          aboutData={aboutData}
          user={userState}
          fetchAboutData={fetchAboutData}
        />
      </div>
      <AboutBottom
        aboutData={aboutData}
        user={userState}
        fetchAboutData={fetchAboutData}
      />
      <Footer />
    </div>
  );
};

export default About;
