import SliderStyles from "./Slider.module.css"
import Video from "../Suggestions/Video";
import leftArrow from '../../Resources/arrow_left.png'
import rightArrow from '../../Resources/arrow_right.png'
import {useState, useEffect, useCallback} from 'react'

export default function Slider({title, numShows, heightRatio} : {title : string, numShows : number, heightRatio : number}) {
    const [numOnScreen, setNumOnScreen] = useState<number>(5)
    const [index, setIndex] = useState<number>(0)
    const [showTransition, setShowTransition] = useState<boolean>(true)
    
    const lastIndex = useCallback(() => {
        return Math.floor((numShows-1)/numOnScreen)
    }, [numShows, numOnScreen])

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
    , [lastIndex])

  
   

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


    /**
     *  Where the magic happens
     *  As long as the width of videos is accurately computed, this should work
     */
    function getStyle(){
        if(index === lastIndex() && numShows%numOnScreen !== 0){
            const videoWidth = 100/numOnScreen
            return {left: "calc(-" + (((index-1)*100)+(numShows%numOnScreen)*videoWidth).toString() + "%)"}
        }
        return {left: "calc(" + (-index*100).toString() + "%)"}
    }

    return (
        <div className={SliderStyles.container} >
            <div className={SliderStyles.title}>{title}</div>
            <div className={SliderStyles.sliderContainer}>
                <div className={SliderStyles.arrowContainer + " " + SliderStyles.arrowContainerLeft + " " + (index === 0 && SliderStyles.hide)}>
                    <img onClick={moveLeft} draggable="false" className={SliderStyles.arrow } alt="Left arrow" src={leftArrow}></img>
                </div>
                <div className={SliderStyles.slider + " " + (showTransition && SliderStyles.showTransition)} style={getStyle()}>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                    <Video widthStyle={(100/numOnScreen).toString() + "%"} heightRatio={heightRatio}></Video>
                </div>
                <div className={SliderStyles.arrowContainer + " " + SliderStyles.arrowContainerRight + " " + (index === lastIndex() && SliderStyles.hide)}>
                    <img onClick={moveRight} draggable="false" className={SliderStyles.arrow} alt="Right arrow" src={rightArrow}></img>
                </div>
            </div>
        </div>
    );
}

