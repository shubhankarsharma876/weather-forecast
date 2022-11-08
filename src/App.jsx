import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Weather from "../components/Weather";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Weather />
    </div>
  );
}

export default App;
