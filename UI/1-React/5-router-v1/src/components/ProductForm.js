import React,{useState} from "react";
import useForm from "./useForm";


const ProductForm = (props,{ submitForm}) => {
  let {product,isEdit}= props;
  //let{id,name,price,description}=product;

  const { handleSubmit, handleChange } = useForm(submitForm,isEdit);

  return (
   
    <div>
      <div className="col-6">
        <div className="card">
          <div className="card-header">Product Form</div>
          <div className="card-body">

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Id</label>
                <input type="text" 
                id="id"
                className="form-control"
                defaultValue={product.id}
                value={product.id}
               onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control"
                id="name"
                
                value={product.name}
                onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input type="text"  className="form-control"
                id="price"
               
                value={product.price}
                 onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  
                  id="description"
                  className="form-control"
                   onChange={handleChange}
                 value={product.description}
                
                ></textarea>
              </div>

              <div className="text-center">
                <div hidden={isEdit}>
                <button className="btn btn-primary" style={{ margin: "5px" }}>
                  Submit
                </button>
                </div>
               
                <div hidden={!isEdit}>
                <button className="btn btn-primary" style={{ margin: "5px" }}>
                  Edit
                </button>
                </div>
                <button className="btn btn-danger" style={{ margin: "5px" }}>
                  Cancel
                </button>
                <button className="btn btn-warning" style={{ margin: "5px" }}>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
