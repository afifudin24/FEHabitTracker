/* eslint-disable @typescript-eslint/no-unused-vars */
// app/profile/page.tsx
"use client";
import ProtectedRoute from "../../components/ProtectedRoute";
import ProfileClient from "./ProfileClient";
import NavbarDashboard from "@/components/NavbarDashboard";
import { storageUrl } from "@/services/url";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";
import Image from "next/image";
import DarkModeToggle from "@/components/DarkModeToggle";
import gambarUser from "@/assets/afif.jpg";
import { getMe, updateUser } from "@/services/userServices";
import { useEffect, useState, useRef } from "react";
import FormInput from "@/components/FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { showToast } from "@/components/Toastify";
const ProfilePage = () => {
  const [user, setUser] = useState<any>(null);

  const [modalType, setModalType] = useState<any>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      setSelectedImage(file); // ⬅️ Simpan file ke state
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async () => {
    // console.log("tes");
    const formData = new FormData();
    if (selectedImage) {
      formData.append("profile", selectedImage);
    }
    formData.append("name", user.name);
    formData.append("email", user.email);
    console.log(formData);
    try {
      const response = await updateUser(formData);
      console.log(response);
      if (response.status == 200) {
        showToast(response.data.message, response.data.status);
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setUser(response.data.data);
        setModalType(null);
        window.dispatchEvent(new Event("userUpdated")); // ← Custom event
      }
    } catch (err) {
      console.log(err);
    }
  };

  const showModal = () => [setModalType("edit")];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const getUser = async () => {
    try {
      const response = await getMe();
      setUser(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <ProtectedRoute>
      <div>
        <NavbarDashboard />
        <DarkModeToggle />
        <div className="flex min-h-[100vh] justify-between flex-col">
          <div className="p-4 mt-10">
            <div className="max-w-xl mx-auto p-6 font-sans">
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 gap-6 flex-wrap">
                <div className="w-30 h-30">
                  <Image
                    src={
                      user?.profile && user.profile !== "default"
                        ? `${storageUrl}/${user.profile}`
                        : gambarUser
                    }
                    width={200}
                    height={200}
                    alt="Profile Picture"
                    className="w-28 h-28 rounded-full object-cover border-4 border-primary"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    {user?.name}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {user?.email}
                  </p>
                  <button
                    onClick={showModal}
                    className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover transition"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:fixed md:block left-0 right-0 bottom-0 hidden">
            <Footer />
          </div>

          <div className="block md:hidden">
            <Footer />
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        footerButtons={
          <button
            className="bg-primary text-text-primary cursor-pointer px-4 py-2 rounded hover:bg-primary-hover"
            onClick={handleUpdate}
          >
            Update
          </button>
        }
        title={"Edit Profile"}
      >
        <div>
          <div className="relative w-30 h-30 my-3 mx-auto">
            {/* Profile Image */}
            <Image
              src={
                preview
                  ? preview
                  : user?.profile && user.profile !== "default"
                  ? `${storageUrl}/${user.profile}`
                  : gambarUser
              }
              alt="Profile Picture"
              className="w-28 h-28 rounded-full object-cover border-4 border-green-500"
              width={112}
              height={112}
            />

            {/* Edit Icon */}
            <button
              type="button"
              className="absolute top-0 right-0 bg-white  w-7 h-7 rounded-full shadow-md hover:bg-gray-100"
              onClick={() => fileInputRef.current?.click()}
            >
              <FontAwesomeIcon icon={faPen} className="text-sm text-gray-600" />
            </button>

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              name="profile"
              onChange={handleImageChange}
            />
          </div>
          <FormInput
            required
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={user?.name}
            type="text"
          />
          <FormInput
            required
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user?.email}
            type="email"
          />
        </div>
      </Modal>
    </ProtectedRoute>
  );
};

export default ProfilePage;
