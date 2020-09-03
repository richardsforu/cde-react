import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './components/RegisterForm';
import Form from './components/Form';

const App = () => {
  return (
    <div className="container">

      <h1>Form Validations Demo_</h1> <hr/>

      <Form/>
      
    </div>
  );
};

export default App;