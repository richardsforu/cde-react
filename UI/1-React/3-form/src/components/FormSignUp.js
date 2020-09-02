import React from "react";

import validate from "./validateInfo";
import useForm from "./useForm";

const FormSignUp = ({ submitForm }) => {
  const { handleSubmit, handleChange, values, errors } = useForm(
    submitForm,
    validate
  );

  console.log(submitForm);

  return (
      
    <div className="col-5">
      <div className="card">
        <div className="card-header">User Form</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div>
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="Your Name"
                value={values.userName}
                onChange={handleChange}
                className={
                  "form-control  " + (errors.userName ? "is-invalid" : "")
                }
              />
              <small id="passwordHelp" className="text-danger">
                {errors.userName}
              </small>
            </div>

            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                className={
                  "form-control  " + (errors.userName ? "is-invalid" : "")
                }
              />
              {errors.email}
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                placeholder="Password"
                className={
                  "form-control  " + (errors.userName ? "is-invalid" : "")
                }
              />
              {errors.password}
            </div>

            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                name="password2"
                placeholder="Confirm Password"
                onChange={handleChange}
                className={
                  "form-control  " + (errors.userName ? "is-invalid" : "")
                }
              />
              {errors.password2}
            </div>
            <div>
              <label>Date of birth</label>

              <input
                type="date"
                max="1990-01-31"
                name="dob"
                placeholder="Date of birth"
                onChange={handleChange}
                className={
                  "form-control  " + (errors.userName ? "is-invalid" : "")
                }
              />
              {errors.dob}
            </div>

            <div className="text-center mt-2">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
