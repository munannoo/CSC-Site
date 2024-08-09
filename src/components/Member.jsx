import { members } from "../data/";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const MemberCard = ({
  profile = "https://www.freeiconspng.com/uploads/profile-icon-9.png",
  name,
  post,
  links,
}) => {
  return (
    <div className="w-64 flex flex-col">
      <img
        className="m-auto mb-5 w-60 h-60 p-3 rounded-full border-solid border-8 border-sky-500"
        src={profile}
        alt="profile picture"
      />
      <h2 className="text-slate-200 text-3xl">{name}</h2>
      <p className="text-sm font-bold text-sky-500">{post}</p>
      <div className="flex gap-1 mt-2 bg-sky-500 p-1">
        { links.facebook && (
          <a href={links.facebook}>
          <FaFacebook size={25} />
        </a> 
        )}
        {links.insta && (
        <a href={links.insta}>
          <FaInstagram size={25} />
        </a>
        )}
        {links.mail && (
        <a href={links.mail}>
          <SiGmail size={25} />
        </a>
          )}
          {links.github && (
            <a href={links.github}>
              <FaGithub size={25} />
            </a>
          )}
      </div>
    </div>
  );
};

const Member = () => {
  return (
    <div className="sm:my-20 md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-left`}>Members</h2>
      </motion.div>
      <div className="mt-10 md:mt-20 sm:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 justify-items-center gap-5">
        {members.map((member, index) => {
          return (
            <MemberCard
              key={index}
              profile={member.profile}
              name={member.name}
              post={member.post}
              github={member.github}
              links={member.links}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Member, "portfolio");
