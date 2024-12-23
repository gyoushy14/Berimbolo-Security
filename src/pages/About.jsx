import React from "react";
import "../components/style.css";
import { SiTarget } from "react-icons/si";
const About = () => {
  return (
    <div className="mt-5">
      <br />
      <br />
      <section className="py-5" id="about">
        <div className="container">
          <div className="row gy-4">
            {/* Section for the Image */}
            <div className="col-md-4 text-center">
              <img
                src="/images/Logo.svg"
                className="w-100 rounded-3 bg-primary"
                alt="Security"
              />
            </div>

            <div className="col-md-8 col-sm-12">
              <h5 className="text-primary m-2">ABOUT US</h5>
              <h3 className="display-5 fw-bold">
                We Offer Quality CCTV <br /> Systems & Services
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

              <div className="d-flex flex-wrap">
                <div className="bg-primary p-3 text-white border-bottom border-danger border-3 text-center me-3 mb-3 rounded-5 exper">
                  <SiTarget className=" fa-3x mb-3" />
                  <h6>15 Years' Experience</h6>
                </div>
                <div className="bg-danger p-3 text-white border-bottom border-primary border-3 text-center mb-3 rounded-5 exper">
                  <SiTarget className=" fa-3x mb-3" />
                  <h6>15 Years' Experience</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="container" />
      <section className="py-5">
        <h2 className="display-5 text-center fw-bold">About The Developer</h2>
        <div className="row justify-content-center text-center align-items-center gx-5 gy-4">
          <div className="col-lg-6 col-md-10 col-sm-12">
            <p className="fs-5">
              Mahmoud El-Gyuoshi is a skilled MERN Stack developer with
              extensive experience in building complex web applications,
              including commercial websites and management tools. Passionate
              about teaching, he has trained students in programming and
              achieved notable success in nationwide coding competitions.
              Mahmoud also works as a freelancer, managing diverse frontend and
              backend projects, with expertise in JavaScript, React, and
              Node.js.
            </p>
            <p className="fs-5 mt-3">
              Currently, he is studying in the Programming Department at WE
              Schools of Applied Technology, holds an AiCE certification from
              ALX Africa, and is completing a Software Engineering training
              program with IBM, further expanding his professional
              qualifications.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <img
              src="images/MEMO2.png"
              className="img-fluid rounded-3 w-75"
              alt="Mahmoud El-Gyuoshi, developer and designer"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
