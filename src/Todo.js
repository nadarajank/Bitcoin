import  {useState} from 'react';
import './Todo.css';
const AddTask = ({addTask}) =>{
    const [value,setValues] = useState("");
    const ding = (e) =>{
        e.preventDefault();
        if(value !==""){
            addTask(value);
            setValues("");
        }
    }
    return(
        <form onSubmit = {ding}>
            <input type = "text" value = {value} placeholder = "ente ryour name" onChange ={(e)=>setValues(e.target.value)}/>
            <button type = "submit">Add</button>
        </form>
    );
}

const Todo = () =>{
    const addTask = text => setTasks([...tasks,{text}])
    const [tasks,setTasks] = useState([
        {
            text : "nattu",
            isLogged : false
        }
    ]);
    const doggle = (index) =>{
        const newTask = [...tasks];
        if(newTask[index].isLogged)
        {
            newTask[index].isLogged = false;
        }
        else{
            newTask[index].isLogged = true;
        }
        setTasks(newTask);
    }
    const foggle = (index) =>{
        const newTask = [...tasks];
        newTask.splice(index,1);
        setTasks(newTask);
    }
    return(
      <div>
          <AddTask addTask = {addTask}/>
         {
            tasks.map((task,index)=>(
                <div>
                    <span onClick = {()=>doggle(index)} className = {task.isLogged? "task-name cop-task":"task-name"}>
                    {/* {index} */}
                    <h1>{task.text}</h1>
                    </span>
                    <button onClick = {()=>foggle(index)}>Delete</button>
                </div>
            ))
        }
      </div>
    );
}

export default Todo;

