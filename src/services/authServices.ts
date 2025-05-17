import api from "./api";
import {Auth} from "@/app/intefaces/Auth";
import { User } from "@/app/intefaces/User";
export const login = async (data:Auth) => api.post('/login', data)
export const register = async (data:User) => api.post('/register', data);
export const verifyAcccount = async (data: { token: string }) => api.post('/verify-email', data);