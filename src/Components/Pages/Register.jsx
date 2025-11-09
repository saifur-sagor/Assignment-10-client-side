import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center">Register Now</h1>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">PhotoURL</label>
            <input type="text" className="input" placeholder="Url" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center py-2">
              Already Have An Account? Please{" "}
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
