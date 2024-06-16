
import SuggestionStyles from "./Suggestions.module.css"
import RatingStars from "../Ratings/RatingStars";
import Video from "./Video"
export default  function VideoWithDescription() {

    return (
        <div className={SuggestionStyles.widget} >
            <Video  link="/viewer" widthStyle={"50%"} heightRatio={1.85}></Video>
            <div className={SuggestionStyles.textDiv}>
                <div className={SuggestionStyles.name}>Name of Movie</div>
                <div className={SuggestionStyles.author}>Author</div>
                <RatingStars stars={4.5}></RatingStars>
            </div>
        </div>
    );
}