

import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";


const initialUser = { email: "", password: "", username: "" };

const Registration = () => {

    const params = {
        Headers: {
            Authorization: "bearer" + import.meta.env.VITE_STRAPI_AUTH_TOKEN,
        }
    }


    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:1337/api/auth/local/register`;
            if (user.username && user.email && user.password) {
                const res = await axios.post(url, params, user);

                console.log(await res)
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleUserChange = ({ target }) => {
        const { name, value } = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };

    return (

        <form onSubmit={signUp}>

            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleUserChange}
                placeholder="Enter your full name"
            />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleUserChange}
                placeholder="Enter your email"
            />
            <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleUserChange}
                placeholder="Enter password"
            />

            <button type="submit" >
                Sign up
            </button>

        </form>



    );
};

export default Registration;
