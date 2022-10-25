import React from "react";
import ImageLeft from "../assets/images/banana.webp";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ImageLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>CONTACT US</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Your full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Your email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Your message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
