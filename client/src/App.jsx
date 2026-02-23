import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Buycredit from "./pages/Buycredit";
import Result from "./pages/Result";

const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buycredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
