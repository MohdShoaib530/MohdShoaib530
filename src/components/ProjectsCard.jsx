const ProjectCard = () => {
  const projects = [
    {
      title: "Learnign Management System",
      description: "This is a learning management system project. It is a full stack project built with React, Node.js, Express, and MongoDB. It has features like user authentication, course creation, and enrollment.",
      imageUrl: "https://via.placeholder.com/300",
      live: "https://www.google.com",
      githubUrl: "https://www.github.com",
    },
    {
      title: "Appwrite-React-Blog",
      description: "This is a blog project built with React and Appwrite. It has features like user authentication, blog creation,blog edit,blog delete. It is a full stack project built with React, Appwrite, and Tailwind CSS.",
      imageUrl: "https://via.placeholder.com/300",
      live: "https://www.google.com",
      githubUrl: "https://www.github.com",
    },
  ];
  return (
    <div className="flex flex-wrap justify-evenly items-center mb-8 mt-10 w-fit">
      {
        projects.map((project, index) => (
          <div key={index} className="flex flex-col w-4/12 shadow-xl hover:shadow-lg transition duration-300 transform hover:scale-105 rounded-3xl">
            <img src={project.imageUrl} alt={project.title} className="rounded-lg" />
            <h1 className="text-xl font-semibold mt-4 text-wrap text-gray-200">{project.title}</h1>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex flex-row justify-between mt-2 mb-2">
            <a href={project.live} className="btn btn-sm dark:btn-outline" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href={project.githubUrl} className="btn btn-sm dark:btn-outline" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProjectCard;
