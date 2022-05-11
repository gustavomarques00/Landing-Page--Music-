import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

export const SomeArtists = () => {
  return (
    <>
      <Container>
        <Row className="py-5" style={{ fontFamily: "Rubik", color: "#FFFFFF" }}>
          <Col>
            <Stack gap={5}>
              <h2
                style={{
                  fontWeight: "500",
                  fontSize: "60px",
                  lineHeight: "80px",
                }}
              >
                Some of The Most Famous{" "}
                <span style={{ color: "#F0D800" }}>Artists</span> Of All Time in
                the world
              </h2>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "28px",
                }}
              >
                World music is an easy way for people to describe the melding
                traditional and nontraditional music from foreign countries.
                Generally, world music refers to sounds from the non-Western
                part of the world.
              </p>
            </Stack>
          </Col>
          <Col className="d-flex flex-column align-self-center">
            <Stack gap={2} className="align-items-center  pb-5">
              <h2
                style={{
                  fontWeight: "600",
                  fontSize: "80px",
                  lineHeight: "80px",
                  color: "#F0D800",
                }}
              >
                550e,300
              </h2>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "28px",
                }}
              >
                People register this website
              </p>
            </Stack>
            <Stack gap={2} className="align-items-center">
              <h2
                style={{
                  fontWeight: "600",
                  fontSize: "80px",
                  lineHeight: "80px",
                }}
              >
                50,000
              </h2>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "28px",
                }}
              >
                Virtual concept held this year
              </p>
            </Stack>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          position: "absolute",
          width: "558px",
          height: "558px",
          left: "850px",
          top: "1350px",
          background: "rgba(204, 243, 0, 0.6)",
          opacity: "0.8",
          filter: "blur(500px)",
        }}
      ></div>
    </>
  );
};
