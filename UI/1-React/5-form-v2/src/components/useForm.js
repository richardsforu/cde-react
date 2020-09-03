import React,{useState,useEffect} from 'react';

const useForm = (submitForm,validate) => {

    const[user,setUser]=useState({
        userName: '',
        password: '',
        password2:'',
        emailAddress: '',
        firstName:'',
        lastName:'',
        dob:''

    })
  
    const[isSubmited,setIsSubmitted]=useState(false);
    const[errors,setErrors]=useState({});
    const handleChange = (e) => {
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        console.log('>>> handleSubmit');
        e.preventDefault();
        console.log(user);


        // validations
        setErrors(validate(user));
        setIsSubmitted(true);
       
    }
    useEffect(() => {
        console.log(">>> useEffect");
        if(Object.keys(errors).length===0 && isSubmited){
            // business logic to persist object into db
            submitForm();
        }  
    },[errors])

  return{handleChange,handleSubmit,errors,user}
};

export default useForm;