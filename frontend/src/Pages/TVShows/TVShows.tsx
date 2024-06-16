
import SearchBar from '../../Components/SearchBar/SearchBar';
import Slider from '../../Components/Slider/Slider';

export default function TVShows() {
  return (
    <div>
      <SearchBar></SearchBar>
      <Slider heightRatio={1.85} numShows={12} title="New"></Slider>
      <Slider heightRatio={1.85} numShows={12} title="Upcoming"></Slider>
      <Slider heightRatio={1.85} numShows={12} title="Sci-Fi"></Slider>
    </div>
  );
}
