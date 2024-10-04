import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthToast from "../AuthToast";
import { Spinner } from "@chakra-ui/react";
import { UserContext } from "../../Contexts/UserContext";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUserState } = useContext(UserContext);
  const navigate = useNavigate();

  const handle_submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const loginUrl = process.env.REACT_APP_LOGIN_URL;
    const formData = { email, password };
    console.log("Form Data:", formData);

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
        setUserState(false);
        setLoginStatus(false);
        setDescription(data.message);
        return;
      }

      localStorage.setItem("authToken", data.token);
      console.log("token:", data.token);
      setUserState(true);
      setLoginStatus(true);
      setDescription("welcome");

      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setUserState(false);
      setLoginStatus(false);
      setDescription("An error occured please try again");
      console.error("error signing in:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setLoginStatus(null);
        setDescription("");
      }, 6000);
    }
  };

  return (
    <>
      <form
        onSubmit={handle_submit}
        className="w-full flex flex-col justify-center items-center gap-4 rounded-xl p-4 shadow-xl border-sky-500 border-t-8">
        <h1 className="text-2xl md:text-3xl w-full font-bold text-sky-600">
          Log in
        </h1>

        <hr className="border-2 w-full border-black rounded-full mb-1" />

        <div className="w-full space-y-2">
          <label htmlFor="Email" className="font-bold pl-1 text-sm">
            Email
          </label>
          <input
            type="email"
            id="Email"
            placeholder="Enter Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent rounded-md p-2 text-sm border-l-4 border-r-2 border-l-sky-400 shadow-lg"
          />
        </div>

        <div className="w-full space-y-2">
          <label htmlFor="Password" className="font-bold pl-1 text-sm">
            Password
          </label>
          <input
            type="password"
            id="Password"
            placeholder="Enter Password"
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
          {isLoading ? <Spinner className="size-sm" /> : "Login"}
        </button>
      </form>
      <AuthToast login={loginStatus} description={description} />
    </>
  );
};

export default AuthForm;
