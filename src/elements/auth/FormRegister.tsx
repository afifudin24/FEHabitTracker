import FormInput from "@/components/FormInput";
import { useState, useRef } from "react";
import { showToast } from "@/components/Toastify";

const FormRegister = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  // Buat ref untuk email input
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isEmailValid = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = () => {
    if (!user.email || !user.name || !user.password || !user.confirmPassword) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    if (!isEmailValid(user.email)) {
      showToast("Please enter a valid email.", "error");
      emailRef.current?.focus(); // Fokus ke input email
      return;
    }

    if (user.password.length < 8) {
      showToast("Password must be at least 8 characters.", "error");
      passwordRef.current?.focus(); // Fokus ke input password
      return;
    }

    if (user.password !== user.confirmPassword) {
      showToast("Passwords do not match.", "error");
      return;
    }

    showToast("Registration successful!", "success");

    // Lanjutkan proses registrasi...
  };

  return (
    <>
      <form className="text-text-primary">
        <FormInput
          ref={emailRef} // Pasangkan ref ke FormInput
          onChange={handleChange}
          required
          name="email"
          value={user.email}
          type="email"
          placeholder="Email"
        />
        <FormInput
          onChange={handleChange}
          required
          name="name"
          value={user.name}
          type="text"
          placeholder="Name"
        />
        <FormInput
          name="password"
          onChange={handleChange}
          required
          ref={passwordRef}
          type="password"
          value={user.password}
          placeholder="Password"
        />
        <FormInput
          name="confirmPassword"
          onChange={handleChange}
          required
          type="password"
          value={user.confirmPassword}
          placeholder="Confirm Password"
        />
        <button
          className="login w-full block text-center p-3 bg-primary text-text-light border-none rounded-lg text-base cursor-pointer transition-all duration-100 ease-in-out hover:bg-primary-hover"
          type="button"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      <div className="signup-link text-center mt-3.5 text-primary">
        Have account?{" "}
        <a href="/login" className="decoration-none hover:underline">
          Login
        </a>
      </div>
    </>
  );
};

export default FormRegister;
