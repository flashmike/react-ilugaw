import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Routes, Route } from "react-router-dom";
//import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Routes>
            <Route path="/"> Home </Route>
            <Route path="/menu"> Menu </Route>
            <Route path="/about"> About </Route>
            <Route path="/contact"> Contact </Route>
          </Routes>
        </div>
      </div>
      <div className="rightSide">
          <Routes>
            <Route path="/"> Home </Route>
            <Route path="/menu"> Menu </Route>
            <Route path="/about"> About </Route>
            <Route path="/contact"> Contact </Route>
          </Routes>
        <button onClick={toggleNavbar}>
          {/*<ReorderIcon />*/}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
