import VoteWidget from "./VoteWidget";
import VoteStyles from './Vote.module.css'

export default function Vote() {
    return (
        <div className={VoteStyles.all}>
            <div className={VoteStyles.title}>Votes</div>
            <VoteWidget></VoteWidget>
            <VoteWidget></VoteWidget>
            <VoteWidget></VoteWidget>
        </div>
    );
}

