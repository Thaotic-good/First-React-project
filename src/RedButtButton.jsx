import {useEffect, useState} from "react";

function RedButtButton () {
    const [count , setCount] = useState(0)
    const [showDialog, setShowDialog] = useState(false)
    const [color, setColor] = useState(255)

    const decreaseColor = () => setColor((prevState)=> prevState-25)
    const handleClose = () => setShowDialog(false)
    const handleClick = () =>
        {setCount(count + 1)
        decreaseColor()}

    useEffect(() => {
        if (count === 10){
            setShowDialog(true);
        }
    }, [count]);

    return (
        <>
            <p>How many times should I slap your butt?</p>
            <button className="counterQuestion" onClick={handleClick} style={{backgroundColor: `rgb(255,${color}, ${color})`}}>
                You want to be spanked {count} times.
            </button>
            <dialog open={showDialog}>
                <button autoFocus className="closeButton" onClick={handleClose}>Close</button>
                <p>I see you are a bit naughty.</p>
            </dialog>
        </>
    )
}

export default RedButtButton
