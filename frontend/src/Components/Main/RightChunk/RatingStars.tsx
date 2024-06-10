import RatingStyles from "../../../Stylesheets/Main/RightChunk/Rate.module.css"
import filledStar from "../../../Resources/star_filled.png"
import unfilledStar from "../../../Resources/star_unfilled.png"
import halfStar from "../../../Resources/star_half.png"

export default function RatingStars({stars} : {stars : number}) {
    function starsToArray(){
        let list : Array<string> = []
        for(let i : number = 0; i < Math.floor(stars); i++){
            list.push(filledStar)
        }
        for(let i : number = 0; i < Math.ceil(stars)-Math.floor(stars); i++){
            list.push(halfStar)
        }
        for(let i : number = 0; i < 5-Math.ceil(stars); i++){
            list.push(unfilledStar)
        }
        return list
    }

    return (
        <div className={RatingStyles.stars}>
            {
            starsToArray().map(
                (val)=>{
                    return <img className={RatingStyles.star} src={val} alt="Star"></img>
                }
            )
            }
        </div>
    );
}

