import React from 'react'
import products from '../products'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const Basket = () => {
    const history = useHistory()
    function handleClick(path) {
        history.push(path);
    }
    return (
<>
            <div><p>Ilość produktów w koszyku: {products.length}</p></div>
            <Button variant="outline-primary"
            onClick={() => handleClick("summary")}
            >Dalej</Button>
</>
    )
}

export default Basket
