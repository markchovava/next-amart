import CarouselTwo from "./components/CarouselTwo";
import Grid12 from "./components/Grid12";
import Grid4 from "./components/Grid4";
import MainCarousel from "./components/MainCarousel";
import TopCategoryCarousel from "./components/TopCategoryCarousel";



export default function Home() {
  return (
    <main>
      <MainCarousel />
      <TopCategoryCarousel />
      <Grid12 />
      <Grid4 />
      <CarouselTwo />
    </main>
  );
}
