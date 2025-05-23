/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";
import { Habit } from "@/app/intefaces/Habit";
export const getHabit = async () => api.get('/habits');
export const addHabit = async (data:Habit) => api.post('/habits', data);
export const putHabit = async (id:any, data:Habit) => api.put(`/habits/${id}`, data); 
export const deleteHabit = async (id:Habit) => api.delete(`/habits/${id}`);
export const getHabitIncomplete = async () => api.get('/habits/incomplete');
export const addHabitLog = async (id:any) => api.post(`/habits/${id}/logs`);