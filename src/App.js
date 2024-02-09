import logo from './logo.svg';
import './App.css';
import Timer from './Timer'
import ColorChanger from "./ColorChanger.jsx";
import SignUpForm from "./SignUpForm";
import DarkModeToggle from "./DarkModeToggle.jsx";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <DarkModeToggle/>
                <SignUpForm/>
                <Timer/>
                <ColorChanger/>
            </header>
        </div>
    );
}

export default App;
