import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import useTheme from "../../context/theme.js";
import { Tooltip } from "react-tooltip";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Header() {

  const navigate = useNavigate();
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const socialMedia = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mohd-shoaib530/", icon: <FaLinkedin /> },
    { name: "GitHub", url: "https://github.com/MohdShoaib530", icon: <FaGithub /> },
    { name: "Instagram", url: "https://www.instagram.com/mohd.shoaib_123/", icon: <FaInstagram /> },
    { name: "Gmail", url: "mailto:mohdshoaib91530@gmail.com", icon: <BiLogoGmail /> },
    { name: "Twitter", url: "https://twitter.com/MohdShoaib530", icon: <FaTwitter /> },
  ];

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const buttons = [
    {
      id: 1,
      text: "Home",
      link: "/",
    },
    {
      id: 2,
      text: "About Me",
      link: "/about-me",
    },
  ];

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }
  return (
    <nav className="navbar flex flex-row justify-between px-6">
      <div className="text-3xl text-gray-950 font-semibold dark:text-gray-300 absolute right-3 lg:left-5 hidden lg:flex">
        MS.
      </div>
      <div className='absolute right-5 lg:right-1/4'>
        <label
          className="swap swap-rotate"
          data-tooltip-id="dark mode"
          data-tooltip-content={
            themeMode === "dark" ? "Light Mode" : "Dark Mode"
          }
          data-tooltip-place="left"
          htmlFor="theme-switcher"
        >
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={onChangeBtn}
            checked={themeMode === "dark"}
            id="theme-switcher"
          />
          <Tooltip id="dark mode" />
          {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10 text-gray-950 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-gray-300 w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <ul className="navbar-nav gap-7 hidden lg:flex absolute right-8">
        {buttons.map((button) => (
          <li key={button.id} className="nav-item ">
            <button
              onClick={() => navigate(button.link)}
              className='btn btn-sm btn-outline dark:text-gray-300 text-gray-950 0 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110 '
            >
              {button.text}
            </button>
          </li>
        ))}
      </ul>
      <div className="drawer absolute left-0 z-50 w-fit lg:hidden">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="cursor-pointer relative flex items-center justify-between w-full"
          >
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className=" font-bold text-black dark:text-white m-4 lg:hidden"
            />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full p-4 w-48 sm:w-80  text-base-content">
            <li className="w-fit text-black dark:text-gray-50   z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li  className="text-2xl dark:hover:text-gray-400 text-gray-950 dark:text-gray-300 hover:text-gray-500 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110">
              <Link to="/">Home</Link>
            </li >
            <li  className="text-2xl dark:hover:text-gray-400 text-gray-950 dark:text-gray-300 hover:text-gray-500 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110">
              <Link to="/about-me">About Me</Link>
            </li>
            {
              socialMedia.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl dark:hover:text-gray-400 text-gray-950 dark:text-gray-300 hover:text-gray-500 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110"
                  >
                    {social.icon} {social.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
