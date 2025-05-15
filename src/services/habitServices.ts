import api from "./api";
import { Habit } from "@/app/intefaces/Habit";
export const getHabit = async () => api.get('/habits');
export const addHabit = async (data:Habit) => api.post('/habits', data);
export const putHabit = async (id:any, data:Habit) => api.put(`/habits/${id}`, data); 
export const deleteHabit = async (id:Habit) => api.delete(`/habits/${id}`);
