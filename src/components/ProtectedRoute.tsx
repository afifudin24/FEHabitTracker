"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkAuth } from "@/lib/checkAuth";
import PageLoader from "./Pageloader";
type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const authenticate = async () => {
      const authResult = await checkAuth(setLoading);
      if (!authResult) {
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
      setLoading(false); // Pastikan set loading false di akhir
    };

    authenticate();
  }, []);

  if (loading) return <PageLoader />;

  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
