import { useState } from "react";
import './Practice.css';
const Practice = () =>{
    const[values,setValues] = useState([]);
    const[courses,setCourses] = useState([]);
    const naan = (e) =>{
        setValues(e.target.value)
    }
    const clik = (e) =>{
        e.preventDefault();
        setCourses(names=>[...names,values]);
        if(values !== ""){
            setValues('');
        }
    }
    return(
        <div>
            <form onSubmit = {clik}> 
            <input type = "text" placeholder = "enter the name" value = {values} onChange = {naan}/>
            <button >submit</button><br/>
            </form>
            
            <ul>
            {
                
               courses.map(e=>(
                   <li key = {e}>{e}</li>
               ))
            }
        </ul>

        <div>
        <div class="media">
  <img class="align-self-center mr-3" src="..." alt="Generic placeholder image"/>
  <div class="media-body">
    <h5 class="mt-0">Center-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
        </div>
            </div>
        
    );
}
export default Practice;