import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import SidebarContainer from "../../Components/Sidebar/SidebarContainer";
import SidebarItem from "../../Components/Sidebar/SidebarItem";
import { TbPhoto } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineContactPage, MdInfoOutline } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { RiBuilding2Line, RiHome2Line } from "react-icons/ri";
import { GiOilPump } from "react-icons/gi";
import { LuPanelBottomClose } from "react-icons/lu";
import { LangContext } from "../../Contexts/LangContext";

const Sidebar = () => {
  const location = useLocation();
  const { langState } = useContext(LangContext);

  return (
    <SidebarContainer>
      <SidebarItem
        icon={<RiHome2Line size={20} />}
        text={langState === "en" ? "Home (User)" : "الصفحة الرئيسية (المستخدم)"}
        to="/"
      />

      <hr />

      <SidebarItem
        icon={<RiBuilding2Line size={20} />}
        text={langState === "en" ? "Company Profile" : "نبذة عن الشركة"}
        to="/admin/main"
        active={location.pathname === "/admin/main"}
      />
      <SidebarItem
        icon={<MdInfoOutline size={20} />}
        text={langState === "en" ? "About" : "عن الشركة"}
        to="/admin/about"
        active={location.pathname === "/admin/about"}
      />
      <SidebarItem
        icon={<GiOilPump size={20} />}
        text={langState === "en" ? "Inspections" : "الفحوصات"}
        to="/admin/inspections"
        active={location.pathname === "/admin/inspections"}
      />
      <SidebarItem
        icon={<PiCertificate size={20} />}
        text={langState === "en" ? "Training" : "التدريب"}
        to="/admin/training"
        active={location.pathname === "/admin/training"}
      />
      <SidebarItem
        icon={<IoShieldCheckmarkOutline size={20} />}
        text={langState === "en" ? "Approvals" : "الموافقات"}
        to="/admin/approvals"
        active={location.pathname === "/admin/approvals"}
      />
      <SidebarItem
        icon={<TbPhoto size={20} />}
        text={langState === "en" ? "Gallery" : "المعرض"}
        to="/admin/gallery"
        active={location.pathname === "/admin/gallery"}
      />
      <SidebarItem
        icon={<MdOutlineContactPage size={20} />}
        text={langState === "en" ? "Contact Us" : "اتصل بنا"}
        to="/admin/contactus"
        active={location.pathname === "/admin/contactus"}
      />
      <SidebarItem
        icon={<LuPanelBottomClose size={20} />}
        text={langState === "en" ? "Footer" : "الجزء السفلي للصفحة"}
        to="/admin/footer"
        active={location.pathname === "/admin/footer"}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
