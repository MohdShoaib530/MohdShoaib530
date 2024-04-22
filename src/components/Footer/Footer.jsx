import {
  BsDiscord,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
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
                <a
                href="https://www.frontendmentor.io/challenges"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
                >
                Mohd Shoaib
                </a>
            </p>
        </div>
        <nav className="md:place-self-center md:justify-self-end">
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
