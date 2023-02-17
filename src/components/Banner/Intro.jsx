import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Intro = () => {
  const [headingColor, updateColor] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 40) {
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
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description justify-content-center">
            <h1
              className={`${headingColor ? "neonheading" : ""}`}
              style={{ fontSize: "2.6em" }}
            >
              LET ME <span className=" "> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body ">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript </b>
              </i>
              <br />
              <br />
              My field of {"Interest's "}are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple"></b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Intro;
