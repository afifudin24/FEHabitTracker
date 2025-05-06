"use client";
import ThemeToggle from "@/components/DarkModeToggle";
import FormRegister from "@/elements/auth/FormRegister";
const Register = () => {
    return (
        <div className="flex h-full bg-gradient-to-br from-primary to-primary-hover justify-center items-center text-text-light">
            <ThemeToggle />
            <div className="login-wrapper animate-fadeIn md:w-4/12 bg-bg-card py-10 px-7 rounded-xl w-11/12 mx-auto">

            <h2 className=" text-center text-3xl font-normal text-primary mb-5">Register</h2>
            <FormRegister />
 
            </div>
            

        </div>
    );
};

export default Register;
