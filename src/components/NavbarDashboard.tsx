import Container from "./Container"
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import imgprofile  from "../assets/afif.jpg";
const NavbarDashboard = () => {

    const pathname = usePathname();
    const links = [
        { href: '/dashboard', label: 'Home' },
        { href: '/habits', label: 'Habits' },
        { href: '/logs', label: 'Logs' },
        { href: '/stats', label: 'Stats' },
      ];
    
    return (
        <div className="shadow-md">
    <Container >
        
  {/* Desktop Navigation */}
  <nav className="hidden md:flex justify-between items-center  px-6 py-4">

    
    <div className="text-2xl hover:text-primary-hover transition-all ease-in-out duration-300 font-bold text-green-600"><a href="">BiasaKeun</a></div>
    
    <div className="flex items-center space-x-6">
      <ul className="flex space-x-6 text-gray-700 text-[15px]">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`link  hover:text-primary-hover ${pathname === link.href ? 'active text-primary' : 'text-text-primary'}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
      </ul>

      <div className="relative group">
        <Image src={imgprofile} alt="" className="w-10 h-10 rounded-full border object-cover cursor-pointer" />
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-10">
          <a href="profile.html" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <span className="mr-2">Profile</span> <i className="fa-solid fa-user"></i>
          </a>
          <a href="../login/index.html" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <span className="mr-2">Logout</span> <i className="fa-solid fa-right-from-bracket"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
    </Container>

  {/* Mobile Navigation */}
  <nav className="md:hidden flex items-center justify-between px-6 py-4 bg-white shadow-md">
    <div className="text-2xl font-bold text-green-600"><a href="">BiasaKeun</a></div>
    <div className="text-2xl text-gray-700 cursor-pointer">
      <i className="fa fa-bars"></i>
    </div>
   
  </nav>
  
  </div>




    )
}

export default NavbarDashboard