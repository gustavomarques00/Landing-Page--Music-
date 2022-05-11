import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const TrendingMusic = () => {
  return (
    <>
      <Container className=" pb-2" fluid="md">
        <Row
          className="d-flex text-nowrap flex-nowrap pb-5"
          style={{
            fontFamily: "Rubik",
            paddingTop: "100px",
            fontWeight: "400",
            fontSize: 34,
            lineHeight: "30px",
          }}
        >
          <Col lg={3} className="d-flex align-items-center">
            <img src="/images/Star.png" />
            <span style={{ paddingLeft: "10px" }}>Trending Music</span>
          </Col>
          <Col lg={3} className="d-flex align-items-center">
            <img src="/images/Star.png" />
            <span style={{ paddingLeft: "10px", color: "#F0D800" }}>
              Trending Music
            </span>
          </Col>
          <Col lg={3} className="d-flex align-items-center">
            <img src="/images/Star.png" />
            <span style={{ paddingLeft: "10px" }}>Trending Music</span>
          </Col>
          <Col lg={3} className="d-flex align-items-center">
            <img src="/images/Star.png" />
            <span style={{ paddingLeft: "10px", color: "#F0D800" }}>
              Trending Music
            </span>
          </Col>
          <Col lg={3} className="d-flex align-items-center">
            <img src="/images/Star.png" />
            <span style={{ paddingLeft: "10px" }}>Trending Music</span>
          </Col>
        </Row>
      </Container>
      <hr className="text-white"/>
    </>
  );
};
