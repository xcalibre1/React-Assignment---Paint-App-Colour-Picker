import React, { useState } from "react";
function Selection(props) {
  const [background, backgroundSet] = useState({ background: "" });
  const updateSelectionStyle = (background) => {
    backgroundSet(background);
  };

  return (
    <div
      className="fix-box"
      style={{ background }}
      onClick={() => props.applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
export default Selection;
