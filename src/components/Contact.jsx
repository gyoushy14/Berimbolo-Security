import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation using Yup
const validationSchema = yup.object({
  from_name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  from_email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const sendEmail = (data) => {
    if (!form.current) {
      console.error("The form reference is not correctly set.");
      return;
    }

    emailjs
      .sendForm(
        "service_ugudcsj",
        "template_lfui8l2",
        form.current,
        "63iHWeQ_tW44Wb7Oe" // public_key
      )
      .then(
        () => {
          Swal.fire({
            title: "Good job!",
            text: "You sent a message to my email",
            icon: "success",
          });
          reset(); // Reset form after successful submission
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "Failed to send the message. Please try again.",
            icon: "error",
          });
        }
      );
  };

  return (
    <section className="p-2 gap-3 " id="contact">
      <div className="container">
        <h3 className="display-5 fw-bold text-center mb-4">
          Write Your Message <br /> And Contact with Email
        </h3>
        <br />

        <div className="row">
          <div className="col-md-8">
            <form ref={form} onSubmit={handleSubmit(sendEmail)} autoSave="true">
              <div className="mb-3">
                <input
                  type="text"
                  name="from_name"
                  className={`form-control form-control-lg ${
                    errors.from_name ? "is-invalid" : ""
                  }`}
                  placeholder="Your name"
                  {...register("from_name")}
                />
                <div className="invalid-feedback">{errors.from_name?.message}</div>
              </div>
              <div className="mb-3">
                <input
                  name="from_email"
                  type="email"
                  className={`form-control form-control-lg ${
                    errors.from_email ? "is-invalid" : ""
                  }`}
                  placeholder="Your Email"
                  {...register("from_email")}
                />
                <div className="invalid-feedback">{errors.from_email?.message}</div>
              </div>
              <div className="mb-3">
                <textarea
                  className={`form-control form-control-lg ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  placeholder="Your Message"
                  name="message"
                  rows="3"
                  {...register("message")}
                ></textarea>
                <div className="invalid-feedback">{errors.message?.message}</div>
              </div>
              <div className="mb-3 gap-2 d-flex">
                <button type="submit" className="btn btn-primary rounded-2 fs-5 w-100">
                  Send
                </button>
         
              </div>
            </form>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img
              src="images/techne.avif"
              alt="Contact Illustration"
              className="w-75 rounded-pill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;