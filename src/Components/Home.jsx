// import React from 'react'
import { Link } from 'react-router-dom'


import A1 from "../assets/A1.png";
import { TfiArrowTopRight } from 'react-icons/tfi';
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import A4 from "../assets/A4.png";
 
function Home() {
  return (
    <div className='container-fluid m-0 p-0'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={A1} className="w-100" alt="img1" />
          
            <div className="carousel-caption">
              <div className="row">
                <div className="col-lg-1 mb-5">
                  <h1 className='me-5 pe-5 display-6 fw-semibold'>
                    1
                    <br />
                    ,
                    <br />
                    4
                  </h1>

                </div>

                <div className="col-lg-7 col-sm-6 col-md-6">
                  <h1 className='me-5 pe-5 display-1 fw-semibold mt-3'>Architecture</h1>
                  <h3 className='me-5 pe-5 fw-semibold'>Architecture Design Studio</h3>
                </div>
              
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <p className='pb-4 fw-semibold'>"Architecture refers to both the process and the product of planning, designing, and constructing buildings or other physical structures."</p>
              
                  <Link to ="/">
                    <button className='btn p-3 ps-5 pe-4 text-white bg-transparent fs-6 border rounded-5'>
                      Our Services
                      <TfiArrowTopRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={A2} style={{ height: "800px" }} className="pic w-100" alt="img2" id='pic' />
          
            <div className="carousel-caption">
              <div className="row">
                <div className="col-lg-1 mb-5">
                  <h1 className='me-5 pe-5 display-6 fw-semibold'>
                    2
                    <br />
                    ,
                    <br />
                    4
                  </h1>

                </div>

                <div className="col-lg-7 col-sm-6 col-md-6">
                  <h1 className='me-5 pe-5 display-1 fw-semibold mt-3'>Interior</h1>
                  <h3 className='me-5 pe-5 fw-semibold'>Interior Design Studio</h3>
                </div>
              
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <p className='pb-4 fw-semibold'>"Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space."</p>
              
                  <Link to ="/">
                    <button className='btn p-3 ps-5 pe-4 text-white bg-transparent fs-6 border rounded-5'>
                      Our Services
                      <TfiArrowTopRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={A3} className="w-100" alt="img3" />
          
            <div className="carousel-caption">
              <div className="row">
                <div className="col-lg-1 mb-5">
                  <h1 className='me-5 pe-5 display-6 fw-semibold'>
                    3
                    <br />
                    ,
                    <br />
                    4
                  </h1>

                </div>

                <div className="col-lg-7 col-sm-6 col-md-6">
                  <h1 className='me-5 pe-5 display-1 fw-semibold mt-3'>Contruction</h1>
                  <h3 className='me-5 pe-5 fw-semibold'>Construction Management</h3>
                </div>
              
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <p className='pb-4 fw-semibold'>"Professional construction management services ensuring quality, efficiency, and timely completion of projects from planning to execution."</p>
              
                  <Link to ="/">
                    <button className='btn p-3 ps-5 pe-4 text-white bg-transparent fs-6 border rounded-5'>
                      Our Services
                      <TfiArrowTopRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={A4} className="w-100" alt="img4" />
          
            <div className="carousel-caption">
              <div className="row">
                <div className="col-lg-1 mb-5">
                  <h1 className='me-5 pe-5 display-6 fw-semibold'>
                    4
                    <br />
                    ,
                    <br />
                    4
                  </h1>

                </div>

                <div className="col-lg-7 col-sm-6 col-md-6">
                  <h1 className='me-5 pe-5 display-1 fw-semibold mt-3'>Sustainability</h1>
                  <h3 className='me-5 pe-5 fw-semibold'>Sustainable Design </h3>
                </div>
              
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <p className='pb-4 fw-semibold'>" Sustainability focuses on meeting the needs of the present without compromising the ability of future generations to meet their needs."</p>
              
                  <Link to ="/">
                    <button className='btn p-3 ps-5 pe-4 text-white bg-transparent fs-6 border rounded-5'>
                      Our Services
                      <TfiArrowTopRight />
                    </button>
                  </Link>

                </div>
              </div>

            </div>
          </div>

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
    </div>
  )
}

export default Home
