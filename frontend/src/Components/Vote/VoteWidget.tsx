import VoteStyles from './Vote.module.css'
import upvoteFilled from '../../Resources/upvote_filled.png' 
//import upvoteUnfilled from '../../Resources/upvote_unfilled.png' 
//import downvoteFilled from '../../Resources/dowmvote_filled.png' 
import downvoteUnfilled from '../../Resources/downvote_unfilled.png' 

export default function VoteWidget() {
    const count : number = 10
    return (
        <div className={VoteStyles.widget}>
            <div>
                <div className={VoteStyles.content}>An example of an idea.</div>
                <div className={VoteStyles.name}>Name</div>
            </div>
            <div className={VoteStyles.buttons}>
                <div className={VoteStyles.count}>{count}</div>
                <img className={VoteStyles.button} alt="Upvote" src={upvoteFilled}></img>
                
                <img className={VoteStyles.button} alt="Downvote" src={downvoteUnfilled}></img>
                
            </div>
        </div>
    );
}
