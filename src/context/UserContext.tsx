// context/UserContext.tsx
import { User, UserContextType } from "@/app/intefaces/User";
import { getMe } from "@/services/userServices";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const fetchUser = async () => {
    try {
      const response = await getMe();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Optional: ambil data sekali waktu load app
  useEffect(() => {
    // const fetchUser = async () => {
    //   const res = await fetch('/api/profile');
    //   const data = await res.json();
    //   setUser(data);
    // };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
