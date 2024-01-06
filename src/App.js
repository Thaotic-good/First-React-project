import logo from './logo.svg';
import './App.css';
import MyButton  from './MyButton.jsx'
import Timer from './Timer'
import ColorChanger from "./ColorChanger.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton />
        <Timer/>
        <ColorChanger/>
      </header>
    </div>
  );
}

export default App;
