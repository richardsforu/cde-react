import {useState,useEffect} from 'react';
 

const useForm = (callback,validate) => {

    const[values,setValues] =useState({
        userName:'',
        email:'',
        password:'',
        password2:''
    }); 

    const[errors,setErrors] =useState({});

    const[isSubmit,setSubmit]=useState(false)




    const handleSubmit=e=>{
        e.preventDefault();
        //??? 
       
        console.log(values);
        setErrors(validate(values));
        setSubmit(true);
    }

    const handleChange=e=>{
        const{name,value}=e.target;
       
        setValues({
            ...values,
            [name]:value
        });
    }

    useEffect(
        ()=>{  
       if(Object.keys(errors).length===0 && isSubmit){

         }
        },
       [errors]
    );




    return{handleSubmit,handleChange,values,errors}
};

export default useForm;