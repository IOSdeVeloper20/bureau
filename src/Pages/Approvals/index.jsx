import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalBottom from "./ApprovalBottom";

const Approvals = () => {
  return (
    <div>
      <Navbar />
      <div className="rounded-4xl bg-darkGrey p-4 mb-4">
        <div className="rounded-4xl bg-white">
          <ApprovalHeader />
        </div>
      </div>
      <ApprovalBottom />
      <Footer />
    </div>
  );
};

export default Approvals;
