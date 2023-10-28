import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

// Import other components
import Home from './components/Home/home';
import Projects from './components/Projects/projects';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import NotFound from './components/notfound'; // Import the 404 component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/components/Home/home" exact component={Home} />
        <Route path="/components/Projects/projects" component={Projects} />
        <Route path="/components/About/about" component={About} />
        <Route path="/components/Contact/contact" component={Contact} />
        {/* Add the 404 page as the last Route */}
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
