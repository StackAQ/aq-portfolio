import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  FaTimes,
} from "react-icons/fa";
import "../index.css";

const Home: React.FC = () => {
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

      <div className="hero">
        <div className="hero-layout">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl lg:text-4xl space-y-8"
          >
            <div className="space-y-3 text-white">
              <h1 className="">
                Hi There <span className="">👋🏻</span>
              </h1>

              <h1 className="">
                I'M{" "}
                <span className="text-cyan-300">ABDULLATEEF ABDULQUDUS</span>
              </h1>
            </div>
            <h1 className="anime text-cyan-300 text-2xl lg:text-4xl">
              WEB DEVELOPER
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center lg:w-1/3"
          >
            <img className="w-[80%]" src="author.svg" alt="" />
          </motion.div>
        </div>
      </div>

      <div className="text-layout">
        <div className="the-flex">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="intro-layout"
          >
            <h1 className="text-4xl uppercase">
              Allow me to <span className="text-cyan-300">present</span> myself
            </h1>
            <p className="text-lg lg:text-xl">
              I'm <span className="key-text">Abdulqudus</span>, a passionate{" "}
              <span className="key-text">Web Developer</span> with expertise in{" "}
              <span className="key-text">React</span>,{" "}
              <span className="key-text">TypeScript</span> and{" "}
              <span className="key-text">Python</span> for{" "}
              <span className="key-text">Data Science</span>, while continuously
              expanding my knowledge in technologies like{" "}
              <span className="key-text">Excel</span> for data analysis app
              while sharpening my skills. Let's collaborate and bring ideas to
              life!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="avatar"
          >
            <img src="avatar.png" alt="" />
          </motion.div>
        </div>
      </div>

      <div className="connect-layout">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-2 text-white"
        >
          <h2 className="text-3xl lg:text-4xl">FIND ME ON</h2>
          <p className="text-lg">
            Feel free to <span className="text-cyan-300">connect</span> with me
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center gap-6"
        >
          <a href="https://github.com/StackAQ" className="social-media">
            <FaGithub />
          </a>
          <a
            href="https://x.com/ApexDev026?t=O0UTBLcyHHMAYFycOp8i9g&i9g&s=08"
            className="social-media"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullateef-abdulqudus-4a730432b?utm_source=share&utm_campaign=share_via"
            className="social-media"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/qudus.26?igsh=NDJiZmphMXpyanpj"
            className="social-media"
          >
            <FaInstagram />
          </a>
        </motion.div>
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

export default Home;
