import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Employee(){

    const [e, setEmployee] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setEmployee(res.data))
        .catch(err => console.log(err));
},[])
    return(
        <div className='d-flex vh-100  justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Password</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {e.map((d,i) => (
                                <tr key={i}>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td>{d.password}</td>
                                    <td>
                                        <button className='btn btn-primary'>Update</button>
                                        <button className='btn btn-danger ms-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
        )
}

export default Employee