import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';
import Axios from 'axios';
export default(props) => {
    const[name,setName] = useState("");
    const[position,setPosition] = useState("");
    const onSubmitHandler = () => {
        Axios.post('http://localhost:8000/api/users/new/', {name:name, position:position})
        .then(res => {
            navigate('/players/list/')
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <Link to="/players/list/"><h1>List</h1></Link>
            <h1> | </h1>
            <Link to ="/players/addplayer/"><h1>Add Player</h1></Link><br/>
            <label>Name:    </label><input type= "text" onChange={e =>setName(e.target.value)}></input><br/>
            <label>Position    </label><input type="text"onChange={e =>setPosition(e.target.value)}></input><br/>
            <input type="submit"></input>
        </form>
    )
}