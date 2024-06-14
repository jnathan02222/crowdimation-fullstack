import AppStyles from '../App.module.css'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';
import Header from '../../Components/Header/Header';
import CommentSection from '../../Components/Comments/CommentSection'
import CallToAction from '../../Components/CallToAction/CallToAction';
import Rate from '../../Components/Ratings/Rate';
import Vote from '../../Components/Vote/Vote';

export default function Main() {
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
