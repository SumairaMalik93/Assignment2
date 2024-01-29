import React from 'react'
import { Container, Row, Col } from "reactstrap";
import LogoImg from '../../assets/Images/MetaBlog Logo.svg'
import SunnyImg from '../../assets/Images/sunny.svg'
import SearchImg from '../../assets/Images/search-outline.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="my-3">
      <Container>
        <Row>
          <Col className="HeaderNav" md-12>
            <div>
              <img src={LogoImg} alt="" />
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/single-post">
                      Single Post
                    </Link>
                  </li>
                  <li>Pages</li>
                  <li>
                    <Link to="/author-page">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <Container>
                <Row>
                  <Col className="SearchImage">
                    <input type="text" placeholder="Search" />
                    <img src={SearchImg} alt="" />
                  </Col>
                  <Col>
                    <img src={SunnyImg} alt="" />
                  </Col>
                </Row>
              </Container>

            </div>
          </Col>

        </Row>
      </Container>
    </header>
  )
}

export default Header