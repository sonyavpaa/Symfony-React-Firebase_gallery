import React from "react";

const Image = ({ id, title, body, src }) => {
  return (
    <div key={id} className="img" style={{ width: 200 }}>
      <div>
        <p>{id}</p>
        <h4>{title}</h4>
        <p>{body}</p>
        <img src={src}></img>
        <a href="https://jsonplaceholder.typicode.com/posts/">More Details</a>
      </div>
    </div>
  );
};
export default Image;
