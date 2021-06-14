import './Form.css';
import Validation from './Validation';
import { useState} from 'react';
const Form = () =>{
    const [values,setValues] = useState({
        firstname : "",
        email : "",
        password : "",
    });

   
    const[errors,setErrors] = useState({});
    
    const kattu = (e) =>{
        setValues({...values,[e.target.name] : e.target.value})
    }
    const sub = (e)  =>{
        e.preventDefault();
        setErrors(Validation(values));
    }
    
    
    return(
     <div className = "total">
    <form className = "compo">
        
    <div className="form-group">
    <label for="exampleInputEmail1">Firstname</label>
    <input type="firstname" name = "firstname" className="form-control inpu" id="exampleInputEmail1" value = {values.firstname} aria-describedby="emailHelp" onChange = {kattu} placeholder="Enter your name"/>
     {errors.firstname && <p className = "error">{errors.firstname}</p>}
    </div>
    <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name = "email" className="form-control inpu" id="exampleInputEmail1" value = {values.email} aria-describedby="emailHelp" onChange = {kattu} placeholder="Enter email"/>
    {errors.email && <p className = "error">{errors.email}</p>}
    </div>
     <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"  name = "password" className="form-control inpu" value = {values.password} id="exampleInputPassword1" onChange = {kattu} placeholder="Password"/>
    {errors.password && <p className = "error">{errors.password}</p>}
     </div>
     <button type="submit" className="btn btn-primary" onClick = {sub}>Submit</button>
     </form>
     </div>
    );
}
export default Form; 