import CallToActionStyles from './CallToAction.module.css'

export default function CallToAction() {
    return (
        <div>
            <div className={CallToActionStyles.title}>Interact with the Crowd</div>
            <div className={CallToActionStyles.paragraph}>General members can vote on comments and view the global feed. Subscribers get access to the feed and can also comment.</div>
            <div className={CallToActionStyles.button}>Join Now</div>
        </div>
    );
}

