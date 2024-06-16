
import VideoPlayerStyles from "./VideoPlayer.module.css"

export default  function VideoPlayer({widthStyle} : {widthStyle : string}) {
    return (
        <div className={VideoPlayerStyles.content} style={{width: widthStyle, aspectRatio: 1.85 / 1}}></div>
    );
}


  