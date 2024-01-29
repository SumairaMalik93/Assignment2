import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import PostPic1 from '../../assets/Images/HomePageCards/Rectangle1.png'

const LatestPost = () => {
    return (
        <div>
            <Container>
                <h2>Latest Post</h2>
            </Container>
            <Container>
                <Row>
                    <Col md-4>
                        <Card>
                            <Container>
                                <Row className="my-2">
                                    <img src={PostPic1} alt="Card" />
                                </Row>
                                <Container className="my-3">
                                    <Row>
                                        <small>Technology</small>
                                    </Row>
                                    <Row>
                                        <CardTitle className="my-3">
                                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                                        </CardTitle>
                                    </Row>
                                    <Row className="PostDetails">
                                        <Container>
                                            <Row>
                                                <Col>Image
                                                </Col>
                                                <Col>Tracey Wilson
                                                </Col>
                                                <Col>August 20, 2022
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Row>
                                </Container>
                            </Container>


                        </Card>
                    </Col>
                    <Col md-4>
                        <Card>
                            <CardTitle>
                                Title
                            </CardTitle>
                            <CardBody>
                                Body
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md-4>
                        <Card>
                            <CardTitle>
                                Title
                            </CardTitle>
                            <CardBody>
                                Body
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LatestPost