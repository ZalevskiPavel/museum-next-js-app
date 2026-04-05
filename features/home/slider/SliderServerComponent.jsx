import MainSlider from "./SliderSection";
import { getSlides } from "../../../lib/strapi";

export default async function Page() {
  const slides = await getSlides();

  return <MainSlider slides={slides} />;
}