import { useState, useEffect } from 'react';
import Slider from '../components/Slider/Slider';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import MultiLayer from '../components/HeroSection/MultiLayer';
import FixedSidebar from '../components/Sidebar/FixedSidebar';
import Services from '../components/Services';

export default function HomePage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'
        );
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      {user ? (
        <div>
          <FixedSidebar socialHandles={user.social_handles} />
          <MultiLayer userAbout={user.about} />
          <Slider projects={user.projects} />
          <Services services={user.services} />
        </div>
      ) : (
        <LoadingSpinner />
      )}
      <div className="w-full h-screen" />
    </>
  );
}
