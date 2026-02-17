import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";

function Experience() {
  return (
    <>
      {/* ⭐ Background Stars */}
      <Particle />

      <Container fluid className="experience-section">
        <Container>

          <h1 className="project-heading">
            Work <strong className="purple">Experience</strong>
          </h1>

          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
              marginTop: "20px",
            }}
          >

     <Col md={8} className="project-card" style={{ marginBottom: "20px" }}>
  <ProjectCard
    isBlog={false}
    title={
      <>
        <strong className="purple">NxtWave</strong> – Full Stack Development Course (April 2024 – July 2025)
      </>
    }
    description={
      <ul className="experience-list">
        <li>Completed an intensive Full Stack Development program focused on the MERN stack.</li>
        <li>Designed and developed multiple real-world full-stack applications independently using React.js, Node.js, Express.js, and MongoDB.</li>
        <li>Built responsive and scalable frontend interfaces with clean UI/UX principles.</li>
        <li>Developed RESTful APIs, implemented authentication mechanisms, and managed databases efficiently.</li>
        <li>Deployed full-stack applications and followed industry best practices for code structure and performance optimization.</li>
      </ul>
    }
  />
</Col>



            {/* Brainovision */}
            <Col md={8} className="project-card" style={{ marginBottom: "20px" }}>
              <ProjectCard
                isBlog={false}
                title={
                  <>
                    <strong className="purple">Brainovision</strong> – MERN Stack Intern (Mar 2024 – Jun 2024)
                  </>
                }
                description={
                  <ul className="experience-list">
                    <li>Completed intensive hands-on training in MERN Stack Development.</li>
                    <li>Developed RESTful backend services using Node.js and Express.</li>
                    <li>Built responsive and dynamic user interfaces using React.js.</li>
                    <li>Integrated frontend and backend systems through secure REST API communication.</li>
                    <li>Implemented authentication, booking workflows, and database management.</li>
                  </ul>
                }
              />
            </Col>

            {/* NxtWave */}


            <Col md={8} className="project-card" style={{ marginBottom: "20px" }}>
  <ProjectCard
    isBlog={false}
    title={
      <>
        <strong className="purple">J.P. Morgan</strong> – Virtual Internship (July 2022 – August 2022)
      </>
    }
    description={
      <ul className="experience-list">
        <li>Completed the JPMorgan Chase Virtual Experience Program via Forage, gaining hands-on exposure to real-world financial technology use cases.</li>
        <li>Integrated stock price data feeds to enhance real-time data visualization, improving user engagement.</li>
        <li>Utilized JPMorgan Chase tools to build interactive visual dashboards, resulting in a 15% improvement in interface efficiency.</li>
        <li>Strengthened financial data analysis skills through practical modules and simulations.</li>
        <li>Optimized visualization workflows, reducing dashboard generation time by 30%.</li>
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

export default Experience;
