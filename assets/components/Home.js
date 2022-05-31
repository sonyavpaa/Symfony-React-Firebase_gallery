import React from "react";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseConfig";
import { getDatabase, get, ref } from "firebase/database";
import Image from "./Image";

const Home = () => {
  const [images, setImages] = useState([]);
  const db = getDatabase();

  const hoverTextContainer = document.querySelector(".hoverTextContainer");

  const imageHover = (e) => {
    console.log(e.currentTarget.children[3].innerHTML);

    hoverTextContainer.innerHTML = e.currentTarget.children[3].innerHTML;
  };

  const imageHoverOut = () => {
    hoverTextContainer.innerHTML = "";
  };

  useEffect(() => {
    get(ref(db, "gallery")).then((response) =>
      setImages(response.toJSON().data)
    );
  }, []);

  return (
    <div className="frameContainer body">
      <div className="leftContainer">
        <div className="h1Container">
          <h1>SONJA VAINIONPÄÄ</h1>
        </div>
        <p className="hoverTextContainer"></p>
      </div>
      <div className="rightContainer">
        <div className="image-grid galleryContainer">
          {console.log(images)}
          {Object.keys(images).map((value, index) => {
            return (
              <Image
                hoverOut={imageHoverOut}
                hover={(e) => imageHover(e)}
                key={images[value].text}
                src={images[value].image}
                par={images[value].text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
