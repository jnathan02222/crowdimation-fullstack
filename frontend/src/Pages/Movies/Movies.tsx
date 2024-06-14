import AppStyles from '../App.module.css'
import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/SearchBar/SearchBar';
import VideoSlider from '../../Components/VideoSlider/VideoSlider';
export default function Main() {
  return (
    <div className={AppStyles.app}>
      <Header></Header>
      <SearchBar></SearchBar>
      <VideoSlider numShows={12} title="Action"></VideoSlider>
      <VideoSlider numShows={12} title="Fantasy"></VideoSlider>
      <VideoSlider numShows={12} title="Comedy"></VideoSlider>
    </div>
  );
}
