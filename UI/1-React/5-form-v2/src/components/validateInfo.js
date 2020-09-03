
export default function validateInfo(user){
    let errors={};
    if(!user.userName.trim()){
        errors.userName="User Name is required";
    }else if(user.userName.length<3){
        errors.userName="User Name should be minimum 3 characters";
    }
    
    if(!user.firstName){
        errors.firstName="First Name is required";
    }

    if(!user.lastName){
        errors.lastName="Last Name is required";
    }

    if(!user.password){
        errors.password="Password is required";
    }else if(user.password.length<5){
        errors.password="Password length must be more than 5 characters"
    }

    if(!user.password2){
        errors.password2="Confirm Passwordis required";
    }else if(user.password2.length<5){
        errors.password2="Confirm password length must be more than 5 characters"
    }

    if(user.password!==user.password2){
        errors.password2="Passwords Do not match"
    }


    if(!user.emailAddress){
        errors.emailAddress="Email is Required"
    }else if(!(/^[a-zA-Z0-9+\.+\_]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(user.emailAddress))){
        errors.emailAddress="Invalid email address"
    }




    return errors;

}