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
            <span className="text-cyan-300">Full-stack developer</span> with a{" "}
            <span className="text-cyan-300">B.Tech</span> in{" "}
            <span className="text-cyan-300">Computer Science</span> from LADOKE
            AKINTOLA UNIVERSITY OF TECHNOLOGY. I'm currently enhancing my{" "}
            <span className="text-cyan-300">Full-Stack</span> development skills
            at Cephas ICT Hub, building a solid foundation in modern web
            technologies. I also hold a diploma in{" "}
            <span className="text-cyan-300">Office Technology Management</span>{" "}
            from SQI, which adds an organizational and technological edge to my
            work.
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
        <img src="../src/assets/hero.png" alt="" className="w-full lg:w-1/3 " />
      </div>

      <div className="skill">
        <h2 className="text-2xl lg:text-4xl text-white text-center">
          MY <span className="text-cyan-300">EXPERTISE</span>
        </h2>
        <div className="expertises">
          <div className="expertises-div">
            <img src="../src/assets/html.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/css.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/javascript.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/tailwind.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/typescript.svg" className="w-full" alt="" />
          </div>
          {/* the six */}

          <div className="col-span-1 hidden lg:grid"></div>
          <div className="expertises-div">
            <img src="../src/assets/rreact.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/python.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/node-js.svg" className="w-full" alt="" />
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
            <img src="../src/assets/vscode.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/canva.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/excel.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/jupyter.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/vite.svg" className="w-full" alt="" />
          </div>
          {/* the six */}

          {/* <div className="col-span-1 hidden lg:grid"></div>
          <div className="expertises-div">
            <img src="../src/assets/rreact.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/python.svg" className="w-full" alt="" />
          </div>
          <div className="expertises-div">
            <img src="../src/assets/node-js.svg" className="w-full" alt="" />
          </div>
          <div className="col-span-1 hidden lg:grid"></div> */}
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

export default About;
