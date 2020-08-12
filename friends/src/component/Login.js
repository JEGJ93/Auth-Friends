import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";



const Login = props => {
    console.log('props',props)
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });

    const handleChanges = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value});
    };

    const loginSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/login", formState)
        .then((res) => {
            console.log("res: login success", res);
            localStorage.setItem("authToken", res.data.payload);
            props.history.push("/protected");
        })
        .catch((err) => {
            console.log("err: login failed", err)
            localStorage.removeItem("authToken");
            
        });
    };

    return (
        <form onSubmit={loginSubmit}> 
            <h1>
                Login
            </h1>
            <label htmlFor="name">
                Username
                <input name="username" type="text" placeholder="Enter Username" onChange={handleChanges} value={formState.username}/>
            </label>
            <label htmlFor="password">
                Password
                <input name="password" type="password" placeholder="Enter Password" onChange={handleChanges} value={formState.password}/>
            </label>
            <button>Submit</button>
        </form>
    )
};


export default Login;