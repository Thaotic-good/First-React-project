import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton.jsx'
import Timer from './Timer'
import ColorChanger from "./ColorChanger.jsx";
import ToDoApp from "./ToDoApp";
import SignUpForm from "./SignUpForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <SignUpForm/>
                {/*<ToDoApp/>*/}
                {/*<MyButton />*/}
                <Timer/>
                <ColorChanger/>
            </header>
        </div>
    );
}

export default App;
