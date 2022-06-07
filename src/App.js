import React from "react";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="bars">
        <Leftbar />
        <Rightbar />
      </div>
      <Footer />
    </div>
  )
}

export default App;


