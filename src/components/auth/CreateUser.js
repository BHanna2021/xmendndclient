import React, { useState } from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    Container
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from '../../helpers/environment';

const CreateUser = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [handle, setHandle] = useState("");

    //Password Validation
    const [hasLowerCase, setHasLowerCase] = useState(false);
    const [hasUpperCase, setHasUpperCase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
    const [hasEightDigits, setHasEightDigits] = useState(false);

    const validPasswordCheck = (password) => {
        let lowerCase = /[a-z]/g;
        let upperCase = /[A-Z]/g;
        let number = /[0-9]/g;
        let specialChar = /[ `!@#$%^&*?~]/g;

        if (password.match(lowerCase)) {
            setHasLowerCase(true);
        } else {
            setHasLowerCase(false);
        }

        if (password.match(upperCase)) {
            setHasUpperCase(true);
        } else {
            setHasUpperCase(false);
        }

        if (password.match(number)) {
            setHasNumber(true);
        } else {
            setHasNumber(false);
        }

        if (password.match(specialChar)) {
            setHasSpecialCharacter(true);
        } else {
            setHasSpecialCharacter(false);
        }

        if (password.length >= 8) {
            setHasEightDigits(true);
        } else {
            setHasEightDigits(false);
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        validPasswordCheck(e.target.value);
    }

    //Modal
    const [modalOpen, setModalOpen] = useState(true);
    const closeModal = () => {
        setModalOpen(false)
        props.toggleCreateUserOff();
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/register`, {
            method: "POST",
            body: JSON.stringify({
                user: { email: email, password: password, handle: handle, },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then(
                (response) => response.json()
            )
            .then((data) => {
                props.updateToken(data.sessionToken);
            })
    };


    return (
        <div style={{ borderRadius: '25px 25px 25px 25px' }} >
            <Modal isOpen={modalOpen}>
                <ModalHeader style={{ backgroundColor: "wheat" }}>
                    <h2 style={{ color: "indigo" }}>Who goes there?</h2>
                </ModalHeader>
                <ModalBody style={{ backgroundColor: "antiquewhite" }}>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                                placeholder="AdventurerBob@DnD.com"
                                title="please enter a valid email"
                                required
                            />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                onInput={passwordHandler}
                                name="password"
                                value={password}
                                type="password"
                                required
                            />
                            <div>
                                <ul>
                                    {hasLowerCase ? <span> </span> :
                                        <p>
                                            <span>Needs a Lowercase Letter</span>
                                        </p>}
                                    {hasUpperCase ? <span> </span> :
                                        <p>
                                            <span>Needs an Uppercase Letter</span>
                                        </p>}
                                    {hasNumber ? <span> </span> :
                                        <p>
                                            <span>Needs a Number</span>
                                        </p>}
                                    {hasSpecialCharacter ? <span> </span> :
                                        <p>
                                            <span>Needs a Special Character</span>
                                        </p>}
                                    {hasEightDigits ? <span> </span> :
                                        <p>
                                            <span>Minimum 8 Characters</span>
                                        </p>}
                                </ul>
                            </div>
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Label htmlFor="handle">DnD handle</Label>
                            <Input
                                onChange={(e) => setHandle(e.target.value)}
                                name="handle"
                                value={handle}
                            />
                        </FormGroup>
                        <br />
                        <Row>
                            <Col md="3">
                                <Button style={{ backgroundColor: "darkblue", fontSize: "110%" }} type="submit">Join Us</Button>
                            </Col>
                            <Col md="3">
                                <Button style={{ backgroundColor: "darkslateblue", fontSize: "110%" }} onClick={closeModal}>Cancel</Button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
        </div >
    );
};

export default CreateUser;