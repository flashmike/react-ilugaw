import React from "react";

function MenuItem({image, name, desc, price}) { //passing props
  return (
    <div className="menuItem">
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1 className="prod-title">{name}</h1>
        <p className="prod-desc">{desc}</p>
        <p className="prod-price">PHP {price}</p>
    </div>
  );
}

export default MenuItem;