import React from 'react';
import { Table, Button } from 'reactstrap';

const CharacterTable = (props) => {
    
    const characterMapper = () => {
        return props.characters.map((character, index) => {
            
            return(
                <tr key={index}>
                    <th scope="row">{character.id}</th>
                    <td>{character.name}</td>
                    <td>{character.char_class}</td>
                    <td>{character.race}</td>
                    <td>
                        <Button id="viewbutton"  class="btn btn-link" onClick={() => {props.displayCharacter(character)}}>View</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Characters</h3>
        <hr />
        <Table size="sm"  scope='row' id="table">
            <thead id="firstcol">
                <tr>
                    <th># |</th>
                    <th>Name | </th>
                    <th>Class | </th>
                    <th>Race |</th>
                </tr>
            </thead>
            <tbody id="secondcol">
                {characterMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default CharacterTable;