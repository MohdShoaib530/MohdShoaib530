import lms from "../Assets/Screenshot 2024-05-01 173745.png";
import blog from "../Assets/Screenshot 2024-05-04 083154.png";

const ProjectCard = () => {
  const projects = [
    {
      title: "Learnign Management System",
      description:
        "This is a learning management system project. It is a full stack project built with React, Node.js, Express, and MongoDB. It has features like user authentication, course creation,payment gateway, course purchasse and enrollment.",
      imageUrl: lms,
      live: "https://www.mohdshoaib.me/",
      githubUrl: "https://github.com/MohdShoaib530/lms-client",
    },
    {
      title: "Appwrite-React-Blog",
      description:
        "This is a blog project built with React and Appwrite(backend as a service). It has features like user authentication, blog creation,blog edit,blog delete. It is a full stack project built with React, Appwrite, and Tailwind CSS.",
      imageUrl: blog,
      live: "https://appwrite-react-blog.netlify.app/",
      githubUrl: "https://github.com/MohdShoaib530/appwrite-react-blog",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-evenly items-center  w-full dark:bg-slate-800 bg-gray-200 mt-20">
      {projects.map((project, index) => (
        <div
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className=" w-11/12 lg:w-4/12 shadow-xl hover:shadow-lg transition duration-300 transform hover:scale-105 rounded-3xl p-2"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="rounded-lg "
          />
          <h1 className="text-xl lg:text-2xl font-semibold mt-4 text-wrap text-gray-200">
            {project.title}
          </h1>
          <p className="dark:text-gray-400 text-gray-950 lg:text-xl">
            {project.description}
          </p>
          <div className="flex flex-row justify-between mt-2 ">
            <a
              href={project.live}
              className="btn btn-sm btn-outline dark:text-gray-300 text-gray-950 0 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110 "
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href={project.githubUrl}
              className="btn btn-sm btn-outline dark:text-gray-300 text-gray-950 0 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110  "
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
