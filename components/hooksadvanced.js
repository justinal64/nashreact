import { useState, useEffect } from "react";

export function HooksAdvanced() {
  const [width, setWidth] = useState(window.innerWidth);
  const [clicks, setClicks] = useState(0);
  const [hovered, settimesHovered] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    const screenClicked = () => setClicks(clicks + 1);
    const elementHovered = () => settimesHovered(hovered + 1);
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", screenClicked);
    // window.addEventListener("hover", elementHovered);// work on this!!!
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", screenClicked);
      // window.removeEventListener("hover", elementHovered);
    };
  });

  return [width, clicks, hovered];
}
