
import { TextField } from '@mui/material';
const Login = () => {
    return <>
   
    <h1> Login Page </h1>
    <p>welcome to the Login Page</p>
    <h2>Enter Your Credentials Here</h2>
    <TextField
       id="full-name"
       label="Name"
       margin="normal"/><br></br>
    <TextField
       id="password"
       label="Password"
       margin="normal"/><br></br>
    <button varient="secondary" size="lg" type="button">Enter</button>
    </>;
};

export default Login;