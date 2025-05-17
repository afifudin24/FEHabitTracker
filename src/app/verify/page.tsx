"use client";
import { apiUrl } from "@/services/url";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { verify } from "crypto";
import { verifyAcccount } from "@/services/authServices";
import DarkModeToggle from "@/components/DarkModeToggle";
import ButtonHref from "@/components/ButtonHref";

const VerifyPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    if (!token) return;

    const verifyEmail = async () => {
      try {
        // const res = await verifyAcccount({ token });
        const res = await fetch(`${apiUrl}/verify-email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        if (res.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <>
      <DarkModeToggle />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          {status === "loading" && (
            <p className="text-lg text-gray-700">Verifying your email...</p>
          )}
          {status === "success" && (
            <>
              <h1 className="text-2xl font-bold text-primary mb-4">
                Email Verified!
              </h1>
              <p className="text-text-primary">
                Your email has been successfully verified.
              </p>
              <br />
              <ButtonHref children="Login" href="/login" />
            </>
          )}
          {status === "error" && (
            <>
              <h1 className="text-2xl font-bold text-red-600 mb-4">
                Verification Failed
              </h1>
              <p className="text-gray-700">
                Invalid or expired verification link.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default VerifyPage;
