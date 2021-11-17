import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div id="about" className="p-5 ">
            <Container className="p-3">
                <Row>
                    <Col xs={12} md={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2fiPzzYsCBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col >
                    <Col xs={12} md={6}>
                        <h2 className="text-C">Our Goal</h2>
                        <p className="textP">
                            Our goal is to provide sustainable and effective Car  delivery service by following these 3 targets are like appropriate access in the site for the premium Car demo , assurance of quality workforce, services and acceptable cost to public</p>
                        <p className="textP">Every dealership's primary goal is to sell cars, helping to increase your chances for success, try setting goals that are specific, measurable, attainable, realistic and time-based (SMART). We are promised to keep track of our performance will give you a better grasp on what to improve</p>
                    </Col>

                </Row >
            </Container >
        </div >
    );
};

export default About;