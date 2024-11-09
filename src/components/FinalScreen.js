import React from "react";
import "./FinalScreen.css";

function FinalScreen({ title }) {
  return (
    <div
      className="finalScreen"
      style={{ color: title === "All is right" ? "green" : "red" }}
    >
      {title}
    </div>
  );
}

export default FinalScreen;
