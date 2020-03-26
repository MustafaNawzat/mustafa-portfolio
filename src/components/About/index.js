import React from 'react';
import "./style.css"
import AboutPic from "./Img/about.jpg"
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// typed.js
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

// Animate
import styled, { keyframes } from 'styled-components';
import FadeInLeft from 'react-animations/lib/fade-in-left'
import FadeInRight from 'react-animations/lib/fade-in-right'

export default class About extends React.Component {

  render() {

    const FadeInLeftAnimation = keyframes`${FadeInLeft}`;
    const FadeInLeftDiv = styled.div`
      animation:  2s ${FadeInLeftAnimation};
    `;

    const FadeInRightAnimation = keyframes`${FadeInRight}`;
    const FadeInRightDiv = styled.div`
      animation:  2s ${FadeInRightAnimation};
    `;

    return (
      <>
        <Container className="d-flex flex-grow-1 align-items-center">
          <Row className="flex-column-reverse flex-lg-row">
            <Col lg={6} md={12}>
            <FadeInLeftDiv>
              <div className="hey-content" >
                <h1 className="mb-0">Hey, I'm Mustafa Nawzat</h1>
                <p className="mt-0"><strong>Junior Front End Developer</strong></p>
              </div>
              <p className="lead about-me-caption">On A journey of everyday <Typed className="strongy"
                    strings={['Learning', 'Practicing', 'Self-developing ']}
                    typeSpeed={40} backSpeed={50} loop/><br></br>to be a Front-End Web Developer and yes, my name is Mustafa but everybody calls me Tofy :)</p>
              <span className="find-me">Find Me On</span>
              <ul className="list-unstyled list-social-links">
                  <li className="d-inline-block m-3"><a href="https://github.com/MustafaNawzat/" target="_blank" rel='noreferrer noopener'><i className="fab fa-2x fa-github github"></i></a></li>
                  <li className="d-inline-block m-3"><a href="https://www.linkedin.com/in/mustafa-nawzat-88a689132/" target="_blank" rel='noreferrer noopener'><i className="fab fa-2x fa-linkedin linkedin"></i></a></li>
                  <li className="d-inline-block m-3"><a href="https://twitter.com/MustafaNawzat" target="_blank" rel='noreferrer noopener'><i className="fab fa-2x fa-twitter twitter"></i></a></li>
                  <li className="d-inline-block m-3"><a href="http://instagram.com/mustafa.n.r" target="_blank" rel='noreferrer noopener'><i className="fab fa-2x fa-instagram instagram"></i></a></li>
              </ul>
              <div className="btns-container mt-3">
                <a className="btn btn-main py-2 px-5 mr-3 btn-lg" href="mailto:mustafanawzatt@gmail.com?&subject=Big%20News">HIRE ME</a>
                <a className="btn btn-outline-primary ml-xl-2 py-2 px-5  btn-lg" href="/Projects">Projects</a>
              </div>
            </FadeInLeftDiv>
            </Col>
            <Col lg={6} md={12}>
              <FadeInRightDiv>
                <img src={AboutPic} alt="" className="img-fluid devloper-img"></img>
              </FadeInRightDiv>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

