import React from "react";
import useForm from'./useForm';
import validate from './validateInfo';

const RegisterForm = ({ submitForm}) => {
   const {handleChange,handleSubmit,errors,user}=useForm(submitForm,validate);
  
  return (
    <div className="col-12 col-md-8">
      <div className="card">
        <div className="card-header">User Register Form</div>
        <div className="card-body">
          <form onSubmit={handleSubmit} >
            <div className="form-group">
            
              <input type="text" 
              name="userName" 
              className={
                "form-control  " + (errors.userName ? "is-invalid" : "")
              }
              onChange={handleChange}
              value={user.userName}
              placeholder="User Name"
               />
              <span className="text-danger">{errors.userName}</span>
            </div>

            <div className="form-group">
              
              <input type="text" 
              name="firstName" 
              className={
                "form-control  " + (errors.firstName ? "is-invalid" : "")
              }
              onChange={handleChange}
              value={user.firstName}
              placeholder="First Name"
               />
              <span className="text-danger">{errors.firstName}</span>
            </div>

            <div className="form-group">
             
              <input type="text" 
              name="lastName" 
              className={
                "form-control  " + (errors.lastName ? "is-invalid" : "")
              }
              onChange={handleChange}
              value={user.lastName}
              placeholder="Last Name"
               />
                <span className="text-danger">{errors.lastName}</span>
              </div>

              <div className="form-group">

              <input type="text" 
              name="emailAddress" 
              className={
                "form-control  " + (errors.emailAddress ? "is-invalid" : "")
              }
              onChange={handleChange}
              value={user.emailAddress}
              placeholder="Email Address"
               />
              <span className="text-danger">{errors.emailAddress}</span>
            </div>

            <div className="form-group">
             
              <input type="password" 
              name="password" 
              className={
                "form-control  " + (errors.password ? "is-invalid" : "")
              }
              onChange={handleChange}
              value={user.password}
              placeholder="Password"
               />
              <span className="text-danger">{errors.password}</span>
            </div>

            <div className="form-group">
              <input type="password" 
              name="password2" 
              className={
                "form-control  " + (errors.password2 ? "is-invalid" : "")
              }
              onChange={handleChange}
              value={user.password2}
              placeholder="Confirm Password"
               />
              <span className="text-danger">{errors.password2}</span>
            </div>

            <div className="form-group">
              <input type="date" 
              name="dob" 
              className={
                "form-control  " + (errors.dob ? "is-invalid" : "")
              }
              onChange={handleChange}
              value={user.dob}
              max="1990-01-31"
               />
              <span className="text-danger">{errors.dob}</span>
            </div>
              
            

            <div className="text-center mt-3">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
