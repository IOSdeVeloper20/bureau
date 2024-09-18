import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ContactUsBody from "./ContactUsBody";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div>
        <ContactUsBody />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
