import React, { Component } from 'react'
import './style.css'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Animate
import styled, { keyframes } from 'styled-components';
import FadeInUp from 'react-animations/lib/fade-in-up'

export default class Projects extends Component {
    render() {
        const FadeInUpAnimation = keyframes`${FadeInUp}`;

        const FadeInUpDiv1s = styled.div`
        animation:  1s ${FadeInUpAnimation};
        `;

        const FadeInUpDiv2s = styled.div`
          animation:  2s ${FadeInUpAnimation};
        `;


        const projects = [
            {
                name: "Mentorship",
                image: require("./img/project2.png"),
                description: "Small website that allows you to find a Mentor/Mentee with the time that suits you and connect with them really easy.",
                url: "https://osamaakb.github.io/mentorship"
            },
            {
                name: "My Portfolio",
                image: require("./img/project3.png"),
                description: "Personal portfolio website template. The application is based on React and bootstrap 4+.",
                url: "https://github.com/MustafaNawzat/mustafa-portfolio"
            },
            {
                name: "ToDo App with ReactJS",
                image: require("./img/project4.png"),
                description: "This is an open source ToDo app using ReactJS with Bootstarp for styling and Context Api for state management. Beginners friendly.",
                url: "https://mustafanawzat.github.io/todo-react/"
            },
            {
                name: "Mustafaio",
                image: require("./img/project1.png"),
                description: "one-page portfolio website template. used the white space and the scroll effects to deliver an immersive experience.",
                url: "https://mustafio.netlify.app/"
            }
        ]


        return (
            <>
                <Container>
                    <div className="text-center section-caption">
                        <h1 className="section-title pt-5 pb-3">Latest Works</h1>
                        <p className="lead w-75 m-auto pb-4 section-p">Here is a list of the projects I have done by myself or with a team.</p>
                    </div>
                    <Row>
                        {
                            projects.map(project => (
                                <Col lg={6} className="mb-3">
                                    <FadeInUpDiv1s>
                                        <div className="hover hover-5 text-white rounded">
                                            <img className="img-fluid" src={project.image} alt="project"></img>
                                            <div className="hover-overlay"></div>
                                            <div className="hover-5-content">
                                                <h4 className="hover-5-title text-uppercase text-center text-white text-bold">{project.name}</h4>
                                                <p className="lead porject-cption text-center text-white px-2">{project.description}</p>
                                                <a className="project-link text-center" href={project.url} target="_blank" rel='noreferrer noopener'><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
                                            </div>
                                        </div>
                                    </FadeInUpDiv1s>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </>
        )
    }
}
