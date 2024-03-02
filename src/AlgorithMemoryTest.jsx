import React, {useState} from "react";
/*BLUE PILL RED PILL CHOICE
* 1. first blue button will show text 'Expectation: I'm rich!!! ' and picture generated from DallE
* 2. second red button will show text 'Reality: Am I retarded?' and a generated picture
* __________________________________________________
* 1. useState will update a message and image shown
* 2. I could add a mirror frame, and mirror picture, but images would have to be the same size */

function RedPillBluePill(){
    const [message, setMessage]= useState("")

    return (
        <>
            <img src={}/>
            <div className="message-text">{message}</div>
            <button onClick={()=>setMessage("Expectation: This is easy and I'm rich!!!")}>Blue pill</button>
            <button onClick={()=> setMessage("Reality: This is hard! Am I retarded?")}>Red pill</button>
        </>
    )
}