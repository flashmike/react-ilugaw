import React from "react";
import { Data } from "../data/data";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
    return (
        <div className="menu">
            <h1>Our Menu</h1>
            <div className="menuTitle">
                <div className="menuList">
                    {Data.map((menuItem, key) => {
                        return (
                            <MenuItem
                                key={key}
                                image={menuItem.image}
                                name={menuItem.name}
                                desc={menuItem.desc}
                                price={menuItem.price}
                            />
                        ); //pass props here
                    })}
                </div>
            </div>
        </div>
    );
}

export default Menu;