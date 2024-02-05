import React, {useState} from "react";

{/*
3. submit button and submit function
    1. will check if conditions are met
    2. warnings will appear after first submit attempt
        2. password must be 8 characters long
        3. password === confirm password
    3. warnings must disappear after a successful submit
4. display new user
    - convert password characters into *

*/
}
const user = {email: "", password: ""}

function SignUpForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [user, setUser] = useState({email: "", password: ""})
    const [attemptedSubmit, setAttemptedSubmit] = useState(false)

    const isEmailValid = () => email.includes("@")
    const isPasswordInvalid = () => (password.length < 8)
    const passwordsNotMatch = () => (password !== confirmedPassword)

    const handleEmailInput = (event) => setEmail(event.target.value)
    const handlePasswordInput = (event) => setPassword(event.target.value)
    const handlePasswordConfirmedInput = (event) => setConfirmedPassword(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        setAttemptedSubmit(true)
        if (!isPasswordInvalid() && !passwordsNotMatch() && isEmailValid()) {
            setUser(prevUser => ({
                ...prevUser,
                email: email,
                password: password
            })
            )
            setAttemptedSubmit(false)
            setEmail("")
            setPassword("")
            setConfirmedPassword("")
        }
    }
    const passwordEncryption = () => {
        if (user && user.password) {
            /*check condition that none of those are 'falsy' values*/
            user.password = user.password.replace(/./g, "*")
            /*/./ = matches every character except newline
            * g = global, so it doesn't replace only the first instance */
        }
    }

    return (
        <>
            <form>
                <div>
                    <input placeholder={"Email"} type="email" onChange={handleEmailInput} value={email}/>
                    {attemptedSubmit && !isEmailValid && (
                        <p style={{color: 'red', fontSize: 'small'}}>Email address must contain '@'</p>)}
                </div>
                <div>
                    <input placeholder={"Password"} type="text" onChange={handlePasswordInput} value={password}/>
                    {attemptedSubmit && isPasswordInvalid && (
                        <p style={{color: 'red', fontSize: 'small'}}>Password needs to be at least 8 characters
                            long.</p>)}
                    <input placeholder={"Confirm password"} type="text" onChange={handlePasswordConfirmedInput}
                           value={confirmedPassword}/>
                    {attemptedSubmit && passwordsNotMatch && (
                        <p style={{color: 'red', fontSize: 'small'}}>Passwords do not match.</p>)}
                    <button onClick={handleSubmit}>Sign up</button>
                    <ol>
                        {Object.entries(user).map(([key, value], index) =>
                            <li key={index}>{key}: {value}</li>)}

                        </ol>
                            </div>
                            </form>
                            </>
                            )
                        }

                        export default SignUpForm