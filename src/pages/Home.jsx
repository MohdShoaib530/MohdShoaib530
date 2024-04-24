import HomeCard from "../components/HomeCard";
import ProjectsCard from "../components/ProjectsCard";
import Contact from "../components/Contact";

const Home = () => {
  
  return (
    <div className='relative w-full'>
      <HomeCard/>
      <ProjectsCard/>
      <Contact/>
    </div>
  );
};

export default Home;
