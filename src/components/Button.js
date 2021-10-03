import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'


const Button = () => {
    const history = useHistory()
    function handleClick(path) {
        history.push(path);
    }
    return (
        <Button variant="outline-primary"
        onClick={() => handleClick("summary")}
        >Dalej</Button>
    )
}

export default Button
