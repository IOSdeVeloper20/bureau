import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Social = ({hoverColor}) => {
  return (
    <div className="flex gap-2 ">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer">
        <FaFacebookF className={`${hoverColor}`}/>
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer">
        <FaTwitter className={`${hoverColor}`}/>
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer">
        <FaInstagram className={`${hoverColor}`}/>
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer">
        <FaYoutube className={`${hoverColor}`}/>
      </a>
    </div>
  );
};

export default Social;
