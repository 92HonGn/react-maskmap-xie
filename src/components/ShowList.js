import React, { useState, useEffect } from "react";


export default function ShowList({storeName}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://findmasks.herokuapp.com/places")
      .then(response => response.json())
      .then(data => setData(data));
  });

  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}