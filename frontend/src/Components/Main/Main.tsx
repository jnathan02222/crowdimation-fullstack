import MainStyles from '../../Stylesheets/Main/Main.module.css'
import VideoPlayer from './LeftChunk/VideoPlayer';
import Header from '../Header';
import CommentSection from './LeftChunk/CommentSection';
import CallToAction from './RightChunk/CallToAction';
import Rate from './RightChunk/Rate';
import Vote from './RightChunk/Vote';
function Main() {
  return (
    <div className={MainStyles.app}>
      <Header></Header>
      <div className={MainStyles.content}>
        <div className={MainStyles.leftChunk}>
          <VideoPlayer></VideoPlayer>
          <CommentSection></CommentSection>
        </div>
        <div className={MainStyles.rightChunk}>
          <CallToAction></CallToAction>
          <Rate></Rate>
          <Vote></Vote>
        </div>
      </div>
    </div>
  );
}

export default Main;
