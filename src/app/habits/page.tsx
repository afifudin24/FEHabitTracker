"use client";
import { useState } from "react";
import DarkModeToggle from "@/components/DarkModeToggle";
import NavbarDashboard from "@/components/NavbarDashboard";
import { faEye, faTimes, faCheck, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/Container";
import { BtnSuc } from "@/components/Button";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Habit {
    id: number;
    name: string;
    status: 'completed' | 'missed';
    period: string;
    target: string;
  }
const Habits = () => {
    const [habits, setHabits] = useState<Habit[]>([
        { id: 1, name: 'Morning Exercise', status: 'completed', period: 'Daily', target: '30 days' },
        { id: 2, name: 'Read a Book', status: 'missed', period: 'Daily', target: '15 days' },
      ]);
    return (
        <div>
            <DarkModeToggle />
            <NavbarDashboard />
            <div className="flex min-h-[100vh] justify-between flex-col">
            <div className="wrapper mt-10">
                <Container className="flex justify-between gap-3">
                <div className="left w-8/12">
                    <BtnSuc onClick={() => console.log('ok')}> Add New Habit </BtnSuc>
                <div className="overflow-x-auto">
                <table className="min-w-full bg-bg-card mt-10 table-auto shadow-md rounded-lg overflow-hidden">
  <thead className="bg-primary">
    <tr className="text-left text-text-light">
      <th className="px-4 py-3">No</th>
      <th className="px-4 py-3">Habits</th>
      <th className="px-4 py-3">Status</th>
      <th className="px-4 py-3">Period</th>
      <th className="px-4 py-3">Target</th>
      <th className="px-4 py-3">Action</th>
    </tr>
  </thead>
  <tbody>
    {habits.map((habit, index) => (
      <tr key={habit.id} className="hover:bg-bg-soft border-b border-gray-200">
        <td className="px-4 py-2">{index + 1}</td>
        <td className="px-4 py-2">{habit.name}</td>
        <td className={`px-4 py-2 text-center ${habit.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
          {habit.status === 'completed' ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faTimes} />
          )}
        </td>
        <td className="px-4 py-2">{habit.period}</td>
        <td className="px-4 py-2">{habit.target}</td>
        <td className="px-4 py-2">
          <div className="flex gap-2">
            <button className="text-blue-500 hover:text-blue-700">
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button className="text-yellow-500 hover:text-yellow-700">
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
    </div>
    <div className="right w-4/12">
                        <div className="progress-summary">
                          <h3>Your Progress</h3>
                          <p>Total Habits: 5</p>
                          <p>Completed: 3</p>
                          <p>Missed: 2</p>
                          <div className="progress-bar-container">
                            <div className="progress-bar w-[60%]" ></div>
                          </div>
                          <p className="progress-percent">60% completed</p>
                        </div>
                      </div>
                      
                </Container>
            </div>
        </div>

        <Footer />
        </div>
    );
}
export default Habits;