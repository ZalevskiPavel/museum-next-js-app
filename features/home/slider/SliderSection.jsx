"use client"
import { useState } from "react";
import { Bellefair } from "next/font/google";
import HeadingLine from "../../../components/HeadingLine/HeadingLine";
import HeadingButton from "../../../components/HeadingButton/HeadingButton";
import SlideData from "../../../utils/slider-data.json"
import Slide from "../slider/MainPageSlide/Slide"
import styles from "./slider-section.module.css"

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
});

export default function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SlideData.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className={styles.sectionEvents}>
      <div className={[styles.container, styles.events].join(" ")}>
        <div className={styles.events_heading}>
          <div className={[styles.heading_text, bellefair.className].join(" ")}>
            <HeadingLine width={50} />
            Upcoming Events
            <HeadingLine width={150} />
          </div>
          <HeadingButton link={"/"} />
        </div>
        <div className={styles.slider_events_container}>
          <div className={styles.events_slides}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}>
            {
              SlideData.slides.map((slide) => {
                return (<Slide key={slide.id}
                  number={slide.number}
                  title={slide.title}
                  date={slide.date}
                  description={slide.description}
                  image={slide.image}
                  links={slide.links}
                />);
              })
            }
          </div>
        </div>
        <div className={styles.slider_manipulators_container}>
          <div className={styles.slider_line}>
            <div className={styles.slider_switcher}
              style={{
                width: `${100 / totalSlides}%`,
                transform: `translateX(${currentSlide * 100}%)`
              }}></div>
          </div>
          <div className={styles.event_buttons}>
            <button onClick={prevSlide}>❮</button>
            <button onClick={nextSlide}>❯</button>
          </div>
        </div>
      </div>
    </section>
  );
}