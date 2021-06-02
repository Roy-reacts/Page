import React, {useState } from 'react';
import Login from "./Login";
import SignupScreen from "./SignupScreen";


const Signup = () => {
    

    const [formIsSubmitted] = useState(false);
    return (
        <div>
    {!formIsSubmitted ? <Login/>:<SignupScreen/>}
        </div>
    );
};

export default Signup;
