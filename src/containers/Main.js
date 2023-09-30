import "./Main.scss";
import React, { useEffect, useState } from "react";
import Converter from "../containers/converter/Converter";
import Saved from "./saved/Saved";

const Main = () => {
  return (
    <div>
      <Converter />
      <Saved />
    </div>
  );
};

export default Main;
