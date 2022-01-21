import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useLocation, useHistory } from "react-router";

const Login = () => {
  const { signInWithGoogle, signInWithFacebook, signInWithEmailPass } =
    useAuth();
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";
  const handleGoogleSign = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_uri);
      console.log(result.user);
    });
  };
  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailPass().then((result) => {
      console.log(result.user);
      history.push(redirect_uri);
    });
  };
  const handleFacebookLogin = () => {
    signInWithFacebook().then((result) => {
      console.log(result.user);
      history.push(redirect_uri);
    });
  };
  return (
    <div className="w-50 mx-auto mt-4">
      <form onSubmit={handleSignIn}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
          />
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
      <p>
        New to website?<Link to="/register">Register</Link>
      </p>
      <button className="btn btn-warning" onClick={handleGoogleSign}>
        Google Sign In
      </button>
      <button className="btn btn-primary ms-2" onClick={handleFacebookLogin}>
        Facebook login
      </button>
    </div>
  );
};

export default Login;
