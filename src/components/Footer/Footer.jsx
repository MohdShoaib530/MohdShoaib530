import { FaLinkedin, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Tooltip } from 'react-tooltip';
import './Footer.css'

function Footer() {
  const socialMedia = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mohd-shoaib530/", icon: <FaLinkedin /> },
    { name: "GitHub", url: "https://github.com/MohdShoaib530", icon: <FaGithub /> },
    { name: "Instagram", url: "https://www.instagram.com/mohd.shoaib_123/", icon: <FaInstagram /> },
    { name: "Gmail", url: "mailto:mohdshoaib91530@gmail.com", icon: <BiLogoGmail /> },
    { name: "Twitter", url: "https://twitter.com/MohdShoaib530", icon: <FaTwitter /> },
  ];
  const scrollPageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
      <footer className="footer px-10 py-4 dark:bg-slate-800 bg-gray-200 text-base-content flex flex-col lg:flex-row justify-between items-center pt-10">
        
        <div>
            <p className="text-center text-gray-950 dark:text-gray-200">
                &copy; {year} All rights reserved. Made with{" "}
                <span role="img" aria-label="heart">
                ❤️
                </span>{" "}
                by{" "}
                <button 
                onClick={() => scrollPageUp()}
                className='text-blue-500'
                data-tooltip-id="on-top-tooltip"
                data-tooltip-content='On-Top'
                data-tooltip-place="top"
                >
                  Mohd Shoaib
                </button>
                <Tooltip id="on-top-tooltip" />
            </p>
        </div>
        <nav className="md:place-self-center md:justify-self-end mb-2">
          <div className="grid grid-flow-col gap-5">
          {socialMedia.map((social, index) => (
            <li key={index} className="social-media-item">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={social.name}
                data-tooltip-place="top"
                className=" text-3xl dark:hover:text-gray-400 text-gray-950 dark:text-gray-300 hover:text-gray-500 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
              <Tooltip id="my-tooltip" />
            </li>
          ))}
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
