import React, { useState } from "react";
import { Modal as ModalBootstrap, Form, Button } from "react-bootstrap";

export default function Modal({ show, handleClose, handleSave }) {
  const [value, setValue] = useState("");
  return (
    <ModalBootstrap show={show} onHide={handleClose}>
      <ModalBootstrap.Header closeButton>
        <ModalBootstrap.Title>Add Appointment</ModalBootstrap.Title>
      </ModalBootstrap.Header>

      <ModalBootstrap.Body>
        <Form.Control onChange={(e) => setValue(e.target.value)} />
      </ModalBootstrap.Body>

      <ModalBootstrap.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSave(value)}>
          Save changes
        </Button>
      </ModalBootstrap.Footer>
    </ModalBootstrap>
  );
}
