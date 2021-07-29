import React, { useState } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    ButtonGroup,
    ButtonToggle,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from '../../helpers/environment';

const EditCharacter = (props) => {
    const [editName, setEditName] = useState(props.characterToView.name);
    const [editRace, setEditRace] = useState(props.characterToView.race);
    const [editAlignment, setEditAlignment] = useState(props.characterToView.alignment);
    const [editGender, setEditGender] = useState(props.characterToView.gender);
    const [editHeight_ft, setEditHeight_ft] = useState(props.characterToView.height_ft);
    const [editHeight_in, setEditHeight_in] = useState(props.characterToView.height_in);
    const [editWeight, setEditWeight] = useState(props.characterToView.weight);
    const [editChar_class, setEditChar_class] = useState(props.characterToView.char_class);
    const [editBackground, setEditBackground] = useState(props.characterToView.background);
    const [editLevel, setEditLevel] = useState(props.characterToView.level);
    const [editExperience, setEditExperience] = useState(props.characterToView.experience);
    const [editHitPoints, setEditHitPoints] = useState(props.characterToView.hit_points);
    const [editLanguage, setEditLanguage] = useState(props.characterToView.language);
    const [editSessionNotes, setEditSessionNotes] = useState(props.characterToView.session_notes);
    const [editModalOpen, setEditModalOpen] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/character/update/${props.characterToView.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                Character: {
                    name: editName,
                    race: editRace,
                    alignment: editAlignment,
                    gender: editGender,
                    height_ft: editHeight_ft,
                    height_in: editHeight_in,
                    weight: editWeight,
                    char_class: editChar_class,
                    background: editBackground,
                    level: editLevel,
                    experience: editExperience,
                    hit_points: editHitPoints,
                    language: editLanguage,
                    session_notes: editSessionNotes,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => {
            setEditModalOpen(false)
            setEditLanguage(props.characterToView.language)
            props.editOff()
            window.location = '/'
        })

    }

    const closeModal = () => {
        setEditModalOpen(false)
        props.editOff()
    }

    return (
        <>
            <Modal isOpen={editModalOpen}>
                <ModalHeader style={{ backgroundColor: "wheat" }}>
                    <h2>DnD Character Update</h2>
                </ModalHeader>
                <ModalBody style={{ backgroundColor: "antiquewhite" }}>
                    <Form onSubmit={handleSubmit}>
                        <Row form>
                            <Col md={12}>
                                <FormGroup>
                                    <h3>What adventures will {props.characterToView.name} take you on next?</h3>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="race">Race: </Label>
                                    <Input type="select" name="race" value={editRace} onChange={(e) => setEditRace(e.target.value)}>
                                        <option></option>
                                        <option value="Dragonborn">Dragonborn</option>
                                        <option value="Dwarf">Dwarf</option>
                                        <option value="Elf">Elf</option>
                                        <option value="Gnome">Gnome</option>
                                        <option value="Half-Elf">Half-Elf</option>
                                        <option value="Half-Orc">Half-Orc</option>
                                        <option value="Halfling">Halfling</option>
                                        <option value="Human">Human</option>
                                        <option value="Tiefling">Tiefling</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="Class">Class: </Label>
                                    <Input type="select" name="char_class" value={editChar_class} onChange={(e) => setEditChar_class(e.target.value)}>
                                        <option></option>
                                        <option value="Artificer">Artificer</option>
                                        <option value="Barbarian">Barbarian</option>
                                        <option value="Bard">Bard</option>
                                        <option value="Blood Hunter">Blood Hunter</option>
                                        <option value="Cleric">Cleric</option>
                                        <option value="Druid">Druid</option>
                                        <option value="Fighter">Fighter</option>
                                        <option value="Monk">Monk</option>
                                        <option value="Paladin">Paladin</option>
                                        <option value="Ranger">Ranger</option>
                                        <option value="Rogue">Rogue</option>
                                        <option value="Sorcerer">Sorcerer</option>
                                        <option value="Warlock">Warlock</option>
                                        <option value="Wizard">Wizard</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <br />
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="weight">Weight (lbs): </Label>
                                    <Input size="sm" min="0" type="number" name="weight" value={editWeight} onChange={(e) => setEditWeight(e.target.value)} />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label htmlFor="height">Height (ft): </Label>
                                    <Input type="select" name="height_ft" value={editHeight_ft} onChange={(e) => setEditHeight_ft(e.target.value)}>
                                        <option></option>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label htmlFor="height">(in):</Label>
                                    <Input type="select" name="height_in" value={editHeight_in} onChange={(e) => setEditHeight_in(e.target.value)}>
                                        <option></option>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <br />
                        </Row>
                        <Row>
                            <Col md={12} className="text-center">
                                <Label htmlFor="gender" value={editGender}>Current Gender: {props.characterToView.gender}</Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label check>
                                        <Input type="radio" name="gender" value="Female" onChange={(e) => setEditGender(e.target.value)} />
                                        &nbsp;Female
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label check>
                                        <Input type="radio" name="gender" value="Non-Binary" onChange={(e) => setEditGender(e.target.value)} />
                                        &nbsp;Non-Binary
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label check>
                                        <Input type="radio" name="gender" value="Male" onChange={(e) => setEditGender(e.target.value)} />
                                        &nbsp;Male
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <br />
                        </Row>
                        <Row>
                            <Col md={12} className="text-center">
                                <Label> Current Alignment: {props.characterToView.alignment}</Label>
                                <br />
                                <Label htmlFor="alignment" value={editAlignment}>New Alignment: {editAlignment}</Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <ButtonGroup vertical>
                                    <ButtonToggle value="Lawful Good" color="primary" name="alignment" onClickCapture={(e) => setEditAlignment(e.target.value)}>Lawful Good</ButtonToggle>
                                    <ButtonToggle value="Lawful Neutral" color="info" name="alignment" onClickCapture={(e) => setEditAlignment(e.target.value)}>Lawful Neutral</ButtonToggle>
                                    <ButtonToggle value="Lawful Evil" color="warning" name="alignment" onClickCapture={(e) => setEditAlignment(e.target.value)}>Lawful Evil</ButtonToggle>
                                </ButtonGroup>
                            </Col>
                            <Col md={4}>
                                <ButtonGroup vertical>
                                    <ButtonToggle value="Neutral Good" color="primary" name="alignment" onClickCapture={(e) => setEditAlignment(e.target.value)}>Neutral Good</ButtonToggle>
                                    <ButtonToggle value="Neutral" color="info" name="alignment" onClickCapture={(e) => setEditAlignment(e.target.value)}>Neutral</ButtonToggle>
                                    <ButtonToggle value="Neutral Evil" color="warning" name="alignment" onClickCapture={(e) => setEditAlignment(e.target.value)}>Neutral Evil</ButtonToggle>
                                </ButtonGroup>
                            </Col>
                            <Col md={4}>
                                <ButtonGroup vertical>
                                    <ButtonToggle value="Chaotic Good" color="primary" name="alignment" onClickCapture={(e) => setEditAlignment(e.target.value)}>Chaotic Good</ButtonToggle>
                                    <ButtonToggle value="Chaotic Neutral" color="info" name="alignment" onClickCapture={(e) => setEditAlignment(e.target.value)}>Chaotic Neutral</ButtonToggle>
                                    <ButtonToggle value="Chaotic Evil" color="warning" name="alignment" onClickCapture={(e) => setEditAlignment(e.target.value)}>Chaotic Evil</ButtonToggle>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        <Row>
                            <br />
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Label for="HP">HP: </Label>
                                <Input type="number" min="0" name="HP" value={editHitPoints} onChange={(e) => setEditHitPoints(e.target.value)} />
                            </Col>
                            <Col md={4}>
                                <Label for="level">Level: </Label>
                                <Input type="number" min="0" name="level" max="20" value={editLevel} onChange={(e) => setEditLevel(e.target.value)} />
                            </Col>
                            <Col md={4}>
                                <Label for="experience">Experience: </Label>
                                <Input type="text" name="experience" value={editExperience} onChange={(e) => setEditExperience(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <br />
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="background">Background: </Label>
                                    <Input type="select" name="background" value={editBackground} onChange={(e) => setEditBackground(e.target.value)}>
                                        <option></option>
                                        <option value="Acolyte">Acolyte</option>
                                        <option value="Anthropologist">Anthropologist</option>
                                        <option value="Archaeologist">Archaeologist</option>
                                        <option value="Athlete">Athlete</option>
                                        <option value="Charlatan">Charlatan</option>
                                        <option value="City Watch">City Watch</option>
                                        <option value="Clan Crafter">Clan Crafter</option>
                                        <option value="Cloistered Scholar">Cloistered Scholar</option>
                                        <option value="Courtier">Courtier</option>
                                        <option value="Criminal">Criminal</option>
                                        <option value="Entertainer">Entertainer</option>
                                        <option value="Faceless">Faceless</option>
                                        <option value="Faction Agent">Faction Agent</option>
                                        <option value="Far Traveler">Far Traveler</option>
                                        <option value="Fisher">Fisher</option>
                                        <option value="Folk Hero">Folk Hero</option>
                                        <option value="Gladiator">Gladiator</option>
                                        <option value="Guild Artisan">Guild Artisan</option>
                                        <option value="Guild Merchant">Guild Merchant</option>
                                        <option value="Haunted One">Haunted One</option>
                                        <option value="Hermit">Hermit</option>
                                        <option value="House Agent">House Agent</option>
                                        <option value="Inheritor">Inheritor</option>
                                        <option value="Knight">Knight</option>
                                        <option value="Knight of the Order">Knight of the Order</option>
                                        <option value="Marine">Marine</option>
                                        <option value="Mercenary Veteran">Mercenary Veteran</option>
                                        <option value="Noble">Noble</option>
                                        <option value="Outlander">Outlander</option>
                                        <option value="Pirate">Pirate</option>
                                        <option value="Sage">Sage</option>
                                        <option value="Sailor">Sailor</option>
                                        <option value="Shipwright">Shipwright</option>
                                        <option value="Smuggler">Smuggler</option>
                                        <option value="Soldier">Soldier</option>
                                        <option value="Spy">Spy</option>
                                        <option value="Urban Bounty Hunter">Urban Bounty Hunter</option>
                                        <option value="Urchin">Urchin</option>
                                        <option value="Uthgardt Tribe Member">Uthgardt Tribe Member</option>
                                        <option value="Waterdhavian Noble">Waterdhavian Noble</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <Label for="name">Character Name: </Label>
                                <Input type="text" name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <br />
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Label htmlFor="Session Notes">Session Notes:</Label>
                                <br />
                                <Input type="textarea" name="Session Notes" value={editSessionNotes} onChange={(e) => setEditSessionNotes(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <br />
                        </Row>
                        <Row>
                            <Col md={2}>
                            </Col>
                            <Col md={3}>
                                <Button style={{ backgroundColor: "darkmagenta", letterSpacing: "1px", fontSize: "115%" }} type="submit">Update</Button>
                            </Col>
                            <Col md={2}>
                            </Col>
                            <Col md={3}>
                                <Button style={{ backgroundColor: "midnightblue", letterSpacing: "1px", fontSize: "115%" }} onClick={closeModal}>Cancel</Button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default EditCharacter;