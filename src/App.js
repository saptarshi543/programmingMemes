import './App.css';
import Memes from './Memes';
import Me from './Me.js';
import MemesTwo from './MemesTwo.js'

function App() {
  return (
    <div className="App">
    <h1>Just some programming memes...</h1>
    <h1>most of these memes are taken from monkeyuser.com. So go and show them some love</h1>
    <a href="https://www.monkeyuser.com/" target="blank" rel="noreferrer">monkeyuser.com</a>
    <br></br>
    <Memes />

    <br></br>
    <MemesTwo />
     <Me />
    </div>
  );
}

export default App;
