import React, {} from "react";

export default function ShowList({storeName}) {

  return (
    <div>
      <ul>
        <li>
          <div className="store-name">
          <h3>{storeName}藥局</h3>
            <p>
              <span>營業中</span>
              <span>300m</span>
            </p>
          </div>
          <div className="store-intro">
            <div className="address">
              <span>icon</span>
              <span>地址</span>
            </div>
            <div className="phone">
              <span>icon</span>
              <span>電話</span>
            </div>
            <div className="time">
              <span>icon</span>
              <span>07:00-9:00,</span>
              <span>13:00-20:00</span>
            </div>
          </div>
          <div className="store-mask">
            <div className="adult">
              成人口罩<span>11</span>個
            </div>
            <div className="child">
              兒童口罩<span>123</span>個
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}