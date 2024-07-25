import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../web/src/Dashboard";
import About from "../web/src/About";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function WebMain() {
  return (
    <GoogleOAuthProvider clientId="1009282809407-sh8h2kgmot2q295a503sl5530pldnaj9.apps.googleusercontent.com">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
