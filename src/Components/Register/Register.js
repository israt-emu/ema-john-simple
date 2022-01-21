import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    setUser,
    setName,
    setEmail,
    setPass,
    signUpWithEmailPass,
    error,
    setError,
    userProfile,
  } = useAuth();
  const handleRegistration = (e) => {
    e.preventDefault();
    signUpWithEmailPass()
      .then((result) => {
        console.log(result.user);
        userProfile();
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const getName = (e) => {
    setName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPass(e.target.value);
  };
  return (
    <div className="mt-4 w-50 mx-auto">
      <form onSubmit={handleRegistration}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            onBlur={getName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onBlur={getEmail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onBlur={getPassword}
          />
        </div>
        <p>{error}</p>
        <button type="submit" className="btn btn-success mb-3">
          Register
        </button>
      </form>
      <p>
        Already Registered?<Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
