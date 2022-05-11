import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

export const MainTexts = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "558px",
          height: "558px",
          left: "-112px",
          top: "164px",
          background: "rgba(185, 127, 200, 0.62)",
          opacity: "0.8",
          filter: "blur(500px)",
        }}
      ></div>
      <Container className="pb-5 border-bottom border-1">
        <Row
          style={{ fontFamily: "Rubik" }}
          className="pt-5 text-white align-items-center"
        >
          <Col lg={10}>
            <Stack direction="horizontal" gap={3}>
              <h1
                style={{
                  fontSize: "80px",
                  lineHeight: "100px",
                  fontWeight: "400",
                }}
              >
                Listen to your favorite
              </h1>
              <span
                className="border rounded-pill border-warning py-2 px-3 text-dark  bg-warning"
                style={{
                  fontSize: "20px",
                  lineHeight: "20px",
                  fontWeight: "500",
                }}
              >
                music
              </span>
            </Stack>
            <h1
              style={{
                fontSize: "80px",
                lineHeight: "100px",
                fontWeight: "600",
              }}
            >
              anytime, anywhere
            </h1>
          </Col>
          <Col>
            <p style={{ fontSize: "14px", lineHeight: "28px" }}>
              Listen to over 80 million songs, exclusive releases and music in
              Hi-Fi sound formate.
            </p>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};
