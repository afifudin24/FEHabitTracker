import { useState } from "react";
const HabitList = () => {
    const [habits, setHabits] = useState([
        { id: "habit1", text: "Drink 8 glasses of water", checked: false },
        { id: "habit2", text: "Exercise for at least 30 minutes", checked: false },
        { id: "habit3", text: "Read 10 pages of a book", checked: false },
        { id: "habit4", text: "Go to bed before 11 PM", checked: false }
      ]);
    
      const handleCheck = (id: string) => {
        setHabits((prev) =>
          prev.map((habit) =>
            habit.id === id ? { ...habit, checked: !habit.checked } : habit
          )
        );
      };
    return (
        <ul className="list-none habit-list">
        {habits.map((habit) => (
          <li key={habit.id} className="flex items-center gap-2.5 mb-2.5">
            <input
              type="checkbox"
              id={habit.id}

              checked={habit.checked}
              onChange={() => handleCheck(habit.id)}
            />
            <label htmlFor={habit.id} className={`custom-checkbox ${habit.checked ? 'line-through' : ''}`}>
              {habit.text}
            </label>
          </li>
        ))}
      </ul>
    );
}

export default HabitList;