import CarouselBanner from "@/components/CarouselBanner";
import { getDiscoverMovies } from "@/lib/getMovies";

type CarouselBannerWrapperProps = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapper({
  id,
  keywords,
}: CarouselBannerWrapperProps) {
  const movies = await getDiscoverMovies(id, keywords);

  return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;
