import todo1 from "../../public/images/todo1.png";
import todo2 from "../../public/images/todoapp2.png";
import skillsmaster1 from "../../public/images/skillsmaster1.png";
import skillsmaster2 from "../../public/images/skillsmaster2.png";
import stack1 from "../../public/images/stack1.png";
import stack2 from "../../public/images/stack2.png";

export const products = [
  {
    href: "https://appwrite-react-blog.netlify.app/",
    title: "Appwrite-React-Blog",
    description:
      "Appwrite-React-Blog is a blog project built with React and Appwrite (backend as a service).",
    thumbnail: todo1,
    images: [todo1, todo2],
    stack: ["ReactJS", "Tailwindcss", "Redux Toolkit", "Appwrite"],
    slug: "appwrite-react-blog",
    content: (
      <div>
        <p>
          Appwrite-React-Blog is a full-stack blog project built using React, Appwrite (as the backend service), and Tailwind CSS. This application includes features such as user authentication, blog creation, editing, and deletion, offering a seamless blogging experience for users.
        </p>
        <p>
          The project demonstrates how to integrate Appwrite as a backend service and Tailwind CSS for responsive and modern styling, making it a perfect example of a robust and scalable blog platform.
        </p>
      </div>
    ),
}
,
  {
    href: "https://skillsmaster.online/",
    title: "SkillsMaster",
    description:
      "SkillsMaster is a platform that helps users to learn new skills and improve their knowledge.",
    thumbnail: skillsmaster1,
    images: [skillsmaster1, skillsmaster2],
    stack: ["ReactJS", "Tailwindcss", "ExpressJS", "MongoDB","Redux Toolkit", "Cloudinary"],
    slug: "skillsmaster",
    content: (
      <div>
        <p>
          SkillsMaster is a full-stack platform designed to help users learn new skills and improve their knowledge. The platform offers a wide range of courses and resources to help users enhance their skills in various fields.
        </p>
        <p>
          The project is built using React.js and Tailwind CSS, providing a modern and responsive user interface. With features such as course recommendations, progress tracking, user and admin dashboard, create and update course and manage lectures by admin and interactive learning modules, SkillsMaster offers a comprehensive learning experience for users.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://stackoverflow-appwrite-navy.vercel.app/",
    title: "stackoverflow-appwrite",
    description:
      "stackoverflow-appwrite is a full-stack project built with Nextjs and Appwrite (backend as a service).",
    thumbnail: stack1,
    images: [stack1, stack2],
    stack: ["NextJS", "Tailwindcss", "Appwrite","Zustand", "Cloudinary"],
    slug: "stackoverflow-appwrite",
    content: (
      <div>
        <p>
          Stackoverflow-appwrite is a full-stack project built with Next.js and Appwrite (backend as a service).
        </p>
        <p>
          The project includes features such as user authentication, question creation, editing, and deletion, vote up and down, comment on questions, and search questions by tags.
        </p>{" "}
      </div>
    ),
  },

];
