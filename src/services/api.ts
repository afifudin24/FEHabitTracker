/* eslint-disable @typescript-eslint/no-explicit-any */
// src/services/api.js
import axios from 'axios';
import { apiUrl } from './url';
import Cookies from 'js-cookie'; // Import js-cookie

export const dynamic = 'force-dynamic';

const api = axios.create({
  baseURL: apiUrl || 'http://localhost:3000/api',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// Helper untuk menambahkan header Authorization hanya pada POST, PUT, dan DELETE
const addAuthHeaderIfNeeded = async (config:any) => {
  const token = Cookies.get('token'); // Menggunakan js-cookie untuk mengambil token
  // Cek apakah request menggunakan metode POST, PUT, atau DELETE
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

// Menambahkan interceptor request untuk menambahkan Authorization jika perlu
api.interceptors.request.use(addAuthHeaderIfNeeded, (error) => {
  return Promise.reject(error);
});

export default api;
