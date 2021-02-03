import React, { useState } from "react";
const Selection=(props)=>{
  const [background,backroundSet]=useState({background:''})
  const updateSelectionStyle=(background)=>{
      backgroundSet(nextBackground)
  }
  
  col=updateSelectionStyle({background:''})
  <div className="fix-box" style={background} onClick={()=>(props.applyColor(updateSelectionStyle))}>
    <h2 className="subheading">Selection</h2>  
  </div>
}
export default Selection;
