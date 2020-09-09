import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'

import axios from "axios";

const useForm = (submitForm, isEdit) => {
  console.log(">>>");
  console.log(isEdit);
  let [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
  });

  const [isSaved, setIsSaved] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(name);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct({
      id: e.target.id.value,
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
    })

    if (!isEdit) {
      axios.post("http://localhost:8080/api/products", product);
      setIsSaved(true);
    }


    if (isEdit) {
      console.log("><>><><>");
      console.log(product.id)
      fetch(`http://localhost:8080/api/products/${product.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(product)
      })
        .then(response => response.json())
        .then(item => {
          setIsSaved(true)
        })


     
    }


    // setProduct({"id":e.target.id.value,"name":e.target.name.value,"description":e.target.description.value,"price":e.target.price.value})
    console.log(product);
    console.log(">>> IS Saved >>>>");
    console.log(isSaved);

    if (isSaved)
    return (
      <Redirect to={{
        pathname: '/display'
      }} />
    )

    // submitForm();
  };


  return { handleSubmit, handleChange };
};

export default useForm;
