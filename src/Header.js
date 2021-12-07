import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src="./images/emojis.png"
        alt="smile-emoji"
        className="header-image"
      />
      <h2 className="header-title">Meme Generator</h2>
      <h3 className="header-text">React Course - Project 3</h3>
    </header>
  );
}
