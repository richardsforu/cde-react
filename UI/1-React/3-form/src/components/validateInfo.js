export default function validateInfo(values){

    let errors={}
    console.log(values);

  
    if(!values.userName.trim()){
        errors.userName='User Name is Required';
    }else if(values.userName.length<4){
        errors.userName='User Name length is minimum 4 letters';
    }

    if(!values.password){
        errors.password="Password is Required"
    }else if(values.password.length<6){
        errors.password="Password needs to be min 6 character length" 
    }

    if(!values.password2){
        errors.password2="Confirm Password is Required"
    }else if(values.password2 !== values.password){
        console.log("=====> <<=======");
        errors.password2="Passowrds do not match" 
    }




    if(!values.email){
        errors.email="Email is Required"
    }else if(!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(values.email))){
        errors.email="Invalid email address"
    }

    return errors;

}




