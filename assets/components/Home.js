import React from "react";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseConfig";
import { getDatabase, get, ref } from "firebase/database";
import Image from "./Image";

const Home = () => {
  const [images, setImages] = useState([]);
  const db = getDatabase();

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
      </div>
      <div className="rightContainer">
        <div className="image-grid galleryContainer">
          {Object.keys(images).map((value, index) => {
            return <Image src={images[value].image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
