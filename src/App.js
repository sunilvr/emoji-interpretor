import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😀": "Grinning Face",
    "😂": "Face with Tears of Joy",
    "🤣": "Rolling on the Floor Laughing",
    "😘": "Face Blowing a Kiss",
    "😉": "Winking Face",
    "😋": "Face Savoring Food",
    "🤫": "Shushing Face",
    "🙄": "Face with Rolling Eyes",
    "🤤": "Drooling Face",
    "😴": "Sleeping Face",
    "😕": "Confused Face",
    "😲": "Astonished Face"
  };

  var emoji_keys = Object.keys(emojiDictionary);
  const [meaning, setEmojiMeaning] = useState("");

  function inputChangeHandler(event) {
    setEmojiMeaning(emojiDictionary[event.target.value]);
  }

  function onClickHandler(emoji) {
    setEmojiMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input onChange={inputChangeHandler}></input>
      <h2> {meaning} </h2>
      <h3> Emojis we know </h3>
      {emoji_keys.map((emoji) => {
        return (
          <span
            onClick={() => onClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
