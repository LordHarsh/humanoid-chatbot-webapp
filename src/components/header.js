import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 fixed top-0 w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Humanoid Chatbot Test
        </Link>
        <nav className="space-x-4">
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link
            to="https://github.com/LordHarsh/humanoid-chatbot-webapp"
            target="_blank"
            className="text-gray-300 hover:text-white"
            as="a"
          >
            Source Code
          </Link>
          <Link
            to="https://colab.research.google.com/drive/1H6fAAomocTLyMaLO2X0IQW7a2VFQc4xR?usp=sharing"
            target="_blank"
            className="text-gray-300 hover:text-white"
            as="a"
          >
            Google Colab
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
