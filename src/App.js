// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtills" aboutText="About TextUtills" homeText="Home TextUtills"/>
      <div className="container my-3">
        <About />
      {/* <Textform  heading="Enter the text to analyze"/> */}
      </div>
    </>
  );
}

export default App;
