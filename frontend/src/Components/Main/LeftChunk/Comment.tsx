import CommentSectionStyles from '../../../Stylesheets/Main/LeftChunk/CommentSection.module.css'
import likeFilled from '../../../Resources/like_filled.png'
//import likeUnfilled from '../../../Resources/like_unfilled.png'

//import dislikeFilled from '../../../Resources/dislike_filled.png'
import dislikeUnfilled from '../../../Resources/dislike_unfilled.png'


export default function Comment() {
    const likes : number = 5
    const dislikes : number = 2
    return (
        <div className={CommentSectionStyles.comment}>
            <div className={CommentSectionStyles.profilePhoto}></div>
            <div>
                <div className={CommentSectionStyles.commentHeader}>
                    <div className={CommentSectionStyles.name}>Name Here</div>
                    <div className={CommentSectionStyles.time}>Time</div>
                </div>
                <div className={CommentSectionStyles.content}>Content</div>
                <div className={CommentSectionStyles.buttons}>
                    <img alt="Like"className={CommentSectionStyles.like} src={likeFilled}></img>
                    <div className={CommentSectionStyles.likeCount}>{likes}</div>
                    <img alt="Dislike" className={CommentSectionStyles.dislike} src={dislikeUnfilled}></img>
                    <div className={CommentSectionStyles.likeCount}>{dislikes}</div>
                </div>
            </div>
        </div>
    );
}
