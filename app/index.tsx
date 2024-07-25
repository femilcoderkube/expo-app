import { Platform } from "react-native";
import React from "react";
import AppMain from "./AppMain";
import WebMain from "./WebMain";

const index = () => {
  return <>{Platform.OS === "web" ? <WebMain /> : <AppMain />}</>;
};

export default index;
