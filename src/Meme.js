import React from "react";
import MemesData from "./MemesData.js";

export default function RandomImage() {
  // const [memeImage, setMemeImage] = React.useState();
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(MemesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

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
        <img src={meme.randomImage} className="meme-img" />
      </div>
    </section>
  );
}
