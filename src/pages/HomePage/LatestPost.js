import React from 'react'
import { Container, Row, Col } from "reactstrap";
import PostCard from '../../global/Components/PostCard';
import PostPic1 from '../../assets/Images/HomePageCards/Rectangle1.png'
import AuthorPic1 from '../../assets/Images/HomePageCards/a-author1.png'
import PostPic2 from '../../assets/Images/HomePageCards/Rectangle2.png'
import AuthorPic2 from '../../assets/Images/HomePageCards/a-author2.png'
import PostPic3 from '../../assets/Images/HomePageCards/Rectangle3.png'
import AuthorPic3 from '../../assets/Images/HomePageCards/a-author3.png'
import PostPic4 from '../../assets/Images/HomePageCards/Rectangle4.png'
import AuthorPic4 from '../../assets/Images/HomePageCards/a-author4.png'
import PostPic5 from '../../assets/Images/HomePageCards/Rectangle5.png'
import AuthorPic5 from '../../assets/Images/HomePageCards/a-author6.png'
import PostPic6 from '../../assets/Images/HomePageCards/Rectangle6.png'
import AuthorPic6 from '../../assets/Images/HomePageCards/a-author6.png'
import PostPic7 from '../../assets/Images/HomePageCards/Rectangle7.png'
import AuthorPic7 from '../../assets/Images/HomePageCards/a-author7.png'
import PostPic8 from '../../assets/Images/HomePageCards/Rectangle8.png'
import AuthorPic8 from '../../assets/Images/HomePageCards/a-author8.png'
import PostPic9 from '../../assets/Images/HomePageCards/Rectangle9.png'
import AuthorPic9 from '../../assets/Images/HomePageCards/a-author9.png'

import './style.css'

const LatestPost = () => {
    return (
        <div>
            <Container>
                <h2>Latest Post</h2>
            </Container>
            <Container>
                <Row >
                    <Col className="md-4" >
                        <PostCard PostPic={PostPic1} AuthorPic={AuthorPic1} />
                    </Col>
                    <Col className="md-4" >
                        <PostCard PostPic={PostPic2} AuthorPic={AuthorPic2} />
                    </Col>
                    <Col className="md-4" >
                        <PostCard PostPic={PostPic3} AuthorPic={AuthorPic3} />
                    </Col>
                </Row>
                <Row >
                    <Col className="md-4" >
                        <PostCard PostPic={PostPic4} AuthorPic={AuthorPic4} />
                    </Col>
                    <Col className="md-4" >
                        <PostCard PostPic={PostPic5} AuthorPic={AuthorPic5} />
                    </Col>
                    <Col className="md-4" >
                        <PostCard PostPic={PostPic6} AuthorPic={AuthorPic6} />
                    </Col>
                </Row>
                <Row >
                    <Col className="md-4" >
                        <PostCard PostPic={PostPic7} AuthorPic={AuthorPic7} />
                    </Col>
                    <Col className="md-4" >
                        <PostCard PostPic={PostPic8} AuthorPic={AuthorPic8} />
                    </Col>
                    <Col className="md-4" >
                        <PostCard PostPic={PostPic9} AuthorPic={AuthorPic9} />
                    </Col>
                </Row>
                <div className="ViewPosts my-5 text-center">
                    <h4>View All Posts</h4>
                </div>
            </Container>
        </div >
    )
}

export default LatestPost