"use client";
import { useEffect, useState } from "react";
import DarkModeToggle from "@/components/DarkModeToggle";
import NavbarDashboard from "@/components/NavbarDashboard";
import {
  faEye,
  faAdd,
  faTimes,
  faCheck,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
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
  const [modalType, setModalType] = useState<
    "view" | "add" | "edit" | "delete" | null
  >(null);
  const [selectedHabit, setSelectedHabit] = useState<Habit>({
    id: 0,
    title: "",
    archived: false,
    periodType: "",
    targetValue: "",
    userId: 1,
    description: "",
    colorHex: "",
    period: "",
  });
  const [newHabit, setNewHabit] = useState<Habit>({
    id: 0,
    title: "",
    archived: false,
    periodType: "",
    targetValue: "",
    userId: 1,
    description: "",
    colorHex: "",
    period: "",
  });
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: 1,
      title: "Morning Exercise",
      archived: true,
      periodType: "Daily",
      targetValue: "30 days",
      userId: 0,
      description: "",
      colorHex: "",

      period: "",
    },
    {
      id: 2,
      title: "Read a Book",
      archived: false,
      periodType: "Daily",
      targetValue: "15 days",
      userId: 0,
      description: "",
      colorHex: "",
      period: "",
    },
  ]);

  const resetForm = () => {
    setSelectedHabit({
      id: 0,
      title: "",
      archived: false,
      periodType: "",
      targetValue: "",
      userId: 1,
      description: "",
      colorHex: "",
      period: "",
    });

    setNewHabit({
      id: 0,
      title: "",
      archived: false,
      periodType: "",
      targetValue: "",
      userId: 1,
      description: "",
      colorHex: "",
      period: "",
    });
  };

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
  };

  const handleSave = async () => {
    console.log("save data");
    try {
      const response = await addHabit(newHabit);
      console.log(response);
      showToast(response.data.message, response.data.status);
      handleAddData(response.data.data);
      setModalType(null);
      resetForm();
    } catch (err: any) {
      console.log(err.response);
      // console.log(err.data.errors[0]);
      const errors = err.response?.data?.errors;

      if (Array.isArray(errors)) {
        if (errors.length > 1) {
          const jsxList = (
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              {errors.map((msg: string, idx: number) => (
                <li key={idx}>{msg}</li>
              ))}
            </ul>
          );
          showToast(jsxList, "error");
        } else {
          showToast(errors[0], "error");
        }
      } else {
        showToast("Terjadi kesalahan", "error");
      }
    }
  };

  const handleDelete = async (selectedHabit: any) => {
    try {
      const response = await deleteHabit(selectedHabit.id);
      console.log(response);
      handleDeleteData(response.data.data);
      showToast(response.data.message, response.data.status);
      setModalType(null);
    } catch (err: any) {
      console.log(err);
    }
  };
  // Perbarui tipe handleChange

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | { name: string; value: string }
  ) => {
    if ("target" in e) {
      const { name, value } = e.target;
      if (modalType == "add") {
        setNewHabit((prev) => ({ ...prev, [name]: value }));
      } else {
        setSelectedHabit((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      const { name, value } = e;
      if (modalType == "add") {
        setNewHabit((prev) => ({ ...prev, [name]: value }));
      } else {
        setSelectedHabit((prev) => ({ ...prev, [name]: value }));
      }
    }
  };
  // const handlePeriodChange = ()

  const handleColorChange = (e: { name: string; value: string }) => {
    const { name, value } = e;
    if (modalType == "add") {
      setNewHabit((prev) => ({ ...prev, [name]: value }));
    } else {
      setSelectedHabit((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await putHabit(selectedHabit.id, selectedHabit);
      showToast(response.data.message, response.data.status);
      handleUpdateData(response.data.data);
      setModalType(null);
      resetForm();
      // setTimeout(() => {
      //   location.reload();
      // }, 500);
    } catch (err: any) {
      console.log(err.response);
      // console.log(err.data.errors[0]);
      const errors = err.response?.data?.errors;

      if (Array.isArray(errors)) {
        if (errors.length > 1) {
          const jsxList = (
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              {errors.map((msg: string, idx: number) => (
                <li key={idx}>{msg}</li>
              ))}
            </ul>
          );
          showToast(jsxList, "error");
        } else {
          showToast(errors[0], "error");
        }
      } else {
        showToast("Terjadi kesalahan", "error");
      }
    }
  };

  // state management
  const handleAddData = (newData: any) => {
    setHabits((prevList) => {
      const exists = prevList.some((item) => item.id === newData.id);
      if (!exists) {
        return [...prevList, newData];
      }
      return prevList;
    });
  };

  const handleUpdateData = (updatedData: any) => {
    setHabits((prevList) =>
      prevList.map((item) =>
        item.id === updatedData.id ? { ...item, ...updatedData } : item
      )
    );
  };

  const handleDeleteData = (idToDelete: any) => {
    setHabits((prevList) => prevList.filter((item) => item.id !== idToDelete));
  };

  // Array of modal content components and titles
  const modalContent = [
    {
      type: "view",
      title: "Detail Data",
      component: <FormView habit={selectedHabit} />,
      footerButtons: null, // Bisa kosong kalau cuma butuh tombol Close
    },
    {
      type: "add",
      title: "Add Habit",
      component: (
        <FormAdd
          handleChange={handleChange}
          handleColorChange={handleColorChange}
          newHabit={newHabit}
        />
      ),
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
      type: "edit",
      title: "Edit Data",
      component: (
        <FormEdit
          habit={selectedHabit}
          handleChange={handleChange}
          handleColorChange={handleColorChange}
        />
      ),
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
      type: "delete",
      title: "Delete Data",
      component: <FormDelete />,
      footerButtons: (
        <button
          onClick={() => handleDelete(selectedHabit)}
          className="bg-primary text-text-primary cursor-pointer px-4 py-2 rounded hover:bg-primary-hover"
        >
          Delete
        </button>
      ),
    },
  ];
  const currentModal = modalContent.find((modal) => modal.type === modalType);

  const showModal = (habit: any, modalType: any) => {
    setSelectedHabit(habit);
    setModalType(modalType);
  };

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
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="left md:w-12/12 mt-16 md:mt-0 w-full"
            >
              <BtnSuc onClick={() => setModalType("add")}>
                <FontAwesomeIcon className="mr-2" icon={faAdd} />
                Add New Habit{" "}
              </BtnSuc>
              {isLoading ? (
                <div>
                  <TableLoader />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 pb-5">
                  {habits.length > 0 ? (
                    habits.map((habit, index) => (
                      <div
                        key={habit.id}
                        className="bg-bg-card rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-lg font-semibold capitalize text-text-primary">
                            {habit.title}
                          </h2>
                          <span
                            className={`text-sm font-medium ${
                              habit.archived ? "text-green-600" : "text-red-600"
                            }`}
                          ></span>
                        </div>

                        <div className="text-sm capitalize text-text-primary mb-1">
                          <span className="capitalize font-medium">
                            Period:
                          </span>{" "}
                          {habit.periodType}
                        </div>
                        <div className="text-sm text-text-primary mb-3">
                          <span className="font-medium">Target:</span>{" "}
                          {habit.targetValue}
                        </div>
                        <div>
                          {habit.archived ? (
                            <span className="p-1 text-sm rounded-md text-white bg-primary">
                              Completed
                            </span>
                          ) : (
                            <span className="p-1 text-sm rounded-md text-white bg-red-500">
                              Incomplete
                            </span>
                          )}
                        </div>

                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => showModal(habit, "view")}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                          <button
                            onClick={() => showModal(habit, "edit")}
                            className="text-yellow-500 hover:text-yellow-700"
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </button>
                          <button
                            onClick={() => showModal(habit, "delete")}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center text-gray-500 py-8">
                      No data available.
                    </div>
                  )}
                </div>
              )}
            </div>
            <Modal
              isOpen={modalType !== null}
              onClose={() => setModalType(null)}
              footerButtons={currentModal?.footerButtons}
              title={currentModal?.title || ""}
            >
              {currentModal?.component}
            </Modal>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Habits;
