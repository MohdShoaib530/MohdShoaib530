import lms from '../Assets/Screenshot 2024-04-22 193719.png';
import blog from '../Assets/Screenshot 2024-04-22 193808.png';

const ProjectCard = () => {
  const projects = [
    {
      title: "Learnign Management System",
      description: "This is a learning management system project. It is a full stack project built with React, Node.js, Express, and MongoDB. It has features like user authentication, course creation, and enrollment.",
      imageUrl: lms,
      live: "https://codemon11.netlify.app/",
      githubUrl: "https://www.github.com",
    },
    {
      title: "Appwrite-React-Blog",
      description: "This is a blog project built with React and Appwrite. It has features like user authentication, blog creation,blog edit,blog delete. It is a full stack project built with React, Appwrite, and Tailwind CSS.",
      imageUrl: blog,
      live: "https://appwrite-react-blog.netlify.app/",
      githubUrl: "https://www.github.com",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-1 justify-evenly items-center mb-8 mt-10 w-full lg:w-fit dark:bg-slate-800 bg-gray-200 ">
      {
        projects.map((project, index) => (
          <a href={project.live} target="_blank" rel="noopener noreferrer" key={index} className=" w-10/12 lg:w-4/12 shadow-xl hover:shadow-lg transition duration-300 transform hover:scale-105 rounded-3xl p-2">
            <img src={project.imageUrl} alt={project.title} className="rounded-lg " />
            <h1 className="text-xl lg:text-2xl font-semibold mt-4 text-wrap text-gray-200">{project.title}</h1>
            <p className="dark:text-gray-400 text-gray-950 lg:text-xl">{project.description}</p>
            <div className="flex flex-row justify-between mt-2 mb-2">
            <a href={project.live} className="btn btn-sm dark:btn-outline btn-outline bg-gray-800" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href={project.githubUrl} className='btn btn-sm dark:btn-outline btn-outline bg-gray-800'target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </div>
          </a>
        ))
      }
    </div>
  );
};

export default ProjectCard;
