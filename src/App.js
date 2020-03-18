import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar'
import About from './components/About'
import Cv from './components/Cv'
import Projects from './components/Projects'
import Contact from './components/Contact'
 

function App() {
  const message = <div>Hi there, Glad you're here to check out my code, but unfortunately this website is under construction!</div>
  return(
    ReactDOM.render((
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={About} />
          <Route path="/cv" component={Cv} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
          {message}
        </div>
      </Router>),
      document.getElementById('root')
    )
  )
}

export default App;
