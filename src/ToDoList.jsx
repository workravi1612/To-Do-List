import { useState } from "react";

function ToDoList(){

    const [task, setTask] = useState()
    const [addTask, setAddTask] = useState("")

    function handleAddTask(event){
        setAddTask(event.target.value)
    }
    function handleRemoveTask(){}
    function handleTaskIndexUp(){}
    function handleTaskIndexDown(){}

    return(<div>
        <div className="to-do-title">
            To Do List
        </div>
        <input type="text" value={addTask} onChange={handleAddTask} />
    </div>)
}

export default ToDoList;