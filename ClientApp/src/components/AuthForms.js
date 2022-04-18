import React, {Component} from "react";
import { 
    Button, 
    Container, 
    Row, 
    Col, 
    Form, 
    FormGroup, 
    Input, 
    Label,
    ButtonGroup
} from "reactstrap";

export class AuthForms extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            hasAccount: false,
            sexOption: 'male'
        }
    }

    radioButtonHandler(event)
    {
        this.setState({
            sexOption: event.target.value
        })
    }

    switchForm(hasAccount)
    {
        this.setState({
            hasAccount: hasAccount
        })
    }

    renderSignInForm()
    {
        return (
            <Container>
                <h1>Sign in form!</h1>
                <Form className="custom-form border py-3">
                    <FormGroup>    
                        <Label for="email">
                            Your e-mail
                        </Label>
                        <Input type="email" name="email" id="email" placeholder="email@some.thing">
                        </Input>
                    </FormGroup>
                    <FormGroup>    
                        <Label for="password">
                            Password
                        </Label>
                        <Input type="password" name="password" id="password" placeholder="********">
                        </Input>
                    </FormGroup>
                    <FormGroup className="py-3">
                        <Button className="form-button btn btn-outline-dark" onClick={this.switchForm.bind(this, false)}>
                            I don't have account!
                        </Button>
                    </FormGroup>
                    <Button type="submit" className="btn-primary">
                        Sign in 
                    </Button>
                </Form>
            </Container>
        )
    }

    renderSignUpForm()
    {
        return (
            <Container>
                <h1>Get a free account!</h1>
                <Form className="custom-form border py-3">
                    <FormGroup className="row">
                        <Col>
                            <Label Label for="first">
                                First name
                            </Label>
                            <Input type="text" name="first" id="first" placeholder="Alex" maxLength={30}>
                            </Input>  
                        </Col>
                        <Col>
                            <Label for="second">
                                Last name
                            </Label>
                            <Input type="text" name="second" id="second" placeholder="Bruh" maxLength={30}>
                            </Input>  
                        </Col>
                    </FormGroup>
                    <FormGroup>  
                        <Label for="email">
                            Enter eligible e-mail
                        </Label>
                        <Input type="email" name="email" id="email" placeholder="email@some.thing">
                        </Input>
                    </FormGroup>
                    <FormGroup  className="py-3">    
                        <Label for="password">
                            Password
                        </Label>
                        <Input type="password" name="password" id="password" placeholder="********">
                        </Input>
                        <Label for="password-cnf">
                            Confirm password
                        </Label>
                        <Input type="password-cnf" name="password-cnf" id="password-cnf" placeholder="********">
                        </Input>
                    </FormGroup>
                    <Label for="sex">Sex</Label>
                    <FormGroup name="sex">
                        <Label for='male'>
                            <Input className="mx-1" type="radio" name="male" value="male"
                                checked={this.state.sexOption === 'male'}
                                onChange={this.radioButtonHandler.bind(this)}
                            /> 
                            Male
                        </Label>
                        <Label for='female'>
                            <Input className="mx-1" type="radio" name="female" value="female" 
                                checked={this.state.sexOption === 'female'}
                                onChange={this.radioButtonHandler.bind(this)}
                            />
                            Female
                        </Label>
                        <Label for='other'>
                            <Input className="mx-1" type="radio" name="other" value="other" 
                                checked={this.state.sexOption === 'other'}
                                onChange={this.radioButtonHandler.bind(this)}
                            />
                            Other
                        </Label>
                    </FormGroup>
                    <FormGroup className="py-3">
                        <Label for='birthdate'>Birthdate</Label>
                        <Input type="date" max={new Date().toISOString().split("T")[0]} name="birthdate" id="birthdate"></Input>
                    </FormGroup>
                    <FormGroup className="py-3">
                        <Label for='document'>Upload your document (optional for now)</Label>
                        <Input type="file" accept=".png,.jpg" name="document" id="document"></Input>
                    </FormGroup>
                    <FormGroup className="py-3">
                        <Button className="form-button btn btn-outline-dark" onClick={this.switchForm.bind(this, true)}>
                            I already have account!
                        </Button>
                    </FormGroup>
                    <Button className="btn-primary">
                        Register 
                    </Button>
                </Form>
            </Container>
        )
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
                            this.state.hasAccount ?
                            this.renderSignInForm() :
                            this.renderSignUpForm()
                        }
                    </Col>
                    <Col className="col-3">
                    </Col>
                </Row>
            </Container>
            
        )
    }

}