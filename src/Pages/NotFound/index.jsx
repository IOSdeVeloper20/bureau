import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/logo.jpeg";
import { LangContext } from "../../Contexts/LangContext";

const NotFound = () => {
  const navigate = useNavigate();
  const { langState } = useContext(LangContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 10000);

    // Cleanup timeout before the redirect
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center h-screen gap-2 px-4">
        <img src={logo} alt="logo" className="md:w-1/2" />
        <h1 className="font-black text-lg">
          {langState === "en"
            ? "Oops - Page Not Found!"
            : "!عفوًا - الصفحة غير موجودة"}
        </h1>
        <p>
          {langState === "en"
            ? "Sorry, the page you're looking for does not exist."
            : ".عذرًا، الصفحة التي تبحث عنها غير موجودة"}
        </p>
        <p className="font-medium">
          {langState === "en"
            ? "You will be redirected to the homepage shortly..."
            : ".ستتم إعادة توجيهك إلى الصفحة الرئيسية بعد قليل"}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
