import React from 'react';

interface FormInputProps {
  name: string;
  placeholder: string;
  type?: string;
  value? : string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required : boolean;
}

const FormInput: React.FC<FormInputProps> = ({ name, required, placeholder, onChange, type = "text", value = "" }) => {
  return (
    <input
      name={name}
      type={type}
      required={required}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
};

export default FormInput;
