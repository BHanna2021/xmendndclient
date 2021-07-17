import React from 'react';
import { List, Button } from 'reactstrap';

const ViewCharacter = (props) => {
    // const deleteCharacter = (character) => {
    //     fetch(`http://localhost:3000/character/${character.id}`, {
    //         method: 'DELETE',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     }).then(() => props.fetchCharacters())
    // }

    // const characterMapper = () => {
    //     return props.characters.map((character, index) => {
    //         return(
    //             <tr key={index}>
    //                 <th scope="row">{character.id}</th>
    //                 <td>{character.race}</td>
    //                 <td>{character.char_class}</td>
    //                 <td>{character.background}</td>
    //                 <td>
    //                     <Button color="warning" onClick={() => {props.editUpdateCharacter(character); props.updateOn()}}>Update</Button>
    //                     <Button color="danger" onClick={() => {deleteCharacter(character)}}>Delete</Button>
    //                 </td>
    //             </tr>
    //         )
    //     })
    // }    

    return (
        <div className='character_view'>
            <div id="featurecard" class="card text-center col-md-6 offset-md-3">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div className='characterinfo'>
                    <div className='card-columns' id='col1'>
                        <li>Name:</li>
                        <li>Alignment:</li>
                        <li>Gender:</li>
                        <li>Height-ft:</li>
                        <li>Height-inches:</li>
                        <li>Weight:</li>
                    </div>
                    <div className='card-columns' id='col2'>
                        <li>Race:</li>
                        <li>Class:</li>
                        <li>Background:</li>
                        <li>Level:</li>
                        <li>Experience:</li>
                    </div>
                </div>
                <br />
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-primary" type="button">Button</button>
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