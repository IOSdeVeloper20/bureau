import React from "react";
import AuthForm from "../../Components/AuthForm";
import Logo from "../../Assets/Images/logo.jpeg";

const Login = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex justify-start items-center pt-3">
        <img
          src={Logo}
          loading="lazy"
          alt="logo"
          className="w-full px-4 md:w-2/6"
        />
      </div>
      <div>
        <AuthForm />
      </div>
    </div>
  );
};

export default Login;
