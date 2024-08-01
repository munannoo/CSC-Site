import { FaFacebook, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <div className="py-20">
      <div className="py-5 flex justify-center">
        <FaFacebook className="px-1 w-20" size={50} />
        <FaInstagram className="px-1 w-20" size={50} />
        <FaYoutube className="px-1 w-20" size={50} />
        <FaDiscord className="px-1 w-20" size={50} />
      </div>
      <div className="py-7 text-center">
        <ul className="flex flex-col sm:flex-row justify-center">
          <li className="px-7 text-slate-300">Home</li>
          <li className="px-7 text-slate-300">Events</li>
          <li className="px-7 text-slate-300">Members</li>
          <li className="px-7 text-slate-300">Contact</li>
        </ul>
      </div>
      <div className="py-7 text-center">
        <p className="text-slate-300">
          Copyright &copy; 2024 CCRC SCIENTIFIC CIRCLE
        </p>
      </div>
    </div>
  );
};

export default Footer;
