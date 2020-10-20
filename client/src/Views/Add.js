import React from 'react';
import axios from 'axios';
import PlayerForm from '../Components/PlayerForm';
export default props => {
    const {id} = props;

    const add = name => {
        axios.post('http://localhost:8000/api/users/new', {name:name})
        .then(() => {

        })
    }

    const getData = name =>{
        add(name);
    }
    return(
        <div>
            <PlayerForm sendData={getData} infoLabel="Add a Player "/>
        </div>
    )
}