import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import axios from "axios";

import Image from "./Components/Image";

const App = () => {
  const [images, setImages] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => setEntries(response.data));
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
          {entries.map(({ id, title, body, src }) => (
            <Image
              className="img"
              key={id}
              title={title}
              body={body}
              src={src}
            ></Image>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
