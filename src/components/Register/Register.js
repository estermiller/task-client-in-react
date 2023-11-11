import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Register.css';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/features/user/userSlice";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function Register() {
    let { register, handleSubmit, formState: { errors } } = useForm();
    let [lng, setLng] = useState(0);
    let [lat, setLat] = useState(0);
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const mess = useSelector((state) => state.userSlice.message)



    const save = async (data) => {
        let { name, username, city, street, GeographyLat, GeographyLng, email, phone } = data
        let user = {
            name,
            username,
            email,
            address: {
                street,
                city,
                geo: {
                    lat: GeographyLat,
                    lng: GeographyLng
                }
            },
            phone
        }
        await dispatch(addUser(user))
        navigate("/dialoge")
    }

    const getToTheServer = () => {
        //navigate("https://www.dotcom.co.il/tools/googlegeocoder/");
        setLng(-38.2386)
        setLat(57.2232)

    }

    return <>
        {mess}
        <form onSubmit={handleSubmit(save)}>
            <Box
                component="form"
                sx={{ color: '#eb452b' }}
                noValidate
                autoComplete="off" >

                <p>
                    <TextField id="standard-basic" label="Name" color="warning" variant="standard"  {...register("name", {
                        required: { value: true, message: "name is required" },
                        pattern: { value: /^[aA-zZ]{2,15}$/, message: "name is shorted or not valid" }
                    })} />
                    {errors.name && <div className="errors">
                        {errors.name.message}
                    </div>}
                </p>

                <p>
                    <TextField id="standard-basic" label="User Name" color="warning" variant="standard"  {...register("username", { required: { value: true, message: "username is required" } })} />
                    {errors.username && <div className="errors">
                        {errors.username.message}
                    </div>}
                </p>

                <p>
                    <TextField id="standard-basic" label="city" color="warning" variant="standard"  {...register("city", { required: { value: true, message: "city is required" } })} />
                    {errors.city && <div className="errors">
                        {errors.city.message}
                    </div>}
                </p>

                <p>
                    <TextField id="standard-basic" label="street" color="warning" variant="standard"  {...register("street", { required: { value: true, message: "street is required" } })} />
                    {errors.street && <div className="errors">
                        {errors.street.message}
                    </div>}
                </p>

                <p>
                    <TextField id="standard-basic" label="GeographyLat" color="warning" variant="standard" type="number" value={lat} onChange={(e) => setLat(e.target.value)}  {...register("GeographyLat", {
                        pattern: { value: /^[aA-zZ]{2,15}$/, message: "geo is shorted or not valid" }
                    })} />
                    {errors.GeographyLat && <div className="errors">
                        {errors.GeographyLat.message}
                    </div>}
                    <label> </label>
                    <TextField id="standard-basic" label="GeographyLng" color="warning" variant="standard" type="number" value={lng} onChange={(e) => setLng(e.target.value)}   {...register("GeographyLng", {
                        pattern: { value: /^[aA-zZ]{2,15}$/, message: "lng is shorted or not valid" }
                    })} />
                    {errors.GeographyLng && <div className="errors">
                        {errors.GeographyLng.message}
                    </div>}
                </p>
                <input type="button" class="btn-get btn3-get" data-id="btn3-get" onClick={getToTheServer} value='Get the current location automatically'></input>

                <p>
                    <TextField id="standard-basic" label="email" color="warning" variant="standard" {...register("email", {
                        required: { value: true, message: "mail is required" },
                        pattern: { value: /^[aA-zZ]{1,6}[1-9]{0,5}@[aA-zZ]{0,6}.[aA-zZ]{0,5}$/, message: "mail is not valid" }
                    }
                    )} />

                    {errors.email && <div className="errors">
                        {errors.email.message}
                    </div>}
                </p>

                <p>
                    <TextField id="standard-basic" label="phone" color="warning" variant="standard"   {...register("phone", {
                        pattern: { value: /^[1-9]{10,10}$/, message: "phone must contain only 10 numbers" }
                    }
                    )} />
                    {errors.phone && <div className="errors">
                        {errors.phone.message}
                    </div>}
                </p>
            </Box>
            <button data-id="btn9" class="btn-ok btn9"><span><input type="submit" style={{backgroundColor:'#fcedd8'}} value='OK' /></span></button>

        </form>

    </>
}