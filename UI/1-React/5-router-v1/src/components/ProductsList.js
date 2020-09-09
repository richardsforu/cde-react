import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => response.data)
      .then((products) => {
        console.log(products);
        setProducts(products);
      });
  }, []);

  let renderProducts = () => {
    return products.map((product, idx) => {
      return (
      
          <Product key={idx} product={product} />
        
      );
    });
  };

  return (
    <div className="">
      <table className="table  table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
        {renderProducts()}
        </tbody>
       
      </table>
    </div>
  );
};

export default ProductsList;
