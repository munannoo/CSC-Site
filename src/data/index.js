import { algorithms, devnotes, oscs } from "../assets";
import gaurav from "./pfp/gaurav.jpg";
import arnav from "./pfp/arnav.jpg";
import manish from "./pfp/manish.jpg";
import shuva from "./pfp/shuva.png";
import samriddhi from "./pfp/samriddhi.png";
import jasni from "./pfp/jasni.png";
import polaris from "./pfp/polaris.png";
import samir from "./pfp/samir.png";
import sharbhan from "./pfp/sarbhan.png";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Events",
  },
  {
    id: "member",
    title: "Members",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const members = [
  {
    profile: gaurav,
    name: "Gaurav D. Phuyal",
    post: "IT Head",
    links: {
      facebook: "https://www.facebook.com/red.rupees/",
      mail: "phuyalgaurav90@gmail.com",
      insta: "https://www.instagram.com/red.rupees/",
      github: "https://github.com/phuyalgaurav",
    },
  },
  {
    profile: manish,
    name: "Manish Bagale",
    post: "Technical Advisor",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100080499631576",
      mail: "manish.bagale3@gmail.com",
      insta: "https://www.instagram.com/manishesehepatoxide/",
      github: "https://github.com/munannoo",
    },
  },
  {
    profile: arnav,
    name: "Arnav Adhikari",
    post: "Vice President",
    links: {
      facebook: "https://www.facebook.com/arnav.adhikari.927",
      mail: "arnavadhikari1011@gmail.com",
      insta: "https://www.instagram.com/iamyself._?igsh=bjJ0b2t0c3JwemJ6",
    },
  },
  {
    profile: sharbhan,
    name: "Sharban Baidhya",
    post: "Deputy Secretary",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100086576078455",
      mail: "baidhyasharban@gmail.com",
      insta: "https://www.instagram.com/sharban_baidhya?igsh=M2Uzbjd3eGQ1MWds",
    },
  },
  {
    profile: samriddhi,
    name: "Samriddhi Basyal",
    post: "Research & Development Head",
    links: {
      facebook: "https://www.facebook.com/samriddhi.basyal.96?mibextid=ZbWKwL",
      mail: "samriddhi.basyal2007@gmail.com",
      insta: "",
    },
  },
  {
    profile: shuva,
    name: "Shuva A. Gyawali",
    post: "Treasurer",
    links: {
      facebook: "https://www.facebook.com/shuvaaashis.gyawali",
      mail: "gyawalishuva2007@gmail.com",
      insta: "https://www.instagram.com/shuva_aashish9/",
    },
  },
  {
    profile: jasni,
    name: "Jasniya Shrestha",
    post: "Club Representative",
    links: {
      facebook: "https://www.facebook.com/jasni.streatham?mibextid=ZbWKwL",
      mail: "jasnishrestha28@gmail.com",
      insta: "https://www.instagram.com/invites/contact/?igsh=wzsa4l6pzi0m&utm_content=b3qbx5j",
    },
  },
  {
    profile: polaris,
    name: "Ayush GC",
    post: "Advisor",
    links: {
      facebook: "https://m.facebook.com/profile.php?id=100070325832899&name=xhp_nt__fb__action__open_user",
      mail: "polarishgharti@gmail.com",
      insta: "https://www.instagram.com/polarish_57/",
    },
  },
  {
    profile: samir,
    name: "Samir Budha",
    post: "Executive Member",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100074189107247&mibextid=ZbWKwL",
      mail: "samirbudha333@gmail.com",
      insta: "https://www.instagram.com/samir_aq7?igsh=bnB4NHZndDk1NGNy",
    },
  },
];
const portfolio = [
  {
    name: "Maze of science",
    description:
      "A quiz competition for students to test their knowledge in science, technology, engineering, and mathematics.",
    image: oscs,
  },
  // {
  //   name: "Dev Notes",
  //   description:
  //     "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
  //   image: devnotes,
  // },
  {
    name: "Electronics Workshop",
    description:
      "A workshop for students to learn the basics of electronics and build their own projects.",
    image: algorithms,
  },
];

export { portfolio };
