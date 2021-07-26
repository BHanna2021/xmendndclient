import React, { useState, useEffect } from 'react';
import { Button, CardImg } from 'reactstrap';
import EditCharacter from './CharacterEdit';
import APIURL from '../../helpers/environment';

const ViewCharacter = (props) => {
    console.log(props);
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
        }).then(() => props.fetchCharacters())
    }



    return (
        <div className='character_view'>
            <div id="featurecard" class="card text-center col-md-6 offset-md-1">
                {/* <CardImg top width="100%" src="Image1.jpg" alt=" " /> */}
                <div class="card-header">
                    {props.characterToView.race}/{props.characterToView.char_class}

                </div>
                <div class="card-body">
                    <h2 class="card-title">{props.characterToView.name}</h2>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    <div className='characterinfo'>
                        <table scope="col" id="table2">
                        <div id="col1">
                            <tr>
                                    <th style={{letterSpacing: "1.5px", fontSize: "115%"}}>Race: {props.characterToView.race}</th>
                                </tr>
                                <tr>
                                    <th style={{letterSpacing: "1.5px", fontSize: "115%"}}>Class:  {props.characterToView.char_class}</th>
                                </tr>
                                <tr>
                                    <th style={{letterSpacing: "1.5px", fontSize: "115%"}}>Experience:  {props.characterToView.experience}</th>
                                </tr>
                                <tr>
                                    <th style={{letterSpacing: "1.5px", fontSize: "115%"}}>Background: {props.characterToView.background}</th>
                                </tr>
                                <tr>
                                    <th style={{letterSpacing: "1.5px", fontSize: "115%"}}>Level:  {props.characterToView.level}</th>
                                </tr>

                                <hr/>
                                <div class="d-grid gap-2 col-8 mx-auto">
                                    <button style={{backgroundColor: "indigo", borderRadius: "15px", letterSpacing: "1.5px", fontSize: "105%"}} class="btn btn-secondary btn-block" type="button" onClick={editOn}>Update</button>
                                    {editActive ? <EditCharacter characterToView={props.characterToView} editOff={editOff} token={props.token} /> : <></>}
                                </div>
                            </div>
                            <div id='col2'>
                                <tr>
                                    <th style={{letterSpacing: "1.5px", fontSize: "115%"}}>Alignment: {props.characterToView.alignment}</th>
                                </tr>
                                <tr>
                                    <th style={{letterSpacing: "1.5px", fontSize: "115%"}}>Gender: {props.characterToView.gender}</th>
                                </tr>
                                <tr>
                                    <th style={{letterSpacing: "1.5px", fontSize: "115%"}}>Height-ft: {props.characterToView.height_ft}</th>
                                </tr>
                                <tr>
                                    <th style={{letterSpacing: "1.5px", fontSize: "115%"}}>Height-inches: {props.characterToView.height_in}</th>
                                </tr>
                                <tr>
                                    <th style={{letterSpacing: "1.5px", fontSize: "115%"}}>Weight: {props.characterToView.weight}</th>
                                </tr>
                                <hr/>
                                <div class="d-grid gap-2 col-8 mx-auto">
                                    <button style={{backgroundColor: "midnightblue", borderRadius: "15px", letterSpacing: "1.5px", fontSize: "105%"}} class="btn btn-secondary btn-block" type="button" onClick={() => {deleteCharacter(props.characterToView)}}>Delete</button>
                                </div>
                            </div>
                            <tr>

                            </tr>
                        </table>
                    </div>


                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    );
}

export default ViewCharacter;
