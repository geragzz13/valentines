import React, { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";
import RomanticGift from "./components/RomanticGift";
import "./App.css";

function App() {
  const [hearts, setHearts] = useState([]);
  const [bottomOfScreen, setBottomOfScreen] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setBottomOfScreen(window.innerHeight); // Update bottom position on resize
    };

    window.addEventListener("resize", handleResize); // Listen for resize events
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Add a new heart with random left position
      const newHeart = {
        id: Math.random(), // Unique ID for each heart
        left: Math.random() * 100, // Random horizontal position
      };
      setHearts((prevHearts) => [...prevHearts, newHeart]);
    }, 500); // Add a new heart every 500ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Animate hearts using react-spring
  const trails = useTrail(hearts.length, {
    from: { top: -10, opacity: 1 }, // Start slightly above the screen
    to: { top: bottomOfScreen, opacity: 0 }, // Fall to the bottom of the screen
    config: { duration: 3000 }, // Animation duration
  });

  return (
    <div className="App">
      {/* Render hearts */}
      {trails.map((style, index) => (
        <animated.div
          key={hearts[index].id}
          className="heart"
          style={{
            ...style,
            left: `${hearts[index].left}%`,
          }}
        >
          ❤️
        </animated.div>
      ))}

      {/* Render RomanticGift component */}
      <RomanticGift />
    </div>
  );
}

export default App;