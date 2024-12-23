import React from "react";
import "../components/style.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <main>
      <br />
      <footer className=" text-center py-4">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-md-4 mb-3">
            <Link to={"/"}>
            <a className="navbar-brand">
              <img
                src="/images/Logo.svg"
                style={{ transform: "scale(4)" }}
                width="70px"
                height="70px"
                alt="Secuirty"
              />
            </a>
          </Link>
            </div>

            <div className="col-md-4 mb-3">
              <div className="d-flex justify-content-center gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100050276316996"
                  className="text-white fs-4"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahmoudelgyuoshy"
                  className="text-white fs-4"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <p className="mb-1 gap-2">
                <MdEmail className=" text-white" />
                <a
                  href="mahmoudelgyuoshy@gmail.com"
                  className="text-white text-decoration-none ms-1"
                >
                  elgyuoshy@gmail.com
                </a>
              </p>
              <p className="mb-0 text-white">
                <IoMdPhonePortrait />
                <a
                  href="+20 110 094 9195"
                  className="text-white text-decoration-none "
                >
                  +20 110 094 9195
                </a>
              </p>
            </div>
          </div>

          <div className="border-top pt-3 text-white">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Company Name. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
