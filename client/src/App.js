import Recorder from './Recorder';
import microphone from './microphone.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title-container">
          <img src={microphone} className="App-logo" alt="logo" />
          <h1 className="">Audio Recorder</h1>
        </div>
        <Recorder />
      </header>
    </div>
  );
}

export default App;
