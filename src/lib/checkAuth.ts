'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import useApi from '@/hooks/useFetch'; // Hook buatan sendiri
import { login } from '@/services/authServices';
import { getMe } from '@/services/userServices';

type User = {
  name: string;
  email: string;
  // Tambah properti lain sesuai data
};


export const checkAuth = async (setLoading: (value: boolean) => void) => {
  try {
    const response = await getMe(); // Tunggu hasil axios
    const user = response.data;     // Ambil data dari respons
    setLoading(false);
    return user;
  } catch (err) {
    console.error('Auth error:', err);
    return null;
  }
};