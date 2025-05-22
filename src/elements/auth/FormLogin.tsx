/* eslint-disable @typescript-eslint/no-explicit-any */
import FormInput from "@/components/FormInput";
import { login } from "@/services/authServices";
import { useUser } from "@/context/UserContext";

import { useState } from "react";
import Cookies from "js-cookie";
import { showToast } from "@/components/Toastify";
const FormLogin = () => {
  const [datauser, setDataUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await login(datauser);

      showToast(response.data.message, response.data.status);
      if (response.status == 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        Cookies.set("token", response.data.token, { expires: 1 });
        window.location.href = "/dashboard";
      }
    } catch (err: any) {
      // console.log(err);
      console.log(err.response);
      // console.log(err.data.errors[0]);
      const errors = err.response?.data?.errors;

      if (Array.isArray(errors)) {
        if (errors.length > 1) {
          const jsxList = (
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              {errors.map((msg: string, idx: number) => (
                <li key={idx}>{msg}</li>
              ))}
            </ul>
          );
          showToast(jsxList, "error");
        } else {
          showToast(errors[0], "error");
        }
      }
    }
  };
  return (
    <>
      <form className="text-text-primary">
        {/* <input type="text" placeholder="Username" required />
         */}
        <FormInput
          onChange={handleChange}
          name="email"
          required={true}
          value={datauser.email}
          type="text"
          placeholder="Email"
        />
        <FormInput
          name="password"
          onChange={handleChange}
          type="password"
          required={true}
          value={datauser.password}
          placeholder="Password"
        />

        <button
          className="login w-full block text-center  p-3 bg-primary text-text-light border-none rounded-lg text-base cursor-pointer transition-all duration-100 ease-in-out hover:bg-primary-hover"
          type="button"
          onClick={handleSubmit}
        >
          Login
        </button>
        {/* <a
          className="login w-full block text-center  p-3 bg-primary text-text-light border-none rounded-lg text-base cursor-pointer transition-all duration-100 ease-in-out hover:bg-primary-hover"
          href="/dashboard"
        >
          Login
        </a> */}
      </form>
      <div className="signup-link text-center mt-3.5 text-primary">
        Not have account?{" "}
        <a href="/register" className="decoration-none hover:underline">
          Signup
        </a>
      </div>
    </>
  );
};

export default FormLogin;
