import { ImStatsDots } from "react-icons/im";

import { RiTimeLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className=" navbar bg-base-100 border-gray-400 shadow-cyan-400 shadow-md py-4">
        <div className="container mx-auto flex items-center text-center ">
          <div className="navbar-start">
            <a className="btn btn-ghost text-3xl font-bold gap-0 text-center items-center">
              <span className="text-3xl font-extrabold text-cyan-600">
                keen
              </span>
              keeper
            </a>
          </div>

          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost sm:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-42
               py-2 shadow items-end"
              >
                <div className="navbar-end gap-2 flex-col items-end">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-[#47698F] text-white border-[#35567b]"
                        : "btn border-black"
                    }
                  >
                    <AiFillHome />
                    Home
                  </NavLink>
                  <NavLink
                    to="/timeline"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-[#47698F] text-white border-[#35567b]"
                        : "btn border-black"
                    }
                  >
                    <RiTimeLine />
                    Timeline
                  </NavLink>
                  <NavLink
                    to="/stats"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-[#47698F] text-white border-[#35567b]"
                        : "btn border-black"
                    }
                  >
                    <ImStatsDots />
                    Stats
                  </NavLink>
                </div>
              </ul>
            </div>

            <div className="navbar-end hidden sm:flex">
              <div className="navbar-end gap-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "btn bg-[#47698F] text-white border-[#35567b]"
                      : "btn border-black"
                  }
                >
                  <AiFillHome />
                  Home
                </NavLink>
                <NavLink
                  to="/timeline"
                  className={({ isActive }) =>
                    isActive
                      ? "btn bg-[#47698F] text-white border-[#35567b]"
                      : "btn border-black"
                  }
                >
                  <RiTimeLine />
                  Timeline
                </NavLink>
                <NavLink
                  to="/stats"
                  className={({ isActive }) =>
                    isActive
                      ? "btn bg-[#47698F] text-white border-[#35567b]"
                      : "btn border-black"
                  }
                >
                  <ImStatsDots />
                  Stats
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
