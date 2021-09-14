import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// components
import Navigation from "./components/navigation/Index";
import About from "./components/about/Index";
import Resume from "./components/resume/Index";
import Projects from "./components/projects/Index";
import Contact from "./components/contact/Index";
import Blog from "./components/blog/index";
import BlogPost from "./components/blogPost/index";
// Bootstrap
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <>
        <Container>
          <Navigation />
        </Container>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route exact path="/articles" component={Blog} />
        <Route exact path="/articles/:slug" component={BlogPost} />
      </>
    </Router>
  );
}
export default App;
