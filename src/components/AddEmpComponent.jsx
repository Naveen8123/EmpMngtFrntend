import React, { useEffect, useState } from 'react'
import { addEmployees, getEmployee, updateEmployee } from '../services/EmployeeServices'
import { useNavigate, useParams } from 'react-router-dom'

const AddEmpComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const { id } = useParams();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const navigator = useNavigate();

  useEffect(() => {

    if (id) {
      getEmployee(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch(error => {
        console.error(error);
      })
    }
  }, [id])

  // const handleFirstName = (e) => setFirstName(e.target.value);

  // const handlelastName = (e) => setLastName(e.target.value);

  // const handleEmail = (e) => setEmail(e.target.value);


  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    if (validateForm()) {

      const employee = { firstName, lastName, email }
      console.log(employee);


      if(id) {
           updateEmployee(id, employee).then((response) => {
           console.log(response.data);
          navigator('/employees');
        }).catch(error => {
          console.error(error);
        })
      } else {
           addEmployees(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
          }).catch(error => {
            console.error('Error saving employee', error);
          });
      }
    }
  };

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'first name is required';
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'last name is required';
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'email is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update Employee</h2>
    }
    else {
      return <h1 className='text-center'>Add Employee</h1>
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3 '>
          {/* <h1 className='text-center'>Add Employee</h1> */}
          {
            pageTitle()
          }
          <div className='card-body'>
            <form action="">
              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input
                  type="text"
                  placeholder='enter first name'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>last Name</label>
                <input
                  type="text"
                  placeholder='enter last name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  onChange={(e) => setLastName(e.target.value)} //here used function defination handleFirstName()
                >
                </input>
                {errors.firstName && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input
                  type="text"
                  placeholder='enter email'
                  name='email'
                  value={email}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                >
                </input>
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>
              <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
            </form>

          </div>
        </div>
      </div>



    </div>

  )
}

export default AddEmpComponent