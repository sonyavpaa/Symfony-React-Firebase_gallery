import React from "react";

const Image = ({ id, title, body, src, par, hover, hoverOut }) => {
  return (
    <div key={id} className="img">
      <div onMouseOver={hover} onMouseOut={hoverOut}>
        <p>{id}</p>
        <h4>{title}</h4>
        <img src={src}></img>
        <p className="imagePar">{par}</p>
      </div>
    </div>
  );
};
export default Image;
