import React from "react";
import  logo from './logo.svg';
import NippleColorChanger from "./NippleColorChanger";

function DominatrixToDoApp(){
    return (
        <>
            <img src={logo} style={{height:'200px', textAlign:'center', position: 'absolute',
                top:'5%', }}/>
            <NippleColorChanger/>
        </>
    )

}
export default DominatrixToDoApp