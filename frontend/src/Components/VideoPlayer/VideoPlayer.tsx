
import VideoPlayerStyles from "./VideoPlayer.module.css"
import React, {useEffect, useRef, useState} from 'react'

export default  function VideoPlayer() {
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
        <div ref={playerRef} className={VideoPlayerStyles.content} style={{height: height}}>
            
        </div>
    );
}


  