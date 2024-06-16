import MoreStyles from "./More.module.css"

export default function More(){
    return (
        <div className={MoreStyles.container}>
            <div className={MoreStyles.content}>
                <div className={MoreStyles.title}>Title</div>
                <div className={MoreStyles.subtitle}>Subtitle</div>
                <div className={MoreStyles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </div>
    )
}