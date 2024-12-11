import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './page/Carousel';
import Home from './Homepage/Home';

function App() {
  return (
    <div className="App">
      <Navbar />



      <Carousel />

      <Home />
    </div>
  );
}

export default App;
