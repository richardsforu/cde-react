import React,{useState} from 'react';
import RegisterForm from './RegisterForm';
import Success from './Success';

const Form = () => {
    const[isSubmited,setIsSubmitted]=useState(false);


    function submitForm() {
        setIsSubmitted(true);
        console.log(">>>> submited <<<<");
    }

    return (
        <div>
            {isSubmited?(<Success/>):( <RegisterForm submitForm={submitForm}/>)}
           
        </div>
    );
};

export default Form;