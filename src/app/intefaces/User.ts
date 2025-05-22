export interface User {
    name : string;
    email : string;
    password : string;
     profile?: string | null;
}
export interface UserData {
    name : string;
    email : string;
    profile?: string | null;
}

export interface UserContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
}