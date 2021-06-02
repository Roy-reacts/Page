import "./app.css";
import React from "react";

import useForm from "./useForm";



    

const SignupScreen = () => {
    const {handleChange,handleFormSubmit,values,errors}= useForm( );
    return (
        <div className ="container">
        <div className ="app-wrapper">
        </div>
       
        <div>
        <header className="app">Amazon</header>
        <h2 className="row-center">
        Sign-In
        </h2>
        </div>
        <form className = "form-wrapper">
        <div className ="row-center">
        
        <div className ="name">
        <label className ="label">Email or mobile phone number
        </label>
        <input className="input" type="email" name="name" value={values.email} onChange={handleChange}/>
        {errors.email && <p className="error">{errors.email}</p>}  

        </div>
        <div>
        <button className="btn" onClick={handleFormSubmit}>Continue</button>
        </div>
        <div>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </div>
        </div>
        
        </form>

        <ul><li>Need help?</li></ul>
        </div>
    );
};

export default SignupScreen
