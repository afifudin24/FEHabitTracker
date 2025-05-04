"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { redirect } from 'next/navigation'; // Untuk redirect
import { checkAuth } from "@/lib/checkAuth";
import { getMe } from "@/services/userServices";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = async ({ children }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const authResult = await checkAuth();

  if (!authResult || !authResult.user) {
    // redirect('/login'); // Redirect jika user tidak terautentikasi
    router.push('/login');
  }

  if (loading) return <p>Checking authentication...</p>;

  return <>{children}</>;
};

export default ProtectedRoute;
