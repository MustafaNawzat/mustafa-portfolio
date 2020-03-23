import React, { Component } from 'react'
import './style.css'
import formImg from './Img/form-img.png'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default class Contact extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="text-center section-caption">
                        <h1 className="section-title pt-5 pb-3">Throw me A Message</h1>
                        <p className="lead w-75 m-auto pb-4 section-p">I'm available for freelance, can't wait for the next
                            exciting project and it could be yours! So let's work on somthing to be proud of together!</p>
                    </div>
                    <Row>
                        <Col md={6}>
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <input placeholder="Your name" type="text" id="name" name="name" className="form-control costuom-form mb-3 shadow-none"></input>
                                <input placeholder="Your email" type="text" id="email" name="email" className="form-control costuom-form mb-3 shadow-none"></input>
                                <input placeholder="Subject" type="text" id="subject" name="subject" className="form-control costuom-form mb-3 shadow-none"></input>
                                <textarea placeholder="Your message" type="text" id="message" name="message" rows="2" className="form-control md-textarea costuom-form mb-3 shadow-none"></textarea>
                            </form>
                            <button className="btn btn-outline-primary btn-form my-3 py-2 px-5 btn-block">Send</button>
                        </Col>
                        <Col md={6}>
                            <img src={formImg} alt="" className="img-fluid m-auto d-block"></img>
                        </Col>
                    </Row>
                </Container>  
            </>
        )
    }
}
