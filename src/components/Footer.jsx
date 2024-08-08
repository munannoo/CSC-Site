import { FaFacebook, FaInstagram, FaYoutube, FaDiscord, FaGithub } from "react-icons/fa";
import { navLinks } from "../data";

const Footer = () => {
  console.log(navLinks);

  return (
    <div className="py-20">
      <div className="py-5 flex justify-center">
        <a target="_blank" href="https://www.facebook.com/ccrc.science">
          <FaFacebook className="px-1 w-20" size={50} />
        </a>
        <a href="https://www.instagram.com/ccrc.science/" target="_blank">
          <FaInstagram className="px-1 w-20" size={50} />
        </a>
        <a href="https://www.youtube.com/@ccrcscientificcircle" target="_blank">
          <FaYoutube className="px-1 w-20" size={50} />
        </a>
        <a href="https://discord.gg/XRKtju8psq" target="_blank">
          <FaDiscord className="px-1 w-20" size={50} />
        </a>
        <a href="https://github.com/0mdrn" target="_blank">
          <FaGithub className="px-1 w-20" size={50} />
        </a>
      </div>
      <div className="py-7 text-center">
        <ul className="flex flex-col sm:flex-row justify-center">
          {navLinks.map((nav) => (
            <li key={nav.id} className=" px-7 text-slate-300">
              <a className="hover:underline" href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-7 text-center">
        <p className="text-slate-300">
          Made with 💗 by <a href="https://github.com/0mdrn" target="_blank" style={{ color: 'cyan'}}>MDRN </a>|| Copyright &copy; 2024 <a href="https://github.com/0mdrn" target="_blank" style={{ color: 'cyan'}}>MDRN </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
