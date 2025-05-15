import React from 'react';

interface FormSelectProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <div className="mb-4">
      {/* <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        {label} */}
      {/* </label> */}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option) => (
          <option className='text-text-primary bg-bg-soft' key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
