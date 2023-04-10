import React from "react";
import LiveAuction from "./LiveAuction";
const flexBetween = "flex items-center justify-between";
import Unlogged from "../navbar/unlogged";
const Index = () => {
  return (
    <div>
      <Unlogged/>
      <LiveAuction />
      
    </div>
  );
};

export default Index;
