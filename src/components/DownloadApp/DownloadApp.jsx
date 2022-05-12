import { Container, Row, Col } from "react-bootstrap";

export const DownloadApp = () => {
  return (
    <Container>
      <Row className="d-flex flex-column gap-3">
        <Col>
          {" "}
          <img src="/images/Logo.svg" alt="Logo" width={40} height={40} />
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Up
          </span>
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: "300",
              marginLeft: "5px",
            }}
          >
            Souly
          </span>
        </Col>
        <Col>
          <h1>Never stop listening</h1>
        </Col>
        <Col>
          <p>
            An available on Web, iOS, Android, Sonos, Chromecast, and Xbox One
          </p>
        </Col>
        <Col>
          {" "}
          <img src="/images/GooglePlay.png" alt="Google Play" />{" "}
          <img src="/images/AppleStore.png" alt="Apple Store" />
        </Col>
      </Row>
    </Container>
  );
};
