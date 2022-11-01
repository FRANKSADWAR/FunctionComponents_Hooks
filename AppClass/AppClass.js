//import NewTask from "./NewTask";
//import TasksList from "./TasksList";


class AppClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newTask: {},
            allTasks : [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    handleChange({target}){
        const {name, value} = target; // object destructuring
        this.setState((prevState)=>({ // 
            ...prevState, // copy the previous state into the next state using spread syntax
            newTask :{
                ...prevState.newTask,
                [name]:value,
                id: Date.now()
            }
        }));
    }

    handleSubmit(event){
        event.preventDefault();
        if(!this.state.newTask.title) return ;
        this.setState((prevState)=>({
            allTasks: [prevState.newTask, ...prevState.allTasks ],
            newTask : {}
        }));
    }

    handleDelete(taskIdToRemove){
        this.setState((prevState)=>({
            ...prevState,
            allTasks: prevState.allTasks.filter((task)=> task.id !== taskIdToRemove)
        }));
    }


    render(){
        return (
            <div>
                <h1>Tasks</h1>
                <NewTask
                    newTask = {this.state.newTask}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                />

                <TasksList
                    allTasks={this.state.allTasks}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
}

ReactDOM.render(<AppClass/>,document.getElementById("content"));