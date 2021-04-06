import logo from './logo.svg';
import './App.css';
import Pixel from './components/Pixel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Pixel />
      </header>
    </div>
  );
}

export default App;
