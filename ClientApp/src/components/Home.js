import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Container, Row } from 'reactstrap';

import "./CustomForm.css"

export class Home extends Component {
    static displayName = Home.name;

    bookTicketButtonHandler()
    {
        window.location = "/booking";
    }

    render() {
        return (
            <div>
                <Container>
                    <Row style={{
                        backgroundImage: 'url("/assets/images/plane_1.jpg")',
                        boxShadow: 'inset 0em 0em 5em 1em #000000AA',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '700px'
                    }}>
                        <Col className="text-light text-center" style={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }}>
                            <hr />
                            <h1 className='display-2'>PlanePort</h1>
                            <h5>Book tickets with no worries!</h5>
                            <hr />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h2 >Imagine a beautiful world</h2>
                            <img className='img-fluid' src='/assets/images/airport_image_1.jpg' />
                        </Col>
                        <Col className='text-justify' style={{
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }}>
                            <h3 className='text-center '>. . .</h3>
                            <p className='lead'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h3 className='text-center'>. . .</h3>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col className='text-justify' style={{
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }}>
                            <h3 className='text-center '>. . .</h3>
                            <p className='lead'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h3 className='text-center'>. . .</h3>
                        </Col>
                        <Col>
                            <h2 >Some other information</h2>
                            <img className='img-fluid' src='/assets/images/airport_image_2.jpg' />
                        </Col>
                    </Row>
                    <hr />
                    <Row >
                        <Col style={{
                            backgroundImage: 'url("/assets/images/plane_3.jpg")',
                            boxShadow: 'inset 0em 0em 5em 1em #FFFFFFAA',
                            backgroundPosition: 'center',
                            backgroundSize: '100%',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <div className='justify-content-center d-flex flex-column' style={{
                                alignItems: 'center',
                                minHeight: '700px',
                            }}>
                                <h1 className='text-dark'>Try our service once – you'll use it again!</h1>
                                <hr className='border' />
                                <Button onClick={this.bookTicketButtonHandler.bind(this)} className='btn btn-outline-dark form-button'>
                                    <h3>On board!</h3>
                                </Button>
                                <hr />
                            </div>
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        );
    }
}
