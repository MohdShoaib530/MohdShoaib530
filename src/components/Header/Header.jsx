import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

function Header() {
  const navigate = useNavigate();
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
      <div className="text-3xl text-gray-300 absolute right-3 lg:left-5">MS.</div>
      <ul className="navbar-nav gap-2 hidden lg:flex absolute right-5">
        {buttons.map((button) => (
          <li key={button.id} className="nav-item ">
            <button
              onClick={() => navigate(button.link)}
              className="btn btn-sm btn-outline "
            >
              {button.text}
            </button>
          </li>
        ))}
      </ul>
      <div className="drawer absolute left-0 z-50 w-full lg:hidden">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="cursor-pointer relative flex items-center justify-between w-full"
          >
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className=" font-bold text-white m-4 lg:hidden"
            />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full p-4 w-48 sm:w-80 bg-base-200 text-base-content">
            <li className="w-fit text-white  z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
