import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function Counter(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.addEventListener('mousedown',handleClick);
        // handle the effects by cleaning it up
        return () =>{
            document.removeEventListener('mousedown',handleClick);
        }
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

/**
 * Most of the time, we should be able to clear the side effects of the use effect code.
 * When we add event listeners to the DOM, its important to remove those event listeners when we are done with them to avoid
 * memory leaks.
 * If our effect didn't return a cleanup function, then a new event listiner would be added to the DOM's document
 * object every time that our component re-renders.
 * If our effect returns a function, then the useEffect() hook treats that as a clean up function.
 * 
 */