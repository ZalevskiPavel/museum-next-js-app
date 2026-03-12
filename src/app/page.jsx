import { Bellefair } from "next/font/google";
import styles from "./page.module.css";
import MainPage from "../../features/home/index"

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
});


export default function Home() {
  return (
    <MainPage/>
  );
}
