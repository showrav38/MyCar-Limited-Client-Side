import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import UseDataR from '../../hooks/UseDataR';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = UseDataR();

    console.log(reviews);

    return (
        <div id="BikeServices" className="backgroundServices">
            <div>
                <h2 className="p-5 textCol">Customer Reviews</h2>
                <div className="service-container">
                    {
                        reviews.length === 0 ?
                            <Spinner animation="border" className="mx-auto mb-2" /> :
                            <Row xs={1} md={3} className="g-4 pb-4 px-4">
                                {
                                    reviews.map(review => <Review key={review._id}
                                        review={review}></Review>)
                                }
                            </Row>
                    }
                </div>
            </div>
        </div>

    );
};

export default Reviews;












// const firebaseConfig = {
//     apiKey: "AIzaSyClRhEZKtpaCzGiOreUPz9q35YOcrJoCq8",
//     authDomain: "assignment-12-220dc.firebaseapp.com",
//     projectId: "assignment-12-220dc",
//     storageBucket: "assignment-12-220dc.appspot.com",
//     messagingSenderId: "932073037778",
//     appId: "1:932073037778:web:dae7e58d116810426ff20b"
// };
// export default firebaseConfig;