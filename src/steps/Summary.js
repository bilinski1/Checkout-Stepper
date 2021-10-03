import React from "react";
import products from "../products";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const Summary = () => {
  const productlist = products.map((product) => (
    <div>
      <li>
        {product.name} {product.price}
      </li>
    </div>
  ));
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  const totalprices = products.reduce(function (accumulator, item) {
    return accumulator + item.price;
  }, 0);

  return (
    <div>
      <p>{productlist}</p>
      <p>Całkowita kwota: {totalprices} zł</p>
      <Button variant="outline-primary" onClick={() => handleClick("")}>
        Wstecz
      </Button>
      <Button variant="outline-primary" onClick={() => handleClick("selectcard")}>
        Dalej
      </Button>
    </div>
  );
};

export default Summary;
