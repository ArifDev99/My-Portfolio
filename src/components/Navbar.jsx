import { Link } from "react-router-dom";
import { useTheme } from "../context/Theme.context.api";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faFacebook, faInstagram, faLinkedin);

export default function Navbar() {
  const { theme, toggleMode } = useTheme();

  // console.log(theme)
  return (
    <div className="nav h-16 flex justify-between items-center z-10 bg-inherit">
      <div className="cursor-pointer">
        <label htmlFor="toggle-btn" className="relative flex justify-between items-center p-2 text-xl">
        <input
          type="checkbox"
          onChange={toggleMode}
          checked={theme === "dark"}
          id="toggle-btn"
          className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        />
        <span className="w-10 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-black rounded-full duration-300 ease-in-out peer-checked:bg-white peer-checked:after:bg-black after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-2.5 group-hover:after:translate-x-1"></span>
        </label>
      </div>
      <div className="links flex gap-2"> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {/* social media links */}
      <div className="hidden justify-center items-center text-2xl gap-3 cursor-pointer md:flex  ">
        <div className="flex justify-center items-center h-8 w-8 rounded-md border-2 border-teal-400 border-opacity-50 hover:bg-teal-500">
          <a href="https://www.linkedin.com/in/arif11896/" className="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="align-middle" icon="fa-brands fa-linkedin" /></a>
          
        </div>
        <div className="flex justify-center items-center h-8 w-8 rounded-[50%] border-2 border-teal-400 border-opacity-50 hover:bg-teal-400">
          <a href="https://github.com/ArifDev99" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="align-middle"  icon="fa-brands fa-github" /></a>
        </div>
        <div className="flex justify-center items-center h-8 w-8 rounded-[50%] border-2 border-teal-400 border-opacity-50 hover:bg-teal-400">
          <a href="https://www.facebook.com/arif.rahaman.75098" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="align-middle" icon="fa-brands fa-facebook" /></a>
          
        </div>
        <div className="flex justify-center items-center h-8 w-8 rounded-md border-2 border-teal-400 border-opacity-50 hover:bg-teal-400 ">
          <a href="https://www.instagram.com/arif_rahaman_99/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="align-middle" icon="fa-brands fa-instagram" /></a>
          
        </div>
      </div>
    </div>
  );
}
