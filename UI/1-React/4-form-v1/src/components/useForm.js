import React,{useState,useEffect} from 'react';
import axios from 'axios';




const useForm = (submitForm) => {

    let [product,setProduct]=useState({
        id:'',
        name:'',
        description:'',
        price:''
    })

  


    
    const handleSubmit = (e) => {
       
        e.preventDefault();
      
        setProduct({"id":e.target.id.value,"name":e.target.name.value,"description":e.target.description.value,"price":e.target.price.value})
      
     
        
        console.log(product);

        submitForm();
    }

      useEffect(()=>{
        axios.post('http://localhost:8080/api/products',product);
      })


    return{handleSubmit}
  
};



export default useForm;