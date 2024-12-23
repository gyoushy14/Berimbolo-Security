import React from "react";
import "../components/style.css"
const Hero = () => {
  return (
    <div>
      <header>
        <div className=" header-text text-white">
          <h4
            className="mb-3"
            data-wow-duration="2s"
            data-wow-delay="1s"
          >
            BEST SECURITY SERVICES
          </h4>
          <h1
            className=" fw-bold mb-5"
            data-wow-duration="2s"
            data-wow-delay="3s"
          >
            Safe & Secure Home <br /> For Your Family
          </h1>
          <div className="row gap-2">
           
            <a
              href="#"
              class="btn btn-outline-info know btn-lg me-3 wow bounceInLeft"
              data-wow-duration="2s"
              data-wow-delay="5s"
            >
              Know More
            </a>
            <a
              href="#"
              className="btn btn-outline-danger btn-lg wow bounceInRight"
              data-wow-duration="2s"
              data-wow-delay="7s"
            >
              Contact US{" "}
            </a>
          </div>
        </div>
      </header>

      {/* <section className="py-5" id="about">
        <div class="container">
          <div className="row">
            <div class="col-md-4">
              <img
                src="images/tech shield security logo design template .png"
                alt="company name"
                className="w-100"
              />
            </div>

            <div className="col-md-8">
              <h5 className="text-primary">ABOUT US</h5>
              <h3 className="display-4 fw-bold">
                We Offers Quality CCTV <br /> Systems & Services
              </h3>

              <p className="lead my-3 fw-medium text-secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                illo aspernatur repudiandae deleniti a cupiditate.
              </p>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident sapiente, voluptate dicta voluptates ratione minus
                harum voluptas officia autem laboriosam quaerat velit labore
                possimus eius minima quos. Veniam, optio minima?
              </p>

              <div className="d-flex rounded">
                <div className="bg-primary p-3 text-white border-bottom border-danger border-3 text-center me-3 rounded-5 exper">
                  <i className="fa-solid fa-star fa-3x mb-3"></i>
                  <h6>15 Years' Experience</h6>
                </div>
                <div className="bg-danger p-3 text-white border-bottom border-primary border-3 text-center me-3 rounded-5 exper">
                  <i className="fa-solid fa-trophy fa-3x mb-3"></i>
                  <h6>15 Years' Experience</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
