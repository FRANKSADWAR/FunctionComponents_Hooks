import React from "react";
import ReactDOM from "react-dom";


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
ReactDOM.render(<Friend/>, document.getElementById('app'));