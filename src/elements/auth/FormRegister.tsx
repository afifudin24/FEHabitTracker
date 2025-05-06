import FormInput from "@/components/FormInput";
import { useState } from "react";
const FormRegister = () => {
    const [user, setUser] = useState({
        email : '',
        firstName : '',
        lastName : '',
        password : '',
        confirmPassword : '',
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
              <FormInput onChange={handleChange} required={true}  name="email" value={user.email} type="email" placeholder="Email" /> 
             <FormInput onChange={handleChange} required={true}  name="firstName" value={user.firstName} type="text" placeholder="First Name" />
             <FormInput onChange={handleChange} required={true}  name="lastName" value={user.lastName} type="text" placeholder="Last Name" />
             <FormInput name="password" onChange={handleChange} required={true}  type="password" value={user.password} placeholder="Password" />
             <FormInput name="confirmPassword" onChange={handleChange} required={true}  type="password" value={user.confirmPassword} placeholder="Confirm Password" />
            
            {/* <button type="submit">Login</button> */}
            <a className="login w-full block text-center  p-3 bg-primary text-text-light border-none rounded-lg text-base cursor-pointer transition-all duration-100 ease-in-out hover:bg-primary-hover"  href="../dashboard/index.html">Register</a>
        </form><div className="signup-link text-center mt-3.5 text-primary">
                Have account? <a href="/login" className="decoration-none hover:underline">Login</a>
            </div></>  
    )   
}

export default FormRegister;