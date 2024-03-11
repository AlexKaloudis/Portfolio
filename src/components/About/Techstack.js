import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
} from "react-icons/di";
import {
  SiCsharp,
  SiMicrosoftsqlserver,
  SiDotnet,
  SiPostman,
  SiSwagger,
  SiRabbitmq
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger/>
      </Col>


    </Row>
  );
}

export default Techstack;
