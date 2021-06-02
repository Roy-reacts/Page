import React,{ useEffect, useState } from "react";

import useForm from "./useForm";
const Login = ({submitForm}) => {
  const {handleChange,handleFormSubmit,values,errors}= useForm( submitForm);
    return (
        <div className="container">
            <div className ="app-wrapper">
            <div>
            <header className="app">Amazon</header>
            <h2>
            Create Account
            </h2>
            </div>
            <form className = "form-wrapper">
            <div className ="name">
            <label className ="label">Your Name</label>
            <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange}/>
            {errors.fullname && <p className="error">{errors.fullname}</p>}  

            </div>
            <div className ="name">
            <label className ="label">Email</label>
            <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
         {errors.email && <p className="error">{errors.email}</p>}  
            </div>
            <div className ="name">
            <label className ="label">Password</label>
            <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>
            {errors.password && <p className="error">{errors.password}</p>}  

            </div>
            <div className ="name">
            <label className ="label">Re-Enter Password</label>
            <input className="input" type="password"  value={values.password} onChange={handleChange}/>
            {errors.password && <p className="error">{errors.password}</p>}  

            </div>
            <div>
            <button className="submit" onClick={handleFormSubmit}>Create your Amazon account</button>
            </div>
            <div>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</div>
            <div className="adp">
            <ul>
            <li>Already have an account? Sign-In
            
            </li>
            <li>
            Purchasing for work? Create a free business account</li>
            </ul></div>
            </form>
            </div>
        </div>
    );
};

export default Login
