import React from "react";
import {Link } from "react-router-dom";

const Product = (props) => {
  let { product } = props;
  return (
    <tr>
      <td> <Link  to={`/add/${product.id}`}> {product.id}</Link></td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default Product;
