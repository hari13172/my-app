import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import "./Testionial.css";
import TestimonialApi from "./Testimonial.Api";
import data from "../Testionial/Testimonial.Api";

const Testionial = () => {
  const [data, setdata] = useState(TestimonialApi);
  const [index, setindex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) setindex(lastIndex);
    if (index > lastIndex) setindex(1);
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(()=> {
      setindex(index + 1)
    }, 30000)
  
    return () => clearInterval(slider)
  }, [index])
  

  return (
    <>
      <section className="Testimonial" id="clients">
        <div className="container">
          <div className="heading text-center">
            <h4>What Clients says</h4>
            <h1>Testimonial</h1>
          </div>

          <div className="slide">
            {data.map((value, valueIndex) => {
              return (
                <Slide
                  key={value.id}
                  {...value}
                  valueIndex={valueIndex}
                  index={index}
                />
              );
            })}

            <div className="slide_button">
              <button className="btn_shadow prev_btn" onClick={() => setindex(index - 1)}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="btn_shadow next_btn" onClick={() => setindex(index + 1)}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testionial;
