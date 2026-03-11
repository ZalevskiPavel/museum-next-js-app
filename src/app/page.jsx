"use client"
import { Bellefair } from "next/font/google";
import styles from "./page.module.css";
import BottomLine from "../../components/HeadingBottomLine/BottomLine";
import TopLine from "../../components/HeadingTopLine/TopLine";
import HeadingButton from "../../components/HeadingButton/HeadingButton";
import SlideData from "../../utils/slider-data.json"
import Slide from "../../components/MainPageSlide/Slide";
import { useState } from "react";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
});

/* 
<div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>To get started, edit the page.js file.</h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>*/
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SlideData.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={[styles.header__circle, styles.circle].join(" ")}></div>
          <img src="header-statue1.png" alt="" className={styles.header__statue} />
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.sectionAbout}>
          <div className={[styles.container, styles.for_padding].join(" ")}>
            <div className={styles.intro}>
              WE PRESERVE HISTORY TO <br /> BUILD FUTURE
            </div>
            <div className={styles.container_about}>
              <div className={styles.container_about_left}>
                <div className={[styles.heading, bellefair.className].join(" ")}>THE WORLD’S LEADING STATUE MUSEUM</div>
                <div className={styles.text_under_heading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucibus scelerisque consectetur amet. Imperdiet in posuere tempus enim sit semper turpis faucibus lectus. Eget et tempor dolor, amet, vel sit tellus sem. Lectus sed leo neque ut id nunc, amet.</div>
              </div>
              <div className={styles.container_about_right}>
                <div className={styles.img_about}>
                  {["line-1", "line-2", "line-3", "line-4"].map((line) => (
                    <div key={line} className={styles[line]}></div>
                  ))}
                  <img src="Image 10.png" alt="" />
                  <div className={[styles.circle, styles.circle_about].join(" ")}></div>
                </div>
                <div className={styles.text_under_image}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucibus scelerisque consectetur amet. Imperdiet in posuere tempus enim sit semper turpis faucibus lectus. Eget et tempor dolor, amet, vel sit tellus sem. Lectus sed leo neque ut id nunc, amet. Ante non, tortor nisl, vitae orci lacus ipsum vehicula eu. Bibendum.</div>
                <a href="/">
                  <span>Know More</span>
                </a>
              </div>
              <div className={styles.plast}></div>
            </div>
          </div>
        </section>
        {/*new section to redact*/}
        <section className={styles.sectionEvents}>
          <div className={[styles.container, styles.events].join(" ")}>
            <div className={styles.events_heading}>
              <div className={[styles.heading_text, bellefair.className].join(" ")}>
                <TopLine />
                Upcoming Events
                <BottomLine />
              </div>
              <HeadingButton link={"/"} />
            </div>
            <div className={styles.slider_events_container}>
              <div className={styles.events_slides}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: "transform 0.5s ease"
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
      </main>
    </div>
  );
}
