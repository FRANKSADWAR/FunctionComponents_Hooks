import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function Counter(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        alert(`Count : ${count}`);
    });

    const handleClick = () => {
        setCount((prevCount)=> prevCount +1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}