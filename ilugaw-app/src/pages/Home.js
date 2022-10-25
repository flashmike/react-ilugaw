import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/ilugaw-main.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
            <h1 style={{ fontWeight: "bold"}}>Welcome</h1>
            <p className="highlight">Healthy porridge meal options just for you...</p>
            <Link to="/menu">
                <button>Order Now!</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;