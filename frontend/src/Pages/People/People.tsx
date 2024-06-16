
import SearchBar from '../../Components/SearchBar/SearchBar';
import Slider from '../../Components/Slider/Slider';

export default function People() {
  return (
    <div>
      <SearchBar></SearchBar>
      <Slider linkPrefix="/channel" useBigSlider={false} heightRatio={1.1} numShows={12} title="Top"></Slider>
      <Slider linkPrefix="/channel" useBigSlider={false} heightRatio={1.1} numShows={12} title="Trending"></Slider>
    </div>
  );
}
