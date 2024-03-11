import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alexandros Kaloudis </span>
            from <span className="purple"> Larisa, Greece.</span>
            <br />
            I live in Thessaloniki and currently looking for a job as a Software Engineer/Developer.
            <br />
              I am soon graduating with Bachelor in Information Engineering with specialization in Software Engineering at IHU Thessaloniki
            <br />
              One of my aspirations is to be a DevOps engineer as a transition from Software Engineering
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Calisthenics workout
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To achieve high you have to aim high!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
