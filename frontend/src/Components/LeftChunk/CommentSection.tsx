import CommentSectionStyles from '../../Stylesheets/LeftChunk/CommentSection.module.css'
import Comment from './Comment';

export default function CommentSection() {
    return (
        <div>
            <div className={CommentSectionStyles.header}>Comments</div>
            <Comment></Comment>
            <Comment></Comment>
        </div>
    );
}
