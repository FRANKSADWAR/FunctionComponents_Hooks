



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
            <main>
                <h1>Tasks</h1>
                <NewTask
                    newTask = {this.state.newTask}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                />

                <TasksList
                    allTasks={this.state.newTask}
                    handleDelete={this.handleDelete}
                />
            </main>
        );
    }
}

function TasksList({allTasks, handleDelete}){
    return (
        <ul>
            { allTasks.map(({title,description,id})=>(
                <li key={id}>
                    <div>
                        <h2>{title}</h2>
                        <button onClick={()=> handleDelete(id)}> X </button>
                    </div>
                    {!description ? null: <p>{description}</p>}
                </li>
            ) )}
        </ul>
    );
}

function NewTask({newTask, handleChange, handleSubmit}){
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="New Task"
                value={newTask.title || ""}
                onChange={handleChange}
            />
            {!newTask.title ? null: (
                <>
                    <textarea
                        name="desription"
                        placeholder="Details..."
                        value={newTask.description || ""}
                        onChange={handleChange}
                    />
                    <button type="submit">Add Task</button>
                </>
            )}
        </form>
    );
}



ReactDOM.render(<AppClass/>,document.getElementById('content'));