import React from 'react';
import ProductForm from './ProductForm';

const Form = () => {


    function submitForm(){
      
        console.log("==> Form Submited...");
       
    }

    return (
        <div>
            <ProductForm submitForm={submitForm}/>
        </div>
    );
};

export default Form;