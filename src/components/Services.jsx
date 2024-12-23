import React from "react";

// const servicesData = [
//   { imgSrc: "images/camer.jpeg", alt: "CCTV Camera", title: "Installation" },
//   { imgSrc: "images/960x0.webp", alt: "CCTV Installation", title: "Installation" },
//   { imgSrc: "images/devices.jpg", alt: "Devices", title: "Installation" },
//   { imgSrc: "images/prodsec.jpg", alt: "Product Security", title: "Installation" },
// ];

const servicesList = [
  {
    imgSrc: "images/secser.jpeg",
    alt: "Security Service 1",
    title: "Installation ",
    description:"Providing real-time monitoring with advanced security systems to ensure complete protection."

  },
  {
    imgSrc: "images/secser2.jpg",
    alt: "Security Service 2",
    title: "Installation",
    description:"Installing and managing smart access control devices to safeguard your premises."
  },
  {
    imgSrc: "images/sec.jpg",
    alt: "Security Service 3",
    title: "Installation",
    description:"Combining cameras, sensors, and software for a seamless and customized security experience."

  },
  {
    imgSrc: "images/home-security-system-copy.jpg",
    alt: "Home Security",
    title: "Installation",
    description:"Offering state-of-the-art alarm systems to instantly detect and alert for unauthorized activities."

  },
];

// Card component for reuse
const Card = ({ imgSrc, alt, title, className , description }) => (
  <div className="col m-2">
    <div className={`card p-3 ${className}`}>
      <img src={imgSrc} className=" rounded image_prods" alt={alt} />
      <br />
      <h5
        className={
          className === "cardproducts" ? "text-primary" : "text-danger"
        }
      >
        CCTV
      </h5>
      <h3 className="fw-bold">{title}</h3>
      <p>
      {description}
      </p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div>
      {/* <section className="py-5" id="Product">
        <br /><br />
        <div className="container">
          <h3 className="display-4 fw-bold text-center">
            Our Excellent <span className=' text-primary'>CCTV</span> <br /> Security Product
          </h3>
          <div className="row">
            {servicesData.map((product, index) => (
              <Card key={index} {...product} className="cardproducts" />
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-5" id="Services">
        <div className="container">
          <h3 className="display-4 fw-bold text-center">
            Our Excellent <span className=" text-danger">CCTV</span> <br />{" "}
            Security Service
          </h3>
          <div className="row">
            {servicesList.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                <Card {...service} className="cardproducts2" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className=" container mb-5" />
    </div>
  );
};

export default Services;
