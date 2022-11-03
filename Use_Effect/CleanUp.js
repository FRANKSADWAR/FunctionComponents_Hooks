import React, {useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Counter(){

    const [clickCount, setClickCount ] = useState(0);
    
    // use effects to update components after mounting them 
    useEffect(() =>{
        document.addEventListener('mousedown',increment);

        return () => { // clean up after the effects
            document.removeEventListener('mousedown',increment);
        }
    },[]);

    // set the current state using the previous state
    const increment = () => {
        setClickCount((prevCount) => prevCount + 1);
    };

    return (
        <h1>Document clicks: {clickCount} </h1>
    );
}
ReactDOM.render(<Counter/>,document.getElementById('counter'));




