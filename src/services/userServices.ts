import api from "./api";

// GET
export const getMe = () => api.get('/users/me');
export const getAllUsers = () => api.get('/users/getAll');
export const getUserById = (id:string) => api.get(`/users/${id}`);

// POST
export const createUser = (data:FormData) => api.post('/users', data);

// PUT
export const updateUser = (data:FormData) => api.put(`/users/updateprofile`, data);

// DELETE
export const deleteUser = (id:string) => api.delete(`/users/${id}`);