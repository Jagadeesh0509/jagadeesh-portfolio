import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">JAGADEESH PEDDIREDDY</span> from <span className="purple">Andhra Pradesh, Tanuku,  India</span>.
            <br />
            I’m a <span className="purple">Full-Stack Developer</span> with experience building web applications using MERN Stack. I work with SQL databases, REST APIs, and responsive frontend interfaces, focusing on creating scalable and user-friendly applications.
            <br />
            <br />
            I’m passionate about continuously improving my development skills and building impactful real-world projects.Quick learner with solid problem-solving skills, seeking junior Full Stack or Front-End Developer roles to contribute and grow.
          </p>
          <p style={{ textAlign: "justify" }}>
          
           Outside of coding, I love engaging in activities that keep me creative and inspired:
          </p>
          

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
