import React from "react";
import NextAuctions from "./NextAuctions";
import LiveAuction from "./LiveAuction";
const flexBetween = "flex items-center justify-between";
import Logged from "../navbar/logged";
const Index = () => {
  return (
    <div>
      <Logged/>
      <LiveAuction />
      
      {/* <NextAuctions /> */}
    </div>
  );
};

export default Index;
