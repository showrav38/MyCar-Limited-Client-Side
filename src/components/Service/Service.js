import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    const { service } = props;
    const { _id, id, name, price, description, img, madeIn, milage, mode, released } = service;
    return (
        <div className="resPadd" >
            <Col >
                <Card style={{ fontSize: 'larger', width: '350px', height: '', margin: '20px' }}>
                    <Card.Img style={{ height: '300px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="bg-secondary fw-bold text-white">{name}</Card.Title>
                        <Card.Title className="bg-secondary fw-bold text-white">Mode: {mode}</Card.Title>
                        <Card.Text style={{ color: 'goldenrod', fontWeight: 'bold' }} > Milage: {milage} KPH </Card.Text>
                        <Card.Text style={{ color: 'black', fontWeight: 'bold', height: '' }}>
                            version:  {released}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div >

    );
};

export default Service;