import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { logo } from "../assets";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition ">
        <ul className="text-center p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 pt-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>

          <Link spy={true} smooth={true} to="About">
            <li className="my-4 pt-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </Link>

          <Link spy={true} smooth={true} to="Cars">
            <li className="my-4 pt-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Cars
            </li>
          </Link>

          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 pt-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Services
            </li>
          </Link>

          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 pt-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <img
            src={logo}
            alt="Logo application"
            className="w- [122px] h-[22px] filter brightness-0 invert"
          />
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer font-semibold text-lg ">
                  Home
                </li>
              </Link>

              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer font-semibold text-lg ">
                  About
                </li>
              </Link>

              <Link spy={true} smooth={true} to="Cars">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer font-semibold text-lg ">
                  Cars
                </li>
              </Link>

              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer font-semibold text-lg ">
                  Services
                </li>
              </Link>

              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer font-semibold text-lg ">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};
export default Nav;
