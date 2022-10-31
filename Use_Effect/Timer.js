import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function Timer(){
    const [time,setTime] = useState(0);
    const [name,setName] = useState('');

    // using the useEffect hook to manage dynamic data
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime((prev)=> prev+1)
        },1000);
        return ()=>{    // this return function will be used to clean up the effects
            clearInterval(intervalId);
        }
    },[]); // pass the dependecy array to control when the effects are called

    const handleChange = ({target}) => setName(target.value);

    return (
        <>
            <h1> Time : {time}</h1>
            <input value={name} onChange={handleChange}/>
        </>
    );
 
}

ReactDOM.render(<Timer/>, document.getElementById('content'));