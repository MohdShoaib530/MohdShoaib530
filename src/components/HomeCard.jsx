import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import { FaArrowDownLong } from "react-icons/fa6";
import { useRef } from 'react';

const HomeCard = () => {
  const socialMedia = [
    { name: "LinkedIn", url: "", icon: <FaLinkedin /> },
    { name: "GitHub", url: "", icon: <FaGithub /> },
    { name: "Instagram", url: "", icon: <FaInstagram /> },
    { name: "Gmail", url: "", icon: <BiLogoGmail /> },
    { name: "Twitter", url: "", icon: <FaTwitter /> },
  ];

  // Create a ref for the element you want to scroll to
  const latestWorksRef = useRef(null);

  const scrollToLatestWorks = () => {
    // Scroll to the latest works section
    latestWorksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      <div className='flex flex-col items-center justify-center lg:justify-between lg:flex-row w-full mt-10 mb-10'>
        <div className="flex flex-col justify-center items-center w-fit lg:w-7/12">
          <h1 className="lg:text-4xl sm:2xl md:text-3xl text-gray-950 dark:text-gray-300 font-semibold">
            Hi There! <br /> I&apos;M Mohammad Shoaib
          </h1>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 lg:text-5xl sm:3xl md:text-4xl text-gray-950 dark:text-gray-300 font-bold ease-linear">
            MERN Stack Developer
          </h1>
        </div>
        <ul className="hidden lg:flex flex-col gap-y-7 pr-5 ">
          {socialMedia.map((social, index) => (
            <li key={index}>
              <Link
                data-tooltip-id="my-tooltip"
                data-tooltip-content={social.name}
                data-tooltip-place="left"
                to={social.url}
                className="text-3xl dark:hover:text-gray-400 text-gray-950 dark:text-gray-300 hover:text-gray-500 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110"
              >
                {social.icon}
              </Link>
              <Tooltip id="my-tooltip" />
            </li>
          ))}
        </ul>
      </div>
      {/* Add ref to the element you want to scroll to */}
      <div ref={latestWorksRef} className='flex flex-col items-center justify-center mt-10'>
        <button className='btn btn-sm dark:btn-outline' onClick={scrollToLatestWorks}>Latest Works</button>
        <FaArrowDownLong className="animate-bounce text-4xl text-gray-950 dark:text-gray-300 mt-3" onClick={scrollToLatestWorks} />
      </div>
    </div>
  );
};

export default HomeCard;
