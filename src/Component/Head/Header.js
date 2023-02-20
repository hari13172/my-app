import React from "react";
import "./Header.css";
import logo from "../pic/logo.png";
import { useState } from "react";

const Header = () => {
  // when scroll header at top //
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("active".window.scrollY > 100);
  });

  //toggle menu //
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="conatiner d_flex">
          <div className="logo">
            <img src={logo} />
          </div>

          <div className="navlink">
            {/* <ul className='link f_flex uppercase'> */}
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Feature</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#client">Client</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>

      <section className="demo"></section>
    </>
  );
};

export default Header;
