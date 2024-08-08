import { algorithms, devnotes, oscs } from "../assets";
import gaurav from "./pfp/gaurav.jpg";


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
    name: "Gaurav Phuyal",
    post: "IT Head",
    links: {
      facebook: "https://www.facebook.com/red.rupees/",
      mail: "phuyalgaurav90@gmail.com",
      insta: "https://www.instagram.com/red.rupees/",
      github: "https://github.com/phuyalgaurav",
    },
  },
  {
    profile: "",
    name: "Manish Bagale",
    post: "Technical Advisor",
    links: {
      facebook: "",
      mail: "",
      insta: "",
      github: "https://github.com/munannoo",
    },
  },
  {
    profile: "",
    name: "Ishan Kharel",
    post: "President",
    links: {
      facebook: "",
      mail: "",
      insta: "",
    },
  },
  {
    profile: "",
    name: "Arnav Adhikari",
    post: "Vice President",
    links: {
      facebook: "",
      mail: "",
      insta: "",
    },
  },
  {
    profile: "",
    name: "Bhumika Chand",
    post: "Secretary",
    links: {
      facebook: "",
      mail: "",
      insta: "",
    },
  },
  {
    profile: "",
    name: "Manish Budhathoki",
    post: "Deputy Secretary",
    links: {
      facebook: "",
      mail: "",
      insta: "",
    },
  },
  {
    profile: "",
    name: "Samriddhi Basyal",
    post: "Research & Development Head",
    links: {
      facebook: "",
      mail: "",
      insta: "",
    },
  },
  {
    profile: "",
    name: "Mayush Singh",
    post: "IT Head",
    links: {
      facebook: "",
      mail: "",
      insta: "",
    },
  },
  {
    profile: "",
    name: "Shuva Aashish Gyawali",
    post: "Treasurer",
    links: {
      facebook: "",
      mail: "",
      insta: "",
    },
  },
  {
    profile: "",
    name: "Yeman Dahal",
    post: "Program Incharge",
    links: {
      facebook: "",
      mail: "",
      insta: "",
    },
  },
  {
    profile: "",
    name: "Austin KC",
    post: "Academic Advisor",
    links: {
      facebook: "",
      mail: "",
      insta: "",
    },
  },
  {
    profile: "",
    name: "Jasniya Shrestha",
    post: "Club Representative",
    links: {
      facebook: "",
      mail: "",
      insta: "",
    },
  },
  {
    profile: "",
    name: "Ayush GC",
    post: "Advisor",
    links: {
      facebook: "",
      mail: "",
      insta: "",
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
