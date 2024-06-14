
import SuggestionStyles from "./Suggestions.module.css"
import React, {useEffect, useRef, useState} from 'react'

export default  function Video({widthStyle, heightRatio, updateWidth} : {widthStyle : string, heightRatio : number, updateWidth : (width: number)=>void}) {
    const playerRef = useRef<HTMLInputElement>(null);

    useEffect(
        () => {
            const resizeHandler = () => {
                let elem : Element = playerRef.current as HTMLElement
                const width : number = parseInt(( window.getComputedStyle(elem).getPropertyValue("width") ).replace("px", ""));
                console.log(width)
                updateWidth(width);
            }
            window.addEventListener("resize", resizeHandler)
            return () => {
                window.removeEventListener("resize", resizeHandler)
            }
        }
    ,[updateWidth, heightRatio])

    return (
        <div ref={playerRef} className={SuggestionStyles.video} style={{width: widthStyle, aspectRatio: heightRatio / 1}}></div>
    );
}

