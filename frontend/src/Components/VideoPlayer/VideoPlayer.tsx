
import VideoPlayerStyles from "./VideoPlayer.module.css"

export default  function VideoPlayer() {
    return (
        <div className={VideoPlayerStyles.content} style={{aspectRatio: 1.85 / 1}}></div>
    );
}


  