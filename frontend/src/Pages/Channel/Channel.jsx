import ChannelStyles from './Channel.module.css'
import Slider from '../../Components/Slider/Slider'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'

export default function Channel(){
    return (
        <div className={ChannelStyles.container}>
            <div className={ChannelStyles.banner}></div>
            <div className={ChannelStyles.description}>
                <div className={ChannelStyles.profilePhoto}></div>
                <div>
                    <div className={ChannelStyles.title}>Name of Channel</div>
                    <div className={ChannelStyles.info}>@samplehandle</div>
                    <div className={ChannelStyles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
            </div>
            <div className={ChannelStyles.featured}>
                <VideoPlayer widthStyle="40%"></VideoPlayer>
                <div className={ChannelStyles.trailerInfo}>
                    <div className={ChannelStyles.trailerTitle}>Title of Trailer</div>
                    <div className={ChannelStyles.trailerDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
            </div>
            <Slider title="Featured" heightRatio={1.85} numShows={12} useBigSlider={false}></Slider>
            
        </div>
    )
}