import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Slider from '../components/Slider/Slider';
import LoadingSpinner from '../components/shared/LoadingSpinner';

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
    <div>
      <HeroSection />

      {projects ? <Slider projects={projects} /> : <LoadingSpinner />}

      <div className="w-full h-screen" />
    </div>
  );
}
