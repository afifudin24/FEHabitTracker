import React from "react";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
  name: string;
  value: string;
  onChange: (e: { name: string; value: string }) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ name, value, onChange }) => {
  const handleColorChange = (color: string) => {
    onChange({ name, value: color });
  };

  // handle input manual hex typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ name, value: e.target.value });
  };

  return (
    <div className="flex flex-col gap-2">
      <HexColorPicker color={value} onChange={handleColorChange} />

      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        maxLength={7} // contoh: # + 6 digit hex
        className="border rounded p-1"
        placeholder="#000000"
      />

      {/* <div className="text-sm mt-1">Selected: {value}</div> */}
    </div>
  );
};

export default ColorPicker;
