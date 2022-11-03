import React, {useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Counter(){

    useEffect(() =>{
        document.addEventListener('mousedown',increment);
        return () => {
            document.removeEventListener('mousedown',increment);
        }
    },[]);
}

const increment = () => {
    setClick((prevCount) => prevCount + 1);
};


