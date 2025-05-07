import FormInput from "@/components/FormInput";
import { useState } from "react";
const FormLogin = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (
        <><form className="text-text-primary">
            {/* <input type="text" placeholder="Username" required />
             */}
            <FormInput onChange={handleChange} name="email" required={true} value={user.email} type="text" placeholder="Email" />
            <FormInput name="password" onChange={handleChange} type="password" required={true} value={user.password} placeholder="Password" />

            {/* <button type="submit">Login</button> */}
            <a className="login w-full block text-center  p-3 bg-primary text-text-light border-none rounded-lg text-base cursor-pointer transition-all duration-100 ease-in-out hover:bg-primary-hover" href="/dashboard">Login</a>
        </form><div className="signup-link text-center mt-3.5 text-primary">
                Not have account? <a href="/register" className="decoration-none hover:underline">Signup</a>
            </div></>
    )
}

export default FormLogin;