import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Auth = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab className="hover:cursor-pointer">Login</Tab>
          <Tab className="hover:cursor-pointer">Register</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-bold">Login</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-bold">Register</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Auth;
