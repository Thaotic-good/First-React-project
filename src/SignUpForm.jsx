import React, {useRef, useState} from "react";

{/*
BACKLOG:
    - if the password is invalid, keep input value, do not reset it to " ", but keep for
    - the time of password show is very short and I don't know why
*/
}

function SignUpForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [user, setUser] = useState({email: "", password: ""})
    const [attemptedSubmit, setAttemptedSubmit] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const failedInputEmail = useRef(null)
    const failedInputPassword = useRef(null)
    const failedInputConfirmed = useRef(null)
    const [errors, setErrors] = useState({})


    const isEmailValid = () => email.includes("@")
    const isPasswordInvalid = () => (password.length < 8)
    const passwordsNotMatch = () => (password !== confirmedPassword) || (confirmedPassword.length < 8)

    const handleEmailInput = (event) => setEmail(event.target.value)
    const handlePasswordInput = (event) => setPassword(event.target.value)
    const handlePasswordConfirmedInput = (event) => setConfirmedPassword(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        setAttemptedSubmit(true);

        if (!isEmailValid()) {
            failedInputEmail.current.focus();
            return;}
        if (isPasswordInvalid()) {
            failedInputPassword.current.focus();
            console.log('password test came through')
            return;}
        if (passwordsNotMatch()) {
            failedInputConfirmed.current.focus();
            console.log('confirmed came through')
            return;}

        setUser(prevUser => ({
                ...prevUser,
                email: email,
                password: password
                /* prevUser = using setter function instead of directly mutating the state */
                /*/./ = matches every character except newline
                * g = global, so it doesn't replace only the first instance */
            }));
        console.log('second test came through')

        setAttemptedSubmit(false);
        setEmail("");
        setPassword("");
        setConfirmedPassword("");
    }
    return (
        <>
            <form>
                <div>
                    <input placeholder={"Email"} ref={failedInputEmail} type="email" onChange={handleEmailInput}
                           value={email}/>
                    {attemptedSubmit && !isEmailValid() && (
                        <p style={{color: 'red', fontSize: 'small'}}>Email address must contain '@'</p>)}
                </div>
                <div>
                    <input placeholder={"Password"} ref={failedInputPassword} type="text" onChange={handlePasswordInput}
                           value={password}/>
                    {attemptedSubmit && isPasswordInvalid() && (
                        <p style={{color: 'red', fontSize: 'small'}}>Password needs to be at least 8 characters
                            long.</p>)}
                    <input placeholder={"Confirm password"} ref={failedInputConfirmed} type="text"
                           onChange={handlePasswordConfirmedInput}
                           value={confirmedPassword}/>
                    {attemptedSubmit && passwordsNotMatch() && (
                        <p style={{color: 'red', fontSize: 'small'}}>Passwords do not match.</p>)}
                    <button onClick={handleSubmit}>Sign up</button>
                    <ol>
                        {Object.entries(user).map(([key, value], index) => {
                            {/*Object.entries() = method that takes an object and returns a list of lists of key-value pairs as strings
                        [["key", "value"], ["key", "value"], ["key", "value"]]
                        .map() = method called on arrays, applies the callback function and creates a new array out of the results
                        (([key, value], index)) = first argument destructures pairs, so they can be used separately as values*/
                            }
                            let displayValue = value
                            {/*creating a variable for processing a copy of the value on value itself*/
                            }
                            if (key === "password") {
                                displayValue = showPassword ? value : "*".repeat(value.length)
                                {/*displayValue is either a state of shown password or will change value characters into asterisks */
                                }
                            }
                            return (<li key={index}>
                                {key}: {displayValue}
                                {key === "password" && (
                                    <button onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? "Hide " : "Show "} password
                                        {/*ternary operator or conditional (ternary) operator*/}
                                    </button>
                                )}
                            </li>)
                        })
                        }
                    </ol>
                </div>
            </form>
        </>
    )
}

export default SignUpForm