import React from "react";
import MemesData from "./MemesData.js";

export default function RandomImage() {
  const [memeImage, setMemeImage] = React.useState();

  function getMemeImage() {
    const memesArray = MemesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }
  //   getMemeImage();
  //   const url = memesArray[randomNumber].url;

  return (
    <section>
      <div className="form">
        <input
          type="text"
          placeholder="add your text"
          className="form-input"
        ></input>
        <input
          type="text"
          placeholder="add your text"
          className="form-input"
        ></input>
        <button className="form-btn" onClick={getMemeImage}>
          {" "}
          Click to create yours 🖼{" "}
        </button>
      </div>
      <div className="img-container">
        <img src={memeImage} className="meme-img" />
      </div>
    </section>
  );
}
