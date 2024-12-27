import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const navigator = useNavigate();
    const name = "naveensp8123"
    const pass = "8123908660"

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., API call)
        if (formData.username === name && formData.password === pass) {
            console.log('Login submitted:', formData);
            // alert("Login functionality is under development")
            navigator("/pagination")
        } else {
            alert("Login inavlid usename and password")
            setFormData({ username: '', password: '' });
            navigator("/login")
        }

    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button id='lgbtn' type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;