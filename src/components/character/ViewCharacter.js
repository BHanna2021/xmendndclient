import React, { useState } from 'react';
import EditCharacter from './CharacterEdit';
import APIURL from '../../helpers/environment';

const ViewCharacter = (props) => {
    const [editActive, setEditActive] = useState(false);

    const editOn = () => {
        setEditActive(true)
    }

    const editOff = () => {
        setEditActive(false)
    }


    const deleteCharacter = (characterToView) => {
        fetch(`${APIURL}/character/delete/${props.characterToView.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then(() => {
            props.fetchCharacters();
            window.location = "/"
        })

    }



    return (
        <div className='character_view'>
            <div id="featurecard" class="card text-center col-md-6 offset-md-1">
                <div class="card-header">
                    {props.characterToView.race}/{props.characterToView.char_class}
                </div>
                <div class="card-body">
                    <h2 class="card-title">{props.characterToView.name}</h2>
                    <div className='characterinfo'>
                        <table id="table2">
                            <div id="col1">
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Race: {props.characterToView.race}</th>
                                </tr>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Class:  {props.characterToView.char_class}</th>
                                </tr>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Experience:  {props.characterToView.experience}</th>
                                </tr>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Background: {props.characterToView.background}</th>
                                </tr>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Level:  {props.characterToView.level}</th>
                                </tr>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>HP:  {props.characterToView.hit_points}</th>
                                </tr>
                                <hr />
                                <div class="d-grid gap-2 col-8 mx-auto">
                                    <button style={{ backgroundColor: "indigo", borderRadius: "15px", letterSpacing: "1.5px", fontSize: "105%" }} class="btn btn-secondary btn-block" type="button" onClick={editOn}>Update</button>
                                    {editActive ? <EditCharacter characterToView={props.characterToView} editOff={editOff} token={props.token} /> : <></>}
                                </div>
                            </div>
                            <div id='col2'>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Alignment: {props.characterToView.alignment}</th>
                                </tr>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Gender: {props.characterToView.gender}</th>
                                </tr>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Height-ft: {props.characterToView.height_ft}</th>
                                </tr>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Height-inches: {props.characterToView.height_in}</th>
                                </tr>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Weight: {props.characterToView.weight}</th>
                                </tr>
                                <tr>
                                    <th style={{ letterSpacing: "1.5px", fontSize: "115%" }}>Session Notes: {props.characterToView.session_notes}</th>
                                </tr>
                                <hr />
                                <div class="d-grid gap-2 col-8 mx-auto">
                                    <button style={{ backgroundColor: "midnightblue", borderRadius: "15px", letterSpacing: "1.5px", fontSize: "105%" }} class="btn btn-secondary btn-block" type="button" onClick={() => { deleteCharacter(props.characterToView) }}>Delete</button>
                                </div>
                            </div>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCharacter;
