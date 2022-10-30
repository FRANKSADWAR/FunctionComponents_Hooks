import React from "react";
import ReactDOM from "react-dom";

class PageTitle extends React.Component{
    constructor(props){
        super(props);
        this.state ={
             name: ''
        };
        
    }

    componentDidMount(){
        document.title = this.state.name;
    }

    componentDidUpdate(){
        document.title = `Hi ${this.state.name}`;
    }
    render(){

    }
}