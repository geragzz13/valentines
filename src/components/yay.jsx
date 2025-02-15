import React from "react";
import "./yay.css"; // Import the CSS file for styling
import celebrationGif from "./celebration.gif"; // Import the GIF

const Yay = () => {
  return (
    <div className="yay">
      <h1>Yay! You made me the happiest person! 🎉💖</h1>
      <p>I can't wait to celebrate Valentine's Day with you, my love! 🥰</p>
      
      {/* Add the GIF */}
      <div className="gif-container">
        <img
          src={celebrationGif} // Use the imported GIF
          alt="Celebration GIF"
          className="celebration-gif"
        />
      </div>
    </div>
  );
};

export default Yay;