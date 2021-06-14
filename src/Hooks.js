import {useState} from 'react';
const Hooks = () =>{
    const [Count,setCount] = useState(0);
    return(
       <div>
           <h1>your count is a {Count}</h1>
           <button onClick = {()=>setCount(Count+1)}>incremenet</button>
           <button onClick = {()=>setCount(Count*0)}>Zero</button>
           <button onClick = {()=>setCount(Count-1)}>Decrement</button>
       </div>
    );
}
export default Hooks;