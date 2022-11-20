import React from "react";
import bgImage from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section className="mt-28 py-10" style={{ background: `url(${bgImage})` }}>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h4 className="text-xl text-primary font-bold">Contact Us</h4>
            <h2 className="text-4xl text-white">Stay connected with us</h2>
            <div className="py-6">
              <input type="email" placeholder="Email Address" className="input w-full my-5" />
              <input type="text" placeholder="Subject" className="input w-full mb-5" />
              <textarea className="textarea w-full mb-5" placeholder="Your Message"></textarea>
            </div>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
