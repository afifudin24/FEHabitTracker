import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  required: boolean;
}
const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      name,
      required,
      placeholder,
      onChange,
      type = "text",
      value = "",
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === "password";
    const inputType = isPasswordField && showPassword ? "text" : type;

    const toggleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative w-full mb-4">
        <input
          ref={ref}
          name={name}
          type={inputType}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full p-3 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-primary pr-10"
          {...rest}
        />
        {isPasswordField && (
          <span
            onClick={toggleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} size="sm" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} size="sm" />
            )}
          </span>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
export default FormInput;
