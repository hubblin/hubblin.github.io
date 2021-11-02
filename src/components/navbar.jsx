import React, { useCallback, useState, memo } from "react";
import "../styles/navbar.scss";

import { MdMenu } from "react-icons/md";

const Navbar = memo(() => {
  const [active, setActive] = useState(false);

  const click = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar__logo">MMFIN.</div>

          <ul className="navbar__menu">
            <li>
              <a id="navbarAbout">About me</a>
            </li>
            <li>
              <a id="navbarService">Skills</a>
            </li>
            <li>
              <a id="navbarPortfolio">Portfolio</a>
            </li>
          </ul>

          <div className="toggleBtn" onClick={click}>
            <MdMenu />
          </div>
        </nav>
      </header>
      {active && (
        <div className="toggle__menu">
          <ul>
            <li>
              <a href="">About me</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
});

export default Navbar;
