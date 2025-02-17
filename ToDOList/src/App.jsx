import ToDolist from './ToDoList.jsx'
function ToDoList() {
  const [tasks, setTasks] = useState(["drink water", "meditate", "shower"]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
    
  }

  function addTask(){

  }

  function deleteTask(index){

  }




  return (
    <div className = "to-do-list">
      <h1>To Do List</h1>
    

    <div>
      <input
        type= "text"
        placeholder="enter task"
        value = {newTask}
        onChange={handleInputChange}/>
        <button 
        className = "add-button"
        onClick={addTask}>
          Add Task
          </button>
    </div>
     </div>)
}

export default App
