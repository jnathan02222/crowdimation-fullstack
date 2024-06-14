import VideoSliderStyles from "./VideoSlider.module.css"
import Video from "../Suggestions/Video";
import leftArrow from '../../Resources/arrow_left.png'
import rightArrow from '../../Resources/arrow_right.png'
import {useState, useEffect} from 'react'

export default function VideoSlider({title, numShows} : {title : string, numShows : number}) {
    const [numOnScreen, setNumOnScreen] = useState<number>(5)
    const [videoWidth, setVideoWidth] = useState<number>(0)

    const [index, setIndex] = useState<number>(0)
    const [showTransition, setShowTransition] = useState<boolean>(true)


    //Amount of scroll + scroll at end X
    //Fix resizing
    useEffect(
        () => {
            const disableSliding = () => {
                setShowTransition(false)
            }
            
            const changeNumOnScreen = () => {
                function getUpdater(num : number){
                    return () => {
                        //Queue up an index change which will run after lastIndex is updated
                        setIndex(
                            (prev : number) => {
                                if(prev > lastIndex()){
                                    return lastIndex()
                                }
                                return prev 
                            }
                        )
                        return num
                    }
                }

                if(window.innerWidth < 700){
                    setNumOnScreen(getUpdater(2))
                }else if(window.innerWidth < 950){
                    setNumOnScreen(getUpdater(3))
                }else if(window.innerWidth < 1300){
                    setNumOnScreen(getUpdater(4))
                }else {
                    setNumOnScreen(getUpdater(5))
                }
            }
            changeNumOnScreen();

            window.addEventListener('resize', disableSliding)
            window.addEventListener('resize', changeNumOnScreen)
            return () => {
                window.removeEventListener('resize', disableSliding)
                window.removeEventListener('resize', changeNumOnScreen)
            }
        }
    , [])

  
    function lastIndex(){
        return Math.floor((numShows-1)/numOnScreen)
    }
    function moveRight(){
        setIndex(
            (n) => {
                if(n < lastIndex()){
                    return n + 1
                }
                return n
            }
        )
        setShowTransition(true)
    }
    function moveLeft(){
        setIndex(
            (n) => {
                if(n > 0){
                    return n - 1
                }
                return n
            }
        )
        setShowTransition(true)
    }

    function getStyle(){
        if(index === lastIndex() && numShows%numOnScreen !== 0){
            return {left: (-(((index-1)*numOnScreen)+(numShows%numOnScreen))*(videoWidth+10)).toString() + "px"}
        }
        return {left: (-index*numOnScreen*(videoWidth+10)).toString() + "px"}
    }

    return (
        <div className={VideoSliderStyles.container} >
            <div className={VideoSliderStyles.title}>{title}</div>
            <div className={VideoSliderStyles.sliderContainer}>
                <div className={VideoSliderStyles.arrowContainerLeft + " " + (index === 0 && VideoSliderStyles.hide)}>
                    <img onClick={moveLeft} draggable="false" className={VideoSliderStyles.arrow } alt="Left arrow" src={leftArrow}></img>
                </div>
                <div className={VideoSliderStyles.slider + " " + (showTransition && VideoSliderStyles.showTransition)} style={getStyle()}>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={1.85} updateWidth={setVideoWidth}></Video>
                    
                </div>
                <div className={VideoSliderStyles.arrowContainerRight + " " + (index === lastIndex() && VideoSliderStyles.hide)}>
                    <img onClick={moveRight} draggable="false" className={VideoSliderStyles.arrow} alt="Right arrow" src={rightArrow}></img>
                </div>
            </div>
        </div>
    );
}

