import logo from "../assets/ss_L.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-red mb-20 flex items-center justify-between py-6 px-8">
        <div className="flex flex-shrink-0 items-center gap-2">
            <img src={logo} alt="logo" className="mx-1 w-12 h-12" />
            <span className="text-xl font-semibold text-white">Sanya Saeed</span>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
        href="https://www.linkedin.com/in/sanyasaeed2911/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 transition-all"
      >
        <FaLinkedin />
      </a>
      
      <a
        href="https://github.com/Sanya2911"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-all"
      >
        <FaGithub />
      </a>
      
      <a
        href="https://x.com/sanya_saeed29"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-all"
      >
        <FaSquareXTwitter />
      </a>
        </div>
    </nav>
  )
}

export default Navbar