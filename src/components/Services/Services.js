import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import useData from "../../hooks/useData";
import Service from "../Service/Service";
import './Services.css';

const Services = () => {
    const [services] = useData();

    console.log(services)

    return (
        <div id="BikeServices" className="backgroundServices">
            <div>
                <h2 className="p-5 textCol">Products Demo</h2>
                <div className="service-container">
                    {
                        services.length === 0 ?
                            <Spinner animation="border" className="mx-auto mb-2" /> :
                            <Row xs={1} md={3} className="g-4 pb-4 px-4">
                                {
                                    services.slice(0, 6).map(service => <Service key={service._id}
                                        service={service}></Service>)
                                }
                            </Row>
                    }
                </div>
            </div>
        </div>

    );
};

export default Services;