
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateReservation(){
    const [ resid, setReservation] = useState('')
    const [ rid, setRoom] = useState('')
    const [ name, setName] = useState('')
    const [ cin, setCheckIn] = useState('')
    const [ cout, setCheckOut] = useState('')

    const navigate =useNavigate();
    
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create',{resid,rid,name,cin,cout})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err =>console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Reservation</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Reservation_ID</label>
                        <input type="text" placeholder='Reservation_ID' className ='form-control'
                        onChange = {e => setReservation(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Room_ID</label>
                        <input type="text" placeholder='Room_ID' className ='form-control'
                        onChange = {e => setRoom(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Guest Name</label>
                        <input type="text" placeholder='Guest Name' className ='form-control'
                        onChange = {e => setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Check in Date</label>
                        <input type="text" placeholder='Check in Date' className ='form-control'
                        onChange = {e => setCheckIn(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Check out Date</label>
                        <input type="text" placeholder='Check out Date' className ='form-control'
                        onChange = {e => setCheckOut(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>

            </div>
        </div>

    )
}

export default CreateReservation