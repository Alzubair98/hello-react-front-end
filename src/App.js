import "./App.css";
import Firstcont from "./component/greeting";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { loadgreet } from "./Redux/greetings/greeting";
import { useDispatch } from "react-redux";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Firstcont />} />
    </Routes>
  );
}

export default App;
