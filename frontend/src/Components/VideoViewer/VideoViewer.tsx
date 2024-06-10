import MainStyles from '../../Stylesheets/Main/Main.module.css'
import VideoPlayer from '../Main/LeftChunk/VideoPlayer';
import Header from '../Header';
import CommentSection from '../Main/LeftChunk/CommentSection';
import Rate from '../Main/RightChunk/Rate';
import Suggestions from './Suggestions/Suggestions';
function VideoViewer() {
  return (
    <div className={MainStyles.app}>
      <Header></Header>
      <div className={MainStyles.content}>
        <div className={MainStyles.leftChunk}>
          <VideoPlayer></VideoPlayer>
          <CommentSection></CommentSection>
        </div>
        <div className={MainStyles.rightChunk}>
          <Rate></Rate>
          <Suggestions></Suggestions>
        </div>
      </div>
    </div>
  );
}

export default VideoViewer;
