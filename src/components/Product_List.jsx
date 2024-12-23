import React from "react";
import { useCartContext } from "../context/CartContext";

const Product_List = () => {
  const { addToCart } = useCartContext();

  const servicesData = [
    {
      id: 1,
      imgSrc: "images/camer.jpeg",
      title: "CCTV Installation",
      description: "Panoramic coverage with high-resolution video and remote control via mobile app.",
      btn: "Add To Cart",
      price: 77,
    },
    {
      id: 2,
      imgSrc: "images/960x0.webp",
      title: "System Configuration",
      description:
        "Wireless camera with two-way audio and instant alerts for home or office monitoring.",
      btn: "Add To Cart",
      price: 40,
    },
    {
      id: 3,
      imgSrc: "/images/about.jpg",
      title: "Maintenance Services",
      description:
        "Weatherproof camera with night vision and motion detection for 24/7 outdoor surveillance.",
      btn: "Add To Cart",
      price: 60,
    },
    {
      id: 4,
      imgSrc: "/images/contact.jpg",
      title: "Security Upgrades",
      description:
        " Compact design with HD video recording and motion-activated alerts for discreet security",
      btn: "Add To Cart",
      price: 23,
    },
  ];

  return (
    <main>
      <section className="py-5 mt-5" id="Product">
        <div className="container">
          <h3 className="display-4 fw-bold text-center mb-5">
            Our Excellent CCTV Security Products
          </h3>

          <div className="row">
            {servicesData.map((service) => (
              <div key={service.id} className="col-lg-3 col-md-6 mb-4">
                <div className="card p-3 cardproducts h-100">
                  <div className="w-100 h-100">
                  <img
                    src={service.imgSrc}
                    className="w-100 mb-3 image_prods rounded"
                                        alt={service.title}
                  />
                  </div>
                  <h5 className="text-primary">{service.title}</h5>
                  <p>{service.description}</p>
                  <p className=" fw-bold text-danger">Price: {service.price}$</p>
                  <button
                    onClick={() =>
                      addToCart(
                        service.id,
                        service.imgSrc,
                        service.title,
                        service.price
                      )
                    }
                    className="btn btn-primary"
                  >
                    {service.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr  className=" container mb-5"/>
    </main>
  );
};

export default Product_List;
