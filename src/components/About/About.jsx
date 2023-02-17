import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./Aboutcard";
import Techstack from "./Techstack";
import programmer from "../../Assets/programmer.jpg";
import Toolstack from "./Toolstack";
import Image from "next/image";
const About = () => {
  const [headingColor, updateColor] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 2200) {
      updateColor(true);
    } else {
      updateColor(false);
    }
  }
  useEffect(() => {
    // Client-side-only code
    window.addEventListener("scroll", scrollHandler);
  }, [headingColor]);
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            className="align-items-start"
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">{"I'M"}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img mb-3"
          >
            <Image
              style={{ aspectRatio: "3/2" }}
              src={programmer}
              alt="about"
              className="img-fluid"
            />
          </Col>
        </Row>
        <h1
          className={`project-heading  justify-content-center d-flex ${
            headingColor ? "neonheading" : ""
          } `}
        >
          Professional Skillset
        </h1>

        <Techstack />

        <h1
          className={`project-heading justify-content-center d-flex  ${
            headingColor ? "neonheading" : ""
          } `}
        >
          Tools I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
};

export default About;
