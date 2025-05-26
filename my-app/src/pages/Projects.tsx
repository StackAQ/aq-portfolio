import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaBars,
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaTimes
} from "react-icons/fa";

import { motion } from "framer-motion";
import "../index.css";

interface Date {
  imgUrl: string;
  title: string;
  description: string;
  link: string;
}

const data: Date[] = [
  {
    imgUrl: "easybanking.jpg",
    title: "Easybanking Landing Page",
    description:
      "A modern and responsive banking website designed to captivate users with intuitive navigation and aesthetic appeal.",
    link: "https://aq-easybanking-landing-page.vercel.app/",
  },

  {
    imgUrl: "weather.jpg",
    title: "My Weather App",
    description:
      "A sleek and responsive Weather App that provides real-time weather updates for any city. It displays temperature, weather conditions",
    link: "https://weather-app-seven-lac-62.vercel.app/",
  },

  {
    imgUrl: "quote.jpg",
    title: "Quote Generator App",
    description:
      "This app displays random motivational, philosophical, or humorous quotes each time you press the generate button.",
    link: "https://quote-generator-topaz-nine.vercel.app/",
  },

  {
    imgUrl: "dua.png",
    title: "Husnul Muslim Dua App",
    description: "A beautifully designed app that provides a collection of Islamic supplications (duas) for various occasions.",
    link: "https://husnul-muslim-abdulqudus-app.vercel.app/",
  },

  {
    imgUrl: "med.png",
    title: "Medical Duties Scheduler",
    description: "A comprehensive scheduling tool designed for medical professionals to manage their duties and appointments effectively.",
    link: "https://qudus-lautech-med-scheduler.vercel.app/"
  },

  {
    imgUrl: "mortgage.jpg",
    title: "Mortgage Repayment Calculator",
    description:
      "A practical tool that helps users calculate and plan their mortgage repayments efficiently.",
    link: "https://mortage-calculator-53v1-e158xsy81-abdulqudus-projects-e654a863.vercel.app",
  },

  {
    imgUrl: "multi-step.jpg",
    title: "Multi Step Form",
    description:
      "A smooth and interactive form experiences designed to collect user input in a step by step format.",
    link: "https://multi-step-form-omega-six.vercel.app/",
  },

  {
    imgUrl: "klothink.png",
    title: "Klothink E-Commerce Store",
    description:
      "An online fashion store featuring a sleek interface for seamless browsing and purchasing experiences.",
    link: "https://klothink-e-commerce-qudus.vercel.app/",
  },

  {
    imgUrl: "product-cart.jpg",
    title: "Product Cart Platform",
    description:
      "A robust cart management system allowing users to add, remove, and purchase items effortlessly.",
    link: "",
  },

  {
    imgUrl: "loopstudio.jpg",
    title: "Loopstudio Landing Page",
    description:
      "A dynamic and interactive landing page showcasing a cutting-edge studio's services.",
    link: "https://loopstudio-landing-page-fawn.vercel.app/",
  },

  {
    imgUrl: "price-toggle.jpg",
    title: "Price toggle",
    description:
      "A feature-rich pricing interface that enables users to switch between monthly and yearly plans effortlessly.",
    link: "",
  },

  {
    imgUrl: "wnews.jpg",
    title: "W. News",
    description:
      "A news aggregation platform delivering current events with a clean, minimalistic design",
    link: "",
  },

  {
    imgUrl: "rating.jpg",
    title: "Rating App",
    description:
      "An application that lets users rate products or services, providing valuable feedback for improvement.",
    link: "",
  },
];

const Projects: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="general">
<nav className="navbar">
        <h2 className="logo">AQ.</h2>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>
        <ul className="hidden lg:flex menu">
          <li>
            <Link to="/" className="a-link">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="a-link">
              <FaUser /> About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="a-link">
              <FaCode /> Projects
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="a-link">
              <FaEnvelope /> Contacts
            </Link>
          </li>
        </ul>

        {isOpen && (
          <div className="menu-open">
            <ul className="grid gap-4 w-full">
              <li>
                <Link to="/" className="a-link">
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="a-link">
                  <FaUser /> About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="a-link">
                  <FaCode /> Projects
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="a-link">
                  <FaEnvelope /> Contacts
                </Link>
              </li>
            </ul>
            <button className="text-xl text-white" onClick={toggleMenu}>
              <FaTimes />
            </button>
          </div>
        )}
      </nav>

      <div className="projects">
        <div className="space-y-4 text-center text-white font-medium">
          <h1 className="text-2xl lg:text-4xl">
            MY RECENT <span className="text-cyan-300">WORKS</span>
          </h1>
          <p className="text-base lg:text-lg">
            Here are some of my notable projects
          </p>
        </div>
        <div className="projects-layout">
          {data.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              key={index}
              className="project-div"
            >
              <img src={project.imgUrl} alt="" />
              <div className="grid gap-4 text-white font-medium text-center">
                <span className="text-lg lg:text-xl">{project.title}</span>
                <span className="text-sm lg:text-base">
                  {project.description}
                </span>
                <a
                  href={project.link}
                  className="cursor-pointer bg-transparent ring-2 ring-cyan-300 p-2 rounded-lg text-cyan-300"
                >
                  view
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <footer>
        <span>Designed and Developed by Abdullateef Abdulqudus</span>
        <span>Copyright &copy; 2025 AQ</span>

        <div className="flex justify-center items-center gap-8">
          <a href="https://github.com/StackAQ" className="text-white text-base">
            <FaGithub />
          </a>
          <a
            href="https://x.com/ApexDev026?t=O0UTBLcyHHMAYFycOp8i9g&i9g&s=08"
            className="text-white text-base"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullateef-abdulqudus-4a730432b?utm_source=share&utm_campaign=share_via"
            className="text-white text-base"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/qudus.26?igsh=NDJiZmphMXpyanpj"
            className="text-white text-base"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
