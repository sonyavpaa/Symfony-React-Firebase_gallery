import "./App.css";
import React, { useState } from "react";
import Gallery from "./Gallery";
import images from "./api-mock.json";

const App = () => {
  const [imagesList, setImageList] = useState(images.resources);
  return (
    <div className="frameContainer body">
      <div className="leftContainer">
        <div className="h1Container">
          <h1>SONJA VAINIONPÄÄ</h1>
        </div>
      </div>
      <div className="rightContainer">
        <div className="image-grid galleryContainer">
          {imagesList.map((image) => {
            return <img src={image.url} alt={image.public_id}></img>;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
