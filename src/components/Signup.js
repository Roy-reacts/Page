import React, {useState} from 'react';
import Login from "./Login";
import SignupScreen from "./SignupScreen";
import  './useForm';

const Signup = () => {
    

    const submitForm = () => {
        setFormIsSubmitted(false);
    };
    const [formIsSubmitted,setFormIsSubmitted] = useState(false);
    return (
        <div>
    {!formIsSubmitted ? <Login/>:<SignupScreen/>}
        </div>
    );
};

export default Signup
