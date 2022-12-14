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
                    <div>
                        <textarea
                        name="desription"
                        placeholder="Details..."
                        value={newTask.description || ""}
                        onChange={handleChange}
                    />
                    <button type="submit">Add Task</button>
                    </div>
            )}
        </form>
    );
}