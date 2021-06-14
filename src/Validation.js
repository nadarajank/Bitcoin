const Validation = (values) =>{
    let errors = {};

    if(!values.firstname){
        errors.firstname = "Name is required";
    }else if(values.firstname.length > 20){
        errors.firstname = "minimum 20 character";
        
    }
    if(!values.email){
        errors.email = "email is required";
    }
    if(!values.password){
        errors.password = "password is reqired";
    }else if(values.password.length < 5){
        errors.password = "password is invalid";
    }
    return errors;
    
    
}
export default Validation;