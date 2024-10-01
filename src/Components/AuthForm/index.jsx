import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handle_submit = async (e) => {
    e.preventDefault();

    const formData = { email, password };
    console.log("Form Data:", formData);

    try {
      const response = await fetch("http://abos.ae/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("sign in response error:", errorData);
        throw new Error(errorData.message || "An error occurred");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      console.log("token:", data.token);
      navigate("/");
    } catch (error) {
      console.error("error signing in:", error);
    }
  };

  return (
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
        className="p-1 bg-lightBlue rounded-md w-full text-white text-md">
        Login
      </button>
    </form>
  );
};

export default AuthForm;
