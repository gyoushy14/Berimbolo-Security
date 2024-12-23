import React from "react";

const testimonials = [
  {
    rating: 5,
    title: "Reliable and Easy to Use!",
    text: "The security system is so intuitive and gave us peace of mind from day one. Highly recommend to anyone!",
    author: "Sarah T., Homeowner",
    bg: "rgb(0, 94, 255)",
  },
  {
    rating: 4,
    title: "Excellent Customer Service!",
    text: "Their team was incredibly helpful, ensuring the system was tailored to our needs. A seamless experience!",
    author: "David L., Small Business Owner",
    bg: "rgba(206, 46, 46, 0.99)",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="py-5 ">
      <hr className=" container py-3" />
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5">Testimonials</h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 ">
              <div
                style={{ background: testimonial.bg }}
                className="card shadow-lg cardtest border-0"
              >
                <div className="card-body">
                  <div className="d-flex mb-3">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-warning fs-5 me-1">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <h5 className="card-title fw-semibold text-white">
                    {testimonial.title}
                  </h5>
                  <p className="card-text text-muted">{testimonial.text}</p>
                  <p className="card-text text-white small fst-italic">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;