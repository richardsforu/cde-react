import React from "react";
import useForm from "./useForm";

const ProductForm = ({ submitForm }) => {
  const { handleSubmit, handleChange } = useForm(submitForm);

  return (
    <div>
      <div className="col-6">
        <div className="card">
          <div className="card-header">Product Form</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Id</label>
                <input type="text" name="id" className="form-control"
                onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Product Name</label>
                <input type="text" name="name" className="form-control"
                onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input type="text" name="price" className="form-control"
                onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-center">
                <button className="btn btn-primary" style={{ margin: "5px" }}>
                  Submit
                </button>
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
