import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const UserReview = () => {

    const { user } = useAuth();
    const history = useHistory();


    const reviewRef = useRef();
    const ratingRef = useRef();

    const newUser = {};
    newUser.userNameWhoOrdered = user.displayName;
    newUser.email = user.email;
    newUser.userid = user.uid;
    console.log(newUser);

    const handleAddUser = (e) => {
        const review = reviewRef.current.value;
        const rating = ratingRef.current.value;
        newUser.userReview = review;
        newUser.userRating = rating;
        fetch('https://calm-anchorage-33077.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the user');
                    // history.push('/uReview');
                    window.location.reload();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Dashboard></Dashboard>
            <h2 class="mt-5 py-5  text-primary">Give your Review</h2>
            {/* <form onSubmit={handleAddUser} className="row g-3 "> */}
            <form onSubmit={handleAddUser} className="row g-3 ">
                <div class="col-12 col-md-6 mx-auto">
                    <label for="inputName4" class="form-label fw-bold">Review</label>
                    <textarea type="text" class="form-control h-50" id="inputName4" ref={reviewRef} required />
                    <label for="inputContact4" class="form-label fw-bold">Rating</label>
                    <input type="number" class="form-control w-25 mx-auto" id="inputContact4" ref={ratingRef} required />
                    <button type="submit" class="btn btn-primary mt-3">Submit Review</button>
                </div>
            </form>
        </div>
    );
};

export default UserReview;