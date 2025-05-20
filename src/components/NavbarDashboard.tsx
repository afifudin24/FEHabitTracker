"use client";
import { useUser } from "../context/UserContext";
import Container from "./Container";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import imgprofile from "../assets/profile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRightFromBracket,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { storageUrl } from "@/services/url";

const NavbarDashboard = () => {
  const { user } = useUser();
  console.log(user);
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev); // ✅ Toggle
  };

  const links = [
    { href: "/dashboard", label: "Home" },
    { href: "/habits", label: "Habits" },
    { href: "/logs", label: "Logs" },
    { href: "/stats", label: "Stats" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setIsSticky(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full  transition-all duration-300`}>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block w-full top-0 z-50 py-4 ${isSticky ? "fixed bg-bg-card shadow-md" : "shadow-sm relative"
          }`}
      >
        <Container className="flex justify-between items-center ">
          <div className="text-3xl hover:text-primary-hover transition-all ease-in-out duration-300 font-bold text-primary">
            <a href="">BiasaKeun</a>
          </div>

          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6 text-gray-700 text-[15px]">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`link hover:text-primary-hover ${pathname === link.href
                      ? "active text-primary"
                      : "text-text-primary"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="relative group">
              <Image
                src={
                  user?.profile === "default"
                    ? imgprofile
                    : `${storageUrl}/${user?.profile}`
                }
                alt=""
                className="w-10 h-10 rounded-full border object-cover cursor-pointer"
              />
              <div className="absolute right-0 mt-2 w-auto bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-10">
                <a
                  href="profile.html"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <span className="mr-2">Profile</span>{" "}
                  <FontAwesomeIcon icon={faUser} />
                </a>
                <a
                  href="../login/index.html"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <span className="mr-2">Logout</span>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden block py-4 w-full top-0 z-50  ${isSticky ? "fixed bg-bg-card shadow-md" : "shadow-sm fixed"
          }`}
      >
        <Container className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary hover:text-primary-hover">
            <a href="">BiasaKeun</a>
          </div>
          <div
            onClick={toggleSidebar}
            className={`text-2xl  text-text-light   w-[50px] h-[50px] hover:bg-primary-hover flex items-center justify-center rounded-md  cursor-pointer ${showSidebar ? "bg-primary-hover" : "bg-primary"
              }`}
          >
            {/* <i className="fa fa-bars"></i> */}

            {showSidebar ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </Container>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-bg-card z-50 transition-all duration-500 ease-in-out overflow-x-hidden ${showSidebar ? "w-[60%]" : "w-0"
          }`}
      >
        <div className="h-full py-12 px-4 flex flex-col justify-between items-center">
          {/* Menu */}
          <div className="w-full">
            <ul className="flex flex-col items-center gap-5 text-[16px] font-medium text-text-primary">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`link hover:text-primary-hover ${pathname === link.href
                      ? "active text-primary"
                      : "text-text-primary"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile & Logout */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/profile"
              className="flex items-center gap-3 text-text-primary no-underline"
            >
              <Image
                src={imgprofile}
                alt="profile"
                className="w-10 h-10 rounded-md object-cover border"
              />
              <p className="font-semibold">Afif Waliyudin</p>
            </Link>
            <Link
              href="/login"
              className="flex w-full justify-between items-center gap-2 text-white font-semibold px-4 py-2 bg-primary rounded-md hover:bg-primary-hover transition"
            >
              <span>Logout</span>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
