import { useState } from "react";
import "./styles.css";

export default function App() {
  let [input, setInput] = useState("");

  let emojiPedia = {
    "🍇": "grapes",
    "🍉": "watermelon",
    "🍋": "lemon",
    "🍌": "banana",
    "🥭": "Mango",
    "🥥": "Coconut"
  };
  let emojisWeKnow = Object.keys(emojiPedia);
  function emojiClickHandler(emoji) {
    input = emojiPedia[emoji];
    setInput(input);
  }

  function changeHandler(e) {
    let userInput = e.target.value;
    input = emojiPedia[userInput];
    if (input === undefined) {
      input = "we don't have that emoji in our database";
    }
    setInput(input);
  }

  return (
    <>
      <div className="App">
        <h1 style={{ marginBottom: "30px", fontFamily: "cursive" }}>
          EMOJI INTERPRETER
        </h1>
        <input onChange={changeHandler} />
        <h2 style={{ fontFamily: "cursive" }}>{input}</h2>
        <h3
          style={{ margin: "2rem", fontSize: "1.5rem", fontFamily: "cursive" }}
        >
          emojis we know
        </h3>
        <h3>
          {emojisWeKnow.map(function (emoji) {
            return (
              <span
                key={emoji}
                onClick={() => emojiClickHandler(emoji)}
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                  marginLeft: "1.5rem"
                }}
              >
                {emoji}
              </span>
            );
          })}
        </h3>
      </div>
    </>
  );
}
