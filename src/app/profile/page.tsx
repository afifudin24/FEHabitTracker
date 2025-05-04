// app/profile/page.tsx
import ProtectedRoute from '../../components/ProtectedRoute';
import ProfileClient from './ProfileClient';

const ProfilePage = async () => {
  return (
    <ProtectedRoute>
      
      <ProfileClient />
    </ProtectedRoute>
  );
};

export default ProfilePage;
