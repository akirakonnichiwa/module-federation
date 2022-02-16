import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Home from "./components/App2";

function App() {
  return (
    <BrowserRouter basename="app2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
