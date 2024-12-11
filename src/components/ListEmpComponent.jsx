import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeServices';
import { useNavigate } from 'react-router-dom';

const ListEmpComponent = () => {

    //     const dummyData =[
    //      {   "id":1,
    //         "firstName":"Karna",
    //         "lastName":" S P",
    //         "email":"Karnasp123@gmail.com"
    //     },
    //     {   "id":2,
    //         "firstName":"bheeshma",
    //         "lastName":" S P",
    //         "email":"bheeshmasp123@gmail.com"
    //     },
    //     {   "id":3,
    //         "firstName":"krishna",
    //         "lastName":" S P",
    //         "email":"krishnasp123@gmail.com"
    //     }

    // ]

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((responce) => {
            setEmployees(responce.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)

    }
    
    function removeEmployee(id) {
        console.log(id);
        
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })

    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employees</button>
            <table className='table table-striped table-bordered table-dark'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>update</button>
                                    <button className='btn btn-danger mbl-2' onClick={() => removeEmployee(employee.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    }
                    <tr></tr>
                </tbody>
            </table>
        </div>
    )
}
export default ListEmpComponent;