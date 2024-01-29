import React from 'react'
import { Container, Row, Col, Card, CardTitle, CardText, CardSubtitle } from "reactstrap";
import './style.css'

const Advertisement = () => {
    return (
        <div>
            <Container className="Advertisement text-center my-5">
                <center>
                    <Card style={{ width: '35rem' }} >
                        <small>Advertisement</small>
                        <CardSubtitle className="CardSubtitle">You can place ads</CardSubtitle>
                        <CardText className="CardText">750x100</CardText>
                    </Card>
                </center>
            </Container>
        </div>
    )
}

export default Advertisement