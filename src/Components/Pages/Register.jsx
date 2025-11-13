import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, user, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least:\n- One Uppercase letter\n- One Lowercase letter\n- One Number\n- One Special Character\n- Minimum 6 characters long",
        {
          position: "top-center",
          theme: "colored",
        }
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Account created successfully", {
          position: "top-center",
          theme: "colored",
        });
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: "top-center",
          theme: "colored",
        });
        setUser(user);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div
          className="card-body bg-gradient-to-br from-blue-700 via-pink-300 to-blue-950
"
        >
          <h1 className="text-2xl font-bold text-center">
            Register Your Account
          </h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset ">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              <label className="label">Photo</label>
              <input
                type="url"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-5 top-8"
                >
                  {show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>}
                </span>
              </div>{" "}
              <button className="btn btn-neutral mt-4">Register</button>
              <p className="font-semibold text-center py-2">
                Already Have An Account? Please{" "}
                <Link to="/login" className="text-blue-500 underline">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
