import React, { useRef, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import useData from '../../hooks/useData';
import './BookingDetail.css';

const BookingDetail = props => {
  console.log(props.show);
  const { user } = useAuth();
  const history = useHistory();

  const addressRef = useRef();
  const contactRef = useRef();

  const {
    _id,
    id,
    name,
    img,
    description,
    madeIn,
    milage,
    mode,
    price,
    released,
    availableTime,
    makingTime,
    shopName,
  } = props.show;
  const newUser = { name, img, description, price };
  newUser.userNameWhoOrdered = user.displayName;
  newUser.email = user.email;
  newUser.userid = user.uid;
  newUser.orderStatus = 'pending';
  console.log(newUser);

  const handleAddUser = e => {
    const address = addressRef.current.value;
    const contact = contactRef.current.value;
    newUser.userAddress = address;
    newUser.userContact = contact;
    fetch('https://calm-anchorage-33077.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('successfully added the user');
          history.push('/explore');
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <Col className="mx-auto my-5 py-5">
          <Card
            className="resPaddN"
            style={{
              fontSize: 'larger',
              backgroundColor: '#A3CFF9',
            }}
          >
            <Card.Img
              className="img-fluid mx-auto"
              style={{ height: '30vh', width: '40vw' }}
              variant="top"
              src={img}
            />
            <Card.Body>
              <Card.Title className="bg-white fw-bold">{name}</Card.Title>
              <Card.Title style={{ color: 'goldenrod', fontWeight: 'bold' }}>
                Price: {price} BDT{' '}
              </Card.Title>
              <Card.Title>Made In: {madeIn}</Card.Title>
              <Card.Title>Milage: {milage} KPM</Card.Title>
              <Card.Title>Model: {mode}</Card.Title>
              <br />
              <Card.Title>Release: {released}</Card.Title>
              <br />
              <Card.Text
                style={{ fontWeight: 'bold', textAlign: 'center' }}
                className="text-center"
              >
                {description}
              </Card.Text>
              <div className="bg-secondary bg-opacity-50 text-center">
                <Card.Text style={{ fontWeight: 'bold' }}>
                  User Name <br />
                  <span className="text-white"> {user.displayName}</span>
                </Card.Text>
                <Card.Text style={{ fontWeight: 'bold' }}>
                  User email <br />
                  <span className="text-white">{user.email}</span>
                </Card.Text>
              </div>
              <form onSubmit={handleAddUser} className="row g-3 text-center">
                <div class="col">
                  <label for="inputName4" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName4"
                    ref={addressRef}
                    required
                  />
                  <label for="inputContact4" class="form-label">
                    Contact
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputContact4"
                    ref={contactRef}
                    required
                  />
                  <button type="submit" class="btn btn-primary mt-3">
                    Place Order
                  </button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default BookingDetail;
