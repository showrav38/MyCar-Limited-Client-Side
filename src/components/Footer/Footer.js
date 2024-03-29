import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons';
  import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import React from 'react';
  import { Col, Container, Row } from 'react-bootstrap';
  import './Footer.css';
  const Footer = () => {
    return (
      <div>
        <div className="footer-container">
          <div className="container">
            <div className="container row">
              <div></div>
            </div>
  
            <div>
              <div className="row text-center">
                <h1 className="text-center">MyCar Services Limited</h1>
              </div>
  
              <div className="row text-center">
                <div className="icons-container d-flex justify-content-center d-inline text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
              </div>
            </div>
  
            <div className="row">
              <div className="phone d-flex align-items-center justify-content-center mt-4 col-md-6 ">
                <div className="foter-phone-icon text-success">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </div>
                <div>
                  <h5>+880 1900 555 35 35</h5>
                </div>
              </div>
  
              <div className="col-md-6 map d-flex align-items-center justify-content-center">
                <div className="foter-phone-icon text-success text-center m-2">
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </div>
                <div className="mt-3">
                  <p>
                    130 gulshan, Dhaka, DH 10038,
                    <br /> 102 1st Avenue, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  



/* import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg">
            <Container >
                <Row className="text-dark">
                    <Col xs={12} md={4}>
                        <img className="im m-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nvxIkD5eEO5t3WMS7cnKze5fxb3kJZWp2g&usqp=CAU" />
                        <p className="fw-bold">Strategy and Consulting,
                            Customer Experience and Design,
                            Technology and Engineering,
                            Enterprise Platforms </p>

                    </Col>
                    <Col xs={12} md={4}>
                        <img className="im m-4" src="data:image/png;base64,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" />
                        <p className="fw-bold">USA(New York), China(Beijing)</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <img className="im" src="https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png" />
                        <p className="fw-bold">carmax.supply@gmail.com </p>
                        <p className="fw-bold">+8801626909723 </p>
                    </Col>
                    <p className="fw-bolder mx-auto bg-white text-dark">"Live To Rule, Die Invincible"</p>
                </Row>
            </Container>
        </div >
    );
};

export default Footer; */