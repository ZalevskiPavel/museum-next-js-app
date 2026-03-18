import MainPage from "../../features/home/index"
import { Bellefair } from "next/font/google";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
});


export default function Home() {
  return (
    <MainPage/>
  );
}
