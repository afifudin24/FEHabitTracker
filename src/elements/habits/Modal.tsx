import FormInput from "@/components/FormInput";
import { Habit } from "@/app/intefaces/Habit";
import FormSelect from "@/components/FormSelect";
import ColorPicker from "@/components/ColorPicker";
import { H3 } from "@/components/Heading";
import { P1 } from "@/components/Paragraph";
interface FormAddProps {
  newHabit : Habit;
  // editHabit : Habit;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleColorChange: (e: { name: string; value: string }) => void;
}

interface FormViewProps{
  habit? : Habit;
  
}

interface FormEditProps{
  habit : Habit;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleColorChange: (e: { name: string; value: string }) => void;
}
export const FormView:React.FC<FormViewProps> = ({habit}) => (
    <div>
     <div className="flex justify-between items-center">
    <h2 className="text-xl font-semibold">{habit?.title}</h2>
    {habit?.archived && (
      <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full">Archived</span>
    )}
  </div>

  <p className="text-sm text-gray-600">{habit?.description || 'No description provided.'}</p>

  <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
    <div>
      <span className="font-medium text-gray-500">Period:</span>
      <span className="capitalize">{habit?.periodType}</span>
    </div>

    <div>
      <span className="font-medium text-gray-500">Target:</span>
      <p>{habit?.targetValue}x</p>
    </div>

    <div className="flex items-center gap-2">
      <span className="font-medium text-gray-500">Color:</span>
      <div
        className="w-6 h-6 rounded-full border"
        style={{ backgroundColor: habit?.colorHex }}
      />
      <span className="text-xs">{habit?.colorHex}</span>
    </div>

    <div>
      <span className="font-medium text-gray-500">User ID:</span>
      <p>{habit?.userId}</p>
    </div>
  </div>
    </div>
  );
  
  export const FormAdd: React.FC<FormAddProps> = ({ handleChange, handleColorChange, newHabit }) => (
    <form className="my-4 grid gap-4 grid-cols-2">
    <FormInput
      name="title"
      placeholder="Habit Title"
      required
      onChange={handleChange}
      value={newHabit.title}
      type="text"
    />
  
    <FormInput
      name="description"
      placeholder="Description"
      onChange={handleChange}
      value={newHabit.description}
      type="text"
      required={false}
    />
  
    <FormSelect
      name="periodType"
      label="Period Type"
      value={newHabit.periodType}
      onChange={handleChange}
      options={[
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'monthly', label: 'Monthly' }
      ]}
      required
    />
  
    <FormInput
      name="targetValue"
      placeholder="Target Value"
      onChange={handleChange}
      value={newHabit.targetValue}
      type="number"
      required
    />
  
    {/* <FormInput
      name="colorHex"
      placeholder="Color Hex (e.g. #FF0000)"
      onChange={handleChange}
      value={newHabit.colorHex}
      type="text"
      required
    /> */}

    {/* <ColorPicker name="colorHex" color="#FFFFFF" onChange={handleChange} /> */}
  
    <ColorPicker
        name="colorHex"
        value={newHabit.colorHex}
        onChange={handleColorChange}
      />
    {/* <FormInput
      name="period"
      placeholder="Period"
      onChange={handleChange}
      value={newHabit.period}
      type="text"
      required
    /> */}
  
  
  </form>
  

  );
  
export  const FormEdit:React.FC<FormEditProps> = ({handleChange, handleColorChange, habit}) => (
  <form className="my-4 grid gap-4 grid-cols-2">
  <FormInput
    name="title"
    placeholder="Habit Title"
    required
    onChange={handleChange}
    value={habit.title}
    type="text"
  />

  <FormInput
    name="description"
    placeholder="Description"
    onChange={handleChange}
    value={habit.description}
    type="text"
    required={false}
  />

  <FormSelect
    name="periodType"
    label="Period Type"
    value={habit?.periodType}
    onChange={handleChange}
    options={[
      { value: 'daily', label: 'Daily' },
      { value: 'weekly', label: 'Weekly' },
      { value: 'monthly', label: 'Monthly' }
    ]}
    required
  />

  <FormInput
    name="targetValue"
    placeholder="Target Value"
    onChange={handleChange}
    value={habit.targetValue}
    type="number"
    required
  />

  {/* <FormInput
    name="colorHex"
    placeholder="Color Hex (e.g. #FF0000)"
    onChange={handleChange}
    value={newHabit.colorHex}
    type="text"
    required
  /> */}

  {/* <ColorPicker name="colorHex" color="#FFFFFF" onChange={handleChange} /> */}

  <ColorPicker
      name="colorHex"
      value={habit.colorHex}
      onChange={handleColorChange}
    />
  {/* <FormInput
    name="period"
    placeholder="Period"
    onChange={handleChange}
    value={newHabit.period}
    type="text"
    required
  /> */}

    </form>
  );

  export const FormDelete = () => (
    <div>
      <P1>Are you sure?</P1>
      
    </div>
  );