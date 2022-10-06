import React from "react";
import ReactDOM from "react-dom";

/**
 * Function components are React components defined as JS functions
 * Function components must return JSX
 * Function components may accept a props parameter
 * 
 */

// Friend as a function component
export const Friend = () =>{
    return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg"/>;
}


// friend as a class component
class Friend_class extends React.Component{
    render(){
        return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg"/>;
    }
}

// class based component 
export class MyComponentClass extends React.Component {
    render(){
        return <h1>Class based components</h1>;
    }
}

// function based component of the same
export const MyComponentFunction = () => {
    return <h1>Function based componet</h1>;
}


ReactDOM.render(<Friend/>, document.getElementById('app'));