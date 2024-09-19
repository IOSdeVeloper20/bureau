import React from "react";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline, IoMailOutline } from "react-icons/io5";

const ContactUsBody = () => {
  return (
    <div className="bg-greyBackground rounded-4xl p-4">
      <div className="lg:p-4 flex flex-col justify-center items-center">
        <div className="text-darkBlue text-sm lg:text-xl font-semibold lg:p-4 w-full lg:w-10/12">
          <h1 className="text-xl lg:text-3xl py-4">For Enquire & Complaints</h1>
          <ul>
            <li className="flex items-center gap-2">
              <BsGeoAlt />
              <p>Arabian Bureau of Services</p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOpenOutline />
              <p>P.O.Box 47133 - Abu Dhabi</p>
            </li>
            <li className="flex items-center gap-2">
              <FiPhoneCall />
              <p>
                <a href="tel:+97125511520">Tel: +971 2 6674166</a>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOutline />
              <p>
                <a href="mailto:abosad@emirates.net.ae">
                  Email: abosad@emirates.net.ae
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center py-2 w-full lg:w-7/12 md:h-96">
          <iframe
            title="firstMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116200.52097682557!2d54.20205449726565!3d24.476229000000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e670e0bab5637%3A0x4aa3df304890081b!2sArabian%20Bureau%20Of%20Services!5e0!3m2!1sen!2seg!4v1726663006773!5m2!1sen!2seg"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      

        <div className="text-darkBlue text-sm lg:text-xl font-semibold lg:p-4 w-full lg:w-10/12">
          <h1 className="text-xl lg:text-3xl py-4">Certificates</h1>
          <ul>
            <li className="flex items-center gap-2">
              <BsGeoAlt />
              <p>Arabian Bureau of Services</p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOpenOutline />
              <p>P.O.Box 47133 - Musaffah</p>
            </li>
            <li className="flex items-center gap-2">
              <FiPhoneCall />
              <p>
                <a href="tel:+97125511520">Tel: +971 2 5511520</a>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOutline />
              <p>
                <a href="mailto:abos@abosad.com">Email: abos@abosad.com</a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center py-2 w-full lg:w-7/12  md:h-96">
          <iframe
            title="secondMap"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116318.72081260144!2d54.31041709726561!3d24.347885100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4045b74b9693%3A0x908f6786e793e677!2sArabian%20Bureau%20of%20Services!5e0!3m2!1sen!2seg!4v1726663910914!5m2!1sen!2seg"
            style={{ style: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;
