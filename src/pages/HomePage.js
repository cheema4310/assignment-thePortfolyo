import { useState, useEffect } from 'react';
import Slider from '../components/Slider/Slider';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import FixedSidebar from '../components/Sidebar/FixedSidebar';
import Services from '../components/Services';
import Skills from '../components/Skills/Skills';
import Timeline from '../components/Timeline/Timeline';
import Testimonials from '../components/Testimonials/Testimonials';
import HeroSection from '../components/HeroSection/HeroSection';

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
          {/* <FixedSidebar socialHandles={user.social_handles} /> */}
          <HeroSection about={user.about} />
          <Slider projects={user.projects} />
          <Services services={user.services} />
          <Timeline timeline={user.timeline} />
          <Skills skills={user.skills} />
          <Testimonials testimonials={user.testimonials} />
        </div>
      ) : (
        <LoadingSpinner />
      )}
      <div className="w-full h-screen" />
    </>
  );
}
