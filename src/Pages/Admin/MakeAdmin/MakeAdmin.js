import { Button, TextField, Alert } from '@mui/material';
import { height } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://dry-escarpment-15503.herokuapp.com/users/admin', {
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
                }
               
            })

        e.preventDefault()
    }
    return (
        <div className='my-5'>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '40%', height: '30px', margin:'40px' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined" /><br/>
                <Button type="submit" sx={{paddingTop: '10px', paddingBottom: '10px'}} size="medium" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;