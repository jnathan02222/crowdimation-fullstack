
import SearchBar from '../../Components/SearchBar/SearchBar';
import Slider from '../../Components/Slider/Slider';

export default function Movies() {
  return (
    <div>
      <SearchBar></SearchBar>
      <Slider heightRatio={1.85} numShows={12} title="Action"></Slider>
      <Slider heightRatio={1.85} numShows={12} title="Fantasy"></Slider>
      <Slider heightRatio={1.85} numShows={12} title="Comedy"></Slider>
    </div>
  );
}
