import React, {useState} from 'react';
import {Link,navigate} from '@reach/router'
export default props =>{
    const[player,setPlayer] = useState("");

    const onSubmitHandler = () => {
        var name = (player === "") ? props.initialValue : player;
        props.sendData(name)
        navigate('/player')
    }
    return(
        <form onSubmit = {onSubmitHandler}>
            <Link to="/players/list/"><h1>Manage Players</h1></Link>
            <h1> | </h1>
            <Link to=""><h1>Manage Player Status</h1></Link>
        </form>
    )
}