import HomeCard from "../components/HomeCard";
import ProjectsCard from "../components/ProjectsCard";
import Contact from "../components/Contact";

const Home = () => {
  
  return (
    <div className='dark:bg-slate-800 bg-gray-200'>
      <HomeCard/>
      <ProjectsCard/>
      <Contact/>
    </div>
  );
};

export default Home;
