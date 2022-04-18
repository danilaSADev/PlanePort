import { Component, Link } from "react";
import { BsCheck2 , BsFillExclamationCircleFill } from "react-icons/bs";
import {
    Row, 
    Col, 
    Button,
    Form,
    FormText,
    FormGroup,
    Input,
    Label
} from "reactstrap";
import "./CustomForm.css";

export class BookTicketForm extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            returnTicket: false
        }

        this.handleSubmit.bind(this);
    }

    returnTicketCheckHandler(event) {
        this.setState({
            returnTicket: !this.state.returnTicket 
        })
    }

    handleSubmit(event) {
        // TODO : Handling form
        console.log('Отправлена форма.');
    }

    render()
    {
        return (
            <div>
                <Row>
                    <Col className="col-3">
                    </Col>
                    <Col >
                        <h1>Book a ticket page</h1>
                        <Form method="POST" className="p-3 border custom-form">
                            <h5>Location</h5>
                            <hr />
                            <FormGroup className="my-3">
                                <Label for="from-location" >Select airport</Label>
                                <Input type="select" id="from-location" name="from-location" placeholder="Select airport..." >
                                    <option>First airport</option>
                                    <option>Great for second time</option>
                                    <option>Badass option</option>
                                </Input>
                                <Label for="to-location">Where do you wanna go?</Label>
                                <Input type="select" id="to-location" name="to-location">
                                    <option>Based location</option>
                                    <option>Never know it exist</option>
                                    <option>Oh my...</option>
                                </Input>
                            </FormGroup>
                            <h5>Time</h5>
                            <hr />
                            <FormGroup className="my-3">
                                <Label for="departure-day">Choose your departure day</Label>
                                <Input type="date" name="departure-day" id="departure-day" min={new Date().toISOString().split("T")[0]}>
                                </Input>
                            </FormGroup>
                            <h5>Luggage</h5>
                            <hr />  
                            <FormGroup className="my-3">
                                <Label for="luggage-type">Luggage type</Label>
                                <Input type="select" name="luggage-type" id="luggage-type">
                                    <option></option>
                                </Input>
                                <Label for="luggage-weight">Luggage weight (0-25)</Label>
                                <Input type="number" min={0} max={25} name="luggage-weight" id="luggage-weight">
                                    <option></option>
                                </Input>
                            </FormGroup>
                            <hr />
                            <FormGroup className="my-3">
                                <Input
                                    defaultChecked={this.state.returnTicket} 
                                    onChange={this.returnTicketCheckHandler.bind(this)} 
                                    type="checkbox" 
                                    name="return-ticket-option" 
                                    id="return-ticket-option">
                                </Input>
                                <span className="m-3">Do you need a return ticket?</span>
                            </FormGroup>
                            { this.state.returnTicket && 
                            <FormGroup className="my-3">
                                <Label for="return-day">Choose your return day</Label>
                                <Input type="date" name="return-day" id="return-day" min={new Date().toISOString().split("T")[0]}>
                                </Input>
                                <hr />
                            </FormGroup>}
                            <FormGroup className="my-3">
                                <Input 
                                    type="checkbox" 
                                    name="return-ticket-option" 
                                    id="return-ticket-option">
                                </Input>
                                <span className="m-3">Need a taxi?</span>
                            </FormGroup>
                            <FormGroup className="text-center">
                                <Button onSubmit={this.handleSubmit} className="form-button btn btn-outline-dark">
                                    Book <BsCheck2></BsCheck2>
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col className="col-3">
                        <div className="py-3 container border border-warning rounded-3">
                            <h5><BsFillExclamationCircleFill className="text-warning"></BsFillExclamationCircleFill> Quick tip</h5>
                            <hr />
                            <FormText className="text-muted">If you want to access all features of our service, it's better to get a <a href="/authorize">free account</a> !</FormText>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}