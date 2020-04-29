import React, { useState, useEffect } from "react";

const ShowList = ({storeName}) => {
  const [lol, setLol] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR1k5dAvUSR7XCoG_H_RQx9pzYyJEMqG9AN06e4HNJIASIv-_gwTseX4sSI")
      .then(response => response.json())
      .then(data => setLol(data.features));
  });

  return (
    <div>
      <ul>
        {lol.map(el => (
          <li>{el.properties.id}</li>
        ))}
      </ul>
    </div>
  );
};
export default ShowList;
