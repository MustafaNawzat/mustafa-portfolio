import React from 'react';
import "./style.css"
import AboutPic from "./Img/about.jpg"
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class About extends React.Component {
  render() {
    return (
      <>
        <Container className="min-vh-100 d-flex align-items-center">
          <Row>
            <Col lg={6} md={12}>
              <div className="hey-content">
                <h1 className="mb-0">Hi I'm Mustafa Nawzat</h1>
                <p className="mt-0"><strong>Front End Developer -</strong> 4 months of experience</p>
              </div>
              <p className="lead about-me-caption">On A journy of everyday <strong>practising</strong> to be a Front-End Developer and yes, my name is Mustafa but everybody calls me Tofy :)</p>
              <span className="find-me">Find Me On</span>
              <ul className="list-unstyled list-social-links">
                  <li className="d-inline-block m-3"><a href="/#"><i class="fab fa-2x fa-github"></i></a></li>
                  <li className="d-inline-block m-3"><a href="/#"><i className="fab fa-2x fa-facebook"></i></a></li>
                  <li className="d-inline-block m-3"><a href="/#"><i className="fab fa-2x fa-linkedin"></i></a></li>
              </ul>
              <div className="text-center btns-container mt-3">
                  <button className="btn btn-main py-2 px-5 mr-3 btn-lg">HIRE ME</button>
                  <button className="btn btn-outline-primary  py-2 px-5  btn-lg">Projects</button>
              </div>
            </Col>
            <Col lg={6} md={12}>
                <img src={AboutPic} alt="" class="img-fluid devloper-img"></img>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

