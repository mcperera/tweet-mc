import React, { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import cover from "../../assets/images/login/login.png";

function Login() {
  const [showSignUp, setShowSignUp] = useState(false);
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
              <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Confirm Password" />
                <div className={`flex justify-end mt-8`}>
                  <button className="btn">Sign Up</button>
                </div>
              </form>
            </div>
          ) : (
            <div className={`mt-20`}>
              <h1 className={`text-4xl font-bold my-5`}>Login</h1>
              <form>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
                <div className={`flex justify-between mt-8`}>
                  <p>Forgot password ?</p>
                  <button className="btn">Login</button>
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
