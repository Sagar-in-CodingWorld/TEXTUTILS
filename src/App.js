//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  // const {hello,setHello} = useState("");
  return (
    <>
      <div className="container-fluid">
        <Navbar title="TEXTUTILES" aboutText="ABOUT TEXTUTILS " />
        <div className="container my-3">
          <TextForm  heading="Enter the text to analyze"/>
         
        </div>
      </div>
    </>
  );
}

export default App;
