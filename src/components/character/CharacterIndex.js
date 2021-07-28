import React, { useState } from 'react';
import { } from 'reactstrap';
import Sidebar from '../../sites/Sidebar';
import CharacterCreator from './CreateCharacter';
import CharacterCarousel from './CharacterCarousel';
import ViewCharacter from './ViewCharacter';
import ScrollingBanner from '../../sites/Header';
import Footer from '../../sites/Footer';
import APIURL from '../../helpers/environment';
import RightSidebar from '../../sites/RightSidebar';

const CharacterIndex = (props) => {
    const [characters, setCharacters] = useState([]);
    const [characterToView, setCharacterToView] = useState(null);

    const [createActive, setCreateActive] = useState(false);

    const clearToken = () => {
        localStorage.clear();
        window.location = "/"
    }

    const toggleCreateOn = () => {
        setCreateActive(true)
    }

    const toggleCreateOff = () => {
        setCreateActive(false)
    }

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

    return (
        <div className='index'>
            <div>
                <ScrollingBanner />
            </div>
            <div className='layout' >
                <nav>
                    <Sidebar clickLogout={clearToken} token={props.token} setCharacterToView={setCharacterToView} characters={characters} />
                </nav>
                <div className='content'>
                    <h1 style={{ color: 'yellow' }}>Adventure Awaits!</h1>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button style={{ backgroundColor: "darkblue", fontSize: "200%", letterSpacing: "1px", borderRadius: "10px" }} class="btn btn-secondary btn-block" type="button" onClick={toggleCreateOn}>
                            Create a Character
                        </button>
                        {createActive ? <CharacterCreator toggleCreateOff={toggleCreateOff} token={props.token} /> : <></>}
                    </div>
                    <br />
                    {characterToView === null ? <CharacterCarousel characters={characters} fetchCharacters={fetchCharacters} token={props.token} />
                        : <ViewCharacter characters={characters} characterToView={characterToView} fetchCharacters={fetchCharacters} token={props.token} />}
                </div>
                <div className="rightsidebar">
                    <RightSidebar />
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default CharacterIndex;