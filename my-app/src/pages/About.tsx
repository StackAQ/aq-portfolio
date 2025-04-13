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

const About: React.FC = () => {
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
      </div>

      <div className="flex justify-between items-center flex-col lg:flex-row px-4 lg:px-16">
        <div className="space-y-4 text-white font-medium">
          <h1 className="text-2xl lg:text-4xl uppercase">
            About <span className="text-cyan-300">Me</span>
          </h1>
          <p className="lg:text-xl font-normal">
            Hi, I'm <span className="text-cyan-300">Abdulqudus</span>, a{" "}
            <span className="text-cyan-300">Front-End Developer</span> with a{" "}
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
        </div>
        <img src="hero.png" alt="" className="w-full lg:w-1/3 " />
      </div>

      <div className="skill">
        <h2 className="text-2xl lg:text-4xl text-white text-center">
          MY <span className="text-cyan-300">EXPERTISE</span>
        </h2>
        <div className="expertises">
          <div className="expertises-div">
            <img src="html.svg" alt="" />
          </div>
          <div className="expertises-div">
            <img src="css.svg" alt="" />
          </div>
          <div className="expertises-div">
            <img src="javascript.svg" alt="" />
          </div>
          <div className="expertises-div">
            <img src="tailwind.svg" alt="" />
          </div>
          <div className="expertises-div">
            <img src="typescript.svg" alt="" />
          </div>
          {/* the six */}

          <div className="col-span-1 hidden lg:grid"></div>
          <div className="expertises-div">
            <img src="rreact.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="python.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="node-js.svg" className="w-full" alt="" />
          </div>
          <div className="col-span-1 hidden lg:grid"></div>
        </div>
      </div>

      <div className="tools">
        <h2 className="text-2xl lg:text-4xl text-white text-center">
          MY <span className="text-cyan-300">TOOLS</span>
        </h2>
        <div className="expertises">
          <div className="expertises-div">
            <img src="vscode.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="canva.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="excel.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="jupyter.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="vite.svg" className="w-full" alt="" />
          </div>
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
