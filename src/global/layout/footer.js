import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText } from "reactstrap";
import { Button } from "reactstrap";

import LogoImg from "../../assets/Images/Logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="my-3">
        <Container>
          <Row>
            <Col className="md-3">
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <h5>  <b>Email :</b> info@jstemplate.net </h5>
              <h5>  <b>Phone :</b> 880 123 456 789 </h5>
            </Col>
            <Col className="md-6">
              <Container>
                <Row>
                  <Col className="md-3">
                    <h2 className="text-center"> Quick Link</h2>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Blog</li>
                      <li>Archived</li>
                      <li>Author</li>
                      <li>Contact</li>
                    </ul>

                  </Col>
                  <Col className="md-3 ml-3">
                    <h2 className="text-center">Category</h2>
                    <ul>
                      <li>Lifestyle</li>
                      <li>Technology</li>
                      <li>Travel</li>
                      <li>Business</li>
                      <li>Economy</li>
                      <li>Sports</li>
                    </ul>
                  </Col>
                </Row>
              </Container>

            </Col>
            <Col className="md-3 my-3">
              <Card className="text-center">
                <CardSubtitle className="my-3" tag="h5">
                  Weekly Newsletter
                </CardSubtitle>
                <CardText>
                  Get blog articles and offers via email
                </CardText>
                <CardBody>
                  <div className="d-grid gap-2">

                    <input id="Email" name="email" type="email" placeholder="Your Email"></input>
                    <Button color="primary" variant="primary">Subscribe</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="LowerHeader my-3">
          <Row>
            <Col className="logo md-2 my-2">
              <div >
                <img src={LogoImg} alt="" />
              </div>
              <div>
                <span>Meta Blog </span>
                <p>© JS Template 2023. All Rights Reserved.</p>
              </div>
            </Col>
            <Col className="md-10">
              <ul className="footerUL">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Cookie</li>
              </ul>
            </Col>
          </Row>


        </Container>
      </footer>
    </div >
  );
};

export default Footer;
