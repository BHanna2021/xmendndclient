import React, { useState, useEffect } from 'react';
import { } from 'reactstrap';
import Sidebar from '../../sites/Sidebar';
import CharacterCreator from './CreateCharacter';
import CharacterCarousel from './CharacterCarousel';
import ViewCharacter from './ViewCharacter';
import ScrollingBanner from '../../sites/Header';
import Footer from '../../sites/Footer';
import APIURL from '../../helpers/environment';

const CharacterIndex = (props) => {
    const [characters, setCharacters] = useState([]);
    const [characterToView, setCharacterToView] = useState({});

    const [sessionToken, setSessionToken] = useState('');
    const [createActive, setCreateActive] = useState(false);

    // const [userHandle, setUserHandle] = useState('');
    // const [userCreated, setUserCreated] = useState('');
    // const [memberSince, setMemberSince] = useState('');

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setSessionToken(localStorage.getItem('token'));
        }
    }, [])

    // const fetchUserData = () => {
    //     console.log(props.id)
    //     fetch(`${APIURL}/${props.id}`, {
    //         method: 'GET',
    //         headers: new Headers ({
    //             'Content-Type': 'application/json'
    //         })
    //     }) .then((res) => res.json())
    //     .then((userData) => {
    //         setUserHandle(userData.handle);
    //         setUserCreated(userData.createdAt)
    //     .then(calculateMemberTime)
    //     })
    // }

    // const calculateMemberTime = (userCreated) => {
    //     setMemberSince(userCreated.split(' ')[0]);
    // }

    // const updateToken = (newToken) => {
    //     localStorage.setItem('token', newToken);
    //     setSessionToken(newToken);
    //     console.log(sessionToken);
    // }

    const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
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
                console.log(logData)
            })
    }
    useEffect(() => {
        // fetchCharacters();
        // fetchUserData();
    }, [])

    return (
        <div className='index'>
            <div>
                <ScrollingBanner />
            </div>
            <div className='layout' >
                <nav>
                    <Sidebar clickLogout={clearToken} token={props.token} setCharacterToView={setCharacterToView} characters={characters} />
                    {/* <Sidebar clickLogout={clearToken} userHandle={userHandle} token={props.token} setCharacterToView={setCharacterToView} characters={characters} /> */}
                </nav>
                <div className='content'>
                    <h1>something to see</h1>

                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button style={{backgroundColor: "darkblue", fontSize: "200%", letterSpacing: "1px", borderRadius: "10px"}} class="btn btn-secondary btn-block" type="button" onClick={toggleCreateOn}>
                            Create a Character
                        </button>
                        {createActive ? <CharacterCreator toggleCreateOff={toggleCreateOff} token={props.token} /> : <></>}
                    </div>
                    <br />
                    <ViewCharacter characters={characters} characterToView={characterToView} fetchCharacters={fetchCharacters} token={props.token} />
                    <CharacterCarousel characters={characters} fetchCharacters={fetchCharacters} token={props.token} />
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )



}

export default CharacterIndex;