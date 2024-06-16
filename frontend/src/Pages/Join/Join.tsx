import JoinStyles from './Join.module.css'
import {Link} from 'react-router-dom'
import {useRef} from 'react'
export default function Join({login} : {login : boolean}){
    const formRef = useRef<HTMLFormElement>(null)

    function submitForm (e : React.FormEvent<HTMLInputElement>){
        e.preventDefault()
        const form = formRef.current as HTMLFormElement
        form.reset()
    }


    return (
        <div className={JoinStyles.container}>
            <div className={JoinStyles.widget}>
                <div className={JoinStyles.title}>{login ? "Log In" : "Create your Account"}</div>
                {login ? <div className={JoinStyles.subtitle}>Don't have an account? <Link to="/join">Join here.</Link></div> : <div className={JoinStyles.subtitle}>Already have an account? <Link to="/login">Log in.</Link></div>} 
                <form ref={formRef}>
                    <div className={JoinStyles.parameter}>Email</div>
                    <input className={JoinStyles.textInput} type="text"></input>
                    <div className={JoinStyles.parameter}>Password</div>
                    <input className={JoinStyles.textInput} type="text"></input>
                    <input type="submit" onClick={submitForm} className={JoinStyles.submit} value={login ? "Log In" : "Sign Up"}></input>
                </form>
                <div className={JoinStyles.or}>or</div>

            </div>
        </div>
    )
}