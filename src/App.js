import logo from './logo.svg';
import glasses from './images/MorpheusGlasses.jpg'
import './App.css';
// import Timer from './Timer'
// import NippleColorChanger from "./NippleColorChanger.jsx";
// import SignUpForm from "./SignUpForm";
// import DarkModeToggle from "./DarkModeToggle.jsx";
import RedPillBluePillUpgraded from "./RedPillBluePillUpgraded";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{display: "flex"}}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <img src={glasses} className="glasses" style={{height: '30px'}} alt="glasses of Morpheus"/>
                </div>
                <RedPillBluePillUpgraded/>
                {/*<DarkModeToggle/>*/}
                {/*<SignUpForm/>*/}
                {/*<Timer/>*/}
                {/*<NippleColorChanger/>*/}
            </header>
        </div>
    );
}

export default App;
