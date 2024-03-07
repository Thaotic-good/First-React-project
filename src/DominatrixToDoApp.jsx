import React from "react";
import  logo from './logo.svg';
import NippleColorChanger from "./NippleColorChanger";
import stylesheet from "./App.css"

function DominatrixToDoApp(){
    return (
        <>
            <p style={{textAlign:'left', fontSize:'0,5re', color:'black', fontFamily: 'Serif',
                position:'static', }}>
                Are you tired of being an adult, who is expected to be in control?<br />

                Would you prefer comfort over being a master of your fate?<br />

                You don't want to make hundreds of decisions daily?<br />

                Don't worry baby, I'll tell what I want you to do...<br />

                START BY PLAYING WITH MY TITS!
            </p>
            <div style={{/*backgroundColor: 'red',*/ position:'absolute', top:'70%', left:'30%',
                display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img src={logo} style={{height:'200px', textAlign:'center', position: 'absolute',
                    top:'-75%', left:'-28%', animation: 'App-logo-spin infinite 20s linear', zIndex:'-1' }}/>
                <NippleColorChanger/>
            </div>

        </>
    )

}
export default DominatrixToDoApp