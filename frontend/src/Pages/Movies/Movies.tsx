
import SearchBar from '../../Components/SearchBar/SearchBar';
import Slider from '../../Components/Slider/Slider';

export default function Movies() {
  return (
    <div>
      <SearchBar></SearchBar>
      <Slider linkPrefix="/viewer" useBigSlider={true} heightRatio={3} numShows={12} title=""></Slider>
      <Slider linkPrefix="/viewer" useBigSlider={false} heightRatio={1.85} numShows={12} title="Fantasy"></Slider>
      <Slider linkPrefix="/viewer" useBigSlider={false} heightRatio={1.85} numShows={12} title="Comedy"></Slider>
    </div>
  );
}
