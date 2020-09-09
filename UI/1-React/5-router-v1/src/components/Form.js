import React,{useState,useEffect} from "react";
import ProductForm from "./ProductForm";
import axios from "axios";;

const Form = (props) => {
  function submitForm() {
    console.log("==> Form Submited...");
  }


  const[product,setProduct]=useState({});
  const[isEdit,setIsEdit]=useState(false);

  let {params}=props.match;

  let {id}=params;

  

  useEffect(() => {
    if(params.id){
      axios.get(`http://localhost:8080/api/products/${id}`)
      .then(response=>response.data)
      .then(product=>{
        setProduct(product);
        setIsEdit(true);
      })
    }
  },[])
  return (
    <div>
      <ProductForm submitForm={submitForm} product={product}  isEdit={isEdit} />
    </div>
  );
};

export default Form;
