import React,{useState} from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';

const Form = () => {
   
    const [isSubmit, setSubmit] = useState(false);
  
    function submitForm() {

      console.log('==> form submited... '+isSubmit);
      setSubmit(true);
    }

   
  
    return (
        <div>

            {!isSubmit?( <FormSignUp submitForm={submitForm}/>):(<FormSuccess/>)}
           
            
        </div>
    );
};

export default Form;