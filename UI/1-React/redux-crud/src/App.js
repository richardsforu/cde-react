import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getEmployee } from './actions/Actions';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


const propTypes = {
  employees: PropTypes.array.isRequired,
  getEmployee: PropTypes.func.isRequired,
  addEmployee: PropTypes.func.isRequired,
  editEmployee: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired
};


const App = (props) => {

  const [employees, setEmployees] = useState({
    id: '',
    employeeName: '',
    employeeDepartment: ''
  });



  const[show,setShow]=useState(false);




  const renderEmployee = () => {
    let { employees } = props;
    return employees.map((emp, idx) => {
      return (<tr>
        <td>{emp.id}</td>
        <td>{emp.employeeName}</td>
        <td>{emp.employeeDepartment}</td>
      </tr>)
    })

  }

  return (
    <div className="container">
      <h1>Redux CRUD </h1> <hr />

      <table className="table table-bordered">
        <tbody>
          {renderEmployee()}
        </tbody>
      </table>


    
       

    </div>
  );
};

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(mapStateToProps, { getEmployee })(App);