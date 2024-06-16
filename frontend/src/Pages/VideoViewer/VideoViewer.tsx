import AppStyles from '../App.module.css'

import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';
import CommentSection from '../../Components/Comments/CommentSection';
import Rate from '../../Components/Ratings/Rate';
import Suggestions from '../../Components/Suggestions/Suggestions';


export default function VideoViewer() {
  return (
    <div>
      <div className={AppStyles.content}>
        <div className={AppStyles.leftChunk}>
          <VideoPlayer widthStyle=''></VideoPlayer>
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
