"use client"
import React from "react"
import "./login.css"
import { register } from "../../services/firebase/auth";

export default function Register() {

    const [state, setState] = React.useState({
        email: "",
        password: ""
    });
    
    function onChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        setState({
            ...state,
            [name]: value
        })
    }

    function onRegister() {
        // const email = state.email;
        // const password = state.password;

        const {email, password} = state;

        register(email, password);
    }

    return (
        <div className="container">

            <input name="email" onChange={onChange} value={state.email} placeholder="email" type="text" />

            <input name="password" onChange={onChange} value={state.password} placeholder="123456" type="password" />

            <button onClick={onRegister}>Register</button>
        </div>
    )

}