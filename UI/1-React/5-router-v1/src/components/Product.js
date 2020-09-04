import React from "react";

const Product = (props) => {
  let { product } = props;
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default Product;
