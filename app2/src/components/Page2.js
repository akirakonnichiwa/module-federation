import React from "react";
import { Routes, Route, BrowserRouter, Link, Navigate } from "react-router-dom";
import Page1 from "./Page1";

function Page2() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
    </Routes>
  );
}

export default Page2;
