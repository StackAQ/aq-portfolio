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
} from "react-icons/fa";
import "../index.css";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="general">
      <div className="hero">
        <nav className="navbar">
          <h2 className="logo">AQ.</h2>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FaBars />
          </button>
          <ul className={`menu ${isOpen ? "open" : "hidden lg:flex"}`}>
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
        </nav>
        <div className="hero-layout">
          <div className="text-2xl lg:text-4xl space-y-12">
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
              FULL-STACK DEVELOPER
            </h1>
          </div>
          <div className="w-full lg:w-1/3">
            <img src="/public/author.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="text-layout">
        <div className="the-flex">
          <div className="intro-layout">
            <h1 className="text-4xl uppercase">
              Allow me to <span className="text-cyan-300">present</span> myself
            </h1>
            <p className="text-lg lg:text-xl">
              I'm <span className="key-text">Abdulqudus</span>, a passionate{" "}
              <span className="key-text">Full Stack Developer</span> with
              expertise in <span className="key-text">React</span>,{" "}
              <span className="key-text">TypeScript</span> and{" "}
              <span className="key-text">Python</span> for{" "}
              <span className="key-text">Data Science</span>, while continuously
              expanding my knowledge in technologies like{" "}
              <span className="key-text">Excel</span> for data analysis app
              while sharpening my skills. Let's collaborate and bring ideas to
              life!
            </p>
          </div>
          <div className="avatar">
            <img src="/public/avatar.png" alt="" />
          </div>
        </div>
      </div>

      <div className="connect-layout">
        <div className="space-y-2 text-white">
          <h2 className="text-3xl lg:text-4xl">FIND ME ON</h2>
          <p className="text-lg">
            Feel free to <span className="text-cyan-300">connect</span> with me
          </p>
        </div>
        <div className="flex justify-center items-center gap-6">
          <a href="" className="social-media">
            <FaGithub />
          </a>
          <a href="" className="social-media">
            <FaTwitter />
          </a>
          <a href="" className="social-media">
            <FaLinkedin />
          </a>
          <a href="" className="social-media">
            <FaInstagram />
          </a>
        </div>
      </div>

      <footer>
        <span>Designed and Developed by Abdullateef Abdulqudus</span>
        <span>Copyright &copy; 2025 AQ</span>

        <div className="flex justify-center items-center gap-8">
          <a href="" className="text-white text-base">
            <FaGithub />
          </a>
          <a href="" className="text-white text-base">
            <FaTwitter />
          </a>
          <a href="" className="text-white text-base">
            <FaLinkedin />
          </a>
          <a href="" className="text-white text-base">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
