import React, { useState } from "react";
import styles from "./ISR.module.css";

import fvimg from "./assets/fvimg.gif";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import ISRData from "./data/ISRData";

const ISR = () => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className={styles.card_description}>
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className={styles.readhide}>
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>µLearn Inspiration</span> Station Radio.
              </p>
              <p className={styles.fv_tagline}>
                Everyone has a story to tell, the story about finding their
                passion, the story of learning new things and much more. Often
                times these stories are filled with fun and inspirations which
                fuel others to start their own journey. Join in every
                Tuesday@7:00PM to get Inspired.
              </p>
            </div>
            <div className={styles.fv_images}>
              <img src={fvimg} alt="" className={styles.fv_img} />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                {" "}
                <span>Previously</span> On Inspiration Station Radio.
              </p>
              <p className={styles.sv_tagline}>
                Listed below are the speakers who came to the inspiration
                stations and insprired our listeners with their stories and
                experiences.
              </p>
            </div>
            <div className={styles.sv_cards_container}>
              {ISRData.slice(0)
                .reverse()
                .map((isr) => (
                  <div className={styles.sv_cards}>
                    <div className={styles.card}>
                      <img src={isr.image} alt="" className={styles.card_img} />
                      <p className={styles.card_name}>{isr.speaker}</p>

                      <ReadMore>{isr.description}</ReadMore>
                      <p className={styles.card_date}>Held On:{isr.date}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ISR;
