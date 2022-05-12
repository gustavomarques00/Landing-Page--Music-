import { Button, Container, Row, Col } from "react-bootstrap";

export const ArtistsP2 = () => {
  return (
    <>
      <Container style={{ fontFamily: "Rubik", zIndex: "10" }} fluid="md">
        <Row>
          <Col>
            <h3
              style={{
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "120px",
                color: "#F0D800",
                textTransform: "uppercase",
              }}
            >
              Calling all creators
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1
              style={{
                fontWeight: "400",
                fontSize: "80px",
                lineHeight: "95px",
                color: "white",
              }}
              className="pb-5"
            >
              Get on Up Souly to connect with fans, share your sounds, and grow
              your audience. What are you waiting for?
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Button
              className="rounded-pill px-5 py-3 d-flex align-items-center"
              style={{
                fontFamily: "Poppins",
                border: "0",
                fontSize: "18px",
                fontWeight: "600",
                backgroundColor: "#F0D800",
                color: "black",
              }}
              size="lg"
            >
              Find Out More
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <img style={{position: "absolute", left: "1035px", top: "2853px", opacity: "0.3"}} src="/images/Creator.png" alt="Creator1" />
      <img style={{position: "absolute", left: "1000px", top: "3152px", opacity: "0.3"}} src="/images/Creator2.png" alt="Creator1" />
    </>
  );
};
