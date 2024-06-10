import RatingBar from "./RatingBar";
import RatingStars from "./RatingStars";
import RatingStyles from '../../../Stylesheets/Main/RightChunk/Rate.module.css'

export default function Rate() {
    const rating : number = 4.5
    const percents : Array<number> = [42, 25, 15, 10, 8]
    const numReviews : number = 12
    return (
        <div>
            <div className={RatingStyles.title}>Rate this movie</div>
            <div className={RatingStyles.ratingNum}>{rating}</div>
            <RatingStars stars={rating}></RatingStars>
            <div className={RatingStyles.numReviews}>{numReviews + " Reviews"}</div>
            <RatingBar num={5} percent={percents[0]}></RatingBar>
            <RatingBar num={4} percent={percents[1]}></RatingBar>
            <RatingBar num={3} percent={percents[2]}></RatingBar>
            <RatingBar num={2} percent={percents[3]}></RatingBar>
            <RatingBar num={1} percent={percents[4]}></RatingBar>
        </div>
    );
}

