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

const skills = [
  "/html.svg",
  "/css.svg",
  "/javascript.svg",
  "/tailwind.svg",
  "/typescript.svg",
  "/rreact.svg",
  "/python.svg",
  "/node-js.svg",
];

const tools = [
  "/vscode.svg",
  "/figma.svg",
  "/canva.svg",
  "/excel.svg",
  "/jupyter.svg",
  "/vite.svg",
];

const About: React.FC = () => {
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
      <div className="flex justify-between items-center flex-col lg:flex-row px-4 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 text-white font-medium"
        >
          <h1 className="text-2xl lg:text-4xl uppercase">
            About <span className="text-cyan-300">Me</span>
          </h1>
          <p className="lg:text-xl font-normal">
            Hi, I'm <span className="text-cyan-300">Abdulqudus</span>, a{" "}
            <span className="text-cyan-300">Web Developer</span> with a{" "}
            <span className="text-cyan-300">B.Tech</span> in{" "}
            <span className="text-cyan-300">Computer Science</span> from LADOKE
            AKINTOLA UNIVERSITY OF TECHNOLOGY. I specialize in building modern,
            scalable web applications with technologies like{" "}
            <span className="text-cyan-300">
              React, TypeScript, and Next.js
            </span>
            . I also hold a diploma in{" "}
            <span className="text-cyan-300">Office Technology Management</span>{" "}
            from SQI, which enhances my organizational and technological skills.
            Passionate about problem-solving and innovation, I am constantly
            learning and improving my craft in both front-end and back-end
            development.
          </p>

          <p className="lg:text-xl font-normal">
            With a passion for problem-solving, I enjoy creating efficient and
            user-friendly digital solutions. Beyond coding, I'm expanding my
            expertise in <span className="text-cyan-300">graphics design</span>{" "}
            to bring a creative perspective to my projects.
          </p>
          <p className="lg:text-xl font-normal">
            Let's connect and create impactful solutions together!
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="hero.png"
          alt=""
          className="w-full lg:w-1/3 "
        />
      </div>

      <div className="skill">
        <h2 className="text-2xl lg:text-4xl text-white text-center">
          MY <span className="text-cyan-300">EXPERTISE</span>
        </h2>
        <div className="expertises">
          {skills.map((e, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              key={index}
              className="expertises-div"
            >
              <img src={e} alt="" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="tools">
        <h2 className="text-2xl lg:text-4xl text-white text-center">
          MY <span className="text-cyan-300">TOOLS</span>
        </h2>
        <div className="expertises lg:grid-cols-3">
          {tools.map((e, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              key={index}
              className="expertises-div"
            >
              <img src={e} alt="" />
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

export default About;
