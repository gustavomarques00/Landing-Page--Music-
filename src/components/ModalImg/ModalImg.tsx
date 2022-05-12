import { Button, Modal } from "react-bootstrap";

export const ModalImg = (props: any) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <img src={props.img} alt={props.alt} />
      </Modal.Body>
      <Modal.Footer
        style={{ fontFamily: "Rubik" }}
        className="d-flex justify-content-center"
      >
        <Button
          className="px-5 py-2"
          style={{ backgroundColor: "#F0D800", border: "0", color: "black" }}
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
