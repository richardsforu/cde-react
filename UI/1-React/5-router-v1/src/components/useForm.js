import React, { useState, useEffect } from "react";
import axios from "axios";

const useForm = (submitForm) => {
  let [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/products", product);

    // setProduct({"id":e.target.id.value,"name":e.target.name.value,"description":e.target.description.value,"price":e.target.price.value})
    console.log(product);

    // submitForm();
  };

  return { handleSubmit,handleChange};
};

export default useForm;
