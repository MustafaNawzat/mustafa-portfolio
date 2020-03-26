import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Navigation from './components/Navigation'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
// Bootstrap
import Container from 'react-bootstrap/Container'

function App() {
  return (
    ReactDOM.render((
      <Router>
        <>
          <Container>
            <Navigation />
          </Container>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={About} />
          <Route path={process.env.PUBLIC_URL + '/Projects'} component={Projects} />
          <Route path={process.env.PUBLIC_URL + '/Contact'} component={Contact} />
          <Route path={process.env.PUBLIC_URL + '/Resume'} component={Resume} />
        </>
      </Router>),
      document.getElementById('root')
    )
  )
}
export default App;
