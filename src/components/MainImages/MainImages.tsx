import { Col, Container, Row } from "react-bootstrap";
import MainPhoto from "../../assets/ArteMain.png"

export const MainImages = () => {
  return (
    <Container>
      <Row>
        <Col><img src={MainPhoto} /></Col>
      </Row>
    </Container>
  );
};
