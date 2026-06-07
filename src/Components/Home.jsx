// import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowTopRight } from ''

import A1 from "../assets/A1.png";
// import A2 from "../assets/A2.png";
// import A3 from "../assets/A3.png";
// import A4 from "../assets/A4.png";
 
function Home() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      {/* <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div> */}
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={A1} className="w-100" alt="..." />
          
          <div className="carousel-caption">
            <div className="row">
              <div className="col-lg-4">
                <span>
                  1
                  <br />
                  ,
                  <br />
                </span>

                <h1>Architecture</h1>
                <h3>Architecture Design Studio</h3>
              </div>

              <p>"Architecture refers to both the process and the product of planning, designing, and constructing buildings or other physical structures."</p>
              
              <Link to ="/">
                <button>
                  Our Services
                    <TiArrowTopRight className="small ms-1" />
                </button>
              </Link>
                    

              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
        
        {/* <div className="carousel-item">
          <img src={A2} className="d-block w-100" alt="..." />
        
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div> */}
      
        {/* <div className="carousel-item">
          <img src={A3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div> */}

        {/* <div className="carousel-item active">
          <img src={A4} className="d-block w-100" alt="..." />
          
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div> */}

      </div>
      
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Home
