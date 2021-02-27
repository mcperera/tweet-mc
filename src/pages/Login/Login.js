import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, signWithEmailPass } from "../../auth/";
import logo from "../../assets/images/logo/logo.png";
import cover from "../../assets/images/login/login.png";

function Login({ history }) {
  const dispatch = useDispatch();
  const [showSignUp, setShowSignUp] = useState(false);

  const data = showSignUp
    ? {
        name: "",
        email: "",
        password: "",
        confirmPass: "",
      }
    : {
        email: "",
        password: "",
      };

  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showSignUp) {
      if (formData.password !== formData.confirmPass) {
        alert("Password does not match");
      } else {
        console.log("Create Account -->", formData);
        dispatch(createUser(formData.email, formData.password, history));
        setFormData(data);
      }
    } else {
      console.log("Login -->", formData);
      dispatch(signWithEmailPass(formData.email, formData.password, history));
      setFormData(data);
    }
  };

  console.log("history", history);

  return (
    <div className={`w-4/5 mx-auto h-screen`}>
      <header className={`h-20 flex items-center`}>
        <img src={logo} alt="logo" />
      </header>
      <div className={`flex justify-between`}>
        <section className={`w-2/5 max-w-md`}>
          <button
            className={`btnWhite`}
            onClick={() => setShowSignUp((prev) => !prev)}>
            {showSignUp ? "Login" : "Create Account"}
          </button>
          {showSignUp ? (
            <div className={`mt-20`}>
              <h1 className={`text-4xl font-bold my-5`}>Create Account</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData?.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData?.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={formData?.password}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="confirmPass"
                  placeholder="Confirm Password"
                  value={formData?.confirmPass}
                  onChange={handleChange}
                />
                <div className={`flex justify-end mt-8`}>
                  <button className="btn" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className={`mt-20`}>
              <h1 className={`text-4xl font-bold my-5`}>Login</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={formData?.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  value={formData?.password}
                  onChange={handleChange}
                />
                <div className={`flex justify-between mt-8`}>
                  <p>Forgot password ?</p>
                  <button className="btn" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          )}
        </section>
        <section className={`h-full w-8/12 flex justify-end`}>
          <img src={cover} alt="cover" className={`block w-11/12`} />
        </section>
      </div>
    </div>
  );
}

export default Login;
