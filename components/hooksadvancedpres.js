import React from "react";
import { HooksAdvanced } from "./hooksadvanced";

export function HooksAdvancedPres() {
  const [width, clicks, hovered] = HooksAdvanced();

  return (
    <div>
      <p>Window width is {width}</p>
      <p>Clicks is {clicks}</p>
      <p>Hovered is {hovered}. I think I made up a new word. </p>
    </div>
  );
}
