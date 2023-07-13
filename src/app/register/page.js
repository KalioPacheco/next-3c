"use client"
import React from "react"
import "./login.css"
import { register } from "../../services/firebase/auth";
import {Stack, TextField} from "@mui/material"

export default function Register() {

    const [state, setState] = React.useState({
        email: "",
        password: "",
        displayName: ""
    });
    
    function onChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        setState({
            ...state,
            [name]: value
        })
    }

    function onRegister(event) {
        event.preventDefault();        

        // const email = state.email;
        // const password = state.password;

        const {email, password, displayName} = state;

        const args = {
            email,
            password,
            displayName
        }

        register(args);
    }

    return (
        <Stack>

            <form onSubmit={onRegister}>
                <Stack
                    direction="column"
                    spacing={1}
                    width="300px"
                    p={2}
                >

                    <TextField 
                        required 
                        name="email" 
                        onChange={onChange} 
                        type="email" 
                        value={state.email} 
                        label="Email" 
                        variant="outlined" 
                    />

                <input 
                    name="password" 
                    onChange={onChange} 
                    value={state.password} 
                    placeholder="123456" 
                    type="password" 
                    required
                />

                <input 
                    name="displayName" 
                    onChange={onChange} 
                    value={state.displayName} 
                    placeholder="Tú nombre" 
                    type="text" 
                    required
                />

                <button type="submit">Register</button>
                </Stack>
            </form>

        </Stack>
    )

}