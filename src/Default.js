import { useState } from "react";
function Default(){
    const[values,setValues] = useState("");
    const[print,setprint] = useState([]);

    const ding = (e) =>{
        setValues (e.target.value);
    }
    const dong = (e) =>{
        e.preventDefault();
        setprint(name => [...name,values])
    }

    return(
          <div>
              <form onSubmit = {dong}>
                  <input type = "text" value = {values} placeholder = "enter your name" onChange = {ding}/>
                  <button>submit</button>
              </form>
              <ul>
                  {
                      print.map(e => <li key = {e}>{e}</li>)
                  }
              </ul>
          </div>
    );
}
export default Default;