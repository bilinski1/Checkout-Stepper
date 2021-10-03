import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardActions } from "../rootSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const Addcard = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [number, setNumber] = useState("");
  const [ccv, setCcv] = useState("");
  const [expired, setExpired] = useState("");

  const [nameError, setNameError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [ccvError, setCcvError] = useState("");
  const [expiredError, setExpiredError] = useState("");

  const [id, setId] = useState(
    useSelector((state) => state.cards.cards.length + 1)
  );
  const dispatch = useDispatch();
  const history = useHistory();

  function validate() {
    if (name === "") {
      setNameError("Nazwa Wymagana");
    } else {
      setNameError("");
    }

    if (type === "") {
      setTypeError("Rodzaj Karty jest Wymagany");
    } else {
      setTypeError("");
    }

    if (expired.length < 4 || expired.length > 6) {
      setExpiredError("Format 00/00");
    } else {
      setExpiredError("");
    }

    if (number.length < 16 || number.length > 17) {
      setNumberError("Numer karty musi mieć 16 cyfr");
    } else {
      setNumberError("");
    }

    if (ccv === "") {
      setCcvError("CCV jest wymagany");
      return false;
    } else {
      setCcvError("");
    }

    return true;
  }

  const addCardHandler = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      dispatch(cardActions.addCard({ id, name, expired, type, number, ccv }));
      history.push("selectcard");
    }
  };

  function goBack(path) {
    history.push(path);
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div style={{ color: "red" }}>{nameError}</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="text"
            placeholder="Type e.g. Visa or Mastercard or other"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <div style={{ color: "red" }}>{typeError}</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="text"
            placeholder="Expiration Date"
            value={expired}
            onChange={(e) => setExpired(e.target.value)}
          />
          <div style={{ color: "red" }}>{expiredError}</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div style={{ color: "red" }}>{numberError}</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="number"
            placeholder="CCV"
            value={ccv}
            onChange={(e) => setCcv(e.target.value)}
          />
          <div style={{ color: "red" }}>{ccvError}</div>
        </Form.Group>

        <Button
          variant="outline-primary"
          type="submit"
          value="Submit"
          onClick={() => goBack("selectcard")}
        >
          Wstecz
        </Button>

        <Button
          variant="outline-primary"
          type="submit"
          value="Submit"
          onClick={addCardHandler}
        >
          Dodaj
        </Button>
      </Form>
    </div>
  );
};

export default Addcard;
