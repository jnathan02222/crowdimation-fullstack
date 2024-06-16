
import SuggestionStyles from "./Suggestions.module.css"
import {Link} from 'react-router-dom'
export default  function Video({widthStyle, heightRatio, link} : {widthStyle : string, heightRatio : number, link : string}) {

    return (
        <div style={{width: widthStyle, flexShrink: 0}}>
            <Link to={link}>
                <div className={SuggestionStyles.video} style={{aspectRatio: heightRatio / 1}}></div>
            </Link>
        </div>
        
    );
}

