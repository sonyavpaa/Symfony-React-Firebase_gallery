import React from "react";

const Image = ({ id, title, body, src }) => {
  return (
    <div key={id} className="img">
      <div>
        <p>{id}</p>
        <h4>{title}</h4>
        <p>{body}</p>
        <img src={src}></img>
      </div>
    </div>
  );
};
export default Image;
