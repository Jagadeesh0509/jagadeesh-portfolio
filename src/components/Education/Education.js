import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";

function Education() {
  return (
    <>
      {/* ⭐ Background Stars */}
      <Particle />

      <Container fluid className="experience-section">
        <Container>

          <h1 className="project-heading">
            My <strong className="purple">Education</strong>
          </h1>

          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
              marginTop: "20px",
            }}
          >



            {/* B.Tech */}
            <Col md={8} className="project-card" style={{ marginBottom: "20px" }}>
              <ProjectCard
                isBlog={false}
                title={
                  <>
                    <strong className="purple">B.Tech (Information Technology)</strong> – July 2017 – May 2022
                  </>
                }
                description={
                  <ul className="experience-list">
                    <li>Sasi Institute of Technology & Engineering, Tadepalligudem</li>
                    <li>CGPA: 6.85 / 10</li>
                  </ul>
                }
              />
            </Col>

            {/* Intermediate */}
            <Col md={8} className="project-card" style={{ marginBottom: "20px" }}>
              <ProjectCard
                isBlog={false}
                title={
                  <>
                    <strong className="purple">Board of Intermediate Education (M.P.C)</strong> – July 2015 – June 2017
                  </>
                }
                description={
                  <ul className="experience-list">
                    <li>Sasi Junior College, Tanuku</li>
                    <li>Percentage: 96.2%</li>
                  </ul>
                }
              />
            </Col>

            {/* SSC */}
            <Col md={8} className="project-card" style={{ marginBottom: "20px" }}>
              <ProjectCard
                isBlog={false}
                title={
                  <>
                    <strong className="purple">Secondary School Certificate</strong> – July 2014 – June 2015
                  </>
                }
                description={
                  <ul className="experience-list">
                    <li>Bhashyam E.M High School, Tanuku</li>
                    <li>CGPA: 8.8</li>
                  </ul>
                }
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Education;
