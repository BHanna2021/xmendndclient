import React, { useState, useEffect } from 'react';
import { Container, Button, Nav, NavItem } from 'reactstrap';
import CharacterTable from '../components/character/CharacterTable';
import ViewCharacter from '../components/character/ViewCharacter';
import APIURL from '../helpers/environment';

const Sidebar = (props) => {
    const [characters, setCharacters] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);

    const fetchCharacters = () => {
        fetch(`${APIURL}/character/mine`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                setCharacters(logData)
            })
    }

    const displayCharacter = (character) => {
        fetch(`${APIURL}/character/${character.id}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                props.setCharacterToView(logData)
            })
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchCharacters();
    }, [])

    return (
        <div className='sidebar' id='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list-styling'>
                    <h2>Welcome!</h2>
                </ul>
                <Nav className="ml-auto" navbar>
                    <NavItem id="button">
                        <Button style={{ backgroundColor: "midnightblue", fontSize: "65%", letterSpacing: "1px" }} onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
                <br />
            </div>
            <Container>
                <CharacterTable characters={characters} displayCharacter={displayCharacter} fetchCharacters={fetchCharacters} token={props.token} />
                {updateActive ? <ViewCharacter characters={characters} characterToView={props.characterToView} setCharactersToView={props.setCharacterToView} updateOff={updateOff} token={props.token} updateOn={updateOn} fetchCharacters={fetchCharacters} /> : <></>}
            </Container>
        </div>
    );
};

export default Sidebar;