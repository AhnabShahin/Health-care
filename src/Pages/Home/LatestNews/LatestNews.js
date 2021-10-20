import React from 'react';
import './LatestNews.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import News from './../News/News';

const LatestNews = (props) => {
    const { Blogs } = props?.loadData?.data||{};
    console.log(Blogs)
    return (
        <div className="latestNewsSection">
            <Container className="py-5">
                <h2 className="text-center">Latest News from  <span>Health and Medical</span></h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex? Deleniti maiores quia qui aspernatur magnam labore! Possimus, atque beatae!</p>
                <Row className="mt-5">
                { Blogs?.map(news=><News news={news}></News>)} 
                </Row>
            </Container>
        </div>
    );
};

export default LatestNews;