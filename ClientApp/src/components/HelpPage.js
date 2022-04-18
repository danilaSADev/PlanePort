import { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import {
    Button,
    Form,
    FormText,
    FormGroup,
    Input,
    Label
} from "reactstrap";

import "./CustomForm.css"

export class HelpPage extends Component {
    
    constructor(props)
    {
        super(props);

        this.state = {
            isSent: false
        }
    }

    sendMessageHandler(event)
    {
        this.setState({
            isSent: true
        })
    }

    render()
    {   
        return (
            <Container>
                <Row>
                    <Col className="col-3">
                    </Col>
                    <Col>
                        {
                        !this.state.isSent ?
                        <Form className="custom-form p-3 border">
                            <h1>Let us know if we can help!</h1>
                            <FormGroup className="my-3">
                                <Label for="select-trouble">Choose your trouble</Label>
                                <Input type="select" name="select-trouble" id="select-trouble">
                                    <option>Having troubles accessing my account</option>
                                    <option>Verification issues</option>
                                    <option>Other</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className="my-3">
                                <Input type="checkbox" name="soon-flight" id="soon-flight"></Input>
                                <span className="m-3">Do you have flight in next 15 minutes?</span>
                            </FormGroup>
                            <FormGroup className="my-3">
                                <Label for="departure-day">Describe your issue</Label>
                                <Input placeholder="Around 50 symbols..." maxLength={80} type="text" name="issue-description" id="issue-description">
                                </Input>
                            </FormGroup>
                            <FormGroup className="text-center">
                                <Button onClick={this.sendMessageHandler.bind(this)} className="btn-outline-warning btn form-button">
                                    Get help!
                                </Button>
                            </FormGroup>
                        </Form> :
                        <Container className="rounded-3 border-success success p-3 border">
                            <h3>Message is sent!</h3>
                            <h6>We will send you respond as quick as we can!</h6>
                        </Container>
                        }
                    </Col>
                    <Col className="col-3">
                    </Col>
                </Row>
            </Container>
        );
    }
}