import React, { Component } from "react";
import "./style.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Animate
import styled, { keyframes } from "styled-components";
import FadeInUp from "react-animations/lib/fade-in-up";

export default class Projects extends Component {
  render() {
    const FadeInUpAnimation = keyframes`${FadeInUp}`;

    const FadeInUpDiv1s = styled.div`
      animation: 1s ${FadeInUpAnimation};
    `;

    const projects = [
      {
        name: "Recetas",
        image: require("./img/project5.png"),
        description:
          "Recetas is a fully responsive, feature-rich and beautifully designed ReactJS theme for recipes. This app is perfect for people to share cooking knowledge with complete information.",
        url: "https://recetas7.netlify.app/",
        githubUrl: "https://github.com/MustafaNawzat/recetas",
      },
      {
        name: "To Do app with ReactJS",
        image: require("./img/project4.png"),
        description:
          "This is an open source To Do app using ReactJS with Bootstarp for styling and Context Api for state management. Beginners friendly.",
        url: "https://mustafanawzat.github.io/todo-react/",
        githubUrl: "https://github.com/MustafaNawzat/todo-react",
      },
      {
        name: "Mentorship",
        image: require("./img/project2.png"),
        description:
          "Small website that allows you to find a Mentor/Mentee with the time that suits you and connect with them really easy.",
        url: "https://osamaakb.github.io/mentorship",
        githubUrl: "https://github.com/osamaakb/mentorship",
      },
      {
        name: "Portfolio",
        image: require("./img/project3.png"),
        description:
          "A personal portfolio website template. The application is based on React and bootstrap 4+.",
        url: "https://i-mustafa.com/",
        githubUrl: "https://github.com/MustafaNawzat/mustafa-portfolio",
      },
      //   ,
      //   {
      //     name: "Mustafaio",
      //     image: require("./img/project1.png"),
      //     description:
      //       "one-page portfolio website template. used the white space and the scroll effects to deliver an immersive experience.",
      //     url: "https://mustafio.netlify.app/",
      //   }
    ];

    return (
      <>
        <Container>
          <div className="text-center section-caption">
            <h1 className="section-title pt-5 pb-3">Latest Works</h1>
            <p className="lead w-75 m-auto pb-4 section-p">
              Here is a list of the projects I have done by myself or with a
              team.
            </p>
          </div>
          <Row>
            {projects.map((project, i) => (
              <Col key={i} lg={6} className="mb-3">
                <FadeInUpDiv1s>
                  <div className="hover hover-5 text-white rounded">
                    <img
                      className="img-fluid"
                      src={project.image}
                      alt="project"
                    ></img>
                    <div className="hover-overlay"></div>
                    <div className="hover-5-content">
                      <h4 className="hover-5-title text-uppercase text-center text-white text-bold">
                        {project.name}
                      </h4>
                      <p className="lead porject-cption text-center text-white px-2">
                        {project.description}
                      </p>
                      <div className="project-link text-center">
                        <a
                          className="text-center mr-2"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-external-link-alt fa-2x text-white"></i>
                        </a>
                        <a
                          className="text-center"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <i className="fab fa-github fa-2x text-white"></i>
                        </a>
                      </div>
                      1{" "}
                    </div>
                  </div>
                </FadeInUpDiv1s>
              </Col>
            ))}
          </Row>
          <Row>
            <FadeInUpDiv1s className="text-center my-3 mx-auto">
              <h4>and more unshared apps...!</h4>
            </FadeInUpDiv1s>
          </Row>
        </Container>
      </>
    );
  }
}
