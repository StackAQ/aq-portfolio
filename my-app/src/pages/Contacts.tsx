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
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../index.css";

const Contacts: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const socials = [
    {
      icon: <FaEnvelope />,
      name: "EMAIL",
      result: "abdullateefqudusleeq@gmail.com",
    },
    {
      icon: <FaPhone />,
      name: "PHONE",
      result: "+2347035612652",
    },
    {
      icon: <FaMapMarkerAlt />,
      name: "LOCATION",
      result: "Lagos, Nigeria",
    },
  ];

  const inputtype = [
    {
      sn: 1,
      type: "text",
      placeholder: "Full name",
    },
    {
      sn: 2,
      type: "email",
      placeholder: "Email address",
    },
    {
      sn: 3,
      type: "phone",
      placeholder: "Phone number",
    },
  ];

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

      <div className="md:px-4 lg:px-16 flex gap-16 items-start flex-col lg:flex-row">
        <div className="contact-left">
          <div className="grid gap-6 py-8 border-b border-b-cyan-300">
            <div className="avatar w-32 h-32">
              <img src="../public/avatar.png" alt="" className="" />
            </div>
            <span className="text-sm md:text-base lg:text-lg text-center text-cyan-300 uppercase font-medium">
              Abdullateef Abdulqudus
            </span>
            <span className="text-xs md:text-sm lg:text-base text-center text-white font-medium">
              Full-Stack Developer
            </span>
          </div>
          <div className="grid gap-6 py-6">
            {socials.map((each) => (
              <div className="flex items-center gap-4">
                <span className="p-2 text-cyan-300 ring-1 ring-cyan-300 shadow-sm rounded-lg shadow-cyan-300">
                  {each.icon}
                </span>
                <div className="grid gap-2 font-medium text-xs">
                  <span className="text-gray-400">{each.name}</span>
                  <span className="text-white">{each.result}</span>
                </div>
              </div>
            ))}

            <div className="flex justify-center items-center gap-8">
              <a href="" className="text-white text-base hover:text-cyan-300">
                <FaGithub />
              </a>
              <a href="" className="text-white text-base hover:text-cyan-300">
                <FaTwitter />
              </a>
              <a href="" className="text-white text-base hover:text-cyan-300">
                <FaLinkedin />
              </a>
              <a href="" className="text-white text-base hover:text-cyan-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-8 font-medium">
          <h2 className="text-white text-xl lg:text-3xl">
            <span className="text-cyan-300">Contact</span> Form
          </h2>
          <div className="map-container py-8">
            <h3 className="text-white text-lg font-medium">Our Location</h3>
            <img src="../src/assets/lagos.jpg" className="w-full cursor-pointer hover:scale-95 hover:ease-in-out duration-1000" alt="" />
          </div>

          <form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {inputtype.map((input) => (
              <input
                type={input.type}
                placeholder={input.placeholder}
                className={`grid gap-12 bg-transparent p-3 rounded-xl ring-1 ring-cyan-300 ${
                  input.sn && input.sn === 3 ? "col-span-2" : "col-span-1"
                }`}
              />
            ))}
          </form>
          <div className="flex justify-end w-full font-medium">
            <button
              className="flex items-center gap-1 text-white p-2 rounded-xl ring-cyan-300 ring-2 hover:ring-cyan-400 hover:text-cyan-400 text-base"
              type="submit"
            >
              <FaEnvelope />
              Send message
            </button>
          </div>
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

export default Contacts;
