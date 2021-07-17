import React, { useState, useEffect } from 'react';
import {Button,
        Form,
        FormGroup,
        Label,
        Input,
        Row,
        Col,
        ButtonGroup
    } from 'reactstrap';

const CharacterCreator = (props) => {
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [alignment, setAlignment] = useState('');
    const [gender, setGender] = useState('');
    const [height_ft, setHeight_ft] = useState('');
    const [height_in, setHeight_in] = useState('');
    const [weight, setWeight] = useState('');
    const [char_class, setChar_class] = useState('');
    const [background, setBackground] = useState('');
    const [level, setLevel] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/character/create', {
            method: 'POST',
            body: JSON.stringify({Character: {
                name: name,
                race: race,
                alignment: alignment,
                gender: gender,
                height_ft: height_ft,
                height_in: height_in,
                weight: weight,
                char_class: char_class,
                background: background,
                level: level,
                experience: experience,
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
        .then((charData) => {
            console.log(charData);
            setName('');
            setRace('');
            setAlignment('');
            setGender('');
            setHeight_ft('');
            setHeight_in('');
            setWeight('');
            setChar_class('');
            setBackground('');
            setLevel('');
            setExperience('');
            
        })
    }

    return(
        <>
        <h2>DnD Character Creator</h2>
            <Form onSubmit={handleSubmit}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <h3>Welcome to Character Creator!</h3>
                            <p>See where your imagination can take you.</p>
                        </FormGroup>
                    </Col>
                <Col md={6}>
                    
                </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="race">Race: </Label>
                            <Input type="select" name="race" value={race} onChange={(e) => setRace(e.target.value)}>
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
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="Class">Class: </Label>
                            <Input type="select" name="char_class" value={char_class} onChange={(e) => setChar_class(e.target.value)}>
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
                    <Col md={2}>
                        <FormGroup>
                            <Label htmlFor="weight">Weight: </Label>
                            <Input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            <Label htmlFor="weight"> lbs</Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label htmlFor="height">Height: </Label>
                            <Input type="select" name="height_ft" value={height_ft} onChange={(e) => setHeight_ft(e.target.value)}>
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
                            <Label htmlFor="height_ft"> ft </Label>
                            <Input type="select" name="height_in" value={height_in} onChange={(e) => setHeight_in(e.target.value)}>
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
                            <Label htmlFor="height_in"> in</Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <FormGroup>
                            <Label htmlFor="gender" value={gender}>Gender: </Label>
                            <Label check>
                                <Input type="radio" name="female" value="Female" onChange={(e) => setGender(e.target.value)} />
                                Female
                            </Label>
                            <Label check>
                                <Input type="radio" name="nonbinary" value="Non-Binary" onChange={(e) => setGender(e.target.value)} />
                                Non-Binary
                            </Label>
                            <Label check>
                                <Input type="radio" name="male" value="Male" onChange={(e) => setGender(e.target.value)} />
                                Male
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Label htmlFor="alignment" value={alignment}>Alignment:</Label>
                </Row>
                <Row>
                    <Col md={3}>
                        <ButtonGroup vertical>
                            <Button value="Lawful Good">Lawful Good</Button>
                            <Button value="Lawful Neutral">Lawful Neutral</Button>
                            <Button value="Lawful Evil">Lawful Evil</Button>
                        </ButtonGroup>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <ButtonGroup vertical>
                            <Button value="Neutral Good">Neutral Good</Button>
                            <Button value="Neutral">Neutral</Button>
                            <Button value="Neutral Evil">Neutral Evil</Button>
                        </ButtonGroup>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <ButtonGroup vertical>
                            <Button value="Chaotic Good">Chaotic Good</Button>
                            <Button value="Chaotic Neutral">Chaotic Neutral</Button>
                            <Button value="Chaotic Evil">Chaotic Evil</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default CharacterCreator;