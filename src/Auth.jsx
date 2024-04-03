import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import auth from "../firebase.config";

const Auth = () => {
  const emailRef = useRef("");
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("We are sent a reset reset link on your mail. Please Check!!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleResister = (e) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess("");
    const email = e.target.email.value;
    const pass = e.target.password.value;
    if (pass.length < 6) {
      setRegisterError("Password Should be at least 6 charecter or longer.");
      return;
    }
    if (!/[A-Z]/.test(pass)) {
      setRegisterError(
        "Your password should have at least one upper case charecters."
      );
      return;
    }
    console.log("From submited for Register", email, pass);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
        sendEmailVerification(result.user).then(() => {
          const msg = "We sent mail to " + email;
          alert(msg);
          console.log(email);
        });
        setRegisterSuccess("User created Successfully!");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("From submited for Login", email, pass);
  };
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab className="hover:cursor-pointer">Login</Tab>
          <Tab className="hover:cursor-pointer">Register</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-bold">Login</h2>
          <div>
            <form onSubmit={handleLogin}>
              <input
                className="mb-4 w-3/4 py-2 px-4"
                type="email"
                name="email"
                placeholder="Email Address"
                ref={emailRef}
                required
              ></input>
              <input
                className="mb-4 w-3/4 py-2 px-4"
                type="password"
                name="password"
                placeholder="Password"
                required
              ></input>
              <input
                type="submit"
                className="btn btn-secondary mb-4 w-3/4"
                value="Login"
              />
              <input
                type="button"
                onClick={handleForgotPassword}
                className="btn btn-secondary mb-4 w-3/4"
                value="Forgot Password"
              />
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-bold">Register</h2>
          <div>
            <form onSubmit={handleResister}>
              <input
                className="mb-4 w-3/4 py-2 px-4"
                type="email"
                name="email"
                placeholder="Email Address"
              ></input>
              <input
                className="mb-4 w-3/4 py-2 px-4"
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
              ></input>
              <input
                type="submit"
                className="btn btn-secondary mb-4 w-3/4"
                value="Register"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="hover:cursor-pointer select-none"
              >
                Show
              </span>
            </form>
          </div>
        </TabPanel>
      </Tabs>
      {registerError && <p className="text-red-700">{registerError}</p>}
      {registerSuccess && <p className="text-green-700">{registerSuccess}</p>}
    </div>
  );
};

export default Auth;
