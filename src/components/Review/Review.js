import React from 'react';
import Rating from 'react-star-rating-lite';
import { Card, Col } from 'react-bootstrap';

const Review = (props) => {
    const { review } = props;
    console.log(review);
    const { id, userReview, userRating } = review;
    return (
        <div className="resPadd" >
            <Col >
                <Card style={{ fontSize: 'larger', width: '350px', margin: '20px' }}>
                    <Card.Body>
                        <div>
                            <Rating value={userRating} readonly />

                        </div>

                        <Card.Title className="bg-dark fw-bold text-white">Rating: {userRating}</Card.Title>
                        <Card.Text style={{ color: 'black', fontWeight: '', height: '' }} > {userReview} </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div >

    );
};

export default Review;