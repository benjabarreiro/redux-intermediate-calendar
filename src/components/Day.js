import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createAppointment, deleteOneAppointment } from "../features/calendar";
import { useState } from "react";
import Modal from "./Modal";

export default function Day({ day, title }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleSave = (value) => {
    setShow(false);
    dispatch(createAppointment({ day, title: value }));
  };
  return (
    <>
      <Modal
        show={show}
        handleSave={handleSave}
        handleClose={() => setShow(false)}
      />
      <Card className="card">
        <Card.Body onClick={() => setShow(true)}>
          <Card.Title>{day}</Card.Title>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
        <Button
          onClick={() => dispatch(deleteOneAppointment({ day, title: "" }))}
        >
          Clear
        </Button>
      </Card>
    </>
  );
}
