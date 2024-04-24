import Contact from "../components/Contact";
import { FaCss3, FaGithub } from "react-icons/fa6";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import {
  SiExpress,
  SiPostman,
  SiVercel,
  SiCloudinary,
  SiStackblitz,
  SiCodesandbox,
  SiAppwrite,
  SiRedux,
  SiMongodb,
  SiNetlify,
  SiRender 
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { IoGitCompareOutline } from "react-icons/io5";

const AboutMe = () => {
  const personalSkillset = {
    frontend: [
      {
        name: "HTML5",
        icon: <TiHtml5 className="text-red-500" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3 className="text-blue-500" />,
      },
      {
        name: "JavaScript",
        icon: <RiJavascriptLine className="text-yellow-500" />,
      },
      {
        name: "React.js",
        icon: <FaReact className="text-blue-400" />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-500" />,
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-500" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },
    ],
    deployment: [
      {
        name: "Vercel",
        icon: <SiVercel className="text-black" />,
      },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-black" />,
      },
      {
        name: "Render",
        icon: <SiRender className="text-black" />,
      },
    ],
    tools: [
      {
        name: "VS Code",
        icon: <TbBrandVscode className="text-blue-500" />,
      },
      {
        name: "Git",
        icon: <IoGitCompareOutline className="text-black" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-black" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500" />,
      },
      {
        name: "Cloudinary",
        icon: <SiCloudinary className="text-blue-500" />,
      },
      {
        name: "Stackblitz",
        icon: <SiStackblitz className="text-black" />,
      },
      {
        name: "Codesandbox",
        icon: <SiCodesandbox className="text-black" />,
      },
      {
        name: "Appwrite",
        icon: <SiAppwrite className="text-black" />,
      },
    ],
  };
  return (
    <>
      <div className="about-me-container dark:bg-slate-800 bg-gray-200 w-full flex flex-col items-center lg:items-start pt-16 lg:flex-row justify-between px-10 py-5 text-gray-950 dark:text-gray-100">
        <div className="about-me-content flex flex-col items-center  gap-3 w-11/12 lg:w-6/12 ">
          <button className="btn btn-sm btn-outline dark:text-gray-300 text-gray-950 0 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110 w-fit">
            About Me
          </button>
          <h1 className="text-lg">
            Hello, I&apos;m Mohd Shoaib, a passionate MERN stack developer based
            in Uttar Pradesh, India.
          </h1>
          <h1>
            I specialize in frontend development with HTML5, CSS3, JavaScript,
            React.js, and Tailwind CSS, and backend development with Node.js,
            Express.js, and MongoDB. While I&apos;m still gaining experience in
            deploying applications, I have the skills to deploy both frontend
            and backend applications and use Git and GitHub for version control.
          </h1>
          <h1>
            Feel free to reach out to me for project collaborations or job
            opportunities.
          </h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 w-11/12 lg:w-6/12'>
          {Object.keys(personalSkillset).map((key) => (
            <div
              key={key}
              className="about-me-skillset w-full flex flex-col items-center gap-3"
            >
              <h1 className="text-lg text-gray-950 dark:text-gray-100 border border-gray-950 dark:border-gray-100 px-2 py-1 rounded-md">{key}</h1>
              <div className="skillset-icons flex flex-wrap justify-center items-center gap-3">
                {personalSkillset[key].map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-icon flex flex-col items-center gap-1"
                  >
                    <ul className='skill-icon text-3xl'>{skill.icon}</ul>
                    <h1>{skill.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default AboutMe;
