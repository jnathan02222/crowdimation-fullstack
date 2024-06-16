import HeaderStyles from "./Header.module.css"
import { Link } from "react-router-dom";

export default  function Header() {
    return (
        <div className={HeaderStyles.header}>
            <div className={HeaderStyles.titleBlock}>
                <div className={HeaderStyles.block}></div>
                <Link to="/" className={HeaderStyles.title}>Crowdimation</Link>
            </div>
            <div className={HeaderStyles.menu}>
                <Link to="/movies" className={HeaderStyles.item}>Movies</Link>
                <Link to="/tvshows" className={HeaderStyles.item}>TV Shows</Link>
                <Link to="/people" className={HeaderStyles.item}>People</Link>
                <Link to="/more" className={HeaderStyles.item}>More</Link>
                <Link to="/create" className={HeaderStyles.item + " " + HeaderStyles.create}>Create</Link>
                <Link to="/join" className={HeaderStyles.item + " " + HeaderStyles.join}>Join</Link>
            </div>
        </div>
    );
}
