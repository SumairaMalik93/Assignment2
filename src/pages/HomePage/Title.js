import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import TitleImg from '../../assets/Images/Image.png'

const Title = () => {
    return (
        <div>
            <Container>
                <Row>
                    <img className="TitleImg" src={TitleImg} alt="" />

                </Row>
            </Container>
        </div>
    )
}

export default Title