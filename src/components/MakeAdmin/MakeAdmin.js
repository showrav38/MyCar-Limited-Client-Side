import React, { useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user);
        fetch('https://calm-anchorage-33077.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    alert('Made admin successfully');
                    e.target.reset();

                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Dashboard />
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit} className="row g-3 ">
                <div class="col-12 col-md-6 mx-auto">
                    <label for="inputName4" class="form-label fw-bold">Review</label>
                    <textarea type="text" class="form-control h-50" id="inputName4" onBlur={handleOnBlur} required />
                    <button type="submit" class="btn btn-primary mt-3">Make Admin</button>
                </div>
            </form>

        </div>

    );
};
export default MakeAdmin;