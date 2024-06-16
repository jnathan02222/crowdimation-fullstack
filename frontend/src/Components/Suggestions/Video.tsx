
import SuggestionStyles from "./Suggestions.module.css"

export default  function Video({widthStyle, heightRatio} : {widthStyle : string, heightRatio : number}) {

    return (
        <div style={{width: widthStyle, flexShrink: 0}}>
            <div className={SuggestionStyles.video} style={{aspectRatio: heightRatio / 1}}></div>
        </div>
        
    );
}

