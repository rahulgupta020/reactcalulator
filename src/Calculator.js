import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";

const Calculator = (props) => {

    const [totalOperation, setTotalOperation] = useState(0);
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState();
    const [resultVisible, setResultVisible] = useState(false);
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();

    const handlePlus = () => {
        setResultVisible(true);
        const result1 = parseInt(input1) + parseInt(input2);
        setResult(result1);
        setOperation("+");
        setTotalOperation(totalOperation + 1);
    }
    const handleMinus = () => {
        setResultVisible(true);
        const result1 = parseInt(input1) - parseInt(input2);
        setResult(result1);
        setOperation("-");
        setTotalOperation(totalOperation + 1);
    }
    const handleMultiply = () => {
        setResultVisible(true);
        const result1 = parseInt(input1) * parseInt(input2);
        setResult(result1);
        setOperation("*");
        setTotalOperation(totalOperation + 1);
    }
    const handleDivide = () => {
        setResultVisible(true);
        const result1 = parseInt(input1) / parseInt(input2);
        setResult(result1);
        setOperation("/");
        setTotalOperation(totalOperation + 1);
    }
    const handleInput1 = (event) => {
        setInput1(event.target.value);
    }
    const handleInput2 = (event) => {
        setInput2(event.target.value);
    }
    const handleReset = (event) => {
        setOperation("+");
        setResultVisible(false);
        setInput1("");
        setInput2("");
    }

    return (
        <Container>
            <h1 className="mb-4 mt-4">Professional Calculator</h1>
            <h4 className="mb-4">Total Operations Performed: {totalOperation}</h4>
            <Row className="mb-4">
                <Col>
                    First Number: <input type="number" value={input1} onChange={handleInput1} />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <h5 style={{ border: "2px solid #007BFF", borderRadius: "50%", width: "35px", height: "35px", textAlign: "center" }}>{operation}</h5>
                </Col>
                <Col>
                    Second Number: <input type="number" value={input2} onChange={handleInput2} />
                </Col>
            </Row>
            <Button className="me-4" color="success" onClick={handlePlus}>Add</Button>
            <Button className="me-4" color="success" onClick={handleMinus}>Subtract</Button>
            <Button className="me-4" color="success" onClick={handleMultiply}>Multiply</Button>
            <Button className="me-4" color="success" onClick={handleDivide}>Divide</Button>

            <Row className="mt-5">
                <Col>
                    <Button color="danger" onClick={handleReset}>Reset</Button>
                </Col>
                <Col>
                    {resultVisible
                        ?
                        <h3>Result: {result}</h3>
                        :
                        <h3></h3>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Calculator;
