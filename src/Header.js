import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo2.png"; // Replace "logo.png" with the actual filename and path of your logo image

const Header = () => {
  return (
    
    <header className="bg-white d-flex justify-content-between align-items-center p-3" style={{ border: "1px solid black", display: "flex", alignItems: "center" }}>
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet" />
    <img src={logo} alt="Logo" style={{ width: "200px", height: "50px" }} /> {/* Add the logo image */}
    <h1 className="text-black" style={{ fontSize: "24px", fontFamily: "'Indie Flower', cursive" }}>Welcome to Amista!</h1>
    <div style={{ display: "flex", alignItems: "center" }}>
      <button type="button" className="btn btn-light" style={{ minHeight: "80px", width: "150px" }}>Why Amista?</button>
      <div style={{ borderLeft: "1px solid black", height: "50px", margin: "0 10px" }}></div> {/* Vertical line */}
      <button type="button" className="btn btn-light" style={{ minHeight: "80px", width: "150px" }}>Contact us</button>
    </div>
  </header>
  
  
  

  );
};

export default Header;
