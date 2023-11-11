import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { getUserByNameAndEmail } from '../../store/features/user/userSlice';
import './Login.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function Login() {

    const message = useSelector((state) => state.userSlice.message)
    const dispatch = useDispatch();

    let { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const save = async (data) => {
        let userFromServer = await dispatch(getUserByNameAndEmail({ name: data.userName, email: data.EmailAddress }))
        if (userFromServer.payload?.data.length != 0) {
            console.log('go to the tasks');
            navigate('/tasks')
        }
        else {
            console.log('go to the register');
            navigate('/register')
        }


    }

    return <div>
        <h1>{message}</h1>
        <form onSubmit={handleSubmit(save)} >
            <Box
                component="form"
                sx={{ color: '#eb452b' }}
                noValidate
                autoComplete="off" >


                <p>
                    <TextField id="standard-basic" label="User Name" color="warning" variant="standard"
                        {...register("userName", { required: { value: true, message: "user id is required" } })} />
                    {errors.userName && <div className="errors">
                        {errors.userName.message}
                    </div>}
                </p>

                <p>
                    <TextField id="standard-basic" label="Email" variant="standard" color="warning"
                        {...register("EmailAddress", {
                            required: { value: true, message: 'email is required' },
                            // pattern: { value: /^[aA-zZ]{1,6}[1-9]{0,5}@[aA-zZ]{0,6}.[aA-zZ]{0,5}$/, message: "mail is not valid" }
                        })
                        } />

                    {errors.EmailAddress && <div className="errors">
                        {errors.EmailAddress.message}
                    </div>}
                </p>
            </Box>
            <button data-id="btn9" class="btn-ok btn9"><span>OK</span></button>

        </form>

    </div>
}

