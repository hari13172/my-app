import React from "react";
import Card from "./Card";
import ResumeApi from "./ResumeApi";
import "./Resume.css"

export const Resume = () => {
  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h4>2+ years experience</h4>
            <h1>my resume</h1>
          </div>

          <div className="content-section mtop d_flex">
            <div className="left">
              <div className="heading">
                <h4>2019-2023</h4>
                <h1>education Quality</h1>
              </div>

              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="left">
              <div className="heading">
                <h4>2019-2023</h4>
                <h1>job experience</h1>
              </div>

              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category === "experience") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
