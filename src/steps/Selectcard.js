import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { rootActions } from "../rootSlice";

const Selectcard = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const cardsState = useSelector((state) => state.cards.cards);

  const [current, setCurrent] = useState(cardsState.length - 1);
  console.log(current);

  function goBack(path) {
    history.push(path);
  }
  function addCard(path) {
    history.push(path);
  }
  const checkout = (e) => {
    e.preventDefault();
    dispatch(rootActions.setDefaultCard({FilterCard}));
    history.push("checkout");
  };

  const length = cardsState.length;

  const nextCard = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    
  };
  const prevCard = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    
  };

  const FilterCard = cardsState
    .filter(function (card) {
      return card.id === current + 1;
    })
    .map(function (card) {
      return {defaultCard: card}
    });

 
  if (!Array.isArray(cardsState) || cardsState.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="cardslider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevCard} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextCard} />
        {cardsState.map((card, index) => {
          return (
            <div
              className={
                index === current ? "slide active cardObject" : "slide"
              }
              key={index}
            >
              {index === current && (
                <div className="card-content">
                  {card.name}
                  <br /> {card.number}
                  {card.number[0] === "4" && (
                    <div>
                      <FaCcVisa className="visa" />
                    </div>
                  )}
                  {card.number[0] === "5" && (
                    <div>
                      <FaCcMastercard className="mastercard" />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </section>
      <Button variant="outline-primary" onClick={() => goBack("summary")}>
        Wstecz
      </Button>
      <Button variant="outline-primary" onClick={() => addCard("addcard")}>
        Dodaj Kartę
      </Button>
      <Button variant="outline-primary" onClick={checkout}>
        Dalej
      </Button>
    </div>
  );
};

export default Selectcard;
