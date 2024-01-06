import {useEffect, useState} from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
            /*DIRECT UPDATE - setSeconds(seconds + 1)
            * FUNCTIONAL UPDATE
            * - setSeconds(prevSeconds=>prevSeconds+1)
            * - used when new state is dependent on the previous one*/
        }, 1000);
        return () => clearInterval(interval);
        }, []);

    return (
        <>
            <p>Amount of life you have spent in this page: {seconds} seconds</p>
        </>
    )
}
export default Timer
