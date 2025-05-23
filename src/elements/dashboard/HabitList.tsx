/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHabitIncomplete } from "@/services/habitServices";
import { useEffect, useState } from "react";
const HabitList = ({ habits, setHabits, addLog }: any) => {

  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
  }

  const handleCheck = (id: string) => {
    setHabits((prev: any) =>
      prev.map((habit: any) => {
        if (habit.id !== id) return habit;

        const today = getToday();
        const updatedLogs = habit.logs.map((log: any) =>
          log.date === today
            ? { ...log, value: log.value === 1 ? 0 : 1 }
            : log
        );

        return { ...habit, logs: updatedLogs };
      })
    );

    addLog(id); // opsional: kirim ke backend
  };



  return (
    <ul className="list-none habit-list">
      {habits.map((habit: any) => {
        const todayLog = habit.logs?.find((log: any) => log.date === getToday());
        console.log(todayLog);
        return (
          <li key={habit.id} className="flex items-center gap-2.5 mb-2.5">
            <input
              type="checkbox"
              id={habit.id}

              checked={todayLog?.value == 1}
              onChange={() => handleCheck(habit.id)}
            />
            <label htmlFor={habit.id} className={`custom-checkbox ${todayLog?.value == 1 ? 'line-through' : ''}`}>
              {habit.title}
            </label>
          </li>
        )
      })}
    </ul>
  );
}

export default HabitList;