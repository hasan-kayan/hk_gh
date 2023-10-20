import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          {/* Add more routes for other pages */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
