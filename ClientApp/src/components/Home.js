import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <Container>
            <Row style={{
                backgroundImage: 'url("/assets/images/plane_1.jpg")',
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
                    <hr/>
                    <h1>PlanePort</h1>
                    <h5>Book tickets with no worries!</h5>
                    <hr/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                    <img src='/assets/images/airport_image_1.jpg'/>
                </Col>
                <Col className='text-justify' style={{
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }}>
                    <h3 className='text-center'>. . .</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h3 className='text-center'>. . .</h3>
                </Col>
            </Row>
            <br/>
        </Container>
      </div>
    );
  }
}
