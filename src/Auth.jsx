import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import auth from "../firebase.config";

const Auth = () => {
  const handleResister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log("From submited for Register", email, pass);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
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
              ></input>
              <input
                className="mb-4 w-3/4 py-2 px-4"
                type="password"
                name="password"
                placeholder="Password"
              ></input>
              <input
                type="submit"
                className="btn btn-secondary mb-4 w-3/4"
                value="Login"
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
                type="password"
                name="password"
                placeholder="Password"
              ></input>
              <input
                type="submit"
                className="btn btn-secondary mb-4 w-3/4"
                value="Register"
              />
            </form>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Auth;
