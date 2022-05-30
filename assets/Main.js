import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/createEvent" element={<CreateEvent />} /> */}
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

export default Main;
