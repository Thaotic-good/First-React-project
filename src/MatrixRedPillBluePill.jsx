import React from "react";
import logo from './logo.svg';
import glasses from './images/MorpheusGlasses.jpg'
import RedPillBluePillUpgraded from "./RedPillBluePillUpgraded";

function MatrixRedPillBluePill(){
    return(
        <div><div style={{display: 'flex', position:'relative'}}>
            <img src={logo} className="App-logo" alt="logo" style={{zIndex: '1', position:'relative'}}/>
            <img src={glasses} className="glasses" style={{height: '35px', position:'absolute', top: '40%', left: '35%', zIndex: '2'}} alt="glasses of Morpheus"/>
        </div>
        </div>
    )
}

export default MatrixRedPillBluePill