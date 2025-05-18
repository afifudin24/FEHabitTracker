export interface User {
    name : string;
    email : string;
    password : string;
     profile?: string | null;
}

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}