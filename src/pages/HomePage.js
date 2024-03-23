import { useState, useEffect } from 'react';
import Slider from '../components/Slider/Slider';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import MultiLayer from '../components/HeroSection/MultiLayer';
import FixedSidebar from '../components/Sidebar/FixedSidebar';

export default function HomePage() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'
        );
        const data = await response.json();
        setProjects(data.user.projects);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProjects();
  }, []);
  return (
    <>
      {projects ? (
        <div>
          <FixedSidebar />
          <MultiLayer projects={projects} />
          <Slider projects={projects} />
        </div>
      ) : (
        <LoadingSpinner />
      )}
      <div className="w-full h-screen" />
    </>
  );
}
