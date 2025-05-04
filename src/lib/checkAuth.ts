// lib/auth.ts
import Cookies from 'js-cookie'; // Import js-cookie untuk mengakses cookie
import { redirect } from 'next/navigation'; // Untuk navigasi
import useApi from '@/hooks/useFetch'; // Untuk mengambil data API
import { getMe } from '@/services/userServices'; // Fungsi untuk mendapatkan data user dari API

type User = {
  name: string;
  email: string;
  // Tambahkan properti lain jika ada
};

export const checkAuth = async (): Promise<{ user: User }> => {
  // Mengambil token dari cookie menggunakan js-cookie
  const token = Cookies.get('token'); // Mengambil token dari cookies

  if (!token) {
    redirect('/login'); // Redirect jika token tidak ada
  }

  // Misalnya mengambil data user menggunakan useApi
  const { data: user, loading } = useApi('users'); // Ambil data user dengan hook

  if (loading) {
    return { user: {} as User }; // Jika loading, kembalikan user kosong
  }

  if (!user) {
    redirect('/login'); // Redirect jika user tidak ditemukan
  }

  return {
    user, // Kembalikan user yang terautentikasi
  };
};
