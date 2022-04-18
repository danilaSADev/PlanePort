import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";


export class TicketsPage extends Component 
{

    constructor(props)
    {
        super(props);

        this.state = {
        }
    }

    render()
    {

        return (
            <Container className="border">
                <Row className="">
                    <Col className="py-3 border">Flight No.</Col>
                    <Col className="py-3 border">Ticket No.</Col>
                    <Col className="py-3 border">Departure time (local)</Col>
                    <Col className="py-3 border">Approval time (local)</Col>
                    <Col className="py-3 border">Seat number</Col>
                    <Col className="py-3 border">Ticket status</Col>
                    <Col className="py-3 border">Actions</Col>
                </Row>
                <Row>
                    <Col className="py-3 border">129876</Col>
                    <Col className="py-3 border">092351</Col>
                    <Col className="py-3 border">11/12/2022 11:25 AM</Col>
                    <Col className="py-3 border">11/12/2022 9:00 PM</Col>
                    <Col className="py-3 border">15</Col>
                    <Col className="py-3 border">Booked</Col>
                    <Col className="py-3 border"></Col>
                </Row>
                <Row>
                    <Col className="py-3 border">129876</Col>
                    <Col className="py-3 border">092351</Col>
                    <Col className="py-3 border">11/12/2022 11:25 AM</Col>
                    <Col className="py-3 border">11/12/2022 9:00 PM</Col>
                    <Col className="py-3 border">15</Col>
                    <Col className="py-3 border">Booked</Col>
                    <Col className="py-3 border"></Col>
                </Row>
                <Row>
                    <Col className="py-3 border">129876</Col>
                    <Col className="py-3 border">092351</Col>
                    <Col className="py-3 border">11/12/2022 11:25 AM</Col>
                    <Col className="py-3 border">11/12/2022 9:00 PM</Col>
                    <Col className="py-3 border">15</Col>
                    <Col className="py-3 border">Booked</Col>
                    <Col className="py-3 border"></Col>
                </Row>
            </Container>
        );
    }

};
