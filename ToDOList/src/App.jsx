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

  function editTask(index){

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

    <ol>
      {tasks.map((task,inde)=>
      <li key= {index}>
        <span className="text"></span>
        <button 
          className="delete-button" 
          onClick={() => deleteTask(index)}>
          Delete
        </button>
        <button 
          className="edit-button" 
          onClick={() => editTask(index)}>
          Edit
        </button>
      </li>
      )}
    </ol>
     </div>)
}

export default App
