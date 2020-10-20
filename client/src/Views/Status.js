import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'
export default props =>{
    const[player,setPlayer] = useState("")
    return(
        <div>
            <h1>Player Status - Game 1</h1><br/>
            <Link to ="/status/game/1/"><h3>Game 1</h3></Link>
            <h3> | </h3>
            <Link to ="/status/game/2/"><h3>Game 2</h3></Link>
            <h3> | </h3>
            <Link to ="/status/game/3/"><h3>Game 3</h3></Link>
        </div>
    )
}