import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaGoogle, FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-800 top-0 w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          exact
          className="text-white text-xl font-bold flex items-center"
          activeClassName="text-white"
        >
          <FaHome className="mr-2" />
          Humanoid Chatbot
        </NavLink>
        <nav className="space-x-4 flex">
          <NavLink
            to="/about"
            className="text-gray-300 hover:text-white text-lg transition duration-300 ease-in-out"
            activeClassName="text-white"
          >
            About
          </NavLink>
          <NavLink
            to="https://github.com/LordHarsh/humanoid-chatbot-webapp"
            target="_blank"
            className="text-gray-300 hover:text-white text-lg transition duration-300 ease-in-out flex items-center"
            as="a"
          >
            <FaGithub className="mr-1" />
            GitHub
          </NavLink>
          <NavLink
            to="https://colab.research.google.com/drive/1H6fAAomocTLyMaLO2X0IQW7a2VFQc4xR?usp=sharing"
            target="_blank"
            className="text-gray-300 hover:text-white text-lg transition duration-300 ease-in-out flex items-center"
            as="a"
          >
            <FaGoogle className="mr-1" />
            Colab
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
