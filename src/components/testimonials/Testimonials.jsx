import React, { useState, useRef } from "react";
import "./Testimonials.css";
import { motion } from "framer-motion";

import AVTR1 from "../../assets/botirjonshokirov.jpeg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import ReviewModal from "./reviewModal";
import emailjs from "emailjs-com";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Botirjon Shokirov",
    review:
      "It was amazing working with you, Botirjon. I really appreciate your creativity and dedication.  Without your help i couldn't accomplish this work properly.  I really want to work with you again. Thanks",
  },
  {
    avatar: AVTR2,
    name: "Shata Wale",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi repudiandae earum molestiae numquam magni. Modi eaque eveniet impedit reprehenderit pariatur eum accusamus mollitia veniam inventore, voluptate distinctio delectus. Labore, quas!",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi repudiandae earum molestiae numquam magni. Modi eaque eveniet impedit reprehenderit pariatur eum accusamus mollitia veniam inventore, voluptate distinctio delectus. Labore, quas!",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi repudiandae earum molestiae numquam magni. Modi eaque eveniet impedit reprehenderit pariatur eum accusamus mollitia veniam inventore, voluptate distinctio delectus. Labore, quas!",
  },
];

const Testimonials = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h76c9ko",
        "template_7o78lci",
        form.current,
        "Y4cwkbCzUkl-vOlWP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper
          className="container testimonials__container"
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="client__avatar"
                >
                  <img src={avatar} alt="" />
                </motion.div>
                <motion.h5 whileHover={{ scale: 1.2 }} className="client__name">
                  {name}
                </motion.h5>
                <motion.small
                  whileHover={{ scale: 1.1 }}
                  className="client__review"
                >
                  {review}
                </motion.small>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.1 }}
            className="btn btn-primary"
          >
            Levea a review
          </motion.button>
        </div>
      </section>
      {isModalOpen && (
        <ReviewModal
          refProp={form}
          onSubmitProp={sendEmail}
          onCloseModal={closeModal}
        />
      )}
    </>
  );
};

export default Testimonials;
