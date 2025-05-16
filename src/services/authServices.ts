import api from "./api";
import {Auth} from "@/app/intefaces/Auth";
export const login = async (data:Auth) => api.post('/login', data)