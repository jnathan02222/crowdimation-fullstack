import NotFoundStyles from './NotFound.module.css'

export default function NotFound(){
    return (
        <div className={NotFoundStyles.container}>
            <div className={NotFoundStyles.title}>Page Not Found</div>
            <div className={NotFoundStyles.text}>{"We couldn't find the page you're looking for :("}</div>
        </div>
    )
}