import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import ContactUsBody from "./ContactUsBody";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const ContactUs = () => {
  const [contactsData, setContactusData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchContactusData = async () => {
    const contactusUrl = process.env.REACT_APP_CONTACTUS_BASE_URL;
    const contactusResponse = await fetchData(contactusUrl);
    setContactusData(contactusResponse);
  };

  useEffect(() => {
    fetchContactusData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <ContactUsBody contactusData={contactsData} lang={langState} />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
