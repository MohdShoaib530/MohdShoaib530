import {
  BsDiscord,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Tooltip } from 'react-tooltip';

function Footer() {
  const scrollPageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
      <footer className="footer px-10 py-4 border-t dark:bg-slate-800 bg-gray-200 text-base-content border-base-300 flex flex-col lg:flex-row justify-between items-center pt-10">
        
        <div>
            <p className="text-center">
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
          <div className="grid grid-flow-col gap-5 text-2xl">
            <a href="">
              <BsInstagram />
            </a>
            <a href="">
              <BsLinkedin />
            </a>
            <a href="">
              <BsTwitter />
            </a>
            <a href="">
              <BsDiscord />
            </a>
            <a href="">
              <BsGithub />
            </a>
            <a href="">
              <BiLogoGmail />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
