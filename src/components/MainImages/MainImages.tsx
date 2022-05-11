import { Col, Container, Row } from "react-bootstrap";

export const MainImages = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col><img className="img-fluid" height={450} src="/images/ArteMain.png"/></Col>
      </Row>

      <Row  className="pb-5 align-items-center">
        <Col className="d-flex justify-content-center"><img height={50} src="/images/GoodMusic.png"/></Col>
        <Col className="d-flex justify-content-center"><img height={50} src="/images/Verizon.png"/></Col>
        <Col className="d-flex justify-content-center"><img  height={50} src="/images/Deezer.png"/></Col>
        <Col className="d-flex justify-content-center"><img height={75} src="/images/YoutubeMusic.png"/></Col>
      </Row>
    </Container>
  );
};
