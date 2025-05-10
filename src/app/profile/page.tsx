// app/profile/page.tsx
import ProtectedRoute from '../../components/ProtectedRoute';
import ProfileClient from './ProfileClient';
import NavbarDashboard from '@/components/NavbarDashboard';
import Footer from '@/components/Footer';
import Image from 'next/image';
import DarkModeToggle from '@/components/DarkModeToggle';
import gambarUser from '@/assets/afif.jpg';
const ProfilePage = async () => {
  return (
    // <ProtectedRoute>

    //   <ProfileClient />
    // </ProtectedRoute>
    <div>
      <NavbarDashboard />
      <DarkModeToggle />
      <div className="flex min-h-[100vh] justify-between flex-col">
        <div className="p-4 mt-10">
          <div className="max-w-xl mx-auto p-6 font-sans">
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 gap-6 flex-wrap">


              <div className="w-30 h-30">
                <Image
                  src={gambarUser}
                  alt="Profile Picture"
                  className="w-28 h-28 rounded-full object-cover border-4 border-green-500"
                />
              </div>


              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Afif Waliyudin</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Email: user@email.com</p>
                <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                  Edit Profile
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className='md:fixed md:block left-0 right-0 bottom-0 hidden'>
          <Footer />
        </div>

        <div className='block md:hidden'>
          <Footer />
        </div>

      </div>

    </div>
  );
};

export default ProfilePage;
