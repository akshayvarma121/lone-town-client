import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10 rounded-t-2xl shadow-inner">
      <p className="text-sm">
        © {new Date().getFullYear()} Lone Town  — Designed & Developed by Akshay Varma
      </p>

      <p className="text-xs mt-1 italic text-gray-400">
        A Mindful Matchmaking Experience. One Match. One Decision. One Chance.
      </p>

      <div className="flex justify-center gap-6 mt-3 text-sm">
        <a
          href="https://akshayvarma1201.netlify.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-pink-400"
        >
          🌐 Portfolio
        </a>

        <a
          href="https://github.com/akshayvarma121"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-pink-400"
        >
          🧑‍💻 GitHub
        </a>

        <a
          href="https://linkedin.com/in/akshay-varma1201"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-pink-400"
        >
          🔗 LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
