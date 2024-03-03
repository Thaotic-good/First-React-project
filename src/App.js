import logo from './logo.svg';
import './App.css';
import Timer from './Timer'
import NippleColorChanger from "./NippleColorChanger.jsx";
import SignUpForm from "./SignUpForm";
import DarkModeToggle from "./DarkModeToggle.jsx";
import RedPillBluePillUpgraded from "./RedPillBluePillUpgraded";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <RedPillBluePillUpgraded/>
                <DarkModeToggle/>
                <SignUpForm/>
                <Timer/>
                <NippleColorChanger/>
            </header>
        </div>
    );
}

export default App;
