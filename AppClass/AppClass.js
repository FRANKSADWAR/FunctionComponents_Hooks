import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class AppClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            newTask: {},
            allTasks : []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    handleChange({target}){

    }

    handleSubmit(event){


    }

    handleDelete(taskIdToRemove){

    }


    render(){

    }
}