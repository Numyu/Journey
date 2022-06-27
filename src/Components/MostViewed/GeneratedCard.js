import React from "react";


export default function GeneratedCard({classCard, img, title}) {
  const backGround = {
    background:`no-repeat center url(${img})`,
    backgroundSize: "cover"
  }
  return (
    <div className={classCard}>
      <div className="card-mosaic">
        <button className="mostViewedBtn"
          style={backGround}
        ></button>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
