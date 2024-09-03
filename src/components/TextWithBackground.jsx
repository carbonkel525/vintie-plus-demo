"use client";

import React from "react";

function TextWithBackground({ bgColor, text, width }) {
  return (
    <div
      className="ml-5 text-xs rounded p-1 tracking-widest"
      style={{ backgroundColor: bgColor, width: width }}
    >
      <div className="text-center">{text}</div>
    </div>
  );
}

export default TextWithBackground;
