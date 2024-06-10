import AppStyles from '../Stylesheets/App.module.css'
import VideoPlayer from './LeftChunk/VideoPlayer';
import Header from './Header';
import CommentSection from './LeftChunk/CommentSection';
import CallToAction from './RightChunk/CallToAction';
import Rate from './RightChunk/Rate';
import Vote from './RightChunk/Vote';
function App() {
  return (
    <div className={AppStyles.app}>
      <Header></Header>
      <div className={AppStyles.content}>
        <div className={AppStyles.leftChunk}>
          <VideoPlayer></VideoPlayer>
          <CommentSection></CommentSection>
        </div>
        <div className={AppStyles.rightChunk}>
          <CallToAction></CallToAction>
          <Rate></Rate>
          <Vote></Vote>
        </div>
      </div>
    </div>
  );
}

export default App;
