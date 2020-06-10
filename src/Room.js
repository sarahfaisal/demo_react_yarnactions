import React, { useState } from 'react';
import './Room.css'


function Room() {

    
    let [isLit, setLit] = useState(false);
    let [temp , setTemp] = useState(27);
    
    

    return (
    <div className={`room ${isLit? "lit": "dark"}`}> 
        This Room is {isLit? "lit": "dark"}
        <br/>
        Temp: {temp}
        <br/>
        <button onClick={()=> setLit(!isLit) } >light off</button>
        <button onClick={()=> setLit(!isLit) } >Light on</button>
        <br/>
        <button onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setTemp(++temp);
                        }}>
            Increase Temp
        </button>
    </div>
    );
}

export default Room;