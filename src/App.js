import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton.jsx'
import Timer from './Timer'
import ColorChanger from "./ColorChanger.jsx";
import ToDoApp from "./ToDoApp";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <ToDoApp/>
                <MyButton />
                <Timer/>
                <ColorChanger/>
            </header>
        </div>
    );
}

export default App;
