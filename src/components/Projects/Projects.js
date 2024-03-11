import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotfinder from "../../Assets/Projects/spotfinder.png";
import examgate from "../../Assets/Projects/examgate.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotfinder}
              isBlog={false}
              title="Spotfinder"
              description="An app that utilizes web scraping(Selenium) to fetch data from a third party api and projects them as clickable event cards"
              ghLink="https://github.com/AlexKaloudis/SpotFinder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={examgate}
              isBlog={false}
              title="Examgate"
              description="A platform for making or taking exams for everyone. I have contributed in this platform building some of the razor views and the whole backend and database entities"
              ghLink="https://github.com/Thanasis-Traitsis/ADOPSE_22"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
