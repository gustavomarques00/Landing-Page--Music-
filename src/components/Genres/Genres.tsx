import { Col, Row } from "react-bootstrap";

export const Genres = () => {
  return (
    <div style={{paddingTop: "175px"}}>
      <Row
      className="flex-nowrap"
        style={{
          padding: "15px 0",
          fontSize: "34px",
          fontWeight: "400",
          lineHeight: "30px",
          fontFamily: "Rubik",
          background: "#F0D800",
          transform: "rotate(-1.7deg)",
        }}
      >
        <Col lg={2} className="d-flex align-items-center text-uppercase">
          <img src="/images/Star2.png" />
          <p className="ps-2">Beats</p>
        </Col>
        <Col lg={2} className="d-flex align-items-center text-uppercase">
          <img src="/images/Star2.png" />
          <p className="ps-2">Chillout</p>
        </Col>
        <Col lg={2} className="d-flex align-items-center text-uppercase">
          <img src="/images/Star2.png" />
          <p className="ps-2">afrobeat</p>
        </Col>
        <Col lg={2} className="d-flex align-items-center text-uppercase">
          <img src="/images/Star2.png" />
          <p className="ps-2">pop</p>
        </Col>
        <Col lg={2} className="d-flex align-items-center text-uppercase">
          <img src="/images/Star2.png" />
          <p className="ps-2">hippop</p>
        </Col>
        <Col lg={2} className="d-flex align-items-center text-uppercase">
          <img src="/images/Star2.png" />
          <p className="ps-2">{"deep\u00A0house"}</p>
        </Col>
        <Col lg={2} className="d-flex  align-items-center text-uppercase">
          <img src="/images/Star2.png" />
          <p className="ps-2">Rock</p>
        </Col>
      </Row>
    </div>
  );
};
