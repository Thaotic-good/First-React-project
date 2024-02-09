import React, {useState, useEffect} from "react";

function DarkModeToggle() {
    const [darkModeOn, setDarkMOdeOn] = useState(false)

    useEffect(() => {
        const className = () => darkModeOn ? "body-dark-mode" : "body-light-mode"
        document.body.className = className()
        }, [darkModeOn])

    // const toggleDarkMode = () => setDarkMOdeOn(!darkModeOn)

    const handleCheck = (event) => {
        setDarkMOdeOn(event.target.checked)
    }
    return (
        <>
            <label className="container"> Toggle {darkModeOn? "dark mode" : "light mode"
            }
            <input type="checkbox" checked={darkModeOn} onClick={handleCheck}>
            </input>
            </label>
        </>
    )
}

export default DarkModeToggle