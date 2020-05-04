import React, {} from "react";

export default function location({onHandlePostion}) {
  
  return (
      <div className="current-location" onClick={onHandlePostion}>
        定位目前所在地
      </div>
  );
}
