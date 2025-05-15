"use client";
import { useEffect, useState } from "react";
import DarkModeToggle from "@/components/DarkModeToggle";
import NavbarDashboard from "@/components/NavbarDashboard";
import { faEye, faAdd, faTimes, faCheck, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/Container";
import { BtnSuc } from "@/components/Button";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteHabit, getHabit, putHabit } from "@/services/habitServices";
import { addHabit } from "@/services/habitServices";
import TableLoader from "@/Loader/TableLoader";
import Modal from "@/components/Modal";
import { FormDelete, FormView } from "@/elements/habits/Modal";
import { FormAdd } from "@/elements/habits/Modal";
import { FormEdit } from "@/elements/habits/Modal";
import { Habit } from "../intefaces/Habit";
import { showToast } from "@/components/Toastify";
// interface Habit {
  
//   status: string;
//   period: string;
//   target: string;
//   id: number;
//   userId: number;
//   title: string;
//   description: string;
//   colorHex: string;
//   archived: boolean;
//   periodType: string;
//   targetValue: string;

// }

const Habits = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [modalType, setModalType] = useState<'view' | 'add' | 'edit' | 'delete' | null>(null);
  const [selectedHabit, setSelectedHabit] = useState<Habit>({
    id: 0,
    title: '',
    archived: false,
    periodType: '',
    targetValue: '',
    userId: 1,
    description: "",
    colorHex: "",

    period: "",
  });
  const [newHabit, setNewHabit] = useState<Habit>({
    id: 0,
    title: '',
    archived: false,
    periodType: '',
    targetValue: '',
    userId: 1,
    description: "",
    colorHex: "",

    period: "",

    
  });
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: 1,
      title: 'Morning Exercise',
      archived: true,
      periodType: 'Daily',
      targetValue: '30 days',
      userId: 0,
      description: "",
      colorHex: "",
     
      period: "",
   
    },
    {
      id: 2, title: 'Read a Book', archived: false, periodType: 'Daily', targetValue: '15 days',
      userId: 0,
      description: "",
      colorHex: "",
      
      period: "",
     
    },
  ]);

  const getHabits = async () => {
    setIsLoading(true);
    try {
      const response = await getHabit();
      console.log(response.data);
      setHabits(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSave =  async () => {
    console.log('save data');
    try{
    const response = await addHabit(newHabit);
    console.log(response);
    showToast(response.data.message, response.data.status);
    setTimeout(() => {
      location.reload();
    }, 500);

    }catch(err:any){
      console.log(err.response);
      // console.log(err.data.errors[0]);
      const errors = err.response?.data?.errors;

if (Array.isArray(errors)) {
  if (errors.length > 1) {
    const jsxList = (
      <ul style={{ paddingLeft: '20px', margin: 0 }}>
        {errors.map((msg: string, idx: number) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    );
    showToast(jsxList, 'error');
  } else {
    showToast(errors[0], 'error');
  }
} else {
  showToast("Terjadi kesalahan", "error");
}

      
    
  
    }
  };

  const handleDelete = async(selectedHabit:any) => {
      try{
          const response = await deleteHabit(selectedHabit.id);
          console.log(response);
          showToast(response.data.message, response.data.status);
          setTimeout(() => {
            location.reload();
          }, 500);
      }catch(err:any){
        console.log(err);
      }
  }
  // Perbarui tipe handleChange

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string }
  ) => {
    if ("target" in e) {
      const { name, value } = e.target;
      if(modalType == "add"){
        setNewHabit((prev) => ({ ...prev, [name]: value }));
        }else {
          setSelectedHabit((prev) => ({ ...prev, [name]: value }));
        }
      
    } else {
      const { name, value } = e;
      if(modalType == "add"){
        setNewHabit((prev) => ({ ...prev, [name]: value }));
        }else {
          setSelectedHabit((prev) => ({ ...prev, [name]: value }));
        }
    }
  };
  // const handlePeriodChange = ()
  
  const handleColorChange = (e: { name: string; value: string }) => {
    const { name, value } = e;
    if(modalType == "add"){
      setNewHabit((prev) => ({ ...prev, [name]: value }));
      }else {
        setSelectedHabit((prev) => ({ ...prev, [name]: value }));
      }
  };
  
  
  const handleUpdate = async () => {
    try{
      const response = await putHabit(selectedHabit.id, selectedHabit);
      showToast(response.data.message, response.data.status);
      setTimeout(() => {
        location.reload();
      }, 500);
    }catch(err:any){
      console.log(err);
    }
  }

    // Array of modal content components and titles
    const modalContent = [
      {
        type: 'view',
        title: 'Detail Data',
        component: <FormView habit={selectedHabit} />,
        footerButtons: null, // Bisa kosong kalau cuma butuh tombol Close
      },
      {
        type: 'add',
        title: 'Add Habit',
        component: <FormAdd handleChange={handleChange} handleColorChange={handleColorChange} newHabit={newHabit}  />,
        footerButtons: (
          <button
            className="bg-primary cursor-pointer text-text-primary px-4 py-2 rounded hover:bg-primary-hover"
            onClick={handleSave}
          >
            Save
          </button>
        ),
      },
      {
        type: 'edit',
        title: 'Edit Data',
        component: <FormEdit habit={selectedHabit} handleChange={handleChange} handleColorChange={handleColorChange} />,
        footerButtons: (
          <button
            className="bg-primary text-text-primary cursor-pointer px-4 py-2 rounded hover:bg-primary-hover"
            onClick={handleUpdate}
          >
            Update
          </button>
        ),
      },
      {
        type : 'delete',
        title : 'Delete Data',
        component : <FormDelete />,
        footerButtons : (
            <button onClick={() => handleDelete(selectedHabit)} className="bg-primary text-text-primary cursor-pointer px-4 py-2 rounded hover:bg-primary-hover">
              Delete
            </button>
        )
        
      }
    ];
    const currentModal = modalContent.find((modal) => modal.type === modalType);

    const showModal = (habit:any, modalType:any) => {
      setSelectedHabit(habit);
      setModalType(modalType);
    }


  useEffect(() => {
    getHabits();
  }, [0]);


  return (
    <div>
      <DarkModeToggle />
      <NavbarDashboard />
      <div className="flex min-h-[100vh] justify-between flex-col">
        <div className="wrapper mt-10">
          <Container className="flex flex-col md:flex-row justify-between gap-3">
            <div data-aos="fade-right" data-aos-duration="1000" className="left md:w-10/12 mt-16 md:mt-0 w-full">
              <BtnSuc onClick={ () => setModalType('add')}>
                <FontAwesomeIcon className="mr-2" icon={faAdd} />
                Add New Habit </BtnSuc>
                {
                  isLoading ? (
                      <div>
                        <TableLoader />
                      </div>
                  ) : (
                    <div className="overflow-x-auto">
                    <table className="min-w-full bg-bg-card mt-10 table-auto shadow-md rounded-lg overflow-hidden">
                      <thead className="bg-primary">
                        <tr className="text-left text-text-light">
                          <th className="px-4 py-3">#</th>
                          <th className="px-4 py-3">Habits</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3 hidden md:table-cell">Period</th>
                          <th className="px-4 py-3 hidden md:table-cell">Target</th>
                          <th className="px-4 py-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
  {habits.length > 0 ? (
    habits.map((habit, index) => (
      <tr key={habit.id} className="hover:bg-bg-soft border-b border-gray-200">
        <td className="px-4 py-2">{index + 1}</td>
        <td className="px-4 py-2">{habit.title}</td>
        <td className={`px-4 py-2 ${habit.archived ? 'text-green-600' : 'text-red-600'}`}>
          {habit.archived ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faTimes} />
          )}
        </td>
        <td className="px-4 text-center py-2 hidden md:table-cell">{habit.periodType}</td>
        <td className="px-4 py-2 text-center hidden md:table-cell">{habit.targetValue}</td>
        <td className="px-4 py-2">
          <div className="flex gap-2">
            <button onClick={() => showModal(habit, "view")} className="text-blue-500 hover:text-blue-700">
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button onClick={() => showModal(habit, "edit")} className="text-yellow-500 hover:text-yellow-700">
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button onClick={() => showModal(habit, "delete")}  className="text-red-500 hover:text-red-700">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={6} className="text-center py-4 text-gray-500">
        No data available.
      </td>
    </tr>
  )}
</tbody>

                    </table>
    
                  </div>
                  )
                }
            
            </div>
            <Modal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        footerButtons={currentModal?.footerButtons}
        title={currentModal?.title || ''}
      >
        {currentModal?.component}
      </Modal>
           

          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
}


export default Habits;