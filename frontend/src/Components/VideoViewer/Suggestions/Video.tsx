
import SuggestionStyles from "../../../Stylesheets/VideoViewer/Suggestions/Suggestions.module.css"
import React, {useEffect, useRef, useState} from 'react'
import RatingStars from "../../Main/RightChunk/RatingStars";

export default  function Video() {
    const playerRef = useRef<HTMLInputElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(
        () => {
            const resizeHandler = () => {
                let elem : Element = playerRef.current as HTMLElement
                const width : number = parseInt(( window.getComputedStyle(elem).getPropertyValue("width") ).replace("px", ""));
                setHeight(width * (1/1.85));
            }
            window.addEventListener("resize", resizeHandler)
            resizeHandler();
        }
    ,[])

    return (
        <div className={SuggestionStyles.widget} >
            <div ref={playerRef} className={SuggestionStyles.video} style={{height: height}}></div>
            <div>
                <div className={SuggestionStyles.name}>Name of Movie</div>
                <div className={SuggestionStyles.author}>Author</div>
                <RatingStars stars={4.5}></RatingStars>
            </div>
        </div>
    );
}