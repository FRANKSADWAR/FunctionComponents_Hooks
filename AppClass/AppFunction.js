import React, {useState} from "react";
import ReactDOM from "react";
import { render } from "react-dom";

export default function AppFunction(){

    const [newTask,setTask] = useState({});
    const [allTasks, setAllTasks] = useState([]);

    const handleChange = ({target}) => {
        const {name,value} = target;
        setTask((prevState) => ({
            ...prevState,
            [name]: value,
            id: Date.now()
        }));

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!newTask.title) return ;
        setAllTasks((prevState) => ({
            allTasks: [prevState.newTask, ...prevState.allTasks ],
            newTask : {}
        }));
    }

    const handleDelete = (taskIdToRemove) => {
        setAllTasks((prevState) => ({
            ...prevState,
            allTasks: prevState.allTasks.filter((task) => task.id !== taskIdToRemove)
        }));

    }

    return (
        
    )


}