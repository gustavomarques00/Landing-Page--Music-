import { Container, Row, Col, Stack, Carousel } from "react-bootstrap";

export const Testimony = () => {
  return (
    <>
      <Container
        style={{ padding: "150px 0", fontFamily: "Rubik", overflow: "hidden" }}
      >
        <Stack gap={3}>
          <div class="align-self-center">
            <img height={50} src="/images/Verizon.png" />
          </div>
          <div>
            <Carousel>
              <Carousel.Item>
                <div style={{ height: "300px", backgroundColor: "black" }} />
                <Carousel.Caption>
                  <p style={{ fontSize: "24px", lineHeight: "45px" }}>
                    The ability to switch outputs on the fly, so you can flip in
                    midstream from the smart speaker in your office to your
                    living room's big sound or from your desktop app to your
                    phone without missing a beat. The service also lets you
                    upload personal content, although the procedure for doing so
                    is cumbersome.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: "300px", backgroundColor: "black" }} />
                <Carousel.Caption>
                  <p style={{ fontSize: "24px", lineHeight: "45px" }}>
                    The ability to switch outputs on the fly, so you can flip in
                    midstream from the smart speaker in your office to your
                    living room's big sound or from your desktop app to your
                    phone without missing a beat. The service also lets you
                    upload personal content, although the procedure for doing so
                    is cumbersome.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Stack>
      </Container>
      <img
        style={{ position: "absolute", left: "88%", top: "480%" }}
        src="/images/Vector1.png"
        alt="Vector1"
      />
      <img style={{ position: "absolute", left: "-2%", top: "515%" }} src="/images/Vector2.png" alt="Vector2" />
    </>
  );
};
