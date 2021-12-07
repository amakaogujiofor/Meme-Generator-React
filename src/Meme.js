import React from "react";

export default function Meme() {
  return (
    <section>
      <form className="form">
        <input type="text" placeholder="Test" className="form-input"></input>
        <input type="text" placeholder="Test" className="form-input"></input>
        <button className="form-btn"> Get a new meme image 🖼 </button>
      </form>
    </section>
  );
}
