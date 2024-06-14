import HeaderStyles from "./Header.module.css"

export default  function Header() {
    return (
        <div className={HeaderStyles.header}>
            <div className={HeaderStyles.titleBlock}>
                <div className={HeaderStyles.block}></div>
                <div className={HeaderStyles.title}>Crowdimation</div>
            </div>
            <div className={HeaderStyles.menu}>
                <div className={HeaderStyles.item}>Movies</div>
                <div className={HeaderStyles.item}>TV Shows</div>
                <div className={HeaderStyles.item}>People</div>
                <div className={HeaderStyles.item}>More</div>
                <div className={HeaderStyles.item + " " + HeaderStyles.create}>Create</div>
                <div className={HeaderStyles.item + " " + HeaderStyles.join}>Join</div>
            </div>
        </div>
    );
}
