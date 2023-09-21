import React from 'react';
import './App.css'; // This line imports your application's CSS file
import About from './components/about'; // Imports the about component
import Contact from './components/contact'; // Imports the contact component
import Footer from './components/footer'; // Imports the footer component
import Header from './components/header'; // Imports the header component
import Projects from './components/projects'; // Imports the projects component

function App() {
  return (
    <div className="App">
      <Header /> {/* Using the Header component */}
      <About /> {/* Using the About component */}
      <Projects /> {/* Using the Projects component */}
      <Contact /> {/* Using the Contact component */}
      <Footer /> {/* Using the Footer component */}
    </div>
  );
}

export default App;
