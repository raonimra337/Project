// import React from 'react'
// import { Carousel } from 'react-bootstrap/Carousel'

import { useState } from "react";
import ar1 from "../assets/ar1.png";
import ar2 from "../assets/ar2.png";
import ar3 from "../assets/ar3.png";
// import ar2 from "../assets/ar4.png";

function Home() {

   const slides = [
    {
      image: ar1,
      title: "Architecture",
      subtitle: "Modern Architecture",
      description:
        "Innovative architectural solutions designed to transform spaces and create lasting value.",
    },
    {
      image: ar2,
      title: "Interior",
      subtitle: "Interior Design Studio",
      description:
        "Creating beautiful and functional interiors that enhance everyday living.",
    },
    {
      image: ar3,
      title: "Construction",
      subtitle: "Building Solutions",
      description:
        "Reliable construction services delivering quality and excellence in every project.",
    },
    {
      image: ar2,
      title: "Sustainability",
      subtitle: "Sustainable Design",
      description:
        "Sustainability focuses on meeting the needs of the present without compromising future generations.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
     <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      <div className="overlay">

        <div className="slide-count">
          <span>{current + 1}</span>
          <span>/</span>
          <span>{slides.length}</span>
        </div>

        <div className="hero-content">
          <h1>{slides[current].title}</h1>
          <h3>{slides[current].subtitle}</h3>
        </div>

        <div className="hero-right">
          <p>{slides[current].description}</p>

          <button className="service-btn">
            Our Services ↗
          </button>
        </div>

        <div className="arrows">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>

      </div>
    </section>
)
}

export default Home











    // <div>
    /* Carousels
      <Carousel fade controls indicators={false}>
        <Carousel.Item>
          <div
            style={{
              height: "100vh",
              backgroundImage:
                "url('https://src/assets/ar1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-start h-100 text-white ps-5"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <h1 className="display-1 fw-bold">Interior</h1>
              <h2>Interior Design Studio</h2>
              <button className="btn btn-outline-light mt-3">
                Our Services
              </button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            style={{
              height: "100vh",
              backgroundImage:
                "url('https://src/assets/ar2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-start h-100 text-white ps-5"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <h1 className="display-1 fw-bold">Architecture</h1>
              <h2>Modern Design Solutions</h2>
              <button className="btn btn-outline-light mt-3">
                View Portfolio
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel> */
    // </div>
