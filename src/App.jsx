import React, { useState } from "react";
import "./App.css";

import Home from "./pages/Home/Home";

function App() {
  const [ weather, setWeather ] = useState({});
  console.log(weather);
  
  return (
    <>
      <Home setWeather={setWeather} />
    </>
  );
}

export default App;
