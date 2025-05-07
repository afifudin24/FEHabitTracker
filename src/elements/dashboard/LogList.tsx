import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
interface LogItem {
  id: number;
  text: string;
  time: string;
  checked: boolean;
}

const LogList: React.FC = () => {
  const [logs, setLogs] = useState<LogItem[]>([
    { id: 1, text: 'Drank 100 gallons of water', time: '8:00 PM', checked: true },
    { id: 2, text: 'Ate 3 meals + the plates', time: '9:00 PM', checked: true },
    { id: 3, text: 'Ran for 3 hours', time: '9:00 PM', checked: false },
  ]);

  return (
    <div className="my-4 flex flex-wrap gap-4 justify-between">
      {logs.map((log) => (
        <div
          key={log.id}
          className="w-full sm:w-[48%] lg:w-[30%] p-4 bg-bg-card rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex items-center gap-4"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xl ${
              log.checked ? 'bg-primary' : 'bg-red-700'
            }`}
          >
            {
                log.checked ? (
                    <FontAwesomeIcon icon={faCheck} />
                ) : (
                    <FontAwesomeIcon icon={faTimes} />
                )
            }
          
          </div>
          <div className="text-left">
            <p className="font-medium text-sm text-text-primary">{log.text}</p>
            <p className="text-xs text-text-primary">{log.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogList;

