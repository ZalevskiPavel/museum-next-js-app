'use client'
import styles from "./heading-button-styles.module.css"
import { Bellefair } from "next/font/google"

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
});

export default function HeadingButton({ link }) {
  return (
    <button
      className={[styles.view, bellefair.className].join(" ")}
      onClick={() => window.location.href = link}
    >
      view all
    </button>
  );

}