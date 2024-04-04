import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        Made with 🫀 from Peñaflor 🇨🇱 ~ {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
