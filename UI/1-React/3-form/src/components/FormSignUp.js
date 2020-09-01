import React from 'react';

import validate from './validateInfo'
import useForm from './useForm';

const FormSignUp = ({submitForm}) => {
    const {handleSubmit,handleChange,values,errors}=useForm(submitForm,validate);
  
    return (
        <div>
            <form onSubmit={handleSubmit}>

             <div>
                 <label>User Name</label>
                 <input
                 type="text"
                 name="userName"
                 placeholder="Your Name"
                value={values.userName}
                 onChange={handleChange}
                 />
                 {errors.userName}
             </div>

            
            
             <div>
                 <label>Email</label>
                 <input
                 type="text"
                 name="email"
                 placeholder="Email"
                 value={values.email}
                 onChange={handleChange}
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
                 />
                     {errors.password2}
             </div>

             <div>
                 <button>Submit</button>
             </div>


            </form>
            
        </div>
    );
};

export default FormSignUp;