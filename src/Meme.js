import React from "react";
import MemesData from "./MemesData.js";

export default function randomImage() {
  const memesArray = MemesData.data.memes;
  const randomNumber = Math.floor(Math.random() * memesArray.length);
  const url = memesArray[randomNumber].url;

  return (
    <section>
      <div className="form">
        <input type="text" placeholder="Test" className="form-input"></input>
        <input type="text" placeholder="Test" className="form-input"></input>
        <button className="form-btn" onClick={randomImage}>
          {" "}
          Get a new meme image 🖼{" "}
        </button>
        <img src={url} alt="random" className="meme-img" />
      </div>
    </section>
  );
}
