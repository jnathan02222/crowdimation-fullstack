import RatingStyles from './Rate.module.css'

export default function RatingBar({num, percent} : {num : number, percent : number}) {
    return (
        <div className={RatingStyles.ratingBar}>
            <div className={RatingStyles.ratingNumber}>{num}</div>
            <div className={RatingStyles.actualBar}>
                <div style={{width: percent + "%"}} className={RatingStyles.ratingBarFilled}></div>
                <div className={RatingStyles.ratingBarUnfilled}></div>
            </div>
        </div>
    );
}

