import './App.css';
import{useState} from 'react'
function App() {
  const [todos, setTodos] =useState([])
  const [task, setTask] = useState('')
  const [checkedTasks, setCheckedTasks] = useState([])

  const addTask =()=> {
    setTodos([...todos, task]);
    setTask('');
  }
  const handleCheck = (e)=> {
    const { value, checked } = e.target;
    if(checked)
      {
        setCheckedTasks([...checkedTasks, value])

      }
      else {
        checkedTasks.forEach((item, index)=>{
          if(item===value) {
            checkedTasks.splice(index,1)
          }
        })
        setCheckedTasks([...checkedTasks])

      }
    
  }
  return (
    <div className="App">
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick ={addTask} > Add Task</button>
      {todos?.map((todo , index)=> {
        return <h1 key={index}>
          <input type="checkbox" value={todo} onChange={handleCheck}/>
          {todo}
        </h1>
      })}
      {checkedTasks?.map((task)=>
        <li>
          {task}
          </li>)}
    </div>
  );
}

export default App;
