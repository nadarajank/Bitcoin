import {useState,useEffect} from 'react';
const Count = () =>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.title = "YouTube";
    })
    return(
       <div>
           <h1>you are Count is : {count}</h1><br/>
           <button onClick = {()=>setCount(count+1)}>increment</button> &nbsp;&nbsp;&nbsp;&nbsp;
           <button onClick = {()=>setCount(count*0)}>Nutrel</button>&nbsp;&nbsp;&nbsp;&nbsp;
           <button onClick = {()=>setCount(count-1)}>decrement</button>

       </div>
    );
}
export default Count;