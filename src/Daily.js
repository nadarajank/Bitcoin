import {useState} from 'react';
import './Daily.css';
const AddTask = ({addTask}) =>{
    const [value,setValues] = useState("");
    const ding = (e)=>{
        e.preventDefault();
        if(value !=="")
        {
            addTask(value);
            setValues("");
        }
    } 
    return(
      <form onSubmit = {ding}>
          <input type = "text" value = {value} placeholder = "enter your ToDo--List" className = "input" onChange ={(e)=>setValues(e.target.value)}/>
          <button type = "submit" className = "but"><b>Click!</b></button>
      </form>
    );
}
const Daily = () =>{
    const addTask = text => setTasks([...tasks,{text}])
    const [tasks,setTasks] = useState([
        // {
        //     text : "nattu",
        //     isComplete : false
        // }
    ]);
    const doogle = (index) =>{
        const newTask = [...tasks];
        if(newTask[index].isComplete)
        {
            newTask[index].isComplete = false;
        }
        else
        {
            newTask[index].isComplete = true;
        }
        setTasks(newTask);
    }
    const google = (index) =>{
        const newTask = [...tasks];
        newTask.splice(index,1);
        setTasks(newTask);

    }
    return(
        <div className = "title">
            <div className = "header">
                <h1 className = "head">ToDo--App</h1>
                <h1 className = "your">Your Daily Shedule :</h1>
            </div>
              <AddTask addTask = {addTask}/>
            {
                tasks.map((task,index)=>(
                    <div>
                        <span onClick = {()=>doogle(index)} className = {task.isComplete ? "dill task" : "dill"}>
                        {/* {index} */}
                       <p className = "para">{task.text}</p>
                        </span>
                        <button className = "btn" onClick = {()=>google(index)}><b>Remove</b></button>
                    </div>
                ))
            }
        </div>
    );
}
export default Daily;