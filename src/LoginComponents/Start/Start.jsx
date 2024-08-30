import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Start.css";

const Start = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/login", {
                email,
                password,
                phone,
            });
            const userData = response.data;

            console.log("User data received:", userData); // Debugging log
            // Update the user state with the logged-in user's information
            // setUser(userData);
            // localStorage.setItem("userData", JSON.stringify(userData));
            console.log("Navigating based on user role..."); // Debugging log
            navigate("/Dashboard");
            // // Redirect based on user role
            // if (userData.isAdmin) {
            //     console.log("Redirecting to admin dashboard"); // Debugging log
            //     navigate("/admin-dashboard");
            // } else if (userData.TaskAssigned) {
            //     console.log("Redirecting to volunteer dashboard"); // Debugging log
            //     navigate("/volunteer-dashboard");
            // } else {
            //     console.log("Redirecting to donor dashboard"); // Debugging log
            //     navigate("/donor-dashboard");
            // }
        } catch (error) {
            console.error("Login error:", error); // Debugging log
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="startmain">
            <form onSubmit={handleLogin}>
                <div className="container">
                    <h1 id="anmoljeevan">ANMOL JEEVAN</h1>
                    <div className="startinputs">
                        <input
                            type="text"
                            placeholder="Your Email Id"
                            id="emailid"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input bg-transparent border-b-2 border-gray-500"
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Password"
                            id="pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <button type="submit" id="startsubmit">
                            <strong>LOGIN</strong>
                        </button>
                    </div>
                    {/* {error && <p className="error">{error}</p>} */}
                </div>
            </form>
        </div>
    );
};

export default Start;
