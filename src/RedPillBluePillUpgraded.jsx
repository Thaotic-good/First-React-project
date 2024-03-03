import React, {useState} from "react";
import expectationsImg from './images/expectations.webp';
import realityImg from './images/reality.webp';
import mirror from './images/mirror.webp'
/*! path to an image needs to be assigned to a variable :D*/
/*BLUE PILL RED PILL CHOICE
* 1. first blue button will show text 'Expectation: I'm rich!!! ' and picture generated from DallE
* 2. second red button will show text 'Reality: Am I retarded?' and a generated picture
* __________________________________________________
* 1. useState will update a message and image shown
* 2. I need for each button to change the image as well as the message
* 3. I could add a mirror frame, and mirror picture, but images would have to be the same size */

function RedPillBluePillUpgraded(){
    const [message, setMessage]= useState("So Neo, you want to be a React developer. \nAll I'm offering is the truth, nothing more.")
    const [illustration, setIllustration ]= useState(mirror)
    const [alt, setAlt] = useState('A mirror with a hall made out of vertical green code just like from Matrix')

    const blueButtonHandler = ()=>{
        setMessage("Expectations: 'This is easy and I'm becoming rich!!!'")
        setIllustration(expectationsImg)
        setAlt("A small developer lying on a laptop on a beach surrounded with gold coins and a cocktail")
    }

    const redButtonHandler = () => {
        setMessage("Reality: 'This is hard.. or am I just retarded?'")
        setIllustration(realityImg)
        setAlt("A developer in a hoodie in front of a computer holding his head in a dark-lit room surrounded by heaps of empty coffe cups")
    }

    return (
        <>
            <pre className="message-text" style={{fontFamily: 'Monospace', fontSize: '15px'}}>{message}</pre>
            <div>
            <button style={{backgroundColor: 'blue', borderRadius:'70px'}} onClick={blueButtonHandler}>Blue pill</button>
            <button style={{backgroundColor: 'red', borderRadius:'70px'}} onClick={redButtonHandler}>Red pill</button>
            </div>
            <img style={{width: '200px'}} src={illustration} alt={alt}/>
        </>
    )
}

export default RedPillBluePillUpgraded