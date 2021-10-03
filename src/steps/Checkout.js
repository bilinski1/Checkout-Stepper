import React from 'react'
import { useSelector } from "react-redux";
import products from "../products";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const Checkout = () => {

    const history = useHistory();
    function goBack(path) {
        history.push(path);
      }

    const defaultCard = useSelector((state) => state.root.defaultCard.FilterCard[0].defaultCard);
    console.log(defaultCard);

    const totalprices = products.reduce(function (accumulator, item) {
        return accumulator + item.price;
      }, 0);

    return (
        <div className="center">
            <p>Dziękujemy <b>{defaultCard.name}</b> za zakupy w naszym sklepie na kwotę <b>{totalprices} zł.</b></p>
            <p>Zakupy zostały zrobione przy użyciu karty <b>{defaultCard.type}</b> o numerze <b>{defaultCard.number}</b></p>
            <p>Zapraszamy ponownie.</p>
            <Button
          variant="outline-primary"
          type="submit"
          value="Submit"
          onClick={() => goBack("")}
        >
          Wstecz
        </Button>
        </div>
    )
}

export default Checkout
