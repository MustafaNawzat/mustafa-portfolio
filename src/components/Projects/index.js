import React, { Component } from 'react'
import './style.css'
import Pro1 from './img/project1.png'
import Pro2 from './img/project2.png'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Projects extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="text-center section-caption">
                        <h1 className="section-title pt-5 pb-3">Latest Works</h1>
                        <p className="lead w-75 m-auto pb-4 section-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        tempora quia nulla soluta consequuntur magnam eligendi, neque corrupti iure atque.</p>
                    </div>
                    <Row>
                        <Col md={12}>
                            <ul className="list-unstyled text-center mb-3">
                                <li className="d-inline-block m-3 h4"><a href="/#">All</a></li>
                                <li className="d-inline-block m-3 h4"><a href="/#">HTML/CSS</a></li>
                                <li className="d-inline-block m-3 h4"><a href="/#">React</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        {/* Project 1 */}
                        <Col lg={6} className="mb-3 mb-lg-0">
                            <div className="hover hover-5 text-white rounded">
                                <img className="img-fluid" src={Pro1} alt="project"></img>
                                <div className="hover-overlay"></div>
                                <div className="hover-5-content">
                                    <h4 className="hover-5-title text-uppercase text-center text-white">project name</h4>
                                    <p className="lead porject-cption text-center text-white px-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem autem animi velit eaque.</p>
                                    <a className="project-link text-center" href="/#"><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
                                </div>
                            </div>
                        </Col>
                        {/* Project 2 */}
                        <Col lg={6} className="mb-3 mb-lg-0">
                            <div className="hover hover-5 text-white rounded">
                                <img className="img-fluid" src={Pro2} alt="project"></img>
                                <div className="hover-overlay"></div>
                                <div className="hover-5-content">
                                    <h4 className="hover-5-title text-uppercase text-center text-white">project name</h4>
                                    <p className="lead porject-cption text-center text-white px-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem autem animi velit eaque.</p>
                                    <a className="project-link text-center" href="/#"><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
                                </div>
                            </div>
                        </Col>
                        {/* Project 3 */}
                    </Row>
                </Container>
            </>
        )
    }
}
