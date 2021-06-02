import React from 'react';
import "../App.css";
import React,{ useEffect, useState } from "react";
const Login = ({submitForm}) => {
    const {handleChange,handleFormSubmit,values,errors}= useForm( submitForm);

const SignupScreen = () => {
    return (
        <div className ="container">
        <div className ="app-wrapper">
        </div>
       
        <div>
        <header className="app">Amazon</header>
        <h2>
        Sign-In
        </h2>
        </div>
        <form className = "form-wrapper">
        <div className ="name">
        <label className ="label">Your Name</label>
        <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange}/>
        {errors.fullname && <p className="error">{errors.fullname}</p>}  

        </div>
        <div>
        <button className="submit" onClick={handleFormSubmit}>Continue</button>
        </div>
        <div>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </div>
        </form>
        <ul><li>Need help?</li></ul>
        </div>
    );
};

export default SignupScreen
