import AppStyles from '../App.module.css'

import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';
import Header from '../../Components/Header/Header';
import CommentSection from '../../Components/Comments/CommentSection';
import Rate from '../../Components/Ratings/Rate';
import Suggestions from '../../Components/Suggestions/Suggestions';


export default function VideoViewer() {
  return (
    <div className={AppStyles.app}>
      <Header></Header>
      <div className={AppStyles.content}>
        <div className={AppStyles.leftChunk}>
          <VideoPlayer></VideoPlayer>
          <CommentSection></CommentSection>
        </div>
        <div className={AppStyles.rightChunk}>
          <Rate></Rate>
          <Suggestions></Suggestions>
        </div>
      </div>
    </div>
  );
}
