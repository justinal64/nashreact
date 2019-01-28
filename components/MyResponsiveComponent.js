import React from "react";
import { useWindowWidth } from "./useWindowWidth";

export function MyResponsiveComponent() {
  const width = useWindowWidth(); // custom Hook
  return (
    <div>
      <p>Window width is {width}</p>
    </div>
  );
}
