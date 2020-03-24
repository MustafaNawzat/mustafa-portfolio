import React, { Component } from 'react'
import './style.css'

import formImg from './Img/form-img.png'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Animate
import styled, { keyframes } from 'styled-components';
import FadeInLeft from 'react-animations/lib/fade-in-left'
import FadeInRight from 'react-animations/lib/fade-in-right'
export default class Contact extends Component {

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
                <Container>
                    <div className="text-center section-caption">
                        <h1 className="section-title pt-5 pb-3">Throw me A Message</h1>
                        <p className="lead w-75 m-auto pb-4 section-p">I'm available for freelance, can't wait for the next
                            exciting project and it could be yours! So let's work on somthing to be proud of together!</p>
                    </div>
                    <Row className="flex-column-reverse flex-lg-row">
                        <Col md={6}>
                            <FadeInLeftDiv>
                            <form id="contact-form" >
                                <input  placeholder="Your name" type="text" id="name" name="name" className="form-control costuom-form mb-3 shadow-none"></input>
                                <input  placeholder="Your email" type="text" id="email" name="email" className="form-control costuom-form mb-3 shadow-none"></input>
                                <textarea placeholder="Your message" type="text" id="message" name="message" rows="4" className="form-control md-textarea costuom-form mb-3 shadow-none"></textarea>
                            </form>
                            <button type="submit" className="btn btn-outline-primary btn-form my-3 py-2 px-5 btn-block">Send</button>
                            </FadeInLeftDiv>
                        </Col>
                        <Col md={6}>
                            <FadeInRightDiv>
                                <img src={formImg} alt="" className="img-fluid m-auto d-block"></img>
                            </FadeInRightDiv>
                        </Col>
                    </Row>
                </Container>  
            </>
        )
    }
    
}
