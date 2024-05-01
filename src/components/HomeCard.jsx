import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import { FaArrowDownLong } from "react-icons/fa6";
import { useRef } from "react";
import { FaUpwork  } from "react-icons/fa6";

const HomeCard = () => {
  const socialMedia = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohd-shoaib530/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/MohdShoaib530",
      icon: <FaGithub />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mohd.shoaib_91/",
      icon: <FaInstagram />,
    },
    {
      name: "Gmail",
      url: "mailto:mohdshoaib91530@gmail.com",
      icon: <BiLogoGmail />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/MohdShoaib915",
      icon: <FaTwitter />,
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0102a4f512110275d7",
      icon: <FaUpwork />,
    },
  ];

  // Create a ref for the element you want to scroll to
  const latestWorksRef = useRef(null);

  const scrollToLatestWorks = () => {
    // Scroll to the latest works section
    latestWorksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <div className="flex flex-col items-center  lg:justify-between lg:flex-row w-full ">
        <div className="flex flex-col justify-center items-center w-fit lg:w-7/12 min-h-[75vh] lg:min-h-[70vh]">
          <h1 className="lg:text-5xl text-3xl md:text-4xl text-gray-950 dark:text-gray-300 font-semibold">
            Hi There! <br /> I&apos;M Mohammad Shoaib
          </h1>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 lg:text-5xl text-3xl md:text-4xl text-gray-950 dark:text-gray-300 font-bold ease-linear">
            MERN Stack Developer
          </h1>
        </div>
        <ul className="hidden lg:flex flex-col gap-y-7 pr-5 ">
          {socialMedia.map((social, index) => (
            <li key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={social.name}
                data-tooltip-place="left"
                className="text-3xl dark:hover:text-gray-400 text-gray-950 dark:text-gray-300 hover:text-gray-500 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
              <Tooltip id="my-tooltip" />
            </li>
          ))}
        </ul>
      </div>
      {/* Add ref to the element you want to scroll to */}
      <div
        ref={latestWorksRef}
        className="flex flex-col items-center justify-center"
      >
        <button
          className="submit-btn btn btn-sm btn-outline dark:text-gray-300 text-gray-950  relative ease-out hover:ease-in transition duration-300 transform hover:scale-110 "
          onClick={scrollToLatestWorks}
        >
          Latest Works
        </button>
        <FaArrowDownLong
          className="animate-bounce text-4xl text-gray-950 dark:text-gray-300  mt-3"
          onClick={scrollToLatestWorks}
        />
      </div>
    </div>
  );
};

export default HomeCard;
