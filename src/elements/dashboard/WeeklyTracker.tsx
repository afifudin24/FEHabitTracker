import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { H2 } from '@/components/Heading';
const WeeklyTracker = () => {
  const [habitData, setHabitData] = useState([
    { day: 'Mon', completed: 3, missed: 1 },
    { day: 'Tue', completed: 4, missed: 0 },
    { day: 'Wed', completed: 2, missed: 2 },
  ]);

  return (
    <div className='my-16' data-aos="zoom-out" data-aos-duration="1000">
      <H2 className="text-center text-text-primary my-4">
        Weekly  Trackers
      </H2>

      <table className="w-[90%] md:w-[60%] mx-auto mt-5 rounded-lg overflow-hidden border-collapse bg-bg-card shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
        <thead>
          <tr>
            <th className="bg-primary text-text-light  py-3 px-4 text-center">Day</th>
            <th className="bg-primary  text-text-light  py-3 px-4 text-center">Completed</th>
            <th className="bg-primary  text-text-light  py-3 px-4 text-center">Missed</th>
          </tr>
        </thead>
        <tbody>
          {habitData.map((item, index) => (
            <tr key={index} className="hover:bg-bg-soft">
              <td className="py-3 px-4 text-center font-normal">{item.day}</td>
              <td className="py-3 px-4 text-center font-bold text-primary">
                {/* <i className="fas fa-check mr-1"></i>{item.completed} */}
                <FontAwesomeIcon icon={faCheck} className='mr-1' /> {item.completed}
              </td>
              <td className="py-3 px-4 text-center font-bold text-red-600">
                {/* <i className="fas fa-times mr-1"></i>{item.missed} */}
                <FontAwesomeIcon icon={faTimes} className='mr-1' /> {item.missed}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyTracker;
