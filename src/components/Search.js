import React from "react";

export default function Search() {
  

  return (
    <div>
      <h2>現在位置</h2>
      <div className="search-fn">
        <input type="search"/>
        <button type="submit">搜尋</button>
      </div>
      <div className="filter-fn">
        <select name="" id="">
          <option value="" selected="selected">距離</option>
        </select>
        <select name="" id="">
          <option value="" selected="selected">營業時間</option>
        </select>
        <select name="" id="">
          <option value="" selected="selected">需求口罩</option>
        </select>
      </div>
    </div>
  );
}