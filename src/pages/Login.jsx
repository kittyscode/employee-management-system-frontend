import { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import  authService  from "../services/authService.js";
import { toast } from "react-toastify";
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

        const response = await authService.login({
            username,
            password
        });

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("role", response.data.role);

        toast.success("Login Successful");

        navigate("/dashboard");

    } catch (error) {

        console.error(error);

        toast.error("Invalid Username or Password");

    }
};
    return (

        <div className="login-container">

            <div className="login-card">

                <div className="login-header">

                    <h2>Employee Management System</h2>

                    <p>Login to continue</p>

                </div>

                <div className="login-body">

                    <form onSubmit={handleLogin}>

                        <label>Username</label>

                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Username"
                            required
                        />

                        <label>Password</label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            required
                        />

                       <button
    type="submit"
    className="login-btn"
>
    Login
</button>

                    </form>

                    <div className="login-footer">
                        © 2026 Employee Management System
                    </div>

                </div>

            </div>

        </div>

    );
}

export default Login;