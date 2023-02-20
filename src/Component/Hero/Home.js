import React from "react";
import Hero from "../pic/hero.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";

import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Welcome to my portfolio</h3>
            <h1>
              Hi, I'm <span>Anish Kumar</span>
            </h1>
            <h2>
              a
              <span>
                {" "}
                <Typewriter
                  words={["Networking professional", "Developer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              lorem ipsum dolor sit aimt informationenn aoesriorer
              inforkationdjn randomeditijscvbvhb
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Find With ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                      <i className="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <a
                      href="https://www.instagram.com/anish13kumar/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>Best Skills</h4>
                <button className="btn_shadow">
                  <img src={skill1} />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} />
                </button>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right_img">
              <img src={Hero} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
