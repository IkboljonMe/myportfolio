import React from "react";
import "./reviewModal.css";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import MovingComponent from "react-moving-text";

const ReviewModal = ({ onCloseModal, onSubmitProp, refProp }) => {
  return (
    <div id="myModal" class="modal">
      <div className="closeBtn">
        <motion.span onClick={onCloseModal} whileHover={{ scale: 1.3 }}>
          <AiOutlineCloseCircle />
        </motion.span>
      </div>
      <div className="closeBtnMobile">
        <motion.span onClick={onCloseModal} whileHover={{ scale: 1.3 }}>
          <IoClose />
        </motion.span>
      </div>

      <div class="modal-content">
        <form ref={refProp} onSubmit={onSubmitProp} className="formModal">
          <label className="topReviewMessage" htmlFor="">
            <MovingComponent
              type="bounce"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none"
            >
              Leave Your Review Below
            </MovingComponent>
          </label>
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
            placeholder="Your Review"
            required
          ></textarea>
          <div className="profileImgDivWrapper">
            <label htmlFor="">Upload a photo ( profile photo )</label>
            <input type="file" required />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="btn btn-primary reviewBtn"
            >
              Send Review
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
