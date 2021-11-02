import React from "react";
import "../styles/footer.scss";

import { Github } from "@icons-pack/react-simple-icons";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-contents">
        <a href="https://github.com/hubblin">
          <Github color="#fff" size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
