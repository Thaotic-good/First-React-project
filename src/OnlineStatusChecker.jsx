import React, {useState, useEffect} from "react";

function OnlineStatusChecker() {
    const [isOnline, setIsOnline] = useState(false)

    const fetchOnlineStatus = () => {
        return Math.random() > 0.5;
        /*we made a comparison expression, so it will return a boolean and not a point float*/
    }


    useEffect(() => {

        }
    )

    return (
        <>
        </>
    )
}
