import React, { useState } from "react";
import Yay from "./yay.jsx"; // Import the Yay component
import "./RomanticGift.css"; // Import component-specific CSS

const RomanticGift = () => {
  const [isYesClicked, setIsYesClicked] = useState(false); // State to track if "Yes" is clicked

  const handleYesClick = () => {
    setIsYesClicked(true); // Set state to true when "Yes" is clicked
  };

  // If "Yes" is clicked, render the Yay component
  if (isYesClicked) {
    return <Yay />;
  }

  // Otherwise, render the gift box and buttons
  return (
    <div className="romantic-gift">
      <h2>💝 I love you so much baby 💝</h2>
      <p>
        Pookie dookie, every moment with you feels like a dream. Here's a little something to remind you how much you mean to me:
      </p>
      <div className="gift-box">
        <div className="gift-lid"></div>
        <div className="gift-body">
          <p>🎁 Will you please be my Valentine baby? 🎁</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleYesClick}>Yes! 💖</button>
        <button disabled>No 😢</button>
      </div>
      <p className="message">
        You are my sunshine, my forever Valentine. I love you to the moon and back 🌙❤️
      </p>
    </div>
  );
};

export default RomanticGift;