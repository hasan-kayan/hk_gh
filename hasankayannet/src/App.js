import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
