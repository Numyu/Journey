import React from "react";

export default function GeneratedCard(props) {
  const backGround = `no-repeat center url(${props.img}) `;
  console.log(props.img);
  return (
    <div className={props.classCard} id={props.id}>
      <div className="card-mosaic">
        <button
          style={{ background: backGround, backgroundSize: "cover" }}
          onClick={() => {
            props.Navigate(props.id);
          }}
        ></button>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}
