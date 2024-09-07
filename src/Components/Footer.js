import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <h4>Developed by John Ayomide ABE</h4>
      <p>&copy; {currentYear} A . J</p>
      <div className="footerLinks">
        <a href="https://github.com/ablejohn" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/john-abe-601247236/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:johnabe410@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
