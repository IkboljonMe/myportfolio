import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_h76c9ko",
      "template_s8du4tk",
      form.current,
      "Y4cwkbCzUkl-vOlWP"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <motion.article
            whileHover={{ scale: 1.05 }}
            className="contact__option"
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ikboljonme@gmail.com</h5>
            <a href="mailto:ikboljonme@gmail.com">Send a message</a>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.05 }}
            className="contact__option"
          >
            <FaTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>+48 564 294 891 </h5>
            <a href="https://t.me/iqboljon_abdurasulov">Send a message</a>
          </motion.article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            className="btn btn-primary sendMessageButton"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
