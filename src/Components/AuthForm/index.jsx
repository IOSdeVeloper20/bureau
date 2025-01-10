import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthToast from "../AuthToast";
import { Spinner } from "@chakra-ui/react";
import { UserContext } from "../../Contexts/UserContext";
import { LangContext } from "../../Contexts/LangContext";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [description, setDescription] = useState("");
  const [toastTitle, setToastTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUserState } = useContext(UserContext);
  const { langState } = useContext(LangContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin";

  const handle_submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const loginUrl = process.env.REACT_APP_LOGIN_URL;
    const formData = { email, password };

    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setUserState({ isAuthenticated: false });
        setLoginStatus("error");
        setDescription(
          langState === "en"
            ? "An error occured please try again"
            : "حدث خطأ يرجى المحاولة مرة أخرى"
        );
        setToastTitle(langState === "en" ? "Login Failed" : "فشل تسجيل الدخول");
        return;
      }

      sessionStorage.setItem("authToken", data.token);
      setUserState({ isAuthenticated: true });
      setLoginStatus("success");
      setDescription(langState === "en" ? "welcome" : "مرحباً");
      setToastTitle(
        langState === "en" ? "Login Successed" : "تم تسجيل الدخول بنجاح"
      );

      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 2000);
    } catch (error) {
      setUserState(false);
      setLoginStatus("error");
      setDescription(
        langState === "en"
          ? "An error occured please try again"
          : "حدث خطأ يرجى المحاولة مرة أخرى"
      );
      setToastTitle(langState === "en" ? "Login Failed" : "فشل تسجيل الدخول");
      console.error("error signing in:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setLoginStatus(null);
        setDescription("");
        setToastTitle("");
      }, 6000);
    }
  };

  return (
    <>
      <form
        onSubmit={handle_submit}
        className="w-full flex flex-col justify-center items-center gap-4 rounded-xl p-4 shadow-xl border-sky-500 border-t-8">
        <h1 className="text-2xl md:text-3xl w-full font-bold text-sky-600">
          {langState === "en" ? "Log in" : "تسجيل الدخول"}
        </h1>

        <hr className="border-2 w-full border-black rounded-full mb-1" />

        <div className="w-full space-y-2">
          <label htmlFor="Email" className="font-bold pl-1 text-sm">
            {langState === "en" ? "Email" : "البريد الإلكتروني"}
          </label>
          <input
            type="email"
            id="Email"
            placeholder={
              langState === "en" ? "Enter Your Email" : "أدخل البريد الإلكتروني"
            }
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent rounded-md p-2 text-sm border-l-4 border-r-2 border-l-sky-400 shadow-lg"
          />
        </div>

        <div className="w-full space-y-2">
          <label htmlFor="Password" className="font-bold pl-1 text-sm">
            {langState === "en" ? "Password" : "كلمة المرور"}
          </label>
          <input
            type="password"
            id="Password"
            placeholder={
              langState === "en" ? "Enter Password" : "أدخل كلمة المرور"
            }
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent rounded-md p-2 border-l-4 border-r-2 border-l-sky-400 shadow-lg text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="p-1 bg-lightBlue rounded-md w-full text-white text-md">
          {isLoading ? (
            <Spinner className="size-sm" />
          ) : langState === "en" ? (
            "Login"
          ) : (
            "تسجيل الدخول"
          )}
        </button>
      </form>
      <AuthToast
        status={loginStatus}
        description={description}
        title={toastTitle}
        position={"bottom-right"}
      />
    </>
  );
};

export default AuthForm;
