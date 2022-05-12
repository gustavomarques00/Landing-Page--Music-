import React, { useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ModalImg } from "../ModalImg/ModalImg";

export const Artists = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container>
      <Row className="py-5">
        <Col>
          <img
            onClick={() => setModalShow(true)}
            style={{ cursor: "pointer" }}
            src="/images/artists/photo1.png"
            alt="Photo 1"
          />
        </Col>
        <Col>
          <img
            onClick={() => setModalShow(true)}
            style={{ cursor: "pointer" }}
            src="/images/artists/photo2.png"
            alt="Photo 2"
          />
        </Col>
        <Col>
          <img
            onClick={() => setModalShow(true)}
            style={{ cursor: "pointer" }}
            src="/images/artists/photo3.png"
            alt="Photo 3"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            onClick={() => setModalShow(true)}
            style={{ cursor: "pointer" }}
            src="/images/artists/photo4.png"
            alt="Photo 4"
          />
        </Col>
        <Col>
          <img
            onClick={() => setModalShow(true)}
            style={{ cursor: "pointer" }}
            src="/images/artists/photo5.png"
            alt="Photo 5"
          />
        </Col>
        <Col>
          <img
            onClick={() => setModalShow(true)}
            style={{ cursor: "pointer" }}
            src="/images/artists/photo6.png"
            alt="Photo 6"
          />
        </Col>
      </Row>
      <div style={{paddingBottom: "150px"}} className="d-flex pt-5 justify-content-center ">
        <Button
          className="rounded-pill px-5 py-3 d-flex align-items-center"
          style={{
            fontFamily: "Poppins",
            gap: "8px",
            border: "0",
            fontSize: "18px",
            fontWeight: "600",
            backgroundColor: "#F0D800",
            color: "black",
          }}
          size="lg"
        >
          Explore Artist <BsFillArrowRightCircleFill />
        </Button>{" "}
      </div>

      <ModalImg show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};
