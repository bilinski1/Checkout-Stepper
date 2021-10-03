import React from 'react'
import cards from '../cards'


const Card = () => {
    const cardslist = cards.map((card) => (
        <div>
          <li>
            {card.name}<br/> {card.type}<br/> {card.number}
          </li>
        </div>
      ));
    return (
        <div>
        <p>{cardslist}</p>
      </div>
    )
}

export default Card
