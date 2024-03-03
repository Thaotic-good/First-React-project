import React, {useState} from "react";
import expectationsImg from './images/expectations.webp';
import realityImg from './images/reality.webp'
/*! path to an image needs to be assigned to a variable :D*/
/*BLUE PILL RED PILL CHOICE
* 1. first blue button will show text 'Expectation: I'm rich!!! ' and picture generated from DallE
* 2. second red button will show text 'Reality: Am I retarded?' and a generated picture
* __________________________________________________
* 1. useState will update a message and image shown
* 2. I need for each button to change the image as well as the message
* 3. I could add a mirror frame, and mirror picture, but images would have to be the same size */

function RedPillBluePill(){
    const [message, setMessage]= useState("")
    const [illustration, setIllustration ]= useState("mirror")
    const [alt, setAlt] = useState('')

    const blueButtonHandler = ()=>{
        setMessage("This is easy and I'm rich!!!")
        setIllustration(expectationsImg)
        setAlt("A small developer lying on a laptop on a beach surrounded with gold coins and a cocktail")
    }

    const redButtonHandler = () => {
        setMessage("This is hard! Am I retarded?")
        setIllustration(realityImg)
        setAlt("A developer in a hoodie in front of a computer holding his head in a dark-lit room surrounded by heaps of empty coffe cups")
    }

    return (
        <>
            <img style={{width: '200px'}} src={illustration} alt={alt}/>
            <div className="message-text">{message}</div>
            <div>
            <button style={{backgroundColor: 'blue', borderRadius:'70px'}} onClick={blueButtonHandler}>Blue pill</button>
            <button style={{backgroundColor: 'red', borderRadius:'70px'}} onClick={redButtonHandler}>Red pill</button>
            </div>
        </>
    )
}

export default RedPillBluePill