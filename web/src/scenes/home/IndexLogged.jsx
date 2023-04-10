import React from "react";
import LiveAuction from "./LiveAuction";
const flexBetween = "flex items-center justify-between";
import Logged from "../navbar/logged";
const Index = () => {
  return (
    <div>
      <Logged/>
      <LiveAuction />
      
    </div>
  );
};

export default Index;
