import SearchBarStyles from './SearchBar.module.css'
import xImage from '../../Resources/x.png'
import React, {useRef} from 'react'

export default function SearchBar() {
    const searchRef = useRef<HTMLFormElement>(null);
    const clearSearch = () => {
        
        if(searchRef.current != null){
            (searchRef.current).reset();
        }

    }

    return (
        <div className={SearchBarStyles.searchContainer}>
            <form ref={searchRef}>
                <input type="text" className={SearchBarStyles.searchBar} ></input>
            </form>
            <div className={SearchBarStyles.xButton} onClick={clearSearch}>
                <img draggable="false" className={SearchBarStyles.xImage} alt='Clear search' src={xImage}></img>
            </div>
        </div>
    );
}

